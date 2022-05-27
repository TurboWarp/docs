---
slug: /unshared-projects
hide_table_of_contents: true
sidebar_label: Unshared Projects
---

# The end of viewing unshared projects might be soon

<!-- 
  I won't link these in the public website because there will be way too much spam if we do that, but here are relevant links:
  https://github.com/LLK/scratch-gui/pull/8269
  https://github.com/LLK/scratch-www/pull/6773
-->

**Updated May 27, 2022** - Loading unshared projects in TurboWarp, forkphorus, the packager, and other third-party will **PROBABLY** no longer be possible in the near future due to upcoming changes to the Scratch API that we do not have control over.

:::caution
Everything here is **speculation** based on open source developments. It's possible (but we think unlikely) that this is all a big misunderstanding.

We ask that you don't go around saying things that will just scare people like "unshared project will not work by next week" (not proven) and instead link to this page.

**We know nothing about what will happen "by next week" or at any time. Some versions of this document had some wording that could have been read like that. That was not the intended interpretation.**

We will no longer provide time guesses because there is no way for us to predict beyond blind guesses which don't help anyone, and all of our time estimates are consistently misinterpreted anyways.
:::

### What's actually happening {#whats-happening}

Scratch is changing how project loading works to use a "project token". For unshared projects, this token can only be accessed by the owner of the project.

The most likely reason we can think of for adding this token is to make sure that only people who should be able to access a project can access it. *If* this is the case, it would become impossible to load an unshared project in TurboWarp, forkphorus, scratch-gui, or any other third-party site just by knowing its ID. These changes would also affect your own unshared projects even if you are signed into Scratch in the same browser.

### We think this is a good thing {#good-thing}

The developer of TurboWarp thinks that securing unshared projects should have happened a decade ago, but late is better than never.

Don't pretend that no one has had their project stolen because they didn't know unshared projects aren't actually private even though the Scratch website says "only you can see it".

Scratch is used primarily by children. Some unshared projects include pictures and videos of themselves, their friends, their family, and other personal information under the assumption that unshared projects are actually private.

We've always had the stance that if people want unshared projects to actually be private, they should talk to the Scratch Team, and perhaps enough people did that for the Scratch Team to listen. For why TurboWarp never blocked (and still doesn't block) loading unshared projects: [see below](#why-not-fix)

### Workarounds {#workarounds}

Our first priority is making sure that shared projects continue to work with minimal interruption. Anything else related to unshared projects would happen later if at all.

We know that there are a lot of old links and third-party embeds that rely on accessing unshared projects that will never be updated. We can't make promises that these links will continue to function without changes, but are looking into it.

Here's our current list of suggested workarounds:

1. Just share the project on Scratch. The Scratch community is really nice.
2. Save the project to your computer (File > Save to your computer) and load the downloaded file. Most Scratch-related tools support this.
3. Previously, we said there might end up being same ways to continue viewing unshared projects with "permission" from the project's creator. We aren't saying that won't or can't happen now, but absolutely do not rely on this until proven otherwise.

Some other workarounds for things like collaborations may or may not be being looked into. No promises can be made.

:::caution
We've seen a couple people suggest something like this so we want to make it clear: **ANY site other than scratch.mit.edu that asks you for your Scratch password is a SCAM. You WILL lose your entire account and all of your projects irrecoverably. Legitimate sites will NEVER ask you for your Scratch password. No exceptions.**
:::

The developers of TurboWarp and forkphorus want to make it clear the viewing unshared projects with these sites was always just a side-effect of how the Scratch API worked and not the intended primary use. Things like the compilers, addons, etc. are still the primary features and won't be going anywhere.

## Original page {#original}

:::info
This section will remain accurate until the changes are implemented.
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
