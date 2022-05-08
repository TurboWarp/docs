---
slug: /unshared-projects
hide_table_of_contents: true
sidebar_label: Unshared Projects
---

# The future of unshared projects is unknown

<!-- 
  I won't link these in the public website because there will be way too much spam if we do that, but here are relevant links:
  https://github.com/LLK/scratch-gui/pull/8269
  https://github.com/LLK/scratch-www/pull/6773
-->

**Updated May 8, 2022** - The future of loading unshared projects in TurboWarp, forkphorus, and other third-party sites is unknown due to upcoming Scratch API changes that *may* happen at an *unknown date*.

*Disregard any earlier version of this section you have seen as it may have been misleading -- specifically anything with "May 7" as the date.*

We want to make it clear: We know very little solid information about what's going to change.

We don't entirely know what the impact will be. Scratch is changing how project loading works and it seems that downloading an unshared project will require a token that is only accessible by the owner of the project. There *might* be a very convoluted way to make unshared projects still load in third-party sites, but it would require the owner of the project to do some very strange (and possibly dangerous) things and isn't guaranteed to be reliable.

We also don't know when or even *if* the changes will be implemented. It could be next week, or next month, or next year, or never for all we know.

Regardless of the change, you will always be able to use the File > Save to your computer and File > Load from your computer options to manually load projects without sharing them on Scratch. Most third-party Scratch tools should have options to load these files instead of a project ID/URL.

We know that there are a lot of old links and third-party embeds that rely on accessing unshared projects. We're looking into ways to mitigate the impact of the API changes on these. Check back in a few days, hopefully we'll know more by then.

<!-- The developers of TurboWarp and forkphorus want to make it clear the viewing unshared projects with these sites was always just a side-effect of how the Scratch API worked and not the intended primary use. -->

<!-- Depending on how the change is implemented, it's possible that third-party sites may temporarily be unable to load *any* projects for a short duration until some code is updated to accommodate the changes. -->

This page will be updated as more is learned over time. We're figuring things out slowly and a lot remains unknown.

## Original page {#original}

:::info
This information will remain accurate until the changes are implemented.
:::

You've probably noticed that TurboWarp, forkphorus, etc. can load unshared projects, and you may be concerned about that.

<!-- Reference for "nine years" is https://github.com/scratchblocks/scratchblocks/issues/1 -->
<h3>This is a problem with the Scratch API that's been around for nine years. It's not a TurboWarp bug.</h3>

Even the official Scratch development builds maintained by the Scratch Team can view unshared projects (example: https://llk.github.io/scratch-gui/develop/#1) which implies to us that the Scratch Team does not consider this a serious issue. As TurboWarp loads projects the same way as scratch-gui, it's also able to load unshared projects. This problem can only be properly solved by the Scratch Team.

### Why doesn't TurboWarp refuse to load unshared projects? {#why-not-fix}

Even if TurboWarp refused to load unshared projects, the root cause is still the Scratch API. Unshared projects could still be easily viewed using the official Scratch development builds or many other tools. TurboWarp is fully open source, so someone could easily make their own version without the code to check if a project is unshared. Unshared projects would not be any safer.

This is a problem that can only be fixed by the Scratch Team implementing access control for projects.scratch.mit.edu (where project data is downloaded from) as they've already done for api.scratch.mit.edu (where project titles and descriptions are loaded from). If you think this is important, let the Scratch Team know.

### How to protect your unshared projects {#prevention}

Don't share the project ID (the numbers in the URL to your project) with others. That includes links to your project and screenshots/videos that include your browser's URL bar.

If the project ID has already been leaked, and you don't want people to see the project, DO NOT delete it through the My Stuff page as that won't actually delete the project data. Instead, you should:

1. Save a copy of the project through the File > Save as a copy menu.
2. Wait for the copy to finish saving. Refresh the copied project to make sure that it saved correctly.
3. Go back to the original project and manually delete everything from the original project. Manually remove all sprites, sounds, costumes, and scripts that you don't want other people to find, then save the project again to overwrite the project. Deleting a project through the My Stuff page, even emptying the trash, is not enough because Scratch won't actually delete the project data.
4. Do all future work on the copy you created in step 1.

If someone already downloaded the project to their computer before you did this, there's not much you can directly do about that. If someone has stolen one of your unshared projects and released it as-if they made it, contact the Scratch Team.

Another way to keep your project safe would be to use an offline editor such as [Scratch Desktop](https://scratch.mit.edu/download) or [TurboWarp Desktop](https://desktop.turbowarp.org/).

This is also a good opportunity to save a backup of your project to somewhere safe on your computer so that you don't have to learn the importance of backups the [hard way](https://ocular.jeffalo.net/search?q=project%20disappeared&sort=relevance).

### What is project ID 1? {#what-is-1}

Curious people have visited https://turbowarp.org/1 or https://llk.github.io/scratch-gui/develop/#1 and found a strange project. That's just what the Scratch API returns when you ask for the project with ID 1.
