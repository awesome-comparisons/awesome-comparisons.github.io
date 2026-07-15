---
title: Deployment and Adapters
description: How each meta-framework packages output for different hosting targets, and what adapter architecture makes that possible.
---

## Next.js

Next.js produces a hosting-agnostic build output that can run on any Node server, but its feature set (ISR, edge runtime, image optimization) is developed and tuned first for Vercel's platform, with other hosts requiring community adapters or the standalone Node output to fully replicate that behavior.

## Nuxt

Nuxt is built on the Nitro server engine, which compiles a single application into dozens of deployment presets (Node, Vercel, Netlify, Cloudflare Workers, Deno, static, and more) chosen via configuration or auto-detected at build time, making Nuxt notably host-agnostic out of the box.

## SvelteKit

SvelteKit uses an explicit adapter system where a single `adapter` entry in `svelte.config.js` targets a given platform (`adapter-node`, `adapter-vercel`, `adapter-netlify`, `adapter-static`, `adapter-cloudflare`), and swapping deployment targets is typically just swapping that adapter package.

## SolidStart

SolidStart likewise uses Nitro (shared with Nuxt) under the hood for its deployment presets, letting a single app target Node, Vercel, Netlify, Cloudflare, and others through configuration rather than code changes.

## TanStack Start

TanStack Start builds on Vite's and Nitro's deployment tooling to target various hosts, though as a newer framework its adapter ecosystem is smaller and less standardized than SvelteKit's or Nuxt's, with Vercel and Node being the most established targets.

## Remix

Remix (React Router v7 framework mode) uses a server-adapter/runtime abstraction so the same route code can run on Node, Cloudflare Workers, Deno, or other runtimes, selected via the build's server entry configuration.

## Astro

Astro ships static by default and adds server rendering through official adapter integrations (`@astrojs/vercel`, `@astrojs/netlify`, `@astrojs/node`, `@astrojs/cloudflare`) installed and configured like any other Astro integration, cleanly separating the core framework from hosting concerns.

## Qwik City

Qwik City uses its own adapter packages (for Vercel, Cloudflare Pages, Netlify, Node, Deno, and static output) that wrap the build to produce the correct entry point and asset layout per target, following a pattern similar to SvelteKit's.
