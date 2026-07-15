---
title: Data Layer and Content Sourcing
description: How each static site generator pulls content in from different sources.
---

## Astro

Content collections can source from local Markdown/MDX files or, via loaders, from external APIs and CMSs, exposed through a type-safe query API rather than a dedicated query language.

## VuePress

Sources content primarily from local Markdown files organized on disk; pulling from external CMSs or APIs typically requires custom plugins rather than a built-in data layer.

## VitePress

Like VuePress, sources content primarily from local Markdown files, with no built-in unified data layer for external sources.

## Gatsby

Its defining feature: a GraphQL data layer that unifies content from local files, headless CMSs, and APIs into one consistent, queryable schema available to every page at build time.

## Docusaurus

Sources content primarily from local Markdown/MDX files following its docs/blog conventions; external data sourcing is handled through its plugin system rather than a built-in unified layer.

## Eleventy

Sources data from local files (Markdown, JSON, YAML, JS) and any custom "data files" you write, giving direct, code-level control over how external APIs are fetched rather than a declarative query layer.

## Hugo

Sources content primarily from local files organized in its content directory, with support for pulling remote data through its `getJSON`/`getCSV` template functions.

## Jekyll

Sources content primarily from local files and its collections feature; external data can be pulled in via the `_data` folder (YAML/JSON/CSV) rather than a live query layer.

## Zola

Sources content primarily from local Markdown files organized into sections, with a `load_data` template function available for pulling in external JSON, TOML, CSV, or remote data at build time.
