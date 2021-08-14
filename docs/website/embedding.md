---
slug: /embedding
hide_table_of_contents: true
---

# Embedding

TurboWarp can be embedded with a standard iframe:

```html
<iframe src="https://turbowarp.org/414716080/embed" width="499" height="416" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>
```

Replace `414716080` with the ID of your project. You can change the width and height of the iframe and the player will automatically resize to fit (499x416 will result in the stage rendering at an undistorted 480x360).

## URL parameters {#url-parameters}

All [standard URL Parameters](url-parameters.md) are still available. You can use these to control usernames and other things.

There are also some special values only available in embeds:

### Autoplay {#autoplay}

Embeds also support the `autoplay` parameter, which will automatically hit the green flag when the project loads. For example: https://turbowarp.org/15832807/embed?autoplay

Note that sound blocks may not work until the user interacts with the project (for example, by clicking). This is a restriction imposed by browsers. There is nothing TurboWarp can do to work around this.

## Addons {#addons}

By default, embeds have no addons enabled. This can be overridden with the `addons` parameter, which is a comma separated list of addons to enable. For example: https://turbowarp.org/15832807/embed?addons=pause,gamepad,mute-project

Useful addons and their IDs:

 - "Pause button" is `pause`
 - "Muted project player mode" is `mute-project`
 - "Remove curved stage border" `remove-curved-stage-border`
 - "File drag and drop" is `drag-drop`
 - "Gamepad support" is `gamepad` (settings modal will work poorly in small embeds and browsers seem to be locking down gamepad API access, we will look into that more in the future)

Other addons will have no effect on the embed.

## Security considerations {#security}

If you use user-supplied information to generate embed links, please make sure to sanitize properties so that users cannot specify arbitrary parameters, as some parameters can result in unexpected behaviors and possibly **remote code execution**.

## License {#license}

TurboWarp is licensed under the [GPLv3.0](https://github.com/TurboWarp/scratch-gui/blob/develop/LICENSE). We believe that an `<iframe>` of a GPLv3.0 work doesn't create a derivative work under the GPLv3.0, rather, it creates an "aggregate work" (which is not subject to the same requirements as derivative works). However, we are not lawyers and this is not legal advice. Talk to a real lawyer for more information.

## Need more control? {#packager}

Use the [TurboWarp Packager](https://packager.turbowarp.org/) for more control over the loading screen, accent colors, controls, and more.
