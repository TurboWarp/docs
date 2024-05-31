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

Rich Presence will not work if TurboWarp Desktop was installed from the Mac App Store.

### Linux {#linux}

If TurboWarp Desktop was installed as a native app (Debian package/repository, Arch User Repository, AppImage, or extracted tarball) then it will always work. If TurboWarp Desktop was installed using Flatpak then Chat App must also be installed using Flatpak. This table should help clarify:

| | Chat App Native | Chat App Flatpak | Chat App Snap |
| :-: | :-: | :-: | :-: |
| **TurboWarp Desktop Native** | ✅ | ✅ | ✅ |
| **TurboWarp Desktop Flatpak** | ❌ | ✅ | ❌ |
| **TurboWarp Desktop Snap** | ❌ | ❌ | ❌ |

You can check how you installed TurboWarp Desktop by pressing the ? button in the top right corner, opening the About menu, then looking for the Platform section of the Debug Info line. A native installation will be just `linux` while the Flatpak version will show `linux-flatpak` and the Snap version will show `linux-snap`.

### Chat App modifications {#mods}

If you use a modified or third-party version of Chat App, refer to that mod's documentation for how to enable RPC.
