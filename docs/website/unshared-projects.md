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

**Updated May 19, 2022** - The future of loading unshared projects in TurboWarp, forkphorus, the packager, and other third-party sites is *unknown* due to upcoming Scratch API changes that *may* happen at an *unknown* date in the future.

### May 19 {#may-19}

<!-- Special developer commentary available in the code comments! -->

Some clarifications and updates:

 - The developer of TurboWarp thinks that securing unshared projects should have happened a decade ago, but late is better than never. <!-- I am glad to see this finally happening. -->
    - Don't pretend that no one has had their project stolen because they didn't know unshared projects aren't actually private even though the Scratch website says "only you can see it".
    - Scratch is used primarily by children. Some unshared projects include pictures and videos of themselves, their friends, their family, and any other personal information under the assumption that unshared projects are actually private. The privacy of anyone, and especially children, is very important.
    - For why TurboWarp never blocked loading unshared projects: [see below](#why-not-fix)
 - The developers of TurboWarp have no control over what the Scratch Team does to the Scratch API. These changes are being made by the Scratch Team, not by TurboWarp.
 - TurboWarp's primary purpose has never been to view unshared projects. <!-- Around 38% of unique projects loaded in TurboWarp are unshared, if you were curious. That's a lot, but not a majority. -->
 - The developer of TurboWarp commits to making sure shared projects will ALWAYS be visible in TurboWarp and forkphorus regardless of any Scratch API changes. <!-- Yes, including the likely mandatory token requirement. --> No promises can be made for unshared projects.
 - The developer of TurboWarp is looking into solutions for things such as collaborations, but makes no promises.
 - The API changes have not yet been implemented, so you can still view unshared projects for the time being. We still don't know when the API changes will actually happen.
 - When the API changes finally happen, it's possible TurboWarp and other mods will be unable to load any projects for a short duration until changes can be implemented. <!-- This has to due to with that likely mandatory token requirement -->
 <!-- - Any projects that seek to archive *and distribute* all Scratch projects before the API changes happen are almost certainly violating a very large amount of copyright law and are holding themselves liable to be sued into the ground, ignoring the large cost in storing so much data in the first place. The TurboWarp project does not seek to violate copyright laws. -->

### May 10 {#may-10}

We want to make it clear: We know very little solid information about what's going to change. We can only speculate based on a couple bits of published code changes.

Scratch is changing how project loading works to use a token that only the author of the project can access when the project is unshared. We can't think of any other reason for this token being added except to restrict access to anyone that isn't the owner of the project. Assuming this is the case, it would become impossible to load an unshared project in TurboWarp, forkphorus, scratch-gui, or any other third-party site just by knowing its ID. These changes would also affect your own unshared projects even if you are signed into Scratch in the same browser.

If the owner of the project somehow shares this token in additon to the project ID, it might be possible to continue viewing unshared projects. We don't know whether that will be viable yet or how that process would work. Even if it is *technically* possible we can't guarantee we would implement it if it's too complex or unsafe.

We also don't know when or even *if* the changes will be implemented. It could be next week, next month, next year, or never for all we know. We can say with some certainty that nothing will be changing in the immediate future. You can keep doing what you're doing for now, but be aware that your workflow may be forced to change eventually.

There are a lot of very valid reasons to make unshared projects more secure. Don't pretend that no one has had their project stolen because they didn't know that unshared projects aren't actually private. In any other website a bug that made "private" or "deleted" projects effectively public would be treated with extremely high severity.

Regardless of the change, you can always use the File > Save to your computer and File > Load from your computer options to manually load projects without sharing them on Scratch. Most third-party Scratch tools have an option to load these files instead of a project ID/URL. This is often a better way to do it because it won't have to download all the assets again.

We know that there are a lot of old links and third-party embeds that rely on accessing unshared projects that will never be updated. We're looking into ways to mitigate the impact of the API changes on these.

The developers of TurboWarp and forkphorus want to make it clear the viewing unshared projects with these sites was always just a side-effect of how the Scratch API worked and not the intended primary use. Things like the compilers, addons, etc. are still the primary features and won't be going anywhere.

<!-- Depending on how the change is implemented, it's possible that third-party sites may temporarily be unable to load *any* projects for a short duration until some code is updated to accommodate the changes. -->

This page will be updated as more is learned over time.

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
