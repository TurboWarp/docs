---
slug: /interpolation
hide_table_of_contents: true
---

# Interpolation

Interpolation makes projects appear smoother by interpolating movement of sprite between frames.

Interpolation should not be used on:

 - 3D projects
 - Raytracers
 - Pen projects
 - Laggy projects

Because interpolation is unlikely to make them look smoother, but will hurt performance.

Interpolation is based on the positions of sprites and how they change from one frame to the next. It can introduce slight input latency.

Complex projects such as scrolling platformers can experience occasional visual glitches.
