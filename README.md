# Awesome Comparisons

Awesome Comparisons is a static docs site of curated, side-by-side comparisons for tools, frameworks, and services that solve similar problems — languages, frontend/mobile/desktop/backend/game-engine frameworks, operating systems, databases, servers, git hosting, backend-as-a-service, cloud platforms, and libraries (ORM, validation, testing, CLI, logging).

Instead of marketing copy, each comparison focuses on objective criteria and real trade-offs, so picking a tool means understanding what you're trading away, not chasing whichever landing page shouts the loudest.

## Features

- **Structured content** — comparisons are authored as Markdown under `src/content/docs`, organized into ordered folders and rendered through Astro content collections
- **Docs shell** — sidebar navigation generated from the content tree, breadcrumbs, and a prev/next pager for moving between docs
- **Command palette** — `Cmd/Ctrl+K` to fuzzy-search and jump to any doc
- **Reading stats** — word count and estimated reading time per doc
- **Dark mode** — system-aware theme with light/dark/system toggle and a `d` keyboard shortcut
- **UI kit** — [shadcn/ui](https://ui.shadcn.com) components built on [Base UI](https://base-ui.com) and Tailwind CSS v4

## Tech stack

- [Astro](https://astro.build) (static output)
- [React](https://react.dev) for interactive islands
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) + [Base UI](https://base-ui.com)

## Getting started

Requires Node.js `>=22.12.0`.

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build      # type-check content and build the static site to dist/
npm run preview    # preview the production build locally
npm run typecheck  # run astro check
npm run lint        # run eslint
npm run format      # run prettier
```

## Project structure

```
src/
  content/docs/     Markdown comparisons, organized into numbered folders for ordering
  content.config.ts Content collection schema (title, description)
  components/       React components (app shell, sidebar, command menu, mode toggle, ui/*)
  layouts/          Astro layouts
  lib/              Content tree building/flattening, reading-time stats
  pages/            Astro routes, including the [...splat] doc renderer
```

## Adding a comparison

Add a Markdown file under `src/content/docs`, nested in a folder that reflects where it belongs in the sidebar. Folder and file names are prefixed (e.g. `01-`, `20260715090300_`) purely to control ordering — the prefix is stripped when generating labels. Each file needs frontmatter matching the `docs` collection schema:

```markdown
---
title: My Comparison
description: A short summary shown in the sidebar and page header.
---

Your content here.
```

## Adding UI components

This project uses shadcn/ui. To add a component:

```bash
npx shadcn@latest add button
```

This places the component under `src/components/ui`. Import it directly in `.astro` or `.tsx` files:

```tsx
import { Button } from "@/components/ui/button"
```

## Deployment

Pushes to `main` are built and deployed to GitHub Pages via `.github/workflows/astro.yml`.
