---
title: Concurrency Model
description: How Nginx, Apache, Caddy, HAProxy, Traefik, IIS, Node.js, Envoy, LiteSpeed, and Tomcat handle concurrent connections internally.
---

## Nginx

Event-driven, asynchronous architecture with a small number of worker processes, each running a non-blocking event loop that can handle thousands of connections. There are no per-connection threads, which keeps memory usage low and predictable under high concurrency.

## Apache HTTP Server

Historically process- or thread-per-connection via configurable Multi-Processing Modules (prefork, worker, event). The modern event MPM separates connection keep-alive handling from worker threads, narrowing the gap with fully async servers while retaining broad module compatibility.

## Caddy

Built on Go's runtime, so concurrency comes from goroutines scheduled cooperatively across OS threads by the Go scheduler. This gives lightweight, highly concurrent connection handling without the developer needing to manage threads or callbacks explicitly.

## HAProxy

Single-threaded (historically) or multi-threaded event loop using epoll/kqueue, processing many connections per thread with no blocking I/O. Its design prioritizes deterministic, low-overhead handling of very high connection counts for load balancing workloads.

## Traefik

Also written in Go, relying on goroutines and channels for concurrency, so each incoming request and backend proxy round-trip runs as a lightweight coroutine. This suits its dynamic, frequently-reconfigured routing use case.

## IIS

Uses a threaded model built on Windows I/O Completion Ports (IOCP) and the kernel-mode http.sys driver, which handles connection acceptance and caching before requests reach worker processes. Application code then runs in a pool of managed threads within application pool worker processes.

## Node.js

Single-threaded event loop for JavaScript execution, with libuv delegating blocking or CPU-bound operations (file I/O, DNS, some crypto) to a background thread pool. Concurrency is achieved through non-blocking asynchronous callbacks/promises rather than parallel request threads, so CPU-heavy work can block the loop unless offloaded to worker threads or clustered processes.

## Envoy

Multi-threaded proxy with a small set of worker threads, each running its own non-blocking event loop and owning a full copy of the connection-handling stack, avoiding cross-thread locking on the hot path. This design targets predictable low-latency behavior under high fan-in/fan-out service mesh traffic.

## LiteSpeed

Event-driven architecture similar in spirit to Nginx, using a fixed pool of worker processes with asynchronous, non-blocking I/O and an internal priority-based scheduler. This lets it serve high concurrent loads while remaining compatible with Apache-style configuration and modules.

## Tomcat

Thread-per-request model on the JVM: incoming HTTP requests are dispatched to a configurable thread pool (traditionally via NIO/NIO2 connectors), with each request occupying a thread for its duration. As a servlet container it can also support asynchronous servlets to free up threads during long-running operations.
