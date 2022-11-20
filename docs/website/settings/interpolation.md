---
slug: /interpolation
hide_table_of_contents: true
---

# Interpolation

Interpolation makes motion animations in projects appear smoother by interpolating movement of sprites between frames. It's basically higher framerate without affecting how fast scripts run.

Interpolation should not be used on:

 - 3D projects
 - Raytracers
 - Pen projects
 - Laggy projects

Interpolation is unlikely to make these projects look smoother because interpolation can't interpolate pen, but it will hurt performance.

Interpolation can introduce slight (up to 1/30th of a second) input latency.

You may see some graphical glitches on complex projects such as scrolling platformers.
