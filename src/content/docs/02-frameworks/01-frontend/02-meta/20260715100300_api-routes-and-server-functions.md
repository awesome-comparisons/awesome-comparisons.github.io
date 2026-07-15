---
title: API Routes and Server Functions
description: How each meta-framework lets you write backend logic alongside the frontend codebase.
---

## Next.js

Route Handlers (`route.ts` files under `app/`) let you export functions per HTTP method (`GET`, `POST`, etc.) to build REST-style endpoints, while Server Actions (`"use server"` functions) allow calling server-side mutations directly from components without manually wiring an API route.

## Nuxt

Nuxt's `server/` directory (backed by the Nitro engine) lets you define API routes and middleware as simple files under `server/api`, each exporting an `defineEventHandler` function that runs as its own serverless-agnostic endpoint. This server layer ships as part of the same project and deploys alongside the frontend.

## SvelteKit

`+server.ts` files define endpoints by exporting HTTP-method functions (`GET`, `POST`, etc.), coexisting with `+page.svelte` files in the same route folder to provide both a page and an API at once. Form actions in `+page.server.ts` offer a higher-level alternative for handling form submissions without a separate endpoint.

## SolidStart

SolidStart uses server functions marked with a `"use server"`-style directive, letting you write server-only code inline with component logic that gets compiled into an RPC call from the client. This colocation avoids a separate API-route layer for most data mutations, though explicit API route files remain available for REST-style needs.

## TanStack Start

TanStack Start provides server functions created with `createServerFn`, which run only on the server but are invoked from client code like a normal async function, with the framework handling the network call transparently. This gives colocated backend logic similar to SolidStart while still supporting standalone API route files when a REST-style endpoint is preferred.

## Remix

Remix has no separate "API route" concept by default — `action` functions on route modules handle mutations tied to form submissions, and routes without a UI component can act as pure API endpoints (a "resource route"). This keeps backend logic tightly scoped to the route it serves.

## Astro

Astro API endpoints are files under `src/pages` (or `src/pages/api`) that export HTTP-method functions instead of a component, working identically to page routes but returning a `Response` object. These require server rendering (via an adapter) to run per-request rather than at build time.

## Qwik City

Qwik City offers `server$`, which wraps any function to force it to execute only on the server while remaining callable from client code as if it were local, alongside conventional endpoint files for REST-style routes. This mirrors the resumability model by keeping server-only logic clearly demarcated at the function level.
