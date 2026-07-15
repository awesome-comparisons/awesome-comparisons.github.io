---
title: Async and Concurrency
description: The concurrency model behind Express, Fastify, NestJS, Django, Flask, FastAPI, Ruby on Rails, Spring Boot, ASP.NET Core, Laravel, Gin, Fiber, Actix, and Phoenix.
---

## Express

Runs on Node's single-threaded event loop, so concurrency comes from non-blocking I/O and `async`/`await`/Promises rather than threads. CPU-bound work blocks the event loop and needs to be offloaded to worker threads or handled via clustering.

## Fastify

Shares Node's event-loop concurrency model with Express, but was designed around `async`/`await` from the start, encouraging handlers to return Promises directly rather than relying on callback-style code.

## NestJS

Inherits the underlying Node.js event-loop model regardless of whether it's running on Express or Fastify, with `async` providers and handlers supported throughout, plus dedicated microservice transports for distributed, message-based concurrency patterns.

## Django

Historically a synchronous WSGI framework, but since Django 3.1 it supports async views, async middleware, and ASGI deployment; ORM support for async queries has improved but is still less complete than the synchronous path.

## Flask

Traditionally a synchronous WSGI framework relying on external workers (e.g., Gunicorn with multiple processes/threads, or gevent) for concurrency; Flask 2.x added support for `async def` view functions, though the framework's core model remains sync-first.

## FastAPI

Built on Starlette and asyncio from the ground up, giving native `async def` endpoint support for high-concurrency, I/O-bound workloads, while synchronous `def` endpoints are automatically run in a thread pool so they don't block the event loop.

## Ruby on Rails

Traditionally synchronous with a thread-per-request model under application servers like Puma; Rails 7 introduced some fiber-based async support (e.g., for `ActiveRecord` load balancing), but the broader ecosystem is still predominantly synchronous.

## Spring Boot

Defaults to a thread-per-request model on a servlet container like Tomcat, but also supports a fully reactive, non-blocking programming model through Spring WebFlux and Project Reactor for high-concurrency use cases.

## ASP.NET Core

Built around `async`/`await` and Task-based concurrency throughout the framework and its APIs, with the Kestrel web server designed to handle a large number of concurrent connections efficiently on a managed thread pool.

## Laravel

Runs on PHP's traditional synchronous, process-per-request model (typically via PHP-FPM), with no native `async`/`await`; background concurrency is handled through queued jobs, and Laravel Octane can boost throughput by running the app on a persistent, event-loop-based server like Swoole or RoadRunner.

## Gin

Leverages Go's goroutines directly — the standard `net/http` server spins up a lightweight goroutine per incoming connection automatically, making concurrent request handling simple and efficient without extra configuration.

## Fiber

Also relies on Go's goroutines for concurrency but runs on `fasthttp` instead of `net/http`, which reuses request/response objects and avoids extra allocations to squeeze out higher throughput under load.

## Actix

Built on the Tokio async runtime, with handlers being `async` by default; this gives Actix Web very high-throughput, non-blocking I/O combined with Rust's compile-time safety guarantees and zero-cost abstractions.

## Phoenix

Runs on the BEAM (Erlang) VM, where each connection or request is handled in its own extremely lightweight, isolated process. This gives Phoenix massive concurrency and strong fault isolation essentially for free, and underpins features like Channels and LiveView.
