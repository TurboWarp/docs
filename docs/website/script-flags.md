# Script Flags

:::caution
Honestly I have no idea if these even work anymore
:::

TurboWarp lets you control how your scripts are compiled through "Script Flags". These are comments attached to the hat block of a script that start with `tw`.

This is what they look like:

![tw stuck](https://user-images.githubusercontent.com/33787854/91641365-6d61d000-e9e9-11ea-820e-5a53b2d5d76a.png)

 - The comment does not need to be on the first line, but it does need to be on its *own* line. That means pressing enter to push it onto its own line, not just relying on the comment to wrap text around (if unsure, resize the comment a few times and make sure it always stays on its own line)
 - The comment *must* be attached to the hat block of a script, for example "when green flag clicked" or "define procedure". Adding it to the first block in the script or any other block in the script will not work.
 - The comment is case sensitive.

## `tw stuck`

Adding this comment to a script will make it use Warp Timer/Stuck Checking regardless of whether the stuck checking global option is enabled or not.

## `tw nocompile`

Adding this comment to a script will cause it to not be compiled.

When one procedure used by a script cannot be compiled, the entire script will not be compiled.

This is intended as a debugging tool. **If you use this to workaround a compiler bug, please make sure to report the bug so it can get fixed.**