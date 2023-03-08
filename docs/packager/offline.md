---
slug: /packager/offline
hide_table_of_contents: true
sidebar_label: Offline Packager
---

# Offline Packager

There are ways to use the [TurboWarp Packager](https://packager.turbowarp.org/) offline which can be useful in various circumstances (for example, perhaps your school blocks turbowarp.org).

We aim to update the offline packager about once a month.

Large assets such as Electron, NW.js, or WKWebView executables are *not* included in the offline packager and will be downloaded separately as needed. The packager will try to cache these files offline after you download them the first time, so they should only have to be downloaded once. Usually these downloads will still work even if your school blocks turbowarp.org.

## Desktop App {#desktop}

You can download [TurboWarp Desktop](https://desktop.turbowarp.org/), which includes an offline version of the packager. You can access it by pressing the "(?)" button in the top right corner then select the packager.

The built-in packager will automatically load the project you have open in the editor.

## Standalone HTML {#html}

If you can't or don't want to download the desktop app, you can download the standalone HTML versions from GitHub instead. Visit https://github.com/TurboWarp/packager/releases and download "turbowarp-packager-standalone-x.x.x.html" under "Assets" from the top release. You can simply open the HTML file in your browser.

The HTML file does not include any update checker. You will have to handle check for and handle updates on your own.

## Web App {#pwa}

The https://packager.turbowarp.org/ is a web app that tries to function offline after loading it once. This is still experimental and we do not recommend relying on this.
