---
title: CSS Frameworks
description: Tailwind vs CSS Modules vs styled-components.
---

## Tailwind CSS

Utility-first, no context switching between files, ships a minimal
production build via its JIT engine. This project uses Tailwind v4.

## CSS Modules

Plain CSS scoped per-file by the build tool. No new syntax to learn,
but you're back to naming things and writing raw declarations.

## styled-components / CSS-in-JS

Colocates styles with components and supports dynamic theming via
props, at the cost of runtime overhead and larger bundles unless
compiled away.

## Takeaway

Utility-first approaches like Tailwind tend to win for teams building
a consistent design system quickly; CSS Modules stay attractive for
teams that prefer writing plain CSS.
