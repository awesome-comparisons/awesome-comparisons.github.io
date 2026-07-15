---
title: Testing
description: The built-in or standard testing tools and patterns for Express, Fastify, NestJS, Django, Flask, FastAPI, Ruby on Rails, Spring Boot, ASP.NET Core, Laravel, Gin, Fiber, Actix, and Phoenix.
---

## Express

Has no built-in testing tools; the common pattern pairs a test runner like Jest or Mocha with Supertest to make HTTP-level assertions directly against the exported Express app instance, without needing a real network socket.

## Fastify

Exposes a built-in `inject()` method that simulates HTTP requests against the app in-process, without binding to a real port, and is commonly used alongside Jest or Tap for assertions.

## NestJS

Provides a dedicated `@nestjs/testing` module with a `TestingModule` that mirrors the application's real dependency injection container, letting tests override providers cleanly for both unit tests and full end-to-end tests, typically run with Jest.

## Django

Ships with a built-in test framework layered on Python's `unittest`, including a `TestCase` class, a test client for simulating requests without a running server, and automatic creation/teardown of a dedicated test database per run.

## Flask

Provides a built-in test client via `app.test_client()` for simulating requests against the application in-process, most commonly used together with `pytest` for assertions and fixtures.

## FastAPI

Uses Starlette's `TestClient` (backed by `httpx`), which lets tests make synchronous-looking calls to async endpoints without running a live server; it integrates naturally with `pytest`, including async test support via `pytest-asyncio` or an async client.

## Ruby on Rails

Has built-in support for Minitest with fixtures and test helpers generated alongside models and controllers, though RSpec is a very popular alternative in the community; system tests use Capybara to drive full browser-level integration tests.

## Spring Boot

`spring-boot-starter-test` bundles JUnit, Mockito, AssertJ, and Spring's own test support, including `MockMvc` for testing the web layer in isolation and `@SpringBootTest` for full application-context integration tests.

## ASP.NET Core

`WebApplicationFactory` (from `Microsoft.AspNetCore.Mvc.Testing`) spins up an in-memory version of the application for integration tests, commonly paired with xUnit, allowing HTTP requests to be sent to the app without a real network listener.

## Laravel

Ships with PHPUnit configured out of the box, plus expressive built-in test helpers for HTTP assertions, database refreshing between tests, and model factories for generating test data; Pest has become a popular alternative syntax layered on the same underlying tooling.

## Gin

Has no dedicated testing framework beyond Go's standard `testing` package; the common pattern uses `net/http/httptest`'s `ResponseRecorder` together with the Gin router to simulate requests and assert on responses.

## Fiber

Similarly relies on Go's standard `testing` package, but provides its own `app.Test()` helper method for sending simulated requests directly through the app without opening a real network listener.

## Actix

Uses Rust's standard `#[test]` attribute combined with the `actix_web::test` module, which provides `TestRequest` builders and `call_service`/`call_and_read_body` helpers for exercising handlers and services in-process.

## Phoenix

Built on Elixir's ExUnit test framework, with `Phoenix.ConnTest` providing helpers to simulate requests through the conn pipeline and assert on responses; Channels and LiveView each come with their own dedicated testing helpers for their respective real-time interaction models.
