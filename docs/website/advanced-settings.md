---
slug: /advanced-settings
---


# Advanced Settings

## High Quality Pen {#high-quality-pen}

High Quality Pen makes the pen change resolution to match the size it's displayed at rather than being stuck at 480x360.

<table>
  <tbody>
    <tr>
      <th>High Quality Pen Off</th>
      <th>High Quality Pen On</th>
    </tr>
    <tr>
      <td><img src={require('./assets/hqp-off.png').default} height="457" width="457" height="425" /></td>
      <td><img src={require('./assets/hqp-on.png').default} height="457" width="457" height="425" /></td>
    </tr>
  </tbody>
</table>

Project pictured: https://scratch.mit.edu/projects/437594584/ with seed 803258.

Note that this may affect performance and it may make some projects (especially those use tiled stamps or precise pen) look worse.

## Interpolation {#interpolation}

Interpolation is an experimental feature that tries to make project motion smoother without making projects run faster than expected. (If you've ever tried to play a game at 60 FPS and realized it was running at double speed, that's the problem interpolation tries to solve)

Pen cannot be interpolated and you may see some occasional graphical glitches.

Note: This feature may drastically reduce performance.

## Infinite Clones {#infinite-clones}

It turns off the clone limit.

## Warp Timer {#warp-timer}

(Previously called "Stuck Checking")

Warp timer makes scripts check to see if they are stuck in a long or infinite loop, and run at a low framerate (~2 fps) instead of getting completely stuck until the loop completes (if the loop ever finishes). The easiest way to demonstrate this is with a project like https://turbowarp.org/446742201?stuck. Compare what happens with the warp timer enabled and disabled.

This has a performance impact (up to 3x slower in some cases), which is why it's not enabled by default.

## Disable Compiler {#disable-compiler}

This turns off the TurboWarp compiler. This is only useful when debugging bugs in the compiler or when using the editor to create a project.
