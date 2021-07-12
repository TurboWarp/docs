# Advanced Settings

## High Quality Pen

High Quality Pen makes the pen change resolution to match the size it's displayed at rather than being stuck at 480x360.

<table>
<tr>
<th>High Quality Pen Off</th>
<th>High Quality Pen On</th>
</tr>
<tr>
<td><img src="https://user-images.githubusercontent.com/33787854/100396272-314f0300-300a-11eb-851c-7a982a2fb0a3.png" height="457" width="457" height="425" /></td>
<td><img src="https://user-images.githubusercontent.com/33787854/100396476-c2be7500-300a-11eb-837b-a12050c243c9.png" height="457" width="457" height="425" /></td>
</tr>
</table>

Project pictured: https://scratch.mit.edu/projects/437594584/ with seed 803258.

Note that this may affect performance and it may make some projects (especially those use tiled stamps or precise pen) look worse.

## Interpolation

Interpolation is an experimental feature that tries to make project motion smoother without making projects run faster than expected. (If you've ever tried to play a game at 60 FPS and realized it was running at double speed, that's the problem interpolation tries to solve)

Pen cannot be interpolated and you may see some occasional graphical glitches.

Note: This feature may drastically reduce performance.

## Infinite Clones

It turns off the clone limit.

## Warp Timer

(Previously called "Stuck Checking")

Warp timer makes scripts check to see if they are stuck in a long or infinite loop, and run at a low framerate (~2 fps) instead of getting completely stuck until the loop completes (if the loop ever finishes). The easiest way to demonstrate this is with a project like https://turbowarp.org/446742201?stuck. Compare what happens with the warp timer enabled and disabled.

This has a performance impact (up to 3x slower in some cases), which is why it's not enabled by default.

## Disable Compiler

This turns off the TurboWarp compiler. This is only useful when debugging bugs in the compiler or when using the editor to create a project.
