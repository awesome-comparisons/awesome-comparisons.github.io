---
title: Language and Tooling
description: What implementation language and build tooling each static site generator uses.
---

## Astro

Built in JavaScript/TypeScript on top of Vite, with its own `.astro` component syntax that can also embed components from React, Vue, Svelte, and other UI frameworks.

## VuePress

Built in JavaScript on top of webpack (in VuePress 1) or Vite (in VuePress 2), using Vue single-file components alongside Markdown.

## VitePress

Built in JavaScript/TypeScript directly on top of Vite, using Vue components alongside Markdown, benefiting from Vite's fast dev server and build pipeline.

## Gatsby

Built in JavaScript on top of React and webpack, with GraphQL as the query language for pulling content into pages at build time.

## Docusaurus

Built in JavaScript/TypeScript on top of React, historically using webpack, with MDX (Markdown plus embedded JSX) as its content format.

## Eleventy

Built in JavaScript/Node.js, but templating-language-agnostic — it supports Markdown, Nunjucks, Liquid, Handlebars, and several others, letting you pick per project.

## Hugo

Built in Go and distributed as a single compiled binary, using Go's own template syntax for layouts rather than a JavaScript templating engine.

## Jekyll

Built in Ruby, using the Liquid templating language (originally created for Jekyll) alongside Markdown and YAML front matter.

## Zola

Built in Rust and distributed as a single compiled binary, using the Tera templating engine (a Rust template language inspired by Jinja2/Django templates).
