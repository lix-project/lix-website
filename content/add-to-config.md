---
title:  "Switching To Lix"
description: "or: how to make your existing configuration Delicious"
date: "2024-04-27"
author: "Lix Team"
---

If you have an existing configuration on **NixOS** or **nix-darwin**, the easiest way
to switch to Lix is currently by using our provided _NixOS module_. Fortunately, this
usually means adding only a couple of lines to your configuration.

## Flake-based Configurations

Adding Lix to a flake-based configuration is relatively simple. First, add the Lix module to your _flake inputs_:

```nix
{
  inputs = {

    # Add this section to your flake inputs!
    #
    # Note that this assumes you have a flake-input called nixpkgs,
    # which is often the case. If you've named it something else, 
    # you'll need to change the `nixpkgs` below.
    lix = {
      url = "git+https://git.lix.systems/lix-project/lix?ref=refs/tags/2.90-beta.1";
      flake = false;
    };
    lix-module = {
      url = "git+https://git.lix.systems/lix-project/nixos-module";
      inputs.lix.follows = "lix";
      inputs.nixpkgs.follows = "nixpkgs";
    };

  }

  # <rest of configuration omitted>
}
```

Next, add the `lix-module` as one of the arguments to your output function:

```nix
{
  # <configuration above omitted>

  # Add the `lix-module` argument to your output function, as below:
  outputs = {nixpkgs, lix-module, ...}: {
      # <rest of configuration omitted>
  }
}
```

Add the Lix _NixOS Module_ to your configuration:

```nix
{
  # <configuration above omitted>

  # Add the `lix-module` argument to your output function, as below:
  outputs = {nixpkgs, lix-module, ...}: {

      # The configuration here is an example; it will look slightly different
      # based on your platform (NixOS, nix-darwin) and architecture.
      nixosConfigurations.your-box = nixpkgs.lib.nixosSystem {
        system = "x86_64-linux"

        modules = [

          # This is the important part -- add this line to your module list!
          lix-module.nixosModules.default
        ];

      };
  }

  # <configuration below omitted>
}
```

Finally, if you'd prefer not to build Lix yourself, you can add our binary cache. 
Add the following to any NixOS module in your configuration (e.g. `configuration.nix`):

```nix
{
  nix.settings.extra-substituters = [
    "https://cache.lix.systems"
  ];

  nix.settings.trusted-public-keys = [
    "cache.lix.systems:aBnZUw8zA7H35Cz2RyKFVs3H4PlGTLawyY5KRbvJR8o="
  ];
}
```

Rebuild and switch into your new system (either using `nixos-rebuild` or `darwin-rebuild`).
You should now be using Lix! You can verify this by asking the `nix` command to report its version:

```sh
$ nix --version
nix (Lix, like Nix) 2.90.0-beta.0
```

As long as you see `Lix` in the output, you're good! If you're not sure what to do now, it's a
great time to check out some of the [community's resources on Nix](/resources).


## Non-Flake Configurations

If you're not using flakes, you can set up your configuration to automatically pull down a
Lix release tarball, and then add it to your `configuration.nix`.

Open your `/etc/nixos/configuration.nix` in the editor of your choice. Find the `imports`
section, and add the line provided in the configuration 

<mark>
<b>This section is currently pending on a quick update.</b>
</mark>
<br/>
<br/>

```nix
{ config, lib, pkgs, ... }:
{
  imports =
    [ # Include the results of the hardware scan.
      ./hardware-configuration.nix

      # This is the core line -- it pulls down the Lix module and
      # includes it in your configuration. It looks much nicer with a let
      # binding -- but for clarity, we'll leave that as an exercise for the 
      # reader. :)
      #
      # Note that the tag (e.g. v2.90) in the URL here is what determines
      # which version of Lix you'll wind up with.
      (import 
        (
          (fetchTarball { url = "https://git.lix.systems/lix-project/nixos-module/archive/main.tar.gz"; }) + "/module.nix"
        ) 
        { 
          lix = fetchTarball { url = "https://git.lix.systems/lix-project/lix/archive/2.90-beta.1.tar.gz"; }; 
        }
      )
    ];

  # <configuration below omitted>
}
```

Finally, if you'd prefer not to build Lix yourself, you can add our binary cache. 
Add the following to any NixOS module in your configuration (e.g. `configuration.nix`):

```nix
{
  nix.settings.extra-substituters = [
    "https://cache.lix.systems"
  ];

  nix.settings.trusted-public-keys = [
    "cache.lix.systems:aBnZUw8zA7H35Cz2RyKFVs3H4PlGTLawyY5KRbvJR8o="
  ];
}
```

Rebuild and switch into your new system (either using `nixos-rebuild` or `darwin-rebuild`).
You should now be using Lix! You can verify this by asking the `nix` command to report its version:

```sh
$ nix --version
nix (Lix, like Nix) 2.90.0-beta.0
```

As long as you see `Lix` in the output, you're good! If you're not sure what to do now, it's a
great time to check out some of the [community's resources on Nix](/resources).

## Having Trouble?

**One quick thing to check:** have you set `nix.package` anywhere in your configuration?   
If so, your configuration option will override the Lix module. You'll want to remove it, first -- 
or, if you're feeling savvy, point it to the provided Lix package.

**Otherwise:** If you're having difficulty installing Lix, don't panic! Hop on over to our
[community page](/community), and check out the various ways to find help.
