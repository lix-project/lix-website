---
title:  "Switching To Lix with Nixpkgs"
description: "or: how to make your existing configuration Delicious"
date: "2024-06-09"
author: "Lix Team"
---

If you have an existing configuration on **NixOS** or **nix-darwin** with version 24.05 or older, you can use Lix from Nixpkgs.

## Flake-based Configurations

Set Lix as your Nix package:

```nix
{
  # <configuration above omitted>

  outputs = {nixpkgs, lix-module, ...}: {

      # The configuration here is an example; it will look slightly different
      # based on your platform (NixOS, nix-darwin) and architecture.
      nixosConfigurations.your-box = nixpkgs.lib.nixosSystem {
        system = "x86_64-linux"

        modules = [
          {
            nix.package = pkgs.lix;
          }
        ];
      };
  }

  # <configuration below omitted>
}
```

Rebuild and switch into your new system (either using `nixos-rebuild` or `darwin-rebuild`).
You should now be using Lix! You can verify this by asking the `nix` command to report its version:

```sh
$ nix --version
nix (Lix, like Nix) 2.90.0-beta.1
```

As long as you see `Lix` in the output, you're good! If you're not sure what to do now, it's a
great time to check out some of the [community's resources on Nix](/resources).


## Non-Flake Configurations

If you're not using flakes, you can set up your configuration to automatically pull down a
Lix release tarball, and then add it to your `configuration.nix`.

Open your `/etc/nixos/configuration.nix` in the editor of your choice.

```nix
{ config, lib, pkgs, ... }:
{
  imports =
    [ # Include the results of the hardware scan.
      ./hardware-configuration.nix

    ];

  nix.package = pkgs.lix;

  # <configuration below omitted>
}
```

Rebuild and switch into your new system (either using `nixos-rebuild` or `darwin-rebuild`).
You should now be using Lix! You can verify this by asking the `nix` command to report its version:

```sh
$ nix --version
nix (Lix, like Nix) 2.90.0-beta.1
```

As long as you see `Lix` in the output, you're good! If you're not sure what to do now, it's a
great time to check out some of the [community's resources on Nix](/resources).

## Having Trouble?

**One quick thing to check:** have you set `nix.package` anywhere in your configuration?   
If so, your configuration option will collide or override with the line just added. You'll want to remove it, first -- 
or, if you're feeling savvy, point it to the provided Lix package.

**Otherwise:** If you're having difficulty installing Lix, don't panic! Hop on over to our
[community page](/community), and check out the various ways to find help.

## Need something more advanced?

Do you need to set `lix` on another part that depends on the original Nix implementation, e.g. nix-eval-jobs, nixos-option?

Consider following [the original instructions to add the Lix module](/add-fully-to-config).
