---
title:  "Governance"
description: "This is *the* formal and binding document for how we are organized"
date: "2025-08-19"
author: "Lix Team"
---

Lix has three overlapping circles of responsibility: The **core team** is the primary governance body of the Lix project. The **community team** is the secondary governance body of the Lix project. The **committers** are the set of all people who have "+2" permissions on the Lix code base and thus can approve changes to be merged.

| | Primary focus | How decisions are made |
|--------|---------------|------------------------|
| **Core team** | technical stewardship, project strategy, and conflict resolution | consensus first; fallback to the governance mechanisms detailed below |
| **Community team** | culture, moderation, mediation | (lazy) consensus
| **Committers** | day-to-day code, docs, and CI changes | review-based consensus; loose consensus rules unless escalated |

The teams should mostly *enable*, not gatekeep. Decision making should default to community consensus wherever possible.

## 2. Core team

The core team:

- Steers the overall direction and long-term goals of the project (vision)
- Makes decisions when community consensus can’t be reached
- Grants access to sensitive infrastructure and admin permissions
- Maintains project-wide policies, including this governance document
- Represents Lix in cross-project/community spaces

### 2.1 Joining the Core team

New members can be added via a core team vote. To be considered:

- The person must have made sustained contributions (code, infra, docs, community, etc.)
- At least one current member should vouch for them
- They must agree to uphold the responsibilities of the team

### 2.2 Staying in the Core team

Core team members are expected to stay active. “Active” means contributing in *some* meaningful way at least once every **3 months**:

- Reviewing or driving technical work
- Participating in governance discussions or votes
- Maintaining infra, releases, docs, or community spaces
- Representing Lix publicly

After **3 months of inactivity**, a member is marked **inactive**. They:

- Stay listed as historical members
- Can return to active status by resuming regular contributions

After **6 months of inactivity**, a member may be removed by vote.

### 2.3 Voting

- Each core team member gets one vote
- Proposals pass with a **2/3-th majority** of active members (unless otherwise specified)
- Votes happen via Matrix or another agreed-on platform

Governance-level decisions that require a vote include:

- Major technical decisions for which the usual consensus-gathering mechanisms have failed
- Granting commit, infra or admin permissions
- Adding/removing core team members
- Changes to this document

## 3 Community team

The community team:

- Is responsible for moderation and community management
- Proactively tries to mediate conflicts before they blow up
- Maintains the public presence of the project, on the home page and on social media
- Represents Lix in cross-project/community spaces, and takes care of outreach and public relations on social media

### 3.1 Joining the Community team

New members can be added via a community team vote. Full consensus of the community team is required. To be considered:

- The person must be qualified to do the work of a typical online community moderator
- The person should be active and well connected in the community
- Unlike for the core team, regular code contributions are not expected

## 4. Committers

The committers:

- Are entrusted with autonomy in areas where there's not enough help
- Coordinate current needs in their area of expertise with the core team
- Review CLs under their area of expertise
- Bring up difficulties in maintaining their area of expertise that arise, for example for lack of contributors, excessive churns, etc.
- Help triaging incoming issues
- Can help with responding to security incidents in Lix

Note that contributors may be declared as "code owners" of certain files or folders within the code base. Code owners are added to the reviewer roster for those files, and have permission to merge changes affecting files they own. For the purpose of this document, only people with full merge rights on the entire code base are called "committers".

## 5. Interactions between the teams

- **Core team ⇄ community team**
  - The core team and community team stay in close contact at all times, and work together on all issues where their responsibilities overlap.
  - The core team consults the community team on decisions that materially affect contributor experience.

- **Core team ⇄ committers**
  - Committers consult the core team on large-scale changes in the Lix project which may require strategic guidance and long-term vision.
  - Every core team member is a committer.
  - Committers can propose governance changes and may be nominated to the core team.
  - When a technical dispute among committers cannot be resolved through usual review, it is escalated to the core team for _binding_ resolution.

- **Committers ⇄ community team**
  - Committers are encouraged to mentor newcomers.
  - Committers can raise social issues they face to the Community team to get help.

**Why this matters**

- **Clarity** — newcomers know whom to ask for what.
- **Checks & balances** — no single circle monopolizes influence.
- **Pathways** — active committers who gain trust and context have a clear route into governance.

The default rule: *work happens in public, by the people closest to the code*. Governance teams intervene only when consensus fails or strategic questions arise.

## 6. Technical conflict resolution

Occasionally, even experienced contributors disagree---especially when it comes to direction, tradeoffs, or prioritization.

Upon request of any contributor, the core team will help resolving technical disputes as follows:

1. First, **seeking consensus** in a public channel (e.g. Matrix or issue discussion).
2. If unresolved, escalating to a **time-boxed internal discussion** (7 days max).
3. If still unresolved, any core team member may **call for a vote**. The result of the vote (2/3-th majority required) becomes binding.

In particularly tricky cases, the team may choose to consult external experts or contributors most familiar with the code in question.

### 6.1 Fast-track decisions

For time-sensitive decisions:

- Any core team member can propose a fast-track item
- A **48-hour discussion window** opens
- If **2 other core team members approve** and no objections are raised, the proposal passes

If there are objections, the issue moves to a full vote.

## 7. Transparency

- Non-sensitive governance discussions happen in a **public read-only channel**
- Sensitive topics (security, conduct, etc.) can happen in private, but outcomes should be summarized publicly when appropriate

### 7.1 Town Halls

The core team holds **quarterly town halls**, open to the community.

- Announced at least **7 days in advance**
- Minutes are shared publicly afterward
- Anyone can attend and discuss; only core members vote

## Final notes

This is version 1.1. It’s deliberately lightweight, and we expect to revise it as Lix grows. The goal isn’t perfection. Feedback welcome!

Changes to this document require:

- a **2/3-th core team vote**
- a **minimum 7-day community comment period** before voting
