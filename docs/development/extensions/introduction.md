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

The documentation in these segments refer only to custom extensions. While core extensions have many of the same fundamental ideas, the process of developing them is significantly different. See [getting started](../getting-started) as a starting point for building core extensions.

We will discuss the difference between sandboxed and unsandboxed extensions at a later time.

## Compatibility

Custom extensions are not compatible with Scratch. Projects made using custom extensions cannot be uploaded to the Scratch website. They can, however, be packaged using the [TurboWarp Packager](https://packager.turbowarp.org/).

## Prerequisites

Custom extension development requires knowledge of JavaScript and currently requires access to a terminal. While there are ways to develop custom extensions on Chromebooks, note that compatibility with these workarounds is not currently a priority for us.

If you're not familiar with these, we encourage you to learn them first (your favorite search engine can help), and then come back to this later when you are familiar with concepts such as classes, and know what the difference between `"1"` and `1` is. As volunteers, we don't have a lot of time to spend helping you learn JavaScript -- sorry.

You can use either the web app or the desktop app. We assume you have access to the developer tools in to your browser. Typically this is Right click > Inspect element. In the desktop app it can be shown with Ctrl+Shift+I or on macOS, Option+Command+I. Writing JavaScript without access to the developer tools is extremely painful and not something we can provide help for.

## Tutorial structure

This tutorial is follows a "fundamentals up" order. We're going to start with the most basic extensions imaginable, ones that are effectively useless, and gradually build up to things that are more useful.

We know that some of you will be eager to start sharing your extensions around, but **we ask that you read through this whole tutorial before publishing your extensions or submitting them to us** so that the extensions you share are actually useful.

## Prepare a development environment

Custom extension development requires a place for TurboWarp to be able to fetch your extension from. Most often this is in the form of a local static HTTP server. There are a lot of options for installing one of these. However, if you have Python installed, you already have one:

```bash
cd path/to/where/you/will/store/your/extensions
python3 -m http.server 8080
```

This will start a local HTTP server on http://localhost:8080/ in whatever folder you ran that command in.

We will eventually introduce the official development server, but given that this is a fundamentals-up tutorial, we will start using the most primitive server possible.

For now, you should use a part **other than 8000**. We will talk more about this later, but for now we want the extensions you write to run in the sandbox. We will talk about what this means later.

Create a file called `hello-world.js` and put any text in it (we will discuss what to put in it later). Make sure you're able to read the contents of the file in your browser by visiting a link like [http://localhost:8080/hello-world.js](http://localhost:8080/hello-world.js).

## Next steps

Next, let's [actually make an extension](./hello-world).
