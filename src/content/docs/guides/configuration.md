---
title: Configuration
description: Configuring the content collection and site.
---

Site-wide settings live in `astro.config.mjs`. Content is configured
separately in `src/content.config.ts` using Astro's content layer API.

## Adding a new collection

```ts
import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const docs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
})

export const collections = { docs }
```

Every Markdown file under the configured `base` directory becomes an
entry in the collection automatically — no manual registration needed.
