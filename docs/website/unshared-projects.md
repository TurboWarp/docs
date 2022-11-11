---
slug: /unshared-projects
hide_table_of_contents: true
---

# Unshared projects are no longer visible

**Updated November 10, 2022.** Unshared projects are no longer visible on TurboWarp, forkphorus, and other third-party sites due to changes to the Scratch API.

You've had nearly 6 months notice to update your workflows, so hopefully you've done so by now.

*This change happened at a bad time for us. This page will be updated quite a bit over the next few days.*

## What happened {#what-happened}

Downloading a project from the Scratch API now requires a "project token" that, for unshared projects, can only be accessed by the owner of the project. Even if you're signed in to your Scratch account in the same browser, TurboWarp can't access it. These tokens are temporary and expire after a few minutes, so the owner can't just provide the token to keep is visible forever.

## Workarounds {#workarounds}

**For testing your own projects:** You can use the File > Save to your computer and File > Load from your computer menus in the Scratch editor to load your unshared Scratch projects in TurboWarp or upload projects made in TurboWarp to Scratch. Alternatively, many people have had success working on their projects primary in TurboWarp either using the website or [desktop app](https://desktop.turbowarp.org/).

**For collaborations:** The best way to share a project with other people is to share it on the Scratch website. The Scratch community is really nice. This is what Scratch encourages you to do. Scratch is 15 years old while TurboWarp is two years old. Collaborations happened just fine during the 13 years without TurboWarp and will continue just fine.

**For embedding in other websites:** To embed unshared projects in other websites, download the project to your computer with the File > Save to your computer menu in the Scratch editor, and use the [TurboWarp Packager](https://packager.turbowarp.org/) to convert this project to a standalone file that [can be embedded](/packager/embedding).

There is a way to generate a link that include a temporary project token that will work for a few minutes, but we can't mention it here unfortunately.

We might be looking into some more workarounds. If we are, it might be a while before you find out.

## This is a good thing {#good-thing}

Securing unshared projects is a decade overdue.

Don't pretend that no one has had their project stolen because they didn't know unshared projects aren't actually private even though the Scratch website says "only you can see it". Many unshared projects include pictures and videos of children, their friends, their family, and other personal information under the assumption that unshared projects are actually private.

In most other large websites, "unshared" or "private" things actually being effectively public would be considered a critical security bug and would usually be eligible for a very large bug bounty. ([example](https://bugs.xdavidhu.me/google/2021/01/11/stealing-your-private-videos-one-frame-at-a-time/))

We've always had the stance that if people want unshared projects to actually be private, they should talk to the Scratch Team, and perhaps enough people did that for the Scratch Team to listen.
