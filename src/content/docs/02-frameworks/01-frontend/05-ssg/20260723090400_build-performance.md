---
title: Build Performance
description: How fast each static site generator builds, especially as content scales up.
---

## Astro

Fast for typical content sites thanks to Vite's tooling, though as a JavaScript-based tool it doesn't match the raw throughput of compiled-binary generators like Hugo or Zola on very large sites.

## VuePress

Reasonable build performance for small-to-medium sites, but VuePress 1's webpack-based pipeline is noticeably slower than Vite-based alternatives at larger scale.

## VitePress

Faster than VuePress thanks to Vite, though like other JS-based tools it still trails Go/Rust-compiled generators on very large sites.

## Gatsby

Historically criticized for slow build times on large sites despite incremental build features, one of the practical reasons many teams moved to faster alternatives like Astro.

## Docusaurus

Adequate build performance for typical documentation sites, but as a webpack/React-based tool it can slow down noticeably on very large docs sets with thousands of pages.

## Eleventy

Fast for a JavaScript-based tool, since it has a comparatively simple architecture with no client-side framework or bundler overhead baked in by default.

## Hugo

Overwhelmingly fast — routinely builds thousands of pages in a few seconds, widely cited as the fastest generator in this group, thanks to Go's compiled performance and heavy use of concurrency.

## Jekyll

The slowest generator in this group on large sites, since Ruby's execution model and Jekyll's build process don't parallelize as aggressively as Hugo's or Zola's.

## Zola

Very fast, close behind Hugo, benefiting from Rust's compiled performance — a common choice for teams who want Hugo-like speed with a different templating language.
