---
title: Dev Server and HMR
description: How each JavaScript bundler handles local development and hot module replacement.
---

## Webpack

Ships `webpack-dev-server`, which rebuilds and serves a bundled version of the app, supporting Hot Module Replacement, though rebuild times grow with app size since it's still bundling on every change.

## Rollup

Has no official dev server of its own — Rollup is typically used for the production build step, with a separate tool (or plugin like `rollup-plugin-serve`) handling local development.

## Parcel

Ships a built-in dev server with Hot Module Replacement out of the box, requiring no additional configuration to get live-reloading local development.

## esbuild

Ships a minimal built-in dev server, but it's primarily used as a fast transform/bundle step within other tools' dev servers (like Vite's) rather than as a full-featured standalone dev experience.

## Vite

Its dev server is a defining feature — since it serves native ES modules instead of a bundle, only the specific module that changed needs to be re-transformed and pushed via HMR, keeping updates fast regardless of app size.

## Turbopack

Powers `next dev`, using its incremental engine so that only the specific functions and modules affected by a change are recomputed, aiming for HMR speed that stays fast as the app grows.

## Rspack

Ships a dev server compatible with webpack's dev server behavior and plugins, with HMR backed by Rspack's much faster Rust-based rebuild step.

## Bun

Ships a built-in dev server with hot reloading for supported frameworks, integrated directly into the Bun runtime rather than configured as a separate package.

## Rolldown

Has no standalone dev server of its own — it's consumed through Vite's dev server, where it's positioned to eventually replace Rollup for the production build step while Vite's own native-ESM dev server handles development.
