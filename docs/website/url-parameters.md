# URL Parameters


:::caution
## Only "hidden" URL parameters are listed here
TurboWarp will automatically store settings such as turbo mode, 60 FPS, high quality pen, etc. in the URL. Some advanced options still need to be manually applied. This page only documents these advanced options.
:::


## `username`

The `username` option controls the initial value of the username block.

https://turbowarp.org/443603478?username=ExampleUsername

## `cloud_host`

The `cloud_host` option lets you change the cloud variable server that TurboWarp will connect to, for example:

https://turbowarp.org/12785898?cloud_host=wss://clouddata.turbowarp.org

Inclusion of `ws://` or `wss://` is optional but recommended. `wss://clouddata.turbowarp.org` is the default cloud data server used by TurboWarp, so this example doesn't actually change anything. Keep in mind that because TurboWarp uses HTTPS, insecure ws:// servers may not work. (localhost is generally exempt from this rule) Set this to an empty value to disable cloud variables entirely.

It is not possible to use this to connect to Scratch's cloud variable server as their server requires password authentication, which TurboWarp will never ask for.

## `extension`

**Experimental, subject to change. Do not rely upon.**

Load a Scratch extension from a remote URL.

https://turbowarp.org/editor?extension=https://extensions.turbowarp.org/fetch.js

## `scale`

Controls the maximum relative scale of the player when in fullscreen mode.

https://turbowarp.org/fullscreen?scale=2

## `nocompile`

It turns off the compiler. You probably shouldn't enable this.

https://turbowarp.org/?nocompile

## `project_url`

If specified, TurboWarp will download project data from this URL. Do not use together with a regular project ID.

https://turbowarp.org/?project_url=projects.scratch.mit.edu/10128407

This works with any URL, not just projects.scratch.mit.edu. https:// is optional, but it is recommended to not put it because certain browser extensions can interpret that in weird ways. I would recommend using a service like [GitHub Pages](https://pages.github.com/) to host your project. Keep in mind that because TurboWarp uses HTTPS, insecure http:// URLs may not work. (localhost is generally exempt from this rule) 

Note: The URL needs to be a direct download and support CORS (Access-Control-Allow-Origin: *). Many hosts don't support CORS, in which case you can use something like [cors-everywhere](https://github.com/Rob--W/cors-anywhere) to proxy the download.
