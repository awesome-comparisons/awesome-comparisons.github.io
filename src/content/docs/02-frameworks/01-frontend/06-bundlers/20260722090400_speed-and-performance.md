---
title: Speed and Performance
description: What makes each JavaScript bundler fast or slow, and where it typically sits in that spectrum.
---

## Webpack

Generally the slowest of this group on large projects — its pure-JavaScript, single-threaded core and heavy plugin pipeline make both cold builds and rebuilds noticeably slower than newer alternatives.

## Rollup

Reasonably fast for its pure-JS implementation, though like webpack it doesn't take advantage of multi-core parallelism the way Go/Rust-based tools do.

## Parcel

Faster than webpack for typical projects thanks to its Rust-backed transform layer and built-in caching, though generally not as fast as esbuild, Turbopack, or Rspack on very large codebases.

## esbuild

Often 10-100x faster than JavaScript-based bundlers for equivalent work, largely due to Go's native compilation and aggressive parallelism across CPU cores.

## Vite

Fast in development regardless of project size, since it avoids bundling entirely by serving native ESM; production build speed depends on whichever bundler it delegates to (historically Rollup, increasingly Rolldown).

## Turbopack

Benchmarked by the Next.js team at multiple times faster than webpack for incremental builds, with its caching model specifically designed to keep large applications fast as they grow.

## Rspack

Sits between Vite and Turbopack on most benchmarks, generally winning on raw production build time thanks to its Rust core, while remaining close to webpack's memory usage due to a similarly complex feature set.

## Bun

Very fast for typical projects, comparable in spirit to esbuild, though its plugin ecosystem and edge-case coverage are less mature than more established bundlers.

## Rolldown

Aims to close the performance gap between JavaScript-based Rollup and Go/Rust-based tools like esbuild, while preserving Rollup's plugin compatibility and output characteristics.
