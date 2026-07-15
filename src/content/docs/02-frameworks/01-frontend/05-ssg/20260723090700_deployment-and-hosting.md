---
title: Deployment and Hosting
description: How each static site generator's output is typically deployed and hosted.
---

## Astro

Outputs plain static files by default, deployable to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages), with optional server adapters for hybrid SSR deployments.

## VuePress

Outputs a static site deployable to any static host, commonly paired with GitHub Pages or Netlify for documentation projects.

## VitePress

Also outputs plain static files, deployable anywhere static hosting is available, with official guides for most major static hosts.

## Gatsby

Outputs a static site (with optional server-rendered/DSG pages), historically closely tied to Gatsby Cloud/Netlify hosting, though the output can be deployed to any static host.

## Docusaurus

Outputs a static site deployable to any static host, with particularly common deployment to GitHub Pages given its open-source documentation focus.

## Eleventy

Outputs plain static HTML with no framework runtime requirement, making it deployable literally anywhere that can serve files, from GitHub Pages to any CDN.

## Hugo

Outputs plain static HTML/CSS/JS with zero runtime dependencies, trivially deployable to any static host or even a bare web server.

## Jekyll

Outputs plain static HTML, natively supported by GitHub Pages, which builds Jekyll sites automatically without any custom CI configuration.

## Zola

Outputs plain static files with zero runtime dependencies, just as portable as Hugo's output to any static host.
