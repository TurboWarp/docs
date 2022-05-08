---
slug: /unshared-projects
hide_table_of_contents: true
---

# Unshared Projects

:::info
**May 7, 2022 - The latest code changes to Scratch indicate the Scratch Team is finally making unshared projects inaccessible to anyone who isn't the owner of the project.**

We aren't sure when the changes will happen or their exact impact, but we expect that unshared projects will no longer be viewable or embeddable in TurboWarp, the packager, forkphorus, or any other third-party websites in the future. This includes your own unshared projects even if you're logged into Scratch in the same browser.

If you are relying on these tools to view unshared projects, we suggest you share any relevant projects or update links as soon as possible.

You will still be able to use the File > Save to your computer and File > Load from your computer options to manually load projects without sharing them on Scratch. Most third-party Scratch tools have options to load these files instead of a project ID/URL.

If you think that making projects accessible only to specific people is important to you, let the Scratch Team know. They are the only people that can implement such a feature. Third-party developers are unable to do anything about this without completely compromising the security of your Scratch account.

Viewing unshared projects in TurboWarp has always been just a result of how the Scratch API worked, not the intended primary use. Other TurboWarp features such as the compiler, addons, etc. will not be affected.

The information below still applies until the changes go into effect.

This page will be updated as more is learned over time.
:::

## Why doesn't TurboWarp refuse to load unshared projects? {#why-not-fix}

Even if TurboWarp refused to load unshared projects, the root cause is still the Scratch API. Unshared projects could still be easily viewed using the official Scratch development builds or many other tools. TurboWarp is fully open source, so someone could easily make their own version without the code to check if a project is unshared. Unshared projects would not be any safer.

This is a problem that can only be fixed by the Scratch Team implementing access control for projects.scratch.mit.edu (where project data is downloaded from) as they've already done for api.scratch.mit.edu (where project titles and descriptions are loaded from). If you think this is important, let the Scratch Team know.

## How to protect your unshared projects {#prevention}

Don't share the project ID (the numbers in the URL to your project) with others. That includes links to your project and screenshots/videos that include your browser's URL bar.

If the project ID has already been leaked, and you don't want people to see the project, DO NOT delete it through the My Stuff page as that won't actually delete the project data. Instead, you should:

1. Save a copy of the project through the File > Save as a copy menu.
2. Wait for the copy to finish saving. Refresh the copied project to make sure that it saved correctly.
3. Go back to the original project and manually delete everything from the original project. Manually remove all sprites, sounds, costumes, and scripts that you don't want other people to find, then save the project again to overwrite the project. Deleting a project through the My Stuff page, even emptying the trash, is not enough because Scratch won't actually delete the project data.
4. Do all future work on the copy you created in step 1.

If someone already downloaded the project to their computer before you did this, there's not much you can directly do about that. If someone has stolen one of your unshared projects and released it as-if they made it, contact the Scratch Team.

Another way to keep your project safe would be to use an offline editor such as [Scratch Desktop](https://scratch.mit.edu/download) or [TurboWarp Desktop](https://desktop.turbowarp.org/).

This is also a good opportunity to save a backup of your project to somewhere safe on your computer so that you don't have to learn the importance of backups the [hard way](https://ocular.jeffalo.net/search?q=project%20disappeared&sort=relevance).

## What is project ID 1? {#what-is-1}

Curious people have visited https://turbowarp.org/1 or https://llk.github.io/scratch-gui/develop/#1 and found a strange project. That's just what the Scratch API returns when you ask for the project with ID 1.
