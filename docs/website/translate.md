---
slug: /translate
hide_table_of_contents: true
---

# Help Translate TurboWarp

We're looking for people to help translate TurboWarp into languages other than English. If that interests you, read on.

Create a new discussion if you have questions following this guide: https://github.com/TurboWarp/scratch-gui/discussions

## Joining the translation team {#joining-the-translation-team}

### Requirements {#requirements}

 - You are expected to read this entire document.
 - You must be fluent in both English and another language.
 - We want translations written by humans, not by machines. That means **NO Google Translate** or other machine translators.
 - Requests to translate new languages that aren't already supported by Scratch will be rejected.
 - The initial translation for new languages may take a while but future updates will be very quick. Please check occasionally to translate any newly added strings.
 - This won't be a large time commitment. Don't lose sleep over this. We're all volunteers.

### Request to join {#request-to-join}
 
 - Go to [our Transifex page](https://www.transifex.com/turbowarp/turbowarp/), and click on the purple "Join this project" button.
 - You'll probably have to create a Transifex account. Enter your email, a new password, then Sign Up.
 - When asked for your name, enter your username as your name and surname instead of your real name. For "department" and "job title", select "localization" and "individual contributor".
 - On then next step, select "join an existing project".
 - Choose the language(s) you want to translate into.

The request will be accepted within a few days.

If the request is rejected, that most likely means that Scratch (and by extension, TurboWarp) does not support that language.

## Writing translations {#writing-translations}

Find your language on https://www.transifex.com/turbowarp/turbowarp/dashboard/ and click the Translate button.

Read https://docs.transifex.com/translation/translating-with-the-web-editor to learn how to use the Transifex translator.

Translations are pulled from Transifex periodically.

Our translations are broken up into a different resource for each subproject:

 - `gui.json` is for the [website and editor](https://turbowarp.org). This is the most important file to translate.
 - `desktop.json` is for [the desktop app](https://desktop.turbowarp.org/).
 - `desktop-web.json` is for [the desktop app's website](https://desktop.turbowarp.org/).
 - `addons.json` is for the [addon settings page](https://turbowarp.org/addons) (not the addons themselves).
 - Translations for the addons themselves are maintained externally. Due to Scratch's policy on browser extensions, we will not link that page here, sorry.
 - `packager.json` is for [the packager](https://packager.turbowarp.org/).
 - `store-listings.yaml` is for the desktop app's listings in places like the [Microsoft Store](https://apps.microsoft.com/store/detail/9P4DPZGV5ZKL)
