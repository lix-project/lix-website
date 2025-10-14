+++
title = "Meta news on Lix in October 2025"
author = "Lix Team"
date = "2025-10-13"
+++

As Lix continues to evolve, we're excited to share some major updates that mark a new chapter in our journey. This blog post is the first of its kind: we want to give you a deeper look into the decisions, plans, and developments shaping the future of Lix.

For those of you who've been following closely, you might've already noticed some of these changes, but we're thrilled to officially highlight them and look ahead!

## New governance adopted

Lix governance started off with a bootstrap model led by the core team, back when the project was just an idea and there was a *lot* to figure out. From the very beginning, we knew that we wanted to evolve this model to allow more people to get involved and give our hardworking core team a well-deserved break when the time came.

And guess what? The time has come! We've voted in a shiny new governance model.

The TL;DR here: Lix now has three formal roles in the project: core team, committer team, and community team.

Over time, we've met some amazing contributors who wanted to take on more responsibility, and we've been *more than happy* to hand them the commit bit.

As Lix continues to grow, we expect even more people will come on board, eager to scratch an itch in a specific part of the project. Whether it's the library, documentation, packaging, or something else: we want to make it clear that ownership of these areas is now possible thanks to our usage of Gerrit and the concept of "code ownership".

For the folks who contribute a lot and are passionate about steering Lix in a direction that makes sense for the community, the core team is always open for conversation.

Our main goal with this change is to make the path to taking on a formal role as clear as possible. There's still a lot more to be done, but this is a solid first step.

For more details, you can read the final document here: <https://wiki.lix.systems/books/lix-organisation/page/lix-governance>.

## Plans for the Lix project platform: Zulip

You may have noticed something new: [https://zulip.lix.systems](https://zulip.lix.systems). That's right, we've made a switch!

Previously, core team communications happened on an internal Mattermost instance. But after adopting the new governance, we realized we needed a better space for high-bandwidth discussions, so we decided to give Zulip a try. We know this might surprise (or even disappoint) some of you, but don't panic: Lix isn't going anywhere on Matrix!

Why Zulip? Well, Matrix worked great for quick chats and announcements, but it wasn't really cut out for the deep, long-form discussions that help drive a project forward. Instead of trying to make Matrix fit, we thought we'd give Zulip another shot.

There are two types of social interactions we're aiming to support:

1. **The Matrix crowd** : Users who want quick help, or just want to catch up on announcements.
2. **The Zulip crowd** : Developers and users who prefer to dive into detailed, asynchronous conversations.

We believe Zulip will serve the second group better, as it provides a structured environment where you can join a discussion, catch up, and participate without endless scrolling. As for the Matrix crowd? We're keeping that alive: don't worry, it's not going anywhere.

We're gradually rolling out Zulip to support these kinds of discussions, and we're also working on a bridge to ensure seamless interaction between Zulip and Matrix in places where it makes sense, so we can keep everyfew connected.

One small but important change in the future: rooms that need structured discussions will likely require threads, even if you stay on Matrix. More on that in further announcements.

## Lix became the first AFNix-hosted project

This summer, Raito from Lix, with help from some awesome folks in the Nix community, took a big step by creating the [Association Française Nix (AFNix)](https://afnix.fr), a non-profit based in France that supports Nix-themed projects. Think of it as a European equivalent to [Software in the Public Interest (SPI)](https://en.wikipedia.org/wiki/Software_in_the_Public_Interest), except it is focused on the Nix ecosystem.

So, what does this mean for Lix?
In short: **Lix is now the first-ever project hosted by AFNix!** AFNix offers a ton of useful services for us, such as:

* **Legal presence in the European Union**
* **Donation collection** for our subprojects
* **Infrastructure support**, so we can focus more on delivering that tasty Nix interpreter you all love

AFNix enables us to tackle long-term operational needs, like setting up a legal entity, or ensuring hardware and infrastructure are owned by an organization rather than individuals. These things are important for sustainability, but they're also a big effort for a small team like ours: we'd rather focus on building good software for now.

We could have gone with GitHub (Sponsors) or joined nix-community, but we were looking for a partner aligned with our core values: **independence** and **self-hosting**. On top of that, AFNix is specifically focused on supporting community-driven Nix projects, which made it a natural fit.

The added bonus is that we now have access to AFNix's policies (some of which the core team had been wishing for, e.g. [the AI policy](https://docs.afnix.fr/policies/ai.html)).

We'll expand more on our reasons for choosing AFNix in a future blog post.

If you're interested in AFNix, check out their website at [afnix.fr](https://afnix.fr). Got a project you think would be a good fit for AFNix? Take a look at [their project criteria](https://docs.afnix.fr/policies/project-criteria.html).

## State of the Lix infrastructure

Let's talk infrastructure for a moment.

Lix's infrastructure started small, with the core team bootstrapping everything. But as the project grew, we've started hitting some limits. Here's where we stand:

* **x86_64-linux**: We've got a big EPYC 7763 shared with other projects, but running multiple tests at once can get expensive, especially when there are 100 changes on the table at once. (Yup, that happens!)
* **aarch64-linux**: We've got two Q80-30 Ampere Altra CPUs, though one isn't fully enabled yet. This setup has been mostly fine, though.
* **aarch64-darwin**: We've got a Scaleway-based Mac, but it's constantly overwhelmed: our jobs are just too heavy for its capabilities.
* **Other services**: x86_64 Hypervisors and VMs are scattered all over the place.

Now, here are the two big issues we're facing:

1. **Big Internet Ambient Noise**: Some aggressive scrapers were hogging our CPU, causing trouble with expensive API calls to services like Gerrit and Forgejo. This eventually led to database corruption, and we realized it was time to rethink our infrastructure. AFNix has been a huge help in planning and staging this migration.
2. **aarch64-darwin**: Simply put, it's too underpowered for our needs.

The good news? AFNix recently provided us with **two Mac Mini M2** units, which went through the painful [MDM](https://developer.apple.com/documentation/devicemanagement) process and are now available for use. We have added them to the Lix CI.

But let's be real: two Mac Minis probably won't cut it in the long run. We'll likely need more, and that means we might be reaching out to the community for help funding this extra capacity via AFNix. After all, the current **99th percentile** waiting time on Darwin CI is **22 hours**, yikes!

We've got other tricks up our sleeves to optimize the system, but we're definitely aware that our Darwin capacity needs a boost.

A big shout out to Emily Lange who spearheaded many of our long-needed infrastructure migrations and maintaining our Forgejo instance and security updates.

### A call for contributions

Finally, a call for help! As with any open source project, Lix could use more hands on deck:

* **macOS maintenance**: We could really use help with fixing macOS-specific issues. Thanks to **Emily** and **lilyball** for their hard work so far and in the future! Please reach out to the Lix development room if you would like to get started.

And, of course, a huge thank you to everyone who's already helping, contributing, or just using Lix. You make this project what it is, and we're thrilled to keep working on a tastier Nix interpreter for you all! 

---

That's it for today, it was already a lot. Expect more blog posts about the interpreter itself in the week. Finally, some special news may happen in the next weeks.
