---
hide_table_of_contents: true
---

# Introduction to custom extensions

Custom extensions are a way for you to add new blocks to TurboWarp using JavaScript.

In this tutorial, we will describe how to build custom extensions. The pages can be navigated using the sidebar or links at the bottom of each page. We assume that you read each page in full and do the exercises listed (if any) before going to the next page.

:::info
**We just rewrote this entire tutorial from the ground up.**

It uses a completely different structure and style. We hope it's easier to follow. There's a good chance there are some errors and omissions in this tutorial. [Let me know what you think](https://scratch.mit.edu/users/GarboMuffin/#comments). Thanks!
:::

When people refer to "extensions", there are a few things they could be referring to:

| |Can access Scratch internals|Can be loaded by URL|
|:-:|:-:|:-:|
|Core extensions (pen, translate, etc.)|✅|❌|
|Sandboxed custom extensions|❌|✅|
|Unsandboxed custom extensions|✅|✅|

The documentation in these segments refers only to custom extensions. While core extensions share many fundamentals, the process of developing them is significantly different. See [getting started](../getting-started) as a starting point for building core extensions.

We will discuss the difference between sandboxed and unsandboxed extensions at [a later time](./unsandboxed).

## Compatibility

Custom extensions are not compatible with Scratch. Projects made using custom extensions cannot be uploaded to the Scratch website. They can, however, be packaged using the [TurboWarp Packager](https://packager.turbowarp.org/).

## Prerequisites

Custom extension development requires knowledge of writing JavaScript. If you aren't familiar with JavaScript, please learn it first. Your favorite search engine can help you find places to learn. If you don't know things like the difference between `"1"` and `1`, developing extensions will be very difficult. As volunteers, we don't have a lot of time to spend helping you learn JavaScript -- sorry.

Extensions can be developed using either the website or desktop app.

We assume that you have access to the developer tools built in to your browser or the desktop app. Typically this is accessible through right click > inspect element. In the desktop app, it can be shown with Ctrl+Shift+I (Option+Command+I on macOS). Writing JavaScript without access to the developer tools is extremely painful and not something we can provide help for.

## Tutorial structure

This tutorial is follows a fundamentals-up approach. We're going to start with the most basic extensions imaginable that are effectively useless and gradually build up to things that are more useful.

We know that some of you will be eager to start sharing your extensions around, but **we ask that you read through this whole tutorial before publishing your extensions or submitting them to us** so that the extensions you share are actually useful.

## Prepare a development environment

In recent versions of TurboWarp, there are several ways to develop extensions.

### Files (simplest)

Recent versions of the TurboWarp website (desktop app not updated yet) have an option in the custom extension menu to load extensions either from local files or from copied and pasted JavaScript code. This will be the easiest way to develop extensions as it can be done on any computer with just a text editor.

### Local HTTP Server (recommended)

However, if possible, you should use a local HTTP server that lets TurboWarp fetch your extension from your computer. This speeds up the process because you don't have to select/paste the JavaScript code in TurboWarp every time you make changes. There are a lot of options for installing one of these. If you have Python installed, you already have one:

```bash
cd path/to/where/you/will/store/your/extensions
python3 -m http.server 8080
```

This starts a local HTTP server on http://localhost:8080/ in whatever folder you ran that command in.

We will [eventually](./better-development-server) introduce the official development server, but we recommend starting with the most primitive setup possible for now so that you understand what extensions *actually* are.

For now, you should use a port **other than 8000**. We will talk more about this later, but currently we want the extensions you write to run in the sandbox. Most static HTTP servers (such as Python's) do not set certain headers required for unsandboxed extensions, and they have a lot more extra responsibilities to worry about.

To test that your server works, create a file called `hello-world.js` and put any text in it. Make sure you're able to read the contents of the file in your browser by visiting a link like [http://localhost:8080/hello-world.js](http://localhost:8080/hello-world.js).

## Next steps

Next, let's [make your first extension](./hello-world).
