---
title: TLS and Security
description: How Nginx, Apache, Caddy, HAProxy, Traefik, IIS, Node.js, Envoy, LiteSpeed, and Tomcat handle TLS termination and security features.
---

## Nginx

Terminates TLS efficiently via OpenSSL, supporting modern protocols, OCSP stapling, and session resumption, but certificate acquisition/renewal (e.g., Let's Encrypt) is handled externally via tools like Certbot rather than natively. Security hardening (headers, rate limiting, ModSecurity via a module) is achievable but must be configured explicitly.

## Apache HTTP Server

TLS is handled by `mod_ssl` on top of OpenSSL, with broad protocol and cipher configurability, and certificate renewal typically managed externally (e.g., Certbot's Apache plugin). Security modules like `mod_security` (WAF) and `mod_evasive` are mature and widely deployed alongside it.

## Caddy

Automatic HTTPS is a headline feature: Caddy provisions and renews certificates from Let's Encrypt/ZeroSSL by default with zero configuration, including OCSP stapling and modern TLS defaults out of the box. This removes a whole class of manual certificate-management errors compared to most other servers.

## HAProxy

Terminates TLS via OpenSSL with fine-grained control over ciphers, protocol versions, and SNI-based certificate selection, and supports client certificate verification for mutual TLS. Certificate provisioning/renewal is external, but HAProxy is frequently used as the mTLS termination point in security-sensitive architectures.

## Traefik

Also provides automatic HTTPS via ACME (Let's Encrypt) with certificate resolvers configured declaratively, similar in spirit to Caddy, making it well suited to dynamic container/orchestrator environments. It also supports middleware for security headers, rate limiting, and mutual TLS between services.

## IIS

TLS is managed through Windows' certificate store and Server Certificates feature in IIS Manager, integrating with Windows-native tooling (and Central Certificate Store for server farms) rather than an ACME-first workflow, though ACME clients/extensions exist. Security integrates tightly with Windows features like Windows Authentication and URL Authorization.

## Node.js

TLS termination can be done directly in application code via the built-in `tls`/`https` modules, but in production it's most often delegated to a reverse proxy (Nginx, a cloud load balancer) that terminates TLS in front of the Node process. Security is otherwise the application's responsibility, managed through middleware (e.g., helmet) and dependency hygiene.

## Envoy

Provides strong native TLS support including mutual TLS, SNI, and dynamic certificate rotation via SDS (Secret Discovery Service), which is central to its role as the security-enforcing sidecar in service meshes. This makes Envoy well suited for zero-trust, mTLS-everywhere network architectures.

## LiteSpeed

Supports modern TLS (including QUIC/HTTP/3) with built-in Let's Encrypt integration for automatic certificate issuance and renewal through its admin console. It also includes a built-in anti-DDoS layer and WAF-like security features aimed at protecting web applications directly at the server level.

## Tomcat

TLS can be configured directly on a Tomcat Connector using a keystore/JSSE (or OpenSSL via APR), though in production it's commonly terminated upstream by Apache/Nginx and proxied to Tomcat over plain HTTP/AJP. Application-level security (authentication, authorization, realms) is handled through the Java Servlet security model.
