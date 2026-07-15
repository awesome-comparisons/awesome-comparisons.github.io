---
title: Islands and Interactivity
description: How each static site generator handles client-side interactivity on an otherwise static page.
---

## Astro

Defined by its islands architecture — components ship zero JavaScript by default, and you opt individual components into client-side hydration explicitly (`client:load`, `client:visible`, and similar directives).

## VuePress

Hydrates the whole page as a Vue application by default, closer to a traditional SPA-on-static-hosting model than Astro's selective island hydration.

## VitePress

Similarly hydrates as a Vue application, optimized for the mostly-static, docs-style pages it's designed for rather than fine-grained partial hydration.

## Gatsby

Hydrates the entire page as a React application, meaning even simple, mostly-static pages ship a full React runtime unless specifically optimized otherwise.

## Docusaurus

Also hydrates the whole page as a React application, prioritizing consistent React-powered interactivity (like versioned doc switchers and search) over minimizing shipped JavaScript.

## Eleventy

Ships no client-side framework or hydration model at all by default — any interactivity is plain, hand-written JavaScript you add yourself, giving full control but no built-in component hydration.

## Hugo

Ships no JavaScript framework or hydration model by default — pages are plain static HTML/CSS, with any interactivity added manually as vanilla JS.

## Jekyll

Also ships no JavaScript framework by default — interactivity is entirely up to whatever plain JS or third-party scripts you add to the templates yourself.

## Zola

Like Hugo and Jekyll, ships no JavaScript framework or hydration model by default, staying pure static HTML unless you add your own scripts.
