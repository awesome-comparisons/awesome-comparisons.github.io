---
title: Deployment
description: Building and shipping a static export.
---

This project builds to static HTML by default.

```bash
npm run build
npm run preview
```

The output lands in `dist/` and can be deployed to any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, or a plain CDN bucket).

## Adding server rendering

If a future page needs request-time logic, add an Astro adapter (e.g.
`@astrojs/node`) and switch the relevant routes to on-demand rendering.
The content viewer itself stays static since it only reads Markdown.
