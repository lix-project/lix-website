---
title:  "Nix Resources"
description: "community resources we recommend for getting started or learning more"
date: "2024-04-27"
author: "Lix Team"
---

Lix doesn't exist in a vacuum -- but instead builds atop the incredible work of dozens of
NixOS community members. This page collects resources that have been recommended by members
of the community.

We're also currently in the process of writing brand new documentation, which will be listed here
once available.

## A note of caution

Nix has a long history. Some things that seemed like good ideas once are no longer common practice. In particular:

- It's probably a good idea to ignore `nix-env` and mutable environments in favor of declarative configuration
- If you don't already use channels, it's probably a good idea to learn about flakes or some other pinning mechanism instead

If you're learning about those topics because you want to understand the ideas that are currently in favor in the historical contexts they are responses to, or because you think you see a benefit to them that others don't, that's totally fine; this warning is only here to help beginners have a fruitful experience.

## Understanding Nix

- [The official Nix ecosystem documentation](https://nix.dev), maintained by the **NixOS Foundation**.
- The [NixOS and Flakes Book](https://nixos-and-flakes.thiscute.world/), by [Ryan Yin](https://github.com/ryan4yin).
- The [Nix pills](https://nixos.org/guides/nix-pills/), a community classic with a guided tour of some of the Nix language basics.

## Using Nix

- [Customizing packages in Nix](https://bobvanderlinden.me/customizing-packages-in-nix/), by [bobvanderlinden](https://bobvanderlinden.me).
- [Finding functions in Nixpkgs](https://jade.fyi/blog/finding-functions-in-nixpkgs/), by our own **jade**.
- [Getting started with Home Manager for Nix](https://ghedam.at/24353/tutorial-getting-started-with-home-manager-for-nix), by [Mattia Gheda](https://ghedam.at/).


## Understanding Flakes

- [Flakes aren't real and can't hurt you](https://jade.fyi/blog/flakes-arent-real/), by our own **jade**.
- Several of Lix community member [Xe Iaso](https://xeiaso.net)'s blog posts:
  - [Nix Flakes: An Introduction](https://xeiaso.net/blog/nix-flakes-1-2022-02-21/)
  - [Nix Flakes: Packages and How To Use Them](https://xeiaso.net/blog/nix-flakes-2-2022-02-27/)
  - [Nix Flakes: Exposing and using NixOS Modules](https://xeiaso.net/blog/nix-flakes-3-2022-04-07/)
  - [Building Go Packages with Nix Flakes](https://xeiaso.net/blog/nix-flakes-go-programs/)

