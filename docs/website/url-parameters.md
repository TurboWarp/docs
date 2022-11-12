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

https://turbowarp.org/?project_url=projects.scratch.mit.edu/10128407

This works with any URL that supports CORS, not just projects.scratch.mit.edu. https:// is optional, but it is recommended to not put it for brevity. http:// URLs generally will generally not work for security reasons. Note that the URL needs to be a direct download and must support CORS (`Access-Control-Allow-Origin: *`). [GitHub Pages](https://pages.github.com/) will do this automatically and is known to work well.

## Project token {#token}

The `token` option tells TurboWarp what it should use as the project token when it fetches a project from Scratch. This can allow users to work around the [unshared projects changes](unshared-projects).

Finding the project token either requires running JavaScript or installing a browser extension, we don't think we can talk about it here unfortunately. We also want to be clear that project tokens are not session tokens. Project tokens are not stored as cookies. Please do not send your session tokens to us.

Note that project tokens expire after around 300 seconds, so links that use this feature should be considered temporary. When sharing a project with a friend, this might be enough, but if you need the link to last longer, you will have to find another option (Remember: File > Save to your computer and File > Load from your computer always work).

Some may be uncomfortable putting the project token in the URL because it will be sent to TurboWarp's servers. We do not log project tokens specified using a URL parameter. If this promise isn't enough for you, you can also put the token in the fragment or hash part of the URL which won't be sent to our server. For example: `https://turbowarp.org/1#?token=1234567_abcdef...`. Note that some apps remove the fragment part of URLs you share which would break the link.
