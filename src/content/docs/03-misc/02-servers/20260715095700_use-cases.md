---
title: Use Cases
description: Where Nginx, Apache, Caddy, HAProxy, Traefik, IIS, Node.js, Envoy, LiteSpeed, and Tomcat fit best in practice.
---

## Nginx

A versatile default choice for serving static content, reverse proxying, and terminating TLS in front of application servers, popular for everything from small sites to high-traffic production edges. It's often the go-to when you need solid all-around performance without deep architectural specialization.

## Apache HTTP Server

Well suited to environments needing rich per-directory configuration (`.htaccess`), broad legacy module support, and shared hosting setups, especially where PHP or CGI-style applications are common. Still widely used in traditional hosting and enterprise environments with long-established Apache expertise.

## Caddy

A strong fit for small-to-medium deployments and internal tools where automatic HTTPS and a minimal, readable configuration matter more than deep low-level tuning. Its simplicity makes it popular for quickly standing up secure sites without a certificate management pipeline.

## HAProxy

The go-to choice when the primary need is high-performance TCP/HTTP load balancing, especially in front of database clusters, microservices, or any architecture requiring precise traffic control and failover behavior. It's favored in performance-critical, high-availability infrastructure.

## Traefik

Designed for dynamic, container-orchestrated environments (Docker, Kubernetes, Swarm) where backend services frequently change, automatically discovering and routing to them without manual reconfiguration. It's a natural fit for cloud-native microservice deployments.

## IIS

The natural choice for hosting ASP.NET/ASP.NET Core applications and other Windows-centric workloads, integrating tightly with Windows Server, Active Directory, and the .NET ecosystem. Common in enterprises standardized on Microsoft infrastructure.

## Node.js

Best suited for building the application itself — APIs, real-time services (WebSockets), and I/O-heavy backends — rather than acting as a general-purpose web/reverse-proxy server, typically deployed behind Nginx or a cloud load balancer. Its JavaScript-everywhere model is popular for full-stack JS teams.

## Envoy

Commonly deployed as a sidecar or edge proxy in service mesh architectures (Istio, Consul Connect) that need advanced observability, retries, circuit breaking, and mTLS between many microservices. It shines in complex, polyglot microservice environments over simple single-app setups.

## LiteSpeed

Popular for high-performance web hosting, particularly WordPress and other PHP-heavy CMS platforms, where its LSCache integration and Apache compatibility offer meaningful speed gains with minimal migration effort. Frequently chosen by hosting providers targeting CMS performance as a differentiator.

## Tomcat

The standard choice for deploying Java Servlet/JSP applications and lightweight Java EE web workloads, often as the application tier behind Apache or Nginx. It's a natural fit anywhere a Java-based web application needs a mature, widely supported servlet container.
