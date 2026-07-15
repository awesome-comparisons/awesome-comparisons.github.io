---
title: Component Model
description: How each frontend framework defines, composes, and encapsulates components.
---

## React

Components are plain functions (or, historically, classes) that return JSX. Composition happens through props and children, and hooks attach state and lifecycle behavior to function components; there is no built-in encapsulation of styles or DOM structure.

## Vue

Vue components are typically authored as Single-File Components combining a template, script, and scoped style in one `.vue` file. They support both the Options API and Composition API, and compose via props, emitted events, and slots.

## Svelte

A `.svelte` file compiles its markup, script, and scoped CSS into one component. Props are declared with `export let` (or the `$props()` rune in Svelte 5), and composition uses props, events, and slots.

## Angular

Angular components are TypeScript classes decorated with `@Component`, pairing a class with an HTML template and CSS, with dependency injection built in at the framework level. They're organized into NgModules, though standalone components now reduce that requirement.

## SolidJS

SolidJS components are functions that run exactly once to establish reactive bindings and return JSX-like markup; props are reactive proxies, and the function body is never re-invoked on updates, unlike React.

## Qwik

Components are declared with `component$()` and are automatically split into independently serializable, lazy-loadable chunks, so each component and its event listeners can be downloaded only when needed. Syntax closely resembles React's JSX.

## Preact

Preact uses the same functional/class component model as React, including hooks, and is often paired with `preact/compat` to maximize compatibility with the broader React component ecosystem.

## Lit

Lit components are native Web Components extending `LitElement`, with reactive properties and `html` tagged-template rendering, encapsulated by Shadow DOM and usable in any framework or none at all.

## Alpine.js

Alpine has no formal component abstraction; behavior is attached directly to DOM elements via `x-data` blocks, meaning the markup itself defines the boundaries of a "component."

## Ember

Ember components are Glimmer component classes paired with Handlebars templates, using decorators for tracked state and actions, and follow strict data-down, actions-up composition conventions.

## Astro

`.astro` files define a component with a frontmatter script section that runs at build or request time, followed by an HTML-like template; they can also embed components from other UI frameworks as isolated islands.

## Next.js

Next.js uses React's component model directly, layering on conventions like Server Components versus Client Components (marked with `"use client"`) and special file-based components such as layout, page, and loading.

## Nuxt

Nuxt uses Vue's Single-File Component model, with components auto-imported project-wide and additional conventions layered on for pages and layouts.

## Remix

Remix uses React's component model, with routes themselves acting as components that export conventional bindings — `loader`, `action`, and a default component — tying data directly to UI.
