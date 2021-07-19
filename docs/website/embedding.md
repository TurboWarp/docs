---
slug: /embedding
hide_table_of_contents: true
---

# Embedding

Embedding TurboWarp is very similar to how you embed Scratch 3:

```html
<iframe src="https://turbowarp.org/414716080/embed" width="499" height="416" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>
```

Replace `414716080` with the ID of your project. The dimensions above of 499x416 will result in the stage itself being rendered without distortion at the default stage size (480x360), but you can change it to anything and the player will automatically resize to fit.

## URL parameters {#url-parameters}

All [standard URL Parameters](url-parameters.md) are still available. You can use these to control usernames and other things.

There are also some special values only available in embeds:

### Autoplay {#autoplay}

Embeds also support the `autoplay` parameter, which will automatically hit the green flag when the project loads. For example: https://turbowarp.org/15832807/embed?autoplay

Note that sound blocks may not work until the user interacts with the project (for example, by clicking). This is a restriction imposed by browsers. There is nothing TurboWarp can do to work around this.

## Security considerations {#security}

If you use user-supplied information to generate embed links, please make sure to sanitize properties so that users cannot specify arbitrary parameters, as some parameters can result in unexpected behaviors and possibly **remote code execution**.

## License {#license}

TurboWarp is licensed under the [GPLv3.0](https://github.com/TurboWarp/scratch-gui/blob/develop/LICENSE). We believe that an `<iframe>` of a GPLv3.0 work doesn't create a derivative work under the GPLv3.0, rather, it creates an "aggregate work" (which is not subject to the same requirements as derivative works). However, we are not lawyers and this is not legal advice. Talk to a real lawyer for more information.

## Need more control? {#packager}

Use the [TurboWarp Packager](https://packager.turbowarp.org/) for more control over the loading screen, accent colors, controls, and more.
