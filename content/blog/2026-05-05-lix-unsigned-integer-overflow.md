+++
title = "An exploitable integer overflow in Lix (CVE-2026-44028)"
author = "Lix Team"
date = "2026-05-05"
+++

Security researchers have found a security issue in Lix. This issue has been assigned [CVE-2026-44028](https://nvd.nist.gov/vuln/detail/CVE-2026-44028).

**Important note** : The issues are different between Lix and CppNix but it seems there was confusion in MITRE who emitted the CVE and copied the wrong information which should have gone into the CppNix CVE, we are trying to update the CVE metadata. In the meantime, we are aiming for a [CVSS 3.1 vector: `AV:L/AC:H/PR:L/UI:N/S:U/C:H/I:H/A:N`](https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator?vector=AV:L/AC:H/PR:L/UI:N/S:U/C:H/I:H/A:N&version=3.1) resulting in a base score of 6.3, impact score 5.2 and exploitability 1.0. As always with any score, caveats may apply.

We have released updates to Lix 2.93, 2.94, and 2.95 that contain fixes for these issues. All Lix users are advised to update immediately.

Fixed versions are Lix ≥ 2.93.4, ≥ 2.94.2, ≥ 2.95.2.

A big thanks to [edef](http://github.com/edef1c) and [Sander](https://github.com/sandydoo) for this report, the help and the guidance.

## Context

While the Lix daemon is tries to be careful while manipulating untrusted user inputs on its daemon protocol and serialization formats such as the NAR format, they are not immune to classical attack vectors such as integer overflow.

As far as we can tell, in the asyncification work of Lix, commit [5778998cfa2] rendered Lix vulnerable to an integer overflow by crafting specialized NAR with absurd archive members (a length of `2^64 - 8` announced in the format).

As a result, an out-of-bound write primitive is available to an attacker. However, leveraging it requires to defeat ASLR. 

In dynamic builds built from nixpkgs, which is the default in most deployments, **exploiting Lix can take approximatively an hour and millions of attempts.** This can be detected for incident response if your systems have monitoring either of the Lix daemon logs or of the coredumps generated on the system. Additionally, ASLR was made stronger [in this nixpkgs PR](https://github.com/NixOS/nixpkgs/pull/510943), chances are that you are already running with this strengthened hardening.

In static builds built from nixpkgs, **ASLR is not effective (lack of static PIE) and can be defeated instantly**, this affects mostly users using NixOS and musl as Lix static builds are usually meant for recovering systems.

Additionally, several customizations of your system can lead to a weaker ASLR, if you depend critically on the outcome of your ASLR defenses, a thorough analysis needs to happen.

As a reminder, the Lix daemon is *NOT* a security boundary [as per our security policy](https://docs.lix.systems/manual/lix/stable/installation/multi-user.html#the-lix-daemon-as-a-security-non-boundary).


### Am I affected?

This vulnerability has an easy reproducer, you can run the following on your system:

```
$ echo "DQAAAAAAAABuaXgtYXJjaGl2ZS0xAAAAAQAAAAAAAAAoAAAAAAAAAAQAAAAAAAAAdHlwZQAAAAD1/////////3JlZ3VsYXIACgAAAAAAAABleGVjdXRhYmxlAAAAAAAAIAAAAAAAAAAAAAAAAAAAQAgAAAAAAAAAY29udGVudHMA//////////8AAAAAAAAAAQAAAAAAAAAAACkAAAAAAA==" \
  | base64 -d \
  | nix-store --restore /tmp/out
```

If you observe a Lix daemon crash, you are vulnerable. Otherwise, you are not.

### Technical details

The NAR format is, at its core, a list of string with explicit lengths fields and 8 byte alignment. Each string is padded with `0` bytes to a multiple of 8 bytes to ensure that the next string in the list is aligned correctly. Everything in a NAR is a string: the header is a string, file data is a string, directories are lists of strings enclosed in *other* strings. For example, a simple NAR containing a directory with a single file inside would look like this when written with one string per line, length fields and trailing padding given as `<n>`, and indentation for clarity:
```
<13> nix-archive-1                 <3>
<1>  (                             <7>
     <4>  type                     <4>
     <9>  directory                <7>
     <5>  entry                    <3>
     <1>  (                        <7>
          <4>  name                <4>
          <5>  hello               <3>
          <4>  node                <4>
          <1>  (                   <7>
               <4>  type           <4>
               <7>  regular        <1>
               <8>  contents       <0>
               <3>  lix            <5>
          <1>  )                   <7>
     <1>  )                        <7>
<1>  )                             <7>
```

To read this data stream Lix must read each string, and to read each string it must read the length first, then the data, and finally the padding. For historical reasons Lix does this by first reading the 8 byte length field into a buffer of appropriate size, resizing the buffer to fit both the length field and the string data, and finally reading the remaining string data. The assembled buffer is then passed to a decoding function to retrieve the final string. Once this is done the padding bytes are read and checked, then dropped.

To read the string `<7> regular <1>` Lix internally produces the following series of events:

  - read 8 bytes of length data into an 8 byte buffer to obtain `7`
  - resize the buffer to 8 + (7 rounded up to an 8 byte boundary), giving a 16 byte buffer
  - read 8 bytes of data into the same buffer to obtain `regular <1>`, starting at position 8. The buffer now contains `<7> regular <1>`
  - decode the full buffer, checking that padding data is all zeroes
  
The bug lies in the buffer resizing step: when given the string `<2⁶⁴ - 8> evil` Lix will instead produce the following series of events:

  - read 8 bytes of length data into an 8 byte buffer to obtain `2⁶⁴ - 8`
  - resize the buffer to 8 + 2⁶⁴-8, which would be 2⁶⁴. This number is too large to be held in the `uint64_t` variable used for its computation, and thus it *overflows* to 0. Lix dutifully resizes the buffer to 0 bytes.
  - read 2⁶⁴-8 bytes of data into the now zero-length buffer, starting at position 8
  
The evil nar has now written (at least) its four bytes of `evil` into notionally unallocated memory. In practice the buffer still holds an allocation, but the end result is the same: Lix writes arbitrary data provided by the evil NAR into a memory location past the end of the allocated buffer, destroying other data structures in the process. Since [5778998cfa2], the NAR parser uses stackless coroutines instead of running on the main process stack. These coroutines have their runtime state allocated on the heap, next to the buffer holding string data. With enough attempts an attacker can overwrite the runtime state of the parser and use [return-oriented programming (ROP)](https://en.wikipedia.org/wiki/Return-oriented_programming) to run their own code.

If we dissect the reproducer given above we can clearly see the evil NAR pattern:
```
<13>     nix-archive-1 <3>
<1>      (             <7>
<4>      type          <4>
<2⁶⁴-10> regular [...]
```

Once Lix encounters the fourth string it will resize its buffer to 8 + (2⁶⁴-10 rounded up to 8 bytes), which is again 0 due to the overflow.

## Our response

All our release branches that are part of a maintained NixOS release (2.93, 2.94, 2.95, i.e. the whole set of affected versions) have received a vulnerability fix by constraining the length of the archive members names to 1MiB which is known _for sure_ to be larger than `PATH_MAX` — the maximum length in a path — (usually 4096 on Linux) on any reasonable system, while closing the vulnerability.

We already identified several similar shortcomings in previous hardening work. We automatically protect against signed overflows, however the current issue involves an *unsigned* overflow. Additionally, Lix is already undergoing a massive rework to replace the current ad-hoc wire protocols entirely with a more solid RPC-based foundation. This should eliminate whole classes of memory safety and logic bugs in our protocols entirely.

## What to expect?

We do not expect any functional regression or stability issues.

## Protecting yourselves

### On NixOS

On NixOS, you have two scenarios.

#### I'm using `lix-module`

Upgrade your Lix pin and rebuild Lix as always. Please know that `lix-module` should be preferred only for HEAD builds these days and released builds should rather use Nixpkgs to benefit from the maintenance work going into Nixpkgs.

#### I'm using Lix from Nixpkgs

First of all, Nixpkgs moves slower when you are subscribing to one of its channel (unstable, 25.11, etc.).

The fix will not be built by Hydra instantly.

Multiple tools are available for you:

- https://nixpk.gs/pr-tracker.html — this tells you when a PR lands in the channel you might be interested
- https://status.nixos.org/ — this tells when is the last time a channel was updated

If you cannot wait, you have the option to apply the patch:

- apply the nixpkgs PR as a patch to your nixpkgs source tree → will cause a Lix rebuild
- apply the Lix patches as a patch to Lix as an overlay → will cause a Lix rebuild
- temporarily adopt lix-module → will cause a Lix rebuild

You can find Nixpkgs PRs here:

- 25.11: [Lix 2.93/2.94/2.95 bumps](https://github.com/NixOS/nixpkgs/pull/516597)
- unstable: [Lix 2.94/2.95 bumps](https://github.com/NixOS/nixpkgs/pull/516590) [Lix 2.94 fixes](https://github.com/NixOS/nixpkgs/pull/516606) 

### On non-NixOS Linux

#### I have used the Lix's installer (or Determinate Systems' installer)

On non-NixOS Linux, you may have installed Lix via our installer or Determinate Systems' installer with a Lix's URL.

##### Lix 2.93 / 2.94

You can use `nix upgrade-nix` to upgrade and download the new binaries.

##### Lix 2.95

Our system changed to be more powerful and now you can run a script:

```bash
curl -sSf -L "https://git.lix.systems/lix-project/lix/raw/tag/2.95.2/misc/upgrade-lix.sh" | sudo --preserve-env=PATH bash -s -- 2.95.2
```


#### I have used my Linux distribution's package manager

To the best of our knowledge, Lix is only packaged in Nixpkgs and [Pacstall (without maintainer)](https://pacstall.dev/packages/lix-git).

This means you have a package in a distribution we do not have knowledge of, please contact your distribution's security team.

### On macOS

#### I have used the Lix's installer (or Determinate Systems' installer)

On macOS, you may have installed Lix via our installer or Determinate Systems' installer with a Lix's URL.

##### Lix 2.93 / 2.94

You can use `nix upgrade-nix` to upgrade and download the new binaries.

##### Lix 2.95

Our system changed to be more powerful and now you can run a script:

```bash
curl -sSf -L "https://git.lix.systems/lix-project/lix/raw/tag/2.95.2/misc/upgrade-lix.sh" | sudo --preserve-env=PATH bash -s -- 2.95.2
```

#### I am using `nix-darwin`

On macOS, you may be using `nix-darwin` and therefore you are depending on Nixpkgs or `lix-module`, thus, the section on `On NixOS` applies to you as well.

#### I have used a macOS package manager

To the best of our knowledge, Lix is only packaged in Nixpkgs and [Pacstall (without maintainer)](https://pacstall.dev/packages/lix-git).

This means you have a package in a distribution we do not have knowledge of, please contact your distribution's security team.

## Additional guidance

### How to deal with Lix daemon not being a security boundary?

There's rare usages where Lix daemon as a multi-user needs to run as root, let's go through the usual scenarios where a Lix daemon might be used:

- Build farm system (CI/CD)
- Deployed NixOS system (server/embedded/appliance use-case)
- Development machine

The first one can run the Lix daemon as a unprivileged user and make the ownership of the build farm Nix store be someone less privileged than root, yet still more privileged than anybody on the system. You can use AFNix's build-nix-daemon NixOS module to implement this architecture: <https://git.afnix.fr/afnix/infra/src/branch/main/services/build-nix-daemon> licensed under MIT. Lix infrastructure mostly runs using this scheme, except on macOS.

The second one can run *without* Lix daemon at all, except if your usecase involve calling the Lix binaries to deploy *on the machine*. It's highly recommended to use a deployment method that retrieves artifacts from a trusted build source (a CD build farm for example) and apply these artifacts without the use of the Nix CLI. NixOS offer this mode of deployment in its ["image based mode"](https://nixos.org/manual/nixos/stable/#sec-image-repart-appliance) where updates are distributed via systemd-sysupdate and are full disk images. If you want to keep using a writeable store model, building a smaller utility around the `nix copy` feature is better than keeping Lix entirely.

The third one is the thorny one, there's two subcases:

- you have root (via `sudo` or something else)
- you don't have root

In the first subcase, the user can already get to root and you are now vulnerable to attackers accessing your user account to become root, this scenario is less impacted by this vulnerability.

In the second subcase, you are relying on the Lix daemon as a security boundary, the same way you are relying on any privileged piece of code the user can interact with to avoid giving out root. For this case, it is recommended to carefully jmonitor the endpoint w.r.t. crash logs and Lix daemon logs to catch exploitation attempts as the method is not silent.

## Timeline

2026-04-18: Bug informally pre-disclosed to Lix team during LixCon.
2026-04-19: We found a security-relevant bug which matches the description.
2026-04-20: Official security report received, which confirmed that this was indeed the same bug.
2026-04-20: Coordination with CppNix team started to ensure that no other implementation are missed in the process.
2026-05-04: Disclosure deadline.
2026-05-04: Release day for Lix.
2026-05-05: Blog post published.

## Credits

Credits to the Nixpkgs security team — hexa and tgerbet (@LeSuisse) — for coordinating and dealing with the MITRE paperwork.

Credits to the xokdvium for handling the coordination on the CppNix side.

Credits to @edef and @sandydoo for reporting this issue and discussing the scope of this vulnerability.

Credits to eldritch horrors for the thorough analysis and security response.

Credits to Kate Temkins and Qyriad for the installer and upgrade scripts support.

Credits to Raito Bezarius for handling the coordination on the Lix side.

## References

- [Shared coordination Discourse post](https://discourse.nixos.org/t/security-advisory-local-privilege-escalation-in-lix-and-nix/77407/3)

[5778998cfa2]: https://git.lix.systems/lix-project/lix/commit/5778998cfa2ba0e4cd49873c0b0892f9c81de247
