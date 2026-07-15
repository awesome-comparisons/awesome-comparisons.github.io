---
title: Load Balancing
description: How Nginx, Apache, Caddy, HAProxy, Traefik, IIS, Node.js, Envoy, LiteSpeed, and Tomcat distribute traffic across backends.
---

## Nginx

Supports load balancing via the `upstream` block with algorithms like round-robin, least-connections, and IP hash, plus passive health checks in the open-source edition (active checks require Nginx Plus). It's widely used as a lightweight HTTP/TCP load balancer in front of application servers.

## Apache HTTP Server

Provides load balancing through `mod_proxy_balancer`, supporting request-counting, weighted, and byrequests/bytraffic algorithms across a defined balancer member pool. It's a capable option when Apache is already in the stack, though it's less commonly chosen as a dedicated load balancer than Nginx or HAProxy.

## Caddy

Offers built-in reverse proxy load balancing with selectable policies (round robin, random, least connections, IP hash, etc.) and active/passive health checks configured directly in the Caddyfile. It's straightforward to set up but has a smaller feature set than dedicated load balancers like HAProxy.

## HAProxy

Purpose-built as a load balancer, offering the deepest set of algorithms (round-robin, leastconn, source, URI hashing, consistent hashing), detailed health checks, and sticky sessions. It's the reference choice for TCP and HTTP load balancing at scale in many production stacks.

## Traefik

Load balances across service instances discovered dynamically from its providers, supporting weighted round-robin and sticky sessions, with health checks configured per service. Its strength is automatically re-balancing as containers or pods scale up and down.

## IIS

Load balancing across servers is typically handled by Application Request Routing (ARR), a separate IIS extension that adds server farms, health monitoring, and several routing algorithms on top of the core web server. Native IIS alone does not load balance across multiple machines.

## Node.js

Not a load balancer itself; a single Node process is generally placed behind Nginx, HAProxy, or a cloud load balancer, and the built-in `cluster` module can distribute connections across multiple Node processes on one machine to use additional CPU cores. Multi-instance production deployments almost always rely on an external load balancer.

## Envoy

Offers advanced load balancing algorithms (round robin, least request, ring hash, maglev, random) along with outlier detection, circuit breaking, and locality-aware routing, all configurable dynamically via its APIs. This sophistication is a major reason it's the default data plane for service meshes.

## LiteSpeed

Includes load balancing features similar to Apache/Nginx through its own reverse proxy and clustering capabilities, and integrates with external balancers in larger deployments. It's more commonly deployed as a backend web/app server behind a dedicated load balancer than as the balancer itself.

## Tomcat

Does not load balance on its own; instead it's typically clustered and placed behind Apache HTTP Server (via mod_jk/mod_proxy_ajp), Nginx, or a hardware/cloud load balancer that distributes requests across Tomcat instances. Session replication or sticky sessions are commonly used to keep clustered Tomcat instances consistent.
