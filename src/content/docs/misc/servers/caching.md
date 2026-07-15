---
title: Caching
description: How Nginx, Apache, Caddy, HAProxy, Traefik, IIS, Node.js, Envoy, LiteSpeed, and Tomcat handle response and content caching.
---

## Nginx

Provides robust built-in HTTP response caching via `proxy_cache`/`fastcgi_cache`, storing responses on disk keyed by configurable cache keys, with fine-grained control over TTLs, bypass rules, and stale-content serving. This makes it a common caching reverse proxy in front of slower application backends.

## Apache HTTP Server

Offers caching through `mod_cache` (with `mod_cache_disk` or `mod_cache_socache` storage backends) to cache responses per RFC 7234 semantics, plus `mod_expires` and `mod_headers` for controlling client-side cache directives. It's functional but generally less performance-tuned for heavy caching workloads than Nginx.

## Caddy

Does not include built-in response caching in the core server, relying instead on third-party plugins (like cache-handler) or an upstream/downstream CDN for cached content. Its focus is more on automatic TLS and simple reverse proxying than acting as a caching layer itself.

## HAProxy

Includes a lightweight built-in HTTP cache for small, frequently requested objects, but it's intentionally limited in scope and not meant to replace a dedicated caching layer. HAProxy is more often paired with Varnish or a CDN when heavy caching is required.

## Traefik

Has no native response caching feature; caching is typically delegated to a middleware plugin, an upstream CDN, or a dedicated cache placed behind or in front of Traefik. Its configuration model focuses on dynamic routing rather than content storage.

## IIS

Supports output caching (kernel-mode caching via http.sys, and user-mode output caching for dynamic content) which can cache full or fragment responses close to the network stack for very fast repeat delivery. Static file caching headers are also configurable through the caching feature and web.config.

## Node.js

Has no built-in HTTP caching layer; applications must implement caching explicitly in code (in-memory, Redis, etc.) or rely on a reverse proxy/CDN in front of the Node process to cache responses. Any caching behavior is therefore a deliberate application- or infrastructure-level decision.

## Envoy

Provides an HTTP cache filter implementing RFC 7234-compliant caching semantics with pluggable cache storage backends, usable when Envoy sits in the request path as an edge or sidecar proxy. It's less commonly the primary cache layer compared to dedicated caching systems, but the capability is built in.

## LiteSpeed

Notable for deep caching integration, most prominently LiteSpeed Cache (LSCache), a server-level page cache with tight CMS integration (e.g., a dedicated WordPress plugin) that can cache dynamic pages more aggressively than typical reverse-proxy caches. This built-in application-aware caching is one of LiteSpeed's key differentiators.

## Tomcat

Does not provide response caching itself; caching is generally handled by an in-front web server/reverse proxy (Apache, Nginx) or a CDN, while the application can cache data internally (e.g., via ehcache) or rely on the standard servlet response header mechanisms for browser caching. Static content is usually offloaded to a fronting server rather than served and cached by Tomcat directly.
