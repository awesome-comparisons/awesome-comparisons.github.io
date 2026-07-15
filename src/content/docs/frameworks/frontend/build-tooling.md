---
title: Build Tooling
description: How each frontend framework is compiled, bundled, and served during development and for production.
---

## React

React has no official build tool; projects typically use Vite, Webpack (via the now-legacy Create React App), or a meta-framework's own bundler such as Next.js's Turbopack/Webpack setup.

## Vue

Vue officially recommends Vite (scaffolded via `create-vue`) as its standard build tool, replacing the older Vue CLI/Webpack setup, with first-class compilation support for Single-File Components.

## Svelte

Svelte uses Vite (via `vite-plugin-svelte`) as its standard tool for compiling `.svelte` files into JavaScript, both in standalone projects and within SvelteKit.

## Angular

Angular uses its own CLI (`@angular/cli`), which wraps esbuild and increasingly Vite for building, testing, and scaffolding, offering an integrated, all-in-one toolchain.

## SolidJS

SolidJS uses Vite (via `vite-plugin-solid`) to compile JSX into fine-grained reactive DOM code, following a setup pattern similar to Vue and Svelte.

## Qwik

Qwik uses Vite-based tooling paired with a Qwik-specific optimizer that automatically splits code into small, lazy-loadable segments at build time.

## Preact

Preact commonly uses Vite (via the Preact plugin) or historically its own `preact-cli`, designed to slot into existing React tooling with minimal configuration changes.

## Lit

Lit components compile to standard JavaScript/Web Components with no special compiler step required, so projects typically use generic bundlers like Vite, Rollup, or esbuild.

## Alpine.js

Alpine requires no build step at all — it can be included via a plain `<script>` tag or CDN link — with optional bundling through Vite or Webpack when used inside a larger application.

## Ember

Ember uses Ember CLI, an official and opinionated build tool historically based on Broccoli, now transitioning to Embroider for Webpack- and Vite-based builds.

## Astro

Astro ships its own CLI and build pipeline, built on top of Vite, handling component compilation, island hydration bundling, and static output generation.

## Next.js

Next.js has its own integrated build system (Webpack traditionally, Turbopack increasingly) bundled into the `next` CLI, requiring no separate bundler configuration for most projects.

## Nuxt

Nuxt uses the Nitro server engine together with Vite under the hood, exposed through the `nuxi` CLI, providing a largely zero-config build, dev, and deploy pipeline.

## Remix

Remix uses Vite as its build tool in current versions, compiling route modules and handling client/server bundle splitting automatically via the official Remix Vite plugin.
