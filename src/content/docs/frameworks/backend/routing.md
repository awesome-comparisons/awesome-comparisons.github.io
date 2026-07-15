---
title: Routing
description: How Express, Fastify, NestJS, Django, Flask, FastAPI, Ruby on Rails, Spring Boot, ASP.NET Core, Laravel, Gin, Fiber, Actix, and Phoenix define and match HTTP routes.
---

## Express

Routes are defined imperatively with `app.get`/`app.post`/etc. or grouped with `express.Router()` for modular mounting. Matching is unopinionated and based on `path-to-regexp`, with handlers chained as ordinary middleware functions. There's no built-in convention beyond what the developer wires up.

## Fastify

Fastify uses the same verb-based route declaration style as Express but backs it with the `find-my-way` radix-tree router for very fast lookups. Routes are typically declared with an options object that includes a JSON schema for validation/serialization. Plugins encapsulate routes so they can be registered with isolated prefixes and dependencies.

## NestJS

Routing is declarative via decorators: `@Controller('path')` on a class and `@Get()`/`@Post()` on its methods. Nest builds the actual route table on top of an underlying HTTP adapter (Express or Fastify), so the low-level matching behavior is inherited from whichever is configured. Controllers are grouped into modules for organization.

## Django

URLs are resolved through a dedicated URL dispatcher: a project-level `urls.py` maps patterns (via `path()` or `re_path()`) to view functions or class-based views, often delegating to per-app `urls.py` files. Route matching is explicit and centralized rather than scattered across decorators.

## Flask

Routes are declared with the `@app.route()` decorator directly on view functions, with `Blueprint` objects used to group and prefix related routes for larger applications. Matching is handled by Werkzeug's routing system underneath. There's no separate router file — routes live next to their handlers.

## FastAPI

Routes are declared with decorators like `@app.get()`/`@app.post()`, where path and query parameters are extracted automatically from Python type hints and validated with Pydantic. `APIRouter` allows grouping routes into modules that are included into the main app. Route definitions simultaneously produce the OpenAPI schema.

## Ruby on Rails

Routing is convention-heavy and centralized in `config/routes.rb`, using a DSL where `resources :posts` generates a full set of RESTful routes in one line. Named route helpers (`posts_path`) are generated automatically, reinforcing Rails' "convention over configuration" philosophy.

## Spring Boot

Routes are defined with annotations such as `@RestController`, `@RequestMapping`, and method-specific variants like `@GetMapping`, resolved by Spring MVC's `DispatcherServlet`. Path variables, request parameters, and content negotiation are handled declaratively through the annotation metadata.

## ASP.NET Core

Supports both attribute routing (`[HttpGet("path")]` on controller actions) and centralized conventional routing (`MapControllerRoute`), plus a lightweight Minimal API style (`app.MapGet("/path", ...)`) for defining endpoints without controllers at all.

## Laravel

Routes are defined with an expressive DSL in `routes/web.php` and `routes/api.php` (`Route::get()`, `Route::resource()`), with route model binding automatically resolving Eloquent models from URL segments. Route groups apply shared prefixes, middleware, or namespaces.

## Gin

Uses a lightweight radix-tree router (derived from httprouter) accessed through `engine.GET`/`POST`/etc., with `router.Group()` used to apply shared prefixes and middleware to a set of related routes. Matching is fast and allocation-light, fitting Gin's minimalist design.

## Fiber

Provides an Express-inspired API (`app.Get`, `app.Post`) built on top of `fasthttp` rather than Go's standard `net/http`, using its own optimized muxer for route matching. Route groups (`app.Group()`) work the same way as in Express for shared prefixes and middleware.

## Actix

Routes are declared either with attribute macros (`#[get("/path")]` on handler functions) or programmatically via `App::route`/`.service()`, and can be scoped under a common prefix. Actix also supports "guards" that further filter which requests a route accepts based on method, header, or custom logic.

## Phoenix

Routing is centralized in a `Router` module using a macro-based DSL (`get "/path", PageController, :index`) organized into `scope`s and `pipeline`s that apply shared plugs to groups of routes. Route matching is compiled ahead of time for speed and clarity.
