---
slug: /desktop/rich-presence
sidebar_position: 2
hide_table_of_contents: true
---

# Rich Presence

TurboWarp Desktop supports Rich Presence, which can display the name of the project you're working on and how long you've been working on it on your profile in a certain chat app.

import example from './rich-presence-example.png';
import settingsMenu from './rich-presence-settings-menu.png';

<p><img src={example} height={97} width={295} /></p>

We're not sure if we're allowed to name which app this works with here due to Scratch guidelines, so we'll just call it "Chat App".

## Enabling Rich Presence {#enable}

For privacy, Rich Presence is disabled by default. To enable it, open Desktop Settings through the Settings menu in the top left:

<p><img src={settingsMenu} height={596/2} width={632/2} /></p>

If the Desktop Settings button does not exist then you are using an old version; update to 1.12.0 or later. In the window that opens up, check the box by Enable Rich Presence. If the option is unavailable, see [supported platforms](#supported-platforms) at the bottom of this page.

You may also have to change some settings inside Chat App:

 - Enable User Settings > Activity Privacy > Share your detected activities with others.
 - For each server that you want to share your status with, right click on the server icon then enable Privacy Settings > Activity Status.

It may take up to 15 seconds for your status to appear, update, or disappear. If it still does not appear then see [supported platforms](#supported-platforms) below.

## Supported Platforms {#supported-platforms}

### Windows {#windows}

Rich Presence works in Windows regardless of how you installed TurboWarp Desktop or Chat App.

### macOS {#mac}

:::warning
Rich Presence will not work if TurboWarp Desktop is installed from the Mac App Store.
:::

### Linux {#linux}

For best results, install TurboWarp Desktop as a native app using the .deb package, Debian repository, Arch User Repository, AppImage, or tarball. TurboWarp Desktop installed as a Flatpak may require manual permission overrides. TurboWarp Desktop installed as a Snap does not work at all. See the table below for more details:

| | Chat App Native | Chat App Flatpak | Chat App Snap |
| :-: | :-: | :-: | :-: |
| **TurboWarp Desktop Native** | ✅ | ✅ | ✅ |
| **TurboWarp Desktop Flatpak** | See commands below | ✅ | See commands below |
| **TurboWarp Desktop Snap** | ❌ | ❌ | ❌ |

For the Flatpak version of TurboWarp Desktop, you may need to run these commands in a terminal and restart TurboWarp Desktop for Rich Presence to function:

```bash
# For Chat App Native
flatpak override org.turbowarp.TurboWarp --user --filesystem=xdg-run/$(printf "\x64\x69\x73\x63\x6f\x72\x64")-ipc-{0..9}
# For Chat App Snap
flatpak override org.turbowarp.TurboWarp --user --filesystem=xdg-run/snap.$(printf "\x64\x69\x73\x63\x6f\x72\x64"):create
```

There is still a small caveat: Rich Presence may not work if TurboWarp Desktop is started before Chat App.

These permissions can be later revoked with:

```bash
flatpak override org.turbowarp.TurboWarp --user --reset
```

### Chat App modifications {#mods}

If you use a modified or third-party version of Chat App, refer to that mod's documentation for how to enable RPC.
