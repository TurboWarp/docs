---
slug: /packager/dynamic-stage-resize
hide_table_of_contents: true
---

# Dynamic stage resize

:::info
This page is about the [TurboWarp Packager](https://turbowarp.org/).
:::

Dynamic stage resize will change the size of the stage to match whatever aspect ratio and resolution it's being displayed at.

The stage isn't scaled; the [size](/custom-stage-size) actually changes. For example, if the user enables fullscreen on a 1920x1080 monitor, then the stage resizes to 1920x1080. If the user resizes the window to 1x1, it will also resize to that, so you should consider adding a minimum size check.

Almost no projects will handle this properly. To make your project compatible:

 - First, make it compatible with [custom stage size](/custom-stage-size) at all (see that page for information)
 - Then, change your stage size detection logic to run every frame and make sure to always update the positions of items (yes this is inefficient and strange, but it's plenty fast and the best choice for now)
