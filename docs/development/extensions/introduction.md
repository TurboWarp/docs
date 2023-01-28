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

The documentation in these segments refer only to custom extensions. While core extensions have many of the same fundamental ideas, the process of developing them is radically different. See [getting started](../getting-started) as a starting point for building core extensions.

We will discuss the difference between sandboxed and unsandboxed extensions at a later time.

## Prerequisites

Custom extension development requires knowledge of JavaScript and currently requires access to a terminal. While there are ways to develop custom extensions on Chromebooks, note that compatibility with these workarounds is not currently a priority for us.

If you're not familiar with these, we encourage you to learn them first (your favorite search engine can help), and then come back to this later when you are familiar with concepts such as classes, and know what the difference between `"1"` and `1` is. As volunteers, we don't have a lot of time to spend helping you learn JavaScript -- sorry.

You can use either the web app or the desktop app. We assume you have access to the developer tools in to your browser. Typically this is Right click > Inspect element. In the desktop app it can be shown with Ctrl+Shift+I or on macOS, Option+Command+I. Writing JavaScript without access to the developer tools is extremely painful and not something we can provide help for.

## Development environment

Custom extension development requires a place for TurboWarp to be able to fetch your extension from. Most often this is in the form of a local static HTTP server. There are a lot of options for installing one of these. However, if you have Python installed, you already have one:

```bash
cd path/to/where/you/will/store/your/extensions
python3 -m http.server 8080
```

This will start a local HTTP server on http://localhost:8080/ in whatever folder you ran that command in.

The port that your server runs on does matter. For now, we suggest using a part *other* than 8000 if possible as this is reserved for unsandboxed extensions. We will talk about this more later, but the short version is that unsandboxed extensions have some extra responsibilities that we won't be talking about until later, so use another port for now.

Create a file called `hello-world.js` and put any text in it (we will discuss what to put in it later). Make sure you're able to read the contents of the file in your browser by visiting a link like http://localhost:8080/hello-world.js.

## Next steps

Next, let's [actually make an extension](./hello-world).
