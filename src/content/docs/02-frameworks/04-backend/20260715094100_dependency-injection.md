---
title: Dependency Injection
description: Which of Express, Fastify, NestJS, Django, Flask, FastAPI, Ruby on Rails, Spring Boot, ASP.NET Core, Laravel, Gin, Fiber, Actix, and Phoenix provide a built-in DI container versus relying on manual wiring.
---

## Express

Has no built-in dependency injection container; dependencies are typically imported directly or passed manually through function parameters and closures. Libraries like Awilix or InversifyJS can be added if a formal container is wanted.

## Fastify

Has no formal DI system, but its plugin/encapsulation model provides similar benefits: `decorate()`/`decorateRequest()` attach shared dependencies to the app or request objects, scoped to whichever part of the plugin tree registers them.

## NestJS

Dependency injection is central to the framework, modeled closely on Angular's — providers are declared in modules and resolved through a full IoC container, with constructor-based injection used throughout controllers and services.

## Django

Has no built-in DI container. Dependencies are generally imported directly or configured via Django settings, with some larger codebases adopting manual service-layer patterns rather than constructor injection.

## Flask

Has no built-in dependency injection. The application factory pattern and extensions attached to the `app` object serve a loosely similar purpose, and third-party DI libraries can be added but aren't idiomatic.

## FastAPI

Includes a built-in dependency injection system via the `Depends()` function, resolved fresh per request. It's used pervasively for things like database sessions, authentication, and shared validation logic, not just for testing convenience.

## Ruby on Rails

Has no formal dependency injection container. Rails relies on Ruby's autoloading and conventions like service objects and modules rather than constructor injection to manage dependencies.

## Spring Boot

Dependency injection is foundational to the framework, built on the Spring IoC container. Beans are declared with annotations like `@Component`, `@Service`, and `@Repository`, and injected via `@Autowired` or (preferably) constructor injection.

## ASP.NET Core

Ships with a built-in DI container configured in `Program.cs` (`services.AddScoped/AddTransient/AddSingleton`), and constructor injection is the standard, idiomatic way services and controllers receive their dependencies throughout the framework.

## Laravel

Has a built-in service container that resolves constructor-injected dependencies automatically, with service providers registering bindings (including interface-to-implementation bindings) for the container to resolve.

## Gin

Has no built-in dependency injection container; dependencies are usually passed explicitly through closures or embedded as fields on handler structs.

## Fiber

Also has no built-in DI container. Like Gin, dependencies are typically threaded through manually via closures or struct fields rather than resolved by a framework-provided container.

## Actix

Has no formal dependency injection container. Shared state is passed explicitly using `App::app_data()` and retrieved in handlers via the `web::Data<T>` extractor, rather than through constructor injection.

## Phoenix

Has no formal dependency injection framework. Elixir's idioms favor explicitly passing state and configuration through function arguments and behaviours rather than relying on an injection container.
