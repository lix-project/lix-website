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
  We're proud to stand by our open [conflict of interest statement](/team#conflicts-of-interest),
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
  Unlike upstream Nix, Lix intends to be an evolving language -- a robust [language versioning](/roadmap)
  system will allow the language to grow and evolve without sacrificing backwards-compatibility or correctness.
  And room to grow means room for [usability and ergonomics improvements](#) -- both in the langauge and in
  tooling.
  
## Frequently Asked Questions (relatively speaking)

#### Q: Can I use my existing Nix/NixOS configuration?

Absolutely. A primary goal of the Lix project is compatibility, which means that we very much support
using Lix in any existing Nix or NixOS configuration.

Check out the [install page](/install) to see how to use Lix with your existing configurations.

#### Q: What are your plans for flakes?

One of our primary goals is compatibility. While flakes are an experimental technology, their use is
widespread enough that they've become a de-facto part of the Nix ecosystem -- and thus we consider them
to be part of our compatibility guarantee.

That said, we're not tied to any particular flake implementation. As Lix develops, we plan on adding an
extension system for the tooling -- which will allow technologies like flakes, as well as new and different
extensions -- to seamlessly act with the Lix core without needing to reside long-term in the Lix tree.


#### Q: What relation does Lix have to the Nix Foundation, and to related projects?

Besides being a fork of CppNix and an implementation of the Nix language, Lix is the
effort of a number of long-time Nix, Nixpkgs, NixOS, and Tvix contributors and maintainers -- and has
been developed in partnership with a number of prolific Nix-documenters, bloggers, and users.

We welcome anyone who wants to develop for both Lix and another implementation -- including CppNix and _Tvix_,
and our open-source implementation absolutely allows any developer to integrate our code into any 
license-compatible project.

However, ___Lix does not fall under the NixOS Foundation umbrella___, is funded independently of the foundation,
and is not in any way controlled by its leadership. Unfortunately, at the moment, this is vital for 
us to deliver on our promise of a safe and inclusive community.


#### Q: If Lix plans to adopt Rust, what makes it different from Tvix?  

Unlike Lix, [Tvix](https://tvix.dev/) is a ground-up re-implementation of the Nix language in Rust,
which shares many of the same modernization goals as Lix -- but also has a long way to go before it can
reach feature parity (and parity in correctness) with the CppNix and Lix implementations.

Lix instead plans a _top-down_, _piecewise_ approach to our Rust extensions and replacements -- which means
that Lix already has feature-parity with -- and correctness exceeding -- the original CppNix.


#### Q: What does the name Lix stand for? How is it pronounced?

Like Nix, Lix isn't really short for anything. The name originally derives from the term _Layered Nix_,
based on the premise of layering new language and tooling features atop a fully-compatible, rock-solid base.

Lix is pronounced like _licks_ -- i.e. what you might do if someone handed you a delicious ice cream cone;
which may or may not be stacked up with lambdas.


#### Q: Can I help?

Absolutely! We love new contributors, and are always looking for contributions in all of our areas -- and
we value contributions of more than just code. 

Head over to the [contributing](/contributing) page to get started.
