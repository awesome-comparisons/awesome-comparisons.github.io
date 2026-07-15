---
title: Configuration
description: How Nginx, Apache, Caddy, HAProxy, Traefik, IIS, Node.js, Envoy, LiteSpeed, and Tomcat are configured.
---

## Nginx

Declarative text configuration (nginx.conf) using a directive/block syntax with contexts like `http`, `server`, and `location`. Changes require a reload (or restart) to take effect, and there's no built-in dynamic API, though third-party modules add some runtime control.

## Apache HTTP Server

Directive-based configuration in httpd.conf plus per-directory `.htaccess` overrides, organized around modules loaded and configured individually. This flexibility is powerful but can lead to sprawling, hard-to-audit configuration across many included files.

## Caddy

Configuration via a human-friendly Caddyfile, or a structured JSON document for full control, both of which can be applied live through Caddy's built-in admin API without downtime. Sensible automatic defaults (like automatic HTTPS) minimize the amount of configuration needed for common cases.

## HAProxy

A single haproxy.cfg file organized into `global`, `defaults`, `frontend`, and `backend` sections, written in a fairly low-level but precise domain-specific syntax. Configuration reloads are designed to be fast and connection-preserving, and a runtime API/socket allows some dynamic changes.

## Traefik

Configuration is split into static (entrypoints, providers) and dynamic (routers, middlewares, services) parts, expressed in YAML/TOML or, more commonly, discovered automatically from labels/annotations in Docker, Kubernetes, or Consul. This provider-driven model lets routing configuration update automatically as services come and go.

## IIS

Configured primarily through XML files (applicationHost.config, web.config) and commonly managed via the IIS Manager GUI, PowerShell cmdlets, or the `appcmd` CLI. Configuration is hierarchical and can be delegated down to the application level via web.config overrides.

## Node.js

There is no server configuration file in the traditional sense — behavior is defined entirely in application code (or via frameworks like Express/Fastify) using JavaScript, with runtime options passed as CLI flags or environment variables. This gives maximum flexibility but pushes configuration concerns onto the application developer.

## Envoy

Configuration is primarily API-driven via xDS (discovery services) delivered dynamically from a control plane, though a static YAML/JSON bootstrap config is also supported. This dynamic-first design is central to its role as the data plane in service mesh architectures like Istio.

## LiteSpeed

Offers both its own native configuration format/web admin console and a compatibility layer that can read Apache-style httpd.conf and .htaccess files directly. This makes migration from Apache straightforward while still exposing a dedicated GUI for LiteSpeed-specific tuning.

## Tomcat

Configured through XML files such as server.xml (connectors, engines, hosts) and web.xml (servlet/webapp deployment descriptors), alongside context.xml for per-application settings. Most changes to core server.xml settings require a restart, though web applications can be hot-deployed.
