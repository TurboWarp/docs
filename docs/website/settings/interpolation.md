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

Because interpolation is unlikely to make them look smoother, but will impact performance.

Interpolation is based on the positions of sprites and how they change from one frame to the next.

Complex projects such as scrolling platformers can have experience occasional visual glitches.
