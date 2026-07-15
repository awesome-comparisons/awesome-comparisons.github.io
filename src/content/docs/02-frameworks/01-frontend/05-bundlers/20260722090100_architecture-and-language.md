---
title: Architecture and Implementation Language
description: What language each JavaScript bundler is implemented in and how that shapes its performance.
---

## Webpack

Written entirely in JavaScript, running on Node.js — flexible and easy to extend, but fundamentally limited by single-threaded JS execution for CPU-heavy work like parsing and transforming.

## Rollup

Also written entirely in JavaScript, with a comparatively simple, single-pass architecture focused on producing an accurate ES module dependency graph.

## Parcel

Primarily JavaScript, but delegates performance-critical work like transforming and minifying to Rust-based tooling (via SWC) under the hood, mixing a JS API with a faster native core.

## esbuild

Written in Go, compiled to a single native binary, using goroutines to parse and transform files in parallel — a large part of why it's dramatically faster than pure-JS bundlers.

## Vite

A hybrid: written in JavaScript/TypeScript itself, but delegates dependency pre-bundling to esbuild during development and (historically) production bundling to Rollup, now transitioning to Rolldown.

## Turbopack

Written in Rust by the Next.js/Vercel team, built around an incremental computation engine that caches build results at a fine-grained function level so unrelated changes don't trigger a full rebuild.

## Rspack

Written in Rust, using the SWC toolchain internally for JavaScript/TypeScript parsing and transforms, while exposing a webpack-compatible JavaScript configuration API on top.

## Bun

Bun's bundler is written in Zig, as part of Bun's broader Zig-based JavaScript runtime, rather than being a separate project layered on top of Node.js.

## Rolldown

Written in Rust, built on the same `oxc` JavaScript tooling ecosystem as other fast Rust-based JS tools, exposing a plugin API deliberately compatible with Rollup's existing plugin ecosystem.
