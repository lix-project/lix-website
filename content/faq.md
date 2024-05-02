---
title:  "Frequently Asked Questions"
description: "frequently is, of course, relatively speaking"
date: "2024-05-01"
author: "Lix Team"
---

These are the most common questions we get -- or anticipate getting. If you can't find the answer
you're looking for, please feel free to ask over in the [community](/community).

<br/>

#### Q: Can I use my existing Nix/NixOS configuration?

Absolutely. A primary goal of the Lix project is compatibility, which means that we very much support
using Lix in any existing Nix or NixOS configuration.

Check out the [install page](/install_actual) to see how to use Lix with your existing configurations.

#### Q: What are your plans for flakes?

One of our primary goals is compatibility. While flakes are an experimental technology, their use is
widespread enough that they've become a de-facto part of the Nix ecosystem -- and thus we consider them
to be part of our compatibility guarantee.

That said, we're not tied to any particular flake implementation. As Lix develops, we plan on adding an
extension system for the tooling -- which will allow technologies like flakes, as well as new and different
extensions -- to seamlessly act with the Lix core without needing to reside long-term in the Lix tree.

_Flakes are not the only way to write Nix language code in Lix, and we intend to provide a good experience
to those using flakes -- while also improving the experience for those not using them -- 
by evolving a compatible but more flexible flake-like abstraction in the periphery of the Lix system._


#### Q: What relation does Lix have to the Nix Foundation, and to related projects?

Besides being a fork of CppNix and an implementation of the Nix language, Lix is the
effort of a number of long-time Nix, Nixpkgs, NixOS, and Tvix contributors and maintainers -- and has
been developed in partnership with a number of prolific Nix-documenters, bloggers, and users.

We welcome anyone who wants to develop for both Lix and another implementation -- including CppNix and _Tvix_,
and our open-source implementation absolutely allows any developer to integrate our code into any
license-compatible project.

However, ___Lix does not fall under the NixOS Foundation umbrella___, is funded independently of the foundation,
and is not in any way controlled by its leadership. With the recent reboot of the foundation's governance,
we are in communication with -- and open to collaboration with -- the foundation.

#### Q: How does Lix work? How can I contribute or help out?

The Lix codebase is comprised of a few parts, which you can see a description of
[here](https://wiki.lix.systems/link/18) along with what we want to improve in them. We also have a
lot of areas we are working on other than C++ code that we would love help on, from documentation to
compiling lists of resources, web design, bug tracker triage, and more. If you're looking for an idea
to get started on, we have triaged some tasks
[that we believe should be straightforward](https://git.lix.systems/lix-project/lix/issues?q=&type=all&sort=&state=open&labels=157&milestone=0&project=0&assignee=0&poster=0). To read more
about which tasks we recommend taking on, see
[Freezes and recommended contributions](https://git.lix.systems/lix-project/lix/issues?q=&type=all&sort=&state=open&labels=157&milestone=0&project=0&assignee=0&poster=0).

Feel free to ask for help in the Lix development channel. Especially feel free to ask for us to write down 
more work that we would like help with, or to write contribution information that is missing; 
it is a goal of the project for it to be easy to get up to speed. Also, if you need additional access to 
do some task, such as fixing a typo in the wiki, let us know and we will figure it out.

#### Q: How do I submit changes to the Lix project?

Feel free to ask for help in the Lix development channel. Especially feel free to ask for us to write down
more work that we would like help with, or to write contribution information that is missing; it is a goal
of the project for it to be easy to get up to speed. Also, if you need additional access to do some task,
such as fixing a typo in the wiki, let us know and we'll figure it out.

It is also possible to submit changes as normal GitHub pull requests on lix-project/lix. These are also
welcome, and we will FIXME convert them to Gerrit changes for you for review. However, there are limitations
to the GitHub flow such as PRs needing to be squashed into one change. For larger changes than about 150 lines
of normal code, or if necessary, we may ask for a change to be submitted to Gerrit directly so we can review
it commit-by-commit.


#### Q: What is a Lix account? What do I need one for?
Lix has a central accounts system for all its services. These accounts allow access to Forgejo (the Lix bug tracker
and repositories), Gerrit Code Review, the wiki and other collaboration software we use.

To get started contributing to Lix, you need a Lix account. The easiest way to obtain one is to use GitHub 
for login, as it will let you get started immediately. We also have local accounts available for those who
wish not to use GitHub; if you would like one, please speak to a member of the Lix team on Matrix and we 
will gladly make you one manually.

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
