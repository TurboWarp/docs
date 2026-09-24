---
slug: /relaxed-math
hide_table_of_contents: true
---

# Relaxed Math

This option makes the compiler far less likely to assume the output of an operation will be NaN or Infinity. May improve performance in some projects while breaking others. Can also be enabled for one script only by adding a comment with `tw relaxedmath` to the hat.

:::caution
This may break some projects.
:::