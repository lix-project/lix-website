---
title:  "About Lix"
description: "A strictly-better implementation of the Nix language."
date: "2024-04-27"
author: "Lix Team"
---

**Lix** is an implementation of the Nix _functional package management_ language. Originally
codified by [CppNix](https://github.com/NixOS/nix/), the Nix language allows you to create
packages that can be used for anything from **putting configuration files into place** to 
**declaratively managing an entire system**. 

That means that, with a few well-written Nix expressions, one 
can easily configure a system into a known state -- and the packages that are created this
way are guaranteed to run _exactly the same way_ on any system of the same architecture.

As a fork of CppNix, Lix is designed to be fully compatible with the original CppNix 
implementation -- but also designed to allow evolution of the language and tooling, so
its developers can improve usability and ergonomics without sacrificing correctness.

### Why use Nix?

If you're not familiar with the Nix approach, we recommend checking out some of the 
[writing on the subject](https://nixos.org/guides/nix-pills/01-why-you-should-give-it-a-try.html).


## Why Lix?

The **Nix language** is used for a variety of applications ranging from individual computers
to clusters of critical infrastructure. With this in mind, the Lix team has been working to
provide a collection of necessary improvements over CppNix:

- **Built for a community, not for a corporation.**  
  Lix is built by a team of open-source volunteers -- and exists to provide a alternative to the
  commercial interests that have long plagued both upstream CppNix and corporate-authored forks.
  We're proud to stand by our open [conflict of interest statements](/team#conflict-of-interest-statements),
  and proud to listen to community voices on issues of sponsorship, direction, and moderation.

- **A safe community for developers of all backgrounds.**  
  Lix is developed by a diverse group of users -- and accordingly is committed to providing a
  space that's safe for users and developers typically underrepresented in technical projects.
  We take moderation seriously, and are committed to preventing bad actors from driving out 
  marginalized groups.

- **A correct implementation of the Nix language.**  
  Recent versions of the CppNix project have introduced significant regressions -- so much so
  that the upstream [Nixpkgs](https://github.com/nixos/nixpkgs) team has opted to remain several
  versions behind. Lix is forked from the last truly-stable version of CppNix -- but has both
  introduced new features and backported a number of features from newer versions without
  sacrificing correctness.

- **A more modern implementation of Nix.**  
  Lix is designed for evolution of its codebase. Lix already uses the more modern 
  [meson build system](https://mesonbuild.com/), which improves developer usability and decreases build times. 
  Plans include a gradual, piecewise introduction of the memory-safe [Rust](https://www.rust-lang.org/)
  programming language -- to both supplement and replace sections of the current C++ codebase. 

- **A language with room to grow.**  
  Unlike upstream Nix, Lix intends to be an evolving language -- a robust language versioning
  system will allow the language to grow and evolve without sacrificing backwards-compatibility or correctness.
  And room to grow means room for **usability and ergonomics improvements** -- both in the langauge and in
  tooling.
  

## Community, Team & Governance

**Looking for information about the people behind the project?**  
Check out our [community](/community) and [team](/team) pages.