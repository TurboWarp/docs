---
slug: /unshared-projects
hide_table_of_contents: true
---

# Unshared projects are no longer visible

Unshared projects can no longer be opened on TurboWarp, forkphorus, and other third-party sites due to changes to the Scratch API.

This page answers most of the questions people have and lists some workarounds. Please read it in full before discussing these changes with other people to avoid misinformation.

:::warning
ANY website other than scratch.mit.edu that asks for your Scratch password is a SCAM, even if it supposedly lets you share your unshared projects with other users. You WILL have your account stolen and projects deleted. There are NO EXCEPTIONS to this rule.
:::

## What happened {#what-happened}

We want to be clear: These changes were made by the Scratch Team. TurboWarp is a third-party website that is not affiliated with the Scratch Team; we did not make these changes.

Downloading a project from the Scratch API now requires a "project token" that, for unshared projects, can only be accessed by the owner of the project. Even if you're signed in to your Scratch account in the same browser, TurboWarp can't access it. These tokens are temporary and expire after a few minutes, so the owner can't just provide a token once to keep it visible forever.

Unshared projects were always something that just happened to work and weren't the intended main use of TurboWarp. Things like the compiler and addons have always been the focus and will continue to work for shared projects, projects loaded from files, and the desktop app.

## Workarounds {#workarounds}

**For testing your own projects:** You can use the File > Save to your computer and File > Load from your computer menus in the Scratch editor to load your unshared Scratch projects in TurboWarp or upload projects made in TurboWarp to Scratch. Alternatively, many people have had success working on their projects primarily in TurboWarp either using the website or [desktop app](https://desktop.turbowarp.org/) and uploading their projects to Scratch when they're complete (please remember to make routine backups when doing this).

**For collaborations:** The best way to share a project with other people is to simply share it on the Scratch website. The Scratch community is really nice. This is what Scratch wants you to do. It's okay to share unfinished projects. Scratch is 15 years old while TurboWarp is two years old. Collaborations happened just fine during the 13 years without TurboWarp and will continue just fine.

**For embedding in other websites:** To embed unshared projects in other websites, either Share the project on Scratch or download the project to your computer with the File > Save to your computer menu in the Scratch editor, and use the [TurboWarp Packager](https://packager.turbowarp.org/) to convert this project to a standalone file that [can be embedded](/packager/embedding).

There may be ways to generate links for unshared or "unlisted" projects that Scratch's policies do not allow us to discuss on this page.

## This is a good thing {#good-thing}

Securing unshared projects is a decade overdue.

Don't pretend that no one has had their project stolen because they didn't know unshared projects aren't actually private even though the Scratch website says "only you can see it". Many unshared projects include pictures and videos of children, their friends, their family, and other personal information under the assumption that unshared projects are actually private.

In most other large websites, "unshared" or "private" things being effectively public would be considered a critical security bug and usually be eligible for a large bug bounty. For example, [YouTube paid a security researcher $5000](https://bugs.xdavidhu.me/google/2021/01/11/stealing-your-private-videos-one-frame-at-a-time/) for reporting a bug that allowed them to view low-resolution images from any private video.

We've always had the stance that if people want unshared projects to actually be private, they should talk to the Scratch Team. Perhaps enough people did that for the Scratch Team to listen.

<!-- It's impressive that Scratch wasn't sued into the ground for the countless privacy violations this has surely caused -->

## For developers {#developers}

This section is for people developing third-party Scratch-related tools.

The new procedure to download projects is to first fetch "project_token" field from `https://api.scratch.mit.edu/projects/ID` then use that to generate the URL `https://projects.scratch.mit.edu/ID?token=TOKEN`

If you're using JavaScript, here's some sample code to get you started. If your code runs in a web browser, you need to replace `https://api.scratch.mit.edu/projects/` with `https://trampoline.turbowarp.org/proxy/projects/` as Scratch doesn't let other websites directly access it from a browser (We make no guarantees about the uptime or service level of trampoline.turbowarp.org; use at your own risk). You may also be interested in [sb-downloader](https://github.com/forkphorus/sb-downloader) for a complete project downloader.

```js
const getProjectMetadata = async (projectId) => {
    // SEE ABOVE: If you're in a web browser, use https://trampoline.turbowarp.org/proxy/projects/ instead.
    const response = await fetch(`https://api.scratch.mit.edu/projects/${projectId}`);
    if (response.status === 404) {
        throw new Error('The project is unshared or does not exist');
    }
    if (!response.ok) {
        throw new Error(`HTTP error ${response.status} fetching project metadata`);
    }
    const json = await response.json();
    return json;
};

const getProjectData = async (projectId) => {
    const metadata = await getProjectMetadata(projectId);
    const token = metadata.project_token;
    const response = await fetch(`https://projects.scratch.mit.edu/${projectId}?token=${token}`);
    if (!response.ok) {
        throw new Error(`HTTP error ${response.status} fetching project data`);
    }
    const data = await response.arrayBuffer();
    return data;
};

getProjectData('60917032').then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});
```

We release this code segment under the [Unlicense](https://unlicense.org/).
