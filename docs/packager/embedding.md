---
slug: /packager/embedding
hide_table_of_contents: true
sidebar_label: Embedding
---

# Embedding the packager

:::info
This page is about the [TurboWarp Packager](https://turbowarp.org/). If you just want an easy way to embed a Scratch project into a website, see [the other embedding page](/embedding).
:::

You can embed the output of the TurboWarp Packager into another website:

```html
<iframe src="path_to_project.html" width="480" height="360" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>
```

Depending on the environment you used, where you stored the project, and what you named it, the `src` attribute will vary.

 - If you used "Plain HTML", it's just the path to the HTML file.
 - If you used "Zip", it's the path to the file `index.html` contained within the extracted zip.

If you have controls enabled, add 48 to the value of `height` to avoid the stage getting shrunk.
