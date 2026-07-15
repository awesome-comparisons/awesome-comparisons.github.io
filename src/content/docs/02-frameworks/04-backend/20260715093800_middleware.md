---
title: Middleware
description: How Express, Fastify, NestJS, Django, Flask, FastAPI, Ruby on Rails, Spring Boot, ASP.NET Core, Laravel, Gin, Fiber, Actix, and Phoenix implement cross-cutting request/response logic.
---

## Express

Middleware is the core building block of the framework: functions with the signature `(req, res, next)` registered via `app.use()`, executed in registration order, and able to short-circuit or pass control on with `next()`. A huge ecosystem of drop-in middleware exists (`cors`, `helmet`, `morgan`, `body-parser`).

## Fastify

Cross-cutting behavior is split across well-defined lifecycle hooks (`onRequest`, `preParsing`, `preValidation`, `preHandler`, `onSend`, etc.) rather than a single generic middleware chain, giving precise control over when logic runs. Traditional Express-style middleware can still be used via the `@fastify/middie` plugin.

## NestJS

Supports Express/Fastify-style middleware configured per-module via `configure()` and `MiddlewareConsumer`, but also layers on Nest-specific constructs — Guards, Interceptors, and Pipes — that handle authorization, response transformation, and validation as distinct, more structured concerns.

## Django

Cross-cutting logic is implemented as middleware classes listed in the `MIDDLEWARE` setting, each wrapping the request/response cycle in the order defined. Django ships with built-in middleware for sessions, CSRF protection, authentication, and security headers.

## Flask

Uses lightweight `before_request`/`after_request`/`teardown_request` hooks registered on the app or a blueprint for common cross-cutting logic. True WSGI-level middleware can also wrap `app.wsgi_app` directly for lower-level concerns like proxies or compression.

## FastAPI

Provides `@app.middleware("http")` for simple request/response wrapping, built on Starlette's `BaseHTTPMiddleware`, but many cross-cutting concerns (auth, DB sessions) are more idiomatically handled through FastAPI's dependency injection system instead of traditional middleware.

## Ruby on Rails

Sits on top of the Rack middleware stack (viewable via `bin/rails middleware`), which handles things like sessions, cookies, and exception handling before a request reaches the router. Within controllers, `before_action`/`after_action`/`around_action` filters provide a similar mechanism scoped to specific actions.

## Spring Boot

Cross-cutting behavior is handled through Servlet `Filter`s, Spring `HandlerInterceptor`s, and — for security specifically — the Spring Security filter chain. Aspect-Oriented Programming (`@Aspect`) is also commonly used for logging, transactions, and other concerns.

## ASP.NET Core

Middleware is registered in `Program.cs` as an explicit pipeline (`app.Use(...)`, `app.UseAuthentication()`, etc.) that executes in an "onion" model — each component can act before and after calling the next delegate. Built-in middleware covers routing, static files, authentication, and exception handling.

## Laravel

Middleware classes are registered globally, per route-group, or per-route, and implement a `handle($request, Closure $next)` method matching the onion pattern. Common built-in middleware handles CSRF verification, session start, and authentication checks.

## Gin

Middleware are ordinary `gin.HandlerFunc` values chained via `Use()`, applied globally or to specific route groups, calling `c.Next()` to pass control forward. The ecosystem provides common middleware for logging, panic recovery, and CORS.

## Fiber

Follows the same Express-inspired `app.Use()` pattern with a bundled middleware package (`logger`, `recover`, `cors`, `compress`) maintained alongside the core framework, executing in an onion-style chain via `c.Next()`.

## Actix

Cross-cutting logic is implemented via the `Transform`/`Service` middleware traits and applied with `.wrap()` on an `App` or `scope`. Common built-ins include `Logger`, `Compress`, and `DefaultHeaders`, with custom middleware written against the same trait interface.

## Phoenix

Middleware and request handlers are unified under a single abstraction, `Plug` — both the framework's own components and application code implement the same `call/2` contract. Plugs are composed into `pipeline`s that are applied to route `scope`s in the router.
