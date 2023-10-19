---
slug: /url-parameters
hide_table_of_contents: true
---

# URL Parameters


:::note
## Only "hidden" URL parameters are listed here {#only-hidden-url-parameters-are-listed-here}
TurboWarp will automatically store settings such as turbo mode, 60 FPS, high quality pen, etc. in the URL, but some advanced options still need to be manually applied. This page only documents these advanced options.
:::


## Username {#username}

The `username` option controls the value of the username block.

https://turbowarp.org/443603478?username=ExampleUsername

## Cloud host {#cloud_host}

The `cloud_host` option lets you change the cloud variable server that TurboWarp will connect to, for example:

https://turbowarp.org/12785898?cloud_host=wss://clouddata.turbowarp.org

Inclusion of `ws://` or `wss://` is optional but recommended. `wss://clouddata.turbowarp.org` is the default cloud data server used by TurboWarp, so this example doesn't actually change anything. Insecure ws:// servers may not work because TurboWarp uses HTTPS.

It is not possible to use this to connect to Scratch's cloud variable server as it requires account credentials which TurboWarp can't support.

## Custom extensions {#extension}

The `extension` option loads a custom extension from a URL. See [Custom Extensions](/development/custom-extensions).

<!-- Commented due to possible removal -->
<!--
## `scale` {#scale}

Controls the maximum relative scale of the player when in fullscreen mode.

https://turbowarp.org/fullscreen?scale=2
-->

## Disable compiler {#nocompile}

The `nocompile` option turns off the compiler. You probably shouldn't enable this.

https://turbowarp.org/?nocompile

## Project URL {#project_url}

The `project_url` option tells TurboWarp to download project data from an arbitrary URL. Do not use together with a regular project ID.

https://turbowarp.org/?project_url=packager.turbowarp.org/example.sb3

https:// is implied if you don't include a protocol. http:// URLs generally will not work for security reasons. Note that the URL needs to be a direct download and must support CORS (`Access-Control-Allow-Origin: *`). [GitHub Pages](https://pages.github.com/) will do this automatically and is known to work well.
