+++
title = "Lix installations upgrading to macOS Sequoia require manual repair"
author = "Lix Team"
date = "2024-09-15"
+++

macOS Sequoia release day is almost upon us, and that means all your Lix and Nix installations on macOS are going to break when you upgrade your OS.
Apple claimed some user IDs that are used in the default Nix installation which are then clobbered by the updater, leading to builds failing with the following error:

```
error: the user '_nixbld1' in the group 'nixbld' does not exist
```

To fix this, you can use the repair functionality of the installer (thanks to cole-h at DetSys for implementing the repair functionality and emilazy for porting it to lix-installer!):

```
curl -sSf -L https://install.lix.systems/lix | sh -s -- repair sequoia
```

If you want to apply the repair before upgrading, add `--move-existing-users` to the end of the command.

We have a wiki page with more links and details here: https://wiki.lix.systems/link/81
