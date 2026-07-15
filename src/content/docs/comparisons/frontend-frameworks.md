---
title: Frontend Frameworks
description: React vs Vue vs Svelte vs Astro islands.
---

| Framework | Rendering model | Bundle size | Learning curve |
| --- | --- | --- | --- |
| React | Virtual DOM | Medium | Medium |
| Vue | Reactive proxies | Small | Low |
| Svelte | Compiled, no VDOM | Smallest | Low |
| Astro | Islands, mostly zero-JS | Smallest by default | Low |

## When to reach for each

- **React** — largest ecosystem, most hiring pool, good for complex
  client-heavy apps
- **Vue** — approachable API, strong official tooling (Vite, Pinia)
- **Svelte** — least runtime overhead, great for interactive widgets
- **Astro** — content-first sites that need only islands of interactivity

None of these are wrong choices; the right one depends on how much of
the page actually needs to be interactive.
