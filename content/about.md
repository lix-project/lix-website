---
title:  "About Lix"
description: "A strictly-better implementation of the Nix language."
date: "2025-06-27"
author: "Lix Team"
---

**Lix** is an implementation of the Nix _functional package management_ language. Originally
codified by [CppNix](https://github.com/NixOS/nix/), the Nix language allows you to create
packages that can be used for anything from **putting configuration files into place** to 
**declaratively managing an entire system**. 

That means that, with a few well-written Nix expressions, one 
can easily configure a system into a known state -- and the packages that are created this
way are guaranteed to run _exactly the same way_ on any system of the same architecture.

As a fork of CppNix (last shared release: 2.18), Lix is designed to be fully compatible with the original CppNix
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
  Lix is built by a team of open-source volunteers -- and exists to provide an alternative to the
  commercial interests that have long plagued both upstream CppNix and corporate-authored forks.
  We're proud to stand by our open [conflict of interest statements](/team#conflict-of-interest-statements),
  and proud to listen to community voices on issues of sponsorship, direction, and moderation.

- **A safe community for developers of all backgrounds.**  
  Lix is developed by a diverse group of users -- and accordingly is committed to providing a
  space that's safe for users and developers typically underrepresented in technical projects.
  We take moderation seriously, and are committed to preventing bad actors from driving out 
  marginalized groups.

- **Close to our users.**
  Unfortunately, there have been various significant regressions in the CppNix project over the last years --
  to the extent that [Nixpkgs](https://github.com/nixos/nixpkgs) has repeatedly opted to *not* default users to the latest release, especially on stable channels.
  Lix wants to stay as close to its users as possible with the "Lix on main" program, inviting users to daily drive the latest changes with a promise of quick support and fixes, to help ensure that our releases are already widely tested by the time they land in Nixpkgs.

- **A more modern implementation of Nix.**  
  Lix is designed for evolution of its codebase. Lix already uses the more modern 
  [meson build system](https://mesonbuild.com/), which improves developer usability and decreases build times. 
  Plans include a gradual, piecewise introduction of the memory-safe [Rust](https://www.rust-lang.org/)
  programming language -- to both supplement and replace sections of the current C++ codebase. 

- **A language with room to grow.**  
  Unlike upstream Nix, Lix intends to be an evolving language -- a robust language versioning
  system will allow the language to grow and evolve without sacrificing backwards-compatibility or correctness.
  And room to grow means room for **usability and ergonomics improvements** -- both in the language and in
  tooling.

- **Clear stability guarantees.**
  Fundamentally transforming a large codebase and adding new features while remaining stable at the same time is no easy goal.
  To achieve this, [we are selective](https://wiki.lix.systems/link/9#bkmrk-freezes) about which components may change and which components are feature-frozen until we have reworked them into a state where we are sufficiently confident in their stability.
  We are selective about our stability guarantees and explicitly define what is expected to be stable and what can change.

## Community, Team & Governance

**Looking for information about the people behind the project?**  
Check out our [community](/community) and [team](/team) pages.

## Technical differences from CppNix

The list of differences will only grow over time as both projects continue moving into different directions and pursuing different goals.
On the broader strokes, Lix development currently mainly focuses on code cleanup and stability improvements, which aren't as easy compare as flashy new features.
Still, some notable differences:

- Lix features various small improvements to the overall user experience, including better error messages in many places.
- Lix does not include lazy trees, and does not intend to use the upstream implementation of lazy trees; a functionally equivalent replacement is planned (FIXME: publish the planning document for that).
- Lix plans on completely rewriting CA derivations, and during that time will not offer a usable implementation of CA derivations.
- Lix does not use libgit2 and does not intend to use it
- Lix has started deprecating various legacy features and misfeatures of the Nix language, to reduce the number of foot guns users may run into.
- The REPL has seen various feature improvements, notably `repl-overlays`, new debugging commands and improvements to the syntax.
- Various performance improvements (8-20% faster than 2.18)

## Differences between Lix and snix

snix is a Nix implementation from the ground up in Rust, aiming to be compatible with CppNix.
snix is designed to be modular, and also aims at replacing several core components of Nix with greenfield replacements of a second generation.

Lix is intended to evolve CppNix into a stable foundation for future evolution, without breaking clients along the way. Its goals are to aggressively pursue technical debt and remove the skeletons from the closet, while remaining deliberate about behavioural changes through testing. Lix will contain Rust components in the near future.

The two projects have similar goals but different approaches, there is some overlap between the developers, and the Lix project is open to integrating snix components in the future in places where it makes sense.

## A quick word on Flakes

The Lix project acknowledges that Flakes are the way that the majority of people use Nix today, and does not intend to remove support for them.
However, Flakes are not the only way to write Nix language code in Lix, and we intend to provide a good experience to Flakes users, while also improving the experience for those not using them.
As part of our overall focus on stability and dependability, some features of Flakes will be changed to be more strict.

Our long-term goal is to make Flakes less "special":
We want to bring features that are currently Flakes-exclusive to everyone, and want to level the playing field by enabling everyone to build Flake-equivalent alternatives on top of Lix.
