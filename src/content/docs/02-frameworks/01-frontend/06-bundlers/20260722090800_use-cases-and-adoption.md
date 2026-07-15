---
title: Use Cases and Adoption
description: What each JavaScript bundler is typically used for and how widely adopted it is.
---

## Webpack

Still widely used in existing large-scale applications and by frameworks with long-standing webpack integrations, though it's increasingly the migration-away-from choice for new projects.

## Rollup

A common choice for bundling libraries and packages (rather than full applications), valued for producing small, clean ES module output, and as the engine historically inside Vite's production build.

## Parcel

Popular for smaller projects, prototypes, and teams that want to avoid bundler configuration entirely, less commonly chosen for large, highly customized production applications.

## esbuild

Widely used as a fast building block inside other tools (Vite's dependency pre-bundling, various test runners) as much as it's used directly as a standalone application bundler.

## Vite

The default build tool for most modern frontend frameworks' starter templates (Vue, Svelte, and increasingly others), now one of the most widely adopted frontend build tools overall.

## Turbopack

Used specifically as the bundler for Next.js, having become its stable default for both development and production builds as of Next.js 16.

## Rspack

Adopted by teams with large, mature webpack configurations who want a significant speed upgrade without rewriting their build setup, including large-scale adoption inside ByteDance, where it originated.

## Bun

Used by teams already adopting Bun as their JavaScript runtime who want bundling handled by the same toolchain, rather than as a bundler chosen independently of the runtime.

## Rolldown

Positioned to become Vite's default production bundler, replacing Rollup, aimed at closing Vite's remaining production-build performance gap with Go/Rust-based competitors.
