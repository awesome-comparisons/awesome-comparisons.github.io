---
title: Bundling Strategy
description: How each JavaScript bundler approaches turning source modules into shippable output.
---

## Webpack

Builds a full module dependency graph up front and bundles everything, in both development and production, according to that graph and whatever chunking rules are configured.

## Rollup

Builds a dependency graph and bundles it using ES module semantics directly, favoring flatter, more literal output that mirrors the original module structure more closely than webpack's runtime-wrapped modules.

## Parcel

Bundles automatically based on whatever entry point and asset types it detects, inferring the right transforms (JS, CSS, images, and more) from file extensions without explicit loader configuration.

## esbuild

Bundles by walking the module graph directly in a single fast pass, intentionally supporting a narrower, more common set of bundling features rather than every edge case older bundlers accumulated.

## Vite

Doesn't bundle at all during development — it serves each module as a native ES module import over HTTP, resolving and transforming files on demand, then switches to a real bundling step (via Rollup or Rolldown) only for the production build.

## Turbopack

Bundles incrementally and on demand, computing only the parts of the dependency graph actually needed for the current page or change, rather than eagerly bundling the entire application up front.

## Rspack

Bundles using the same eager, whole-graph model as webpack (which it's designed to be compatible with), just executed by a much faster Rust core.

## Bun

Bundles by walking the module graph directly, similar in spirit to esbuild, aiming for a fast, sensible default bundling strategy without extensive configuration.

## Rolldown

Bundles using the same ES-module-first dependency graph model as Rollup, since it's designed to be a faster drop-in replacement for Rollup's bundling behavior specifically.
