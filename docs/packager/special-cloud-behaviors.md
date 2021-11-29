---
slug: /packager/special-cloud-behaviors
hide_table_of_contents: true
---

# Special cloud behaviors

:::info
This page is about the [TurboWarp Packager](https://turbowarp.org/).
:::

This option changes the behavior of specifically named cloud variables to unlock new compatibilities for your project. This is based on a [similar feature in HTMLifier](https://github.com/SheepTester/htmlifier/wiki/Special-cloud-behaviours).

To make these, just create a cloud variable as you normally would but give them the specific name found below. For example, to use the `☁ url` variable, create a variable named `url` and mark it as a cloud variable.

Enabling special cloud behaviors will override any other settings for these variables, so a variable like `☁ username` will never be stored locally or synced with other users.

## ☁ url {#url}

The value of `☁ url` will be set to the page's current URL. Changing the value of `☁ url` does nothing.

## ☁ redirect {#redirect}

When the value of `☁ redirect` is set to a URL, the current tab will navigate to that URL.

## ☁ redirect {#redirect}

When the value of `☁ open link` is set to a URL, the project will attempt to open a new tab with that URL open. Note that this isn't always reliable due to the popup blockers built in to most browsers.

## ☁ username {#username}

When the value of `☁ username` is changed, the value of the `username` block in the sensing category will change.

## Further information and discussion {#further-information}

See https://github.com/TurboWarp/packager/issues/48
