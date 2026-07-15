---
title: Request Lifecycle
description: How a request flows from entry to response in Express, Fastify, NestJS, Django, Flask, FastAPI, Ruby on Rails, Spring Boot, ASP.NET Core, Laravel, Gin, Fiber, Actix, and Phoenix.
---

## Express

A request flows linearly through the middleware stack in the order it was registered, with each function receiving `(req, res, next)` and either handling the response or calling `next()` to continue, until a route handler sends a response.

## Fastify

The lifecycle is broken into named, well-defined hooks — `onRequest`, `preParsing`, `preValidation`, `preHandler`, the route handler itself, then `onSend` and `onResponse` — giving explicit control over exactly which phase a given piece of logic runs in.

## NestJS

A request passes through middleware first, then Guards (authorization checks), then Interceptors (pre-handler logic), then Pipes (validation/transformation), then the route handler, followed by Interceptors again (post-handler), with Exception Filters able to intercept errors at any point.

## Django

The request enters the middleware chain top-down, is resolved by the URL dispatcher to a view, the view returns a response, and that response then flows back up through the same middleware chain in reverse (bottom-up) before being sent to the client.

## Flask

A WSGI request triggers any `before_request` handlers, then the matched view function executes and returns a response, after which `after_request` and `teardown_request` handlers run before the response is finally returned.

## FastAPI

An ASGI request is handled asynchronously: it passes through any registered middleware, then FastAPI resolves the function's declared dependencies via `Depends()`, then the path operation function executes, and its return value is validated/serialized against the declared `response_model`.

## Ruby on Rails

A Rack request enters the middleware stack, gets routed to a controller action, `before_action`/`around_action` filters wrap the action's execution, the action typically renders a view or JSON, and `after_action` filters run before the response returns through the middleware stack.

## Spring Boot

The `DispatcherServlet` receives the request, runs it through registered Filters and HandlerInterceptors, resolves and invokes the matching controller method, resolves the response body or view, and routes any thrown exceptions to `@ControllerAdvice` exception handlers.

## ASP.NET Core

The request enters the middleware pipeline configured in `Program.cs`; each middleware component can run logic both before and after calling the next delegate (an "onion" model), ultimately reaching the matched endpoint handler and unwinding back out through the same components.

## Laravel

The request enters through `public/index.php`, is passed through the HTTP kernel's global middleware, then route-specific middleware, is resolved by the router to a controller action, and the resulting response flows back out through the same middleware layers.

## Gin

The router matches the request to a handler chain, and each registered middleware calls `c.Next()` to hand control to the next function in the chain (including the final route handler); code after `c.Next()` in a middleware runs on the way back out, enabling cleanup or logging.

## Fiber

Follows the same onion-style model as Gin and Express — the router matches a handler chain, middleware call `c.Next()` to pass control forward, and code after that call executes as the response unwinds — but implemented on top of `fasthttp` rather than `net/http`.

## Actix

A request is picked up by the Tokio-based async runtime, passed through the chain of registered Transform/Service middleware, and dispatched to the matching resource handler; the response works its way back out through the same middleware chain asynchronously.

## Phoenix

The request arrives as a `Plug.Conn` struct and is transformed step by step: through the endpoint's top-level plugs, then the router's pipeline plugs for the matched scope, then the controller action (itself a plug), with rendering producing the final conn used to send the response.
