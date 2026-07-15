---
title: Code Splitting and Tree Shaking
description: How each JavaScript bundler removes unused code and splits output into separate chunks.
---

## Webpack

Supports fine-grained, highly configurable code splitting (dynamic imports, `SplitChunksPlugin` rules) and tree-shaking based on ES module static analysis, though effectiveness depends on how well-authored the input modules are.

## Rollup

Considered to have some of the best tree-shaking of any bundler, since its design was built around ES modules from the start, producing notably lean output for library-style code.

## Parcel

Supports automatic code splitting based on dynamic `import()` statements and tree-shaking for ES modules, handled automatically without manual chunking configuration.

## esbuild

Supports tree-shaking and basic code splitting for ESM output, though its splitting configuration is intentionally less granular than webpack's extensive chunk-control options.

## Vite

Relies on its underlying production bundler (Rollup, or increasingly Rolldown) for tree-shaking and code splitting, inheriting whichever one's characteristics and quality.

## Turbopack

Performs tree-shaking and automatic code splitting as part of its incremental build graph, aiming to only include what a given page or route actually needs.

## Rspack

Supports webpack-compatible code-splitting configuration (including `splitChunks`) and ES module tree-shaking, backed by its faster Rust implementation.

## Bun

Supports tree-shaking and basic code splitting for ESM, with less configurability than webpack but reasonable defaults for typical applications.

## Rolldown

Inherits Rollup's strong ES-module tree-shaking model, since matching Rollup's output quality and behavior is one of its explicit design goals.
