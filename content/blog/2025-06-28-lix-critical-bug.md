+++
title = "Critical correctness bug in Lix"
author = "Lix Team"
date = "2025-06-28"
+++

*This is an ongoing incident. This post will be updated regularly.*

## Summary

The fix for [CVE-2025-52992](https://nvd.nist.gov/vuln/detail/CVE-2025-52992), released on June 24th, introduced a **critical regression** affecting derivation builds. This can cause **missing or silently invalidated store paths**, leading to system instability or breakage. 

Currently known causes of this issue include all actions that build outputs of a derivation that is missing at least one output in the building store; this can happen for example when some outputs were built by a remote builder or placed in the store by deployment tools run on another host (e.g. colmena).

If you have already upgraded and built your system, **read below carefully**. If you have not, **stop now**.

We are deeply sorry for the disruption. We are working on a fix, which will undergo approximately **72 hours of testing** before we declare it safe. This post will be updated with progress.

## What to do now

To avoid further breakage:

* **Stop the Nix garbage collector**:

  ```bash
  systemctl stop nix-gc.service nix-gc.timer
  ```

* **Stop the Nix daemon**:

  ```bash
  systemctl stop nix-daemon.service nix-daemon.socket
  ```

* **Download a static Nix binary**, e.g. using `curl`, without relying on the broken interpreter. This will help you run recovery commands without making things worse.

* **Do NOT run**:

  ```bash
  nix-store --delete --ignore-liveness
  ```

  This may **destroy your system closure**.

## Recovery

First and foremost, perform a full check-up:
```bash
NIX_REMOTE=local /path/to/static-nix/bin/nix-store --verify --repair
```

Run this as `root`.

This might take a while but should warn you about any missing or corrupted paths.

To attempt recovery of a missing path:

```bash
NIX_REMOTE=local /path/to/static-nix/bin/nix-store --repair -r /nix/store/xxxx-path
```

Run this as `root`.

## Remediation options

If you need assistance on how to apply remediation, feel free to inquire in our support channels.

We will not publish a fixed release on June 28th (today, at the time of writing) due to incomplete testing. We have three recommendations:

### Option A: Patch your current version

We have published patches per release line. You can apply them manually:

* 2.91: https://gerrit.lix.systems/c/lix/+/3515
* 2.92: https://gerrit.lix.systems/c/lix/+/3513
* 2.93: https://gerrit.lix.systems/c/lix/+/3510
* HEAD: https://gerrit.lix.systems/c/lix/+/3501 (already merged, just update the HEAD pin)

### Option B: Revert only the CVE fix

The vulnerability in CVE-2025-52992 has **no known exploit path**. 

Revert the CVE-2025-52992 patch using reverse diffs:

* 2.91: https://gerrit.lix.systems/c/lix/+/3454 / `42e2bd045c9e51a59fdab038dc4e6f9e86c4922c`
* 2.92: https://gerrit.lix.systems/c/lix/+/3432 / `2f323681361162f5710ea9b88a3496d6e93b07c5`
* 2.93: https://gerrit.lix.systems/c/lix/+/3444 / `f85c84db371d91c4e651d96df6a06fc4ff95b231`
* HEAD: https://gerrit.lix.systems/c/lix/+/3454 / `42e2bd045c9e51a59fdab038dc4e6f9e86c4922c`

### Option C: Roll back to the previous (vulnerable) version

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

---

Thank you for your patience. We will provide updates here as we validate fixes and issue guidance.

