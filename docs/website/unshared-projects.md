---
slug: /unshared-projects
hide_table_of_contents: true
---

# Unshared Projects

You've probably noticed that TurboWarp, forkphorus, etc. can load unshared projects, and you may be concerned about that.

<!-- Reference for "eight years" is https://github.com/scratchblocks/scratchblocks/issues/1 -->
<h3>This is a problem with the Scratch API that's been around for over eight years. It's not a TurboWarp bug.</h3>

Even the official Scratch development builds maintained by the Scratch Team can view unshared projects (for example: https://llk.github.io/scratch-gui/develop/#1) which implies to us that the Scratch Team does not consider this a serious issue. As TurboWarp loads projects the same way as Scratch, it's also able to load unshared projects.

If this concerns you, please voice your concerns to the Scratch Team. They are the only people that can change this. [See below for more information.](#why-not-fix)

## Why doesn't TurboWarp refuse to load unshared projects? {#why-not-fix}

Even if TurboWarp refused to load unshared projects, the root cause is still the Scratch API. Unshared projects could still be trivially viewed using the official Scratch development builds or [any other tool](https://www.google.com/search?hl=en&q=unshared%20project%20viewer%20scratch). As much of Scratch and all of TurboWarp is open source, someone could easily make their own website with the code to check if a project is unshared removed. Unshared projects would not be any safer.

This is a problem that can only be fixed by the Scratch Team implementing access control for projects.scratch.mit.edu (where project data is downloaded from) as they've already done for api.scratch.mit.edu (where project titles and descriptions are loaded from). If you think this is important, let the Scratch Team know.

## How to protect your unshared projects {#prevention}

Don't share the project ID (the numbers in the project URL) with others. That includes links to your project and screenshots/videos that include your browser's URL bar.

If the project ID has already been leaked, and you don't want people to see the project, then save a copy of the project (File > Save as a copy) and delete everything from the original project. **Deleting a project through the My Stuff page (even emptying the trash) is not enough because Scratch doesn't actually delete the project.** You must manually clear everything from the original project and overwrite it. If someone already downloaded the project to their computer before you did this, there's not much you can directly do about that. If someone has stolen one of your unshared projects and released it as-if they made it, contact the Scratch Team.

This would be a good opportunity to download a backup of the project to your computer for safekeeping so that you don't have to learn the importance of backups the [hard way](https://ocular.jeffalo.net/search?q=project%20disappeared&sort=relevance).

Another alternative to keep your project safe would be to use an offline editor. We recommend [TurboWarp Desktop](https://desktop.turbowarp.org/).

## What is project ID 1? {#what-is-1}

Curious people have visited https://turbowarp.org/1 or https://llk.github.io/scratch-gui/develop/#1 and found a strange project. That's just what the Scratch API returns when you ask for the project with ID 1. Same story applies to all the other low project IDs.
