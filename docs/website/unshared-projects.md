---
slug: /unshared-projects
---

# Unshared Projects

You've probably noticed that TurboWarp, forkphorus, etc. can load unshared projects, and you might be concerned about that.

### This is a problem with the Scratch API that's been around for at least seven years. It's not a TurboWarp bug. {#not-a-bug}

Even the Scratch GUI development builds (maintained and controlled by the Scratch Team) can view unshared projects (https://llk.github.io/scratch-gui/develop/#1) which implies that the Scratch Team does not consider this an issue. As TurboWarp uses the exact same project loading code as Scratch GUI, it's also able to load unshared projects.

However, we want to make it clear that viewing unshared projects is not the intended use for TurboWarp. It only happens to be possible because of the Scratch API.

## If you don't want people to see your unshared projects {#prevention}

Don't share the project ID (the numbers in the project URL) with others. That includes links to your project and screenshots/videos that include your browser's URL bar.

If the project ID has already been leaked, and you don't want people to see the project, then save a copy of the project (File > Save as a copy) and delete everything from the original project. **Deleting a project through the My Stuff page (even emptying the trash) is not enough.** You must manually clear everything from the original project. If someone already downloaded the project to their computer before you did this, there's not much you can directly do about that.

This would be a good opportunity to download a backup of the project to your computer for safekeeping so that you don't have to learn the importance of backups the [hard way](https://ocular.jeffalo.net/search?q=project%20disappeared&sort=relevance).

Another alternative to keep your project safe would be to use the offline editor. We recommend [TurboWarp Desktop](https://desktop.turbowarp.org/).

## Couldn't TurboWarp fix it? {#why-not-fix}

Even if TurboWarp refused to load unshared projects, the root cause is the Scratch API. People would still be able to view unshared projects just as easily as before using the official Scratch GUI builds or [any other tool](https://www.google.com/search?hl=en&q=unshared%20project%20viewer%20scratch). Nothing would change.

This is a problem that can only be fixed by the Scratch Team.

## What is project ID 1? {#what-is-1}

Curious people have visited https://turbowarp.org/1 or https://llk.github.io/scratch-gui/develop/#1 and found a strange project. That's just what the Scratch API returns when you ask for the project with ID 1. Some story applies to all the other low project IDs. We don't know why these projects are what they are.

## The project is shared. Why am I seeing this link? {#project-was-shared}

This is normal if the project was shared very recently. It will probably fix itself within a few hours, otherwise let me know on [Scratch](https://scratch.mit.edu/users/GarboMuffin/#comments).
