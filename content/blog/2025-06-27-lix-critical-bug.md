+++
title = "Critical correctness bug in Lix"
author = "Lix Team"
date = "2025-06-27"
+++

*This is an ongoing incident. This post will be updated regularly.*

## Summary

The fix for [CVE-2025-52992](https://nvd.nist.gov/vuln/detail/CVE-2025-52992), released on June 24th, introduced a **critical regression** affecting derivation builds. This can cause **missing or silently invalidated store paths**, leading to system instability or breakage. 

Currently known causes of this issue include all actions that build outputs of a derivation that is missing at least one output in the building store; this can happen for example when some outputs were built by a remote builder or placed in the store by deployment tools run on another host (e.g. colmena).

If you have already upgraded and built your system, **read below carefully**. If you have not, **stop now**.

We are deeply sorry for the disruption. We are working on a fix, which will undergo approximately **72 hours of testing** before we declare it safe. This post will be updated with progress.

Lix versions which are affected are the following ones:

- Lix 2.91.2
- Lix 2.92.3
- Lix 2.93.1

This problem has been witnessed on Linux, the root cause is platform independent and we believe it can occur on Darwin as well.

## What to do now

To avoid further breakage:

* **Stop the Nix garbage collector**:

  ```bash
  systemctl stop nix-gc.service nix-gc.timer # On Linux
  ```

* **Stop the Nix daemon**:

  ```bash
  systemctl stop nix-daemon.service nix-daemon.socket # On Linux
  ```

* **Download a static Nix binary**, e.g. using `curl`, without relying on the broken interpreter. This will help you run recovery commands without making things worse.

  Here are options from https://hydra.nixos.org -- the official build farm of the Nixpkgs project.
  
  - [x86_64 Linux](https://hydra.nixos.org/job/nixpkgs/trunk/lixStatic.x86_64-linux/latest/download-by-type/file/binary-dist)
  - [ARM64 Linux](https://hydra.nixos.org/job/nixpkgs/trunk/lixStatic.aarch64-linux/latest/download-by-type/file/binary-dist)
  
  macOS has no known working static builds unfortunately.

* **Do NOT run**:

  ```bash
  nix-store --delete --ignore-liveness
  ```

  This may **destroy your system closure**.

## Recovery

### Checking your system's store

First and foremost, perform a full check-up:
```bash
NIX_REMOTE=local /path/to/static-nix/bin/nix-store --verify --repair
```

Run this as `root`.

**Note** : If you do not have a `nix-store` binary in your static build, you can always obtain one by symlinking the main binary `nix`, i.e. `ln -s nix nix-store`.

**Note 2** : `--check-contents` is not required because this bug *deletes* paths and does not *corrupt* them. The verification can be very fast even on moderately sized stores.

**Note 3** : the previous command will not log explicit success, but will log any corruption or failures. If you do not see anything wrong, you are safe.

This might take a while but should warn you about any missing or corrupted paths.

### Recovering a missing path

To attempt recovery of a missing path:

```bash
NIX_REMOTE=local /path/to/static-nix/bin/nix-store --repair -r /nix/store/xxxx-path
```

Run this as `root`.

### Rebuilding your system

Once you chose a remediation option (see below), you will want to apply it definitively to your system to exit the precarious state of "every build" is dangerous.

To attempt rebuilding your system from the static Nix **after you changed your configuration**:

**No-flakes**:

```bash
NIX_REMOTE=local /path/to/static-nix/nix-build -E 'import <nixpkgs/nixos> {}' -A system
./result/bin/switch-to-configuration switch
nixos-rebuild switch # At this point, you should be running a non-dangerous Nix interpreter, you can rebuild your system and register it in the bootloader.
```

**With flakes**:

```bash
NIX_REMOTE=local /path/to/static-nix/nix --experimental-features 'nix-command flakes' build /path/to/nixos/flake#nixosConfigurations.myhostname.config.system.build.toplevel
./result/bin/switch-to-configuration switch
nixos-rebuild switch # At this point, you should be running a non-dangerous Nix interpreter, you can rebuild your system and register it in the bootloader.
```

Run this as `root`.

**Note** : If you use colmena or deployment-wide tools, you will need to look into the manual to see if you can build the toplevel directly while using another Nix interpreter.

## Remediation options

If you need assistance on how to apply remediation, feel free to inquire in our support channels.

We will not publish a fixed release on June 28th (today, at the time of writing) due to incomplete testing. We have three recommendations:

### Option A: Revert only the CVE fix

The vulnerability in CVE-2025-52992 has **no known exploit path**. 

Revert the CVE-2025-52992 patch using reverse diffs:

* 2.91: https://gerrit.lix.systems/c/lix/+/3454 / `42e2bd045c9e51a59fdab038dc4e6f9e86c4922c`
* 2.92: https://gerrit.lix.systems/c/lix/+/3432 / `2f323681361162f5710ea9b88a3496d6e93b07c5`
* 2.93: https://gerrit.lix.systems/c/lix/+/3444 / `f85c84db371d91c4e651d96df6a06fc4ff95b231`
* HEAD: https://gerrit.lix.systems/c/lix/+/3454 / `42e2bd045c9e51a59fdab038dc4e6f9e86c4922c`

### Option B: Roll back to the previous (vulnerable) version

If you prefer stability, you can revert to your last working version.

## If your system is already broken

We're very sorry. You may attempt a standard recovery:

* Boot into a live ISO with a working Nix.
* Mount your root disk.
* Use first `nix-store --verify --repair` on your system store with a static or good Nix binary.
* Reboot into your system and follow the previous proposed steps.

## How to apply/revert patches to my system?

Being exhaustive on how to do this is difficult, in the meantime, we can provide pointers on how to perform this operation.

- https://nixos.org/manual/nixpkgs/stable/#sec-pkg-overrideAttrs (override the `patches` field)
- https://nixos.org/manual/nixpkgs/stable/#sec-overlays-definition (overlay the `lixPackageSets.lix` package)
- https://wiki.nixos.org/wiki/Overlays
- https://wiki.nixos.org/wiki/Nixpkgs/Patching_Nixpkgs (patch nixpkgs with a patch that adds the patch and add it in the `patches` list in the Lix packaging)


[`fetchpatch`](https://nixos.org/manual/nixpkgs/stable/#fetchpatch) is also helpful to download and revert patches.

Note that our Gerrit instance returns patches encoded in base64.

## Timeline

* **2025-06-24**: CVE embargo lifted, patches published.
* **2025-06-27**: Issue [#883](https://git.lix.systems/lix-project/lix/issues/883) reported.
* **2025-06-28**: Confirmed and acknowledged by Lix team. Investigation and patching underway.
* **2025-06-28 15:30 CEST** : Added links to known trustable static builds from Nixpkgs. Added affected Lix versions. Added more details on recovery section.
* **2025-06-28 17:45 CEST** : Added instructions on how to rebuild the system using the static Nix, co-written by boogiewoogie (thank you!).
* **2025-06-28 21:40 CEST** : Clarified that rebuilding your system makes sense if you changed your configuration to move away from the dangerous version.
* **2025-06-29 21:40 CEST** : Release engineering started to put an end to the incident.
* **2025-06-29 21:48 CEST** : Remove the old option A with manual patching.
* **2025-06-29 21:47 CEST** : Commencing final QA of all release branches (2.91, 2.92, 2.93 and main) before merge.

---

Thank you for your patience. We will provide updates here as we validate fixes and issue guidance.

