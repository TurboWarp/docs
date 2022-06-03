---
slug: /unshared-projects
sidebar_label: Unshared Projects
---

# Unshared projects will be actually private eventually

<!-- 
  I won't link these in the public website because there will be way too much spam if we do that, but here are relevant links:
  https://github.com/LLK/scratch-gui/pull/8269
  https://github.com/LLK/scratch-www/pull/6773
-->

**Updated June 1, 2022** - Loading unshared projects in TurboWarp, forkphorus, the packager, and other third-party site will no longer be possible at some point in the future due to upcoming changes to the Scratch API that will make unshared projects actually private.

We think this is a [good thing](#good-thing), but you may have to find [workarounds](#workarounds) depending on your workflow.

## June 1 Update {#june-1}

:::caution Update

<!-- https://scratch.mit.edu/discuss/topic/602417/?page=55#post-6356705 -->
A Scratch Team forum post confirms what we've been speculating for a while: these changes will make unshared projects actually private as they should've been from the start. This rest of this page has been updated to reflect this.

When the changes will happen remains unknown. We will not provide time estimates beyond "at some point in the future". Blind guesses won't help. Angrily venting about your disagreement on the forums also won't help.

There are [good reasons](#good-thing) for this change to be made.

Please direct people to this page instead of just paraphrasing to reduce misinformation.
:::

## What's actually happening {#whats-happening}

Scratch is changing how project loading works to use a "project token". For unshared projects, this token can only be accessed by the owner of the project.

Access to this token will be required to download a project, which will make it will be impossible to load an unshared project in TurboWarp, forkphorus, scratch-gui, or any other third-party site by knowing just the project ID. These changes will affect your own unshared projects even if you are signed into Scratch in the same browser.

## This is a good thing {#good-thing}

Securing unshared projects is a decade overdue.

Don't pretend that no one has had their project stolen because they didn't know unshared projects aren't actually private even though the Scratch website says "only you can see it". Many unshared projects include pictures and videos of children, their friends, their family, and other personal information under the assumption that unshared projects are actually private.

In most other large websites, "unshared" or "private" things actually being effectively public would be considered a critical security bug and would usually be eligible for a very large bug bounty. ([example](https://bugs.xdavidhu.me/google/2021/01/11/stealing-your-private-videos-one-frame-at-a-time/))

We've always had the stance that if people want unshared projects to actually be private, they should talk to the Scratch Team, and perhaps enough people did that for the Scratch Team to listen.

## Workarounds {#workarounds}

Our first priority is making sure that shared projects continue to work with minimal interruption. Anything else related to unshared projects will happen later if at all.

You should assume that existing links relying on viewing unshared projects, including embeds, will not work in the future without changes.

Here's our current list of suggested workarounds:

1. The best way to share a project with other people is to share it on the Scratch website. The Scratch community is really nice. This is what Scratch encourages you to do.
1. If you just want to test your project in a third-party site without sharing it, you can download the project to your computer (File > Save to your computer) and load the downloaded file. Most tools support this.
1. For embedding Scratch projects into other sites without sharing them on Scratch, use [TurboWarp Packager](https://packager.turbowarp.org/), [forkphorus packager](https://forkphorus.github.io/packager/), or [HTMLifier](https://sheeptester.github.io/htmlifier/) ([guide on embedding](/packager/embedding)). These could be an alternative to sharing your projects on Scratch if you find a place to upload the generated files.

More workarounds for things like collaborations may or may not be being looked into, but no promises can be made. Assume that nothing will happen. Scratch is 15 years old while TurboWarp is less than two years old. Collaborations happened just fine during the 13 years without TurboWarp and will continue just fine.

:::caution
We've seen a couple people suggesting this so we want to be clear: **ANY site other than scratch.mit.edu that asks you for your Scratch password is a SCAM. You WILL lose your entire account and all of your projects irrecoverably. Legitimate sites will NEVER ask you for your Scratch password. <span style={{textDecoration: 'underline'}}>No exceptions</span>.**
:::

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
