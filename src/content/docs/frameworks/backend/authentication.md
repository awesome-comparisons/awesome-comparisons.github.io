---
title: Authentication
description: How Express, Fastify, NestJS, Django, Flask, FastAPI, Ruby on Rails, Spring Boot, ASP.NET Core, Laravel, Gin, Fiber, Actix, and Phoenix handle user authentication.
---

## Express

Has no built-in authentication system. Passport.js is the long-standing standard, offering pluggable "strategies" for local, OAuth, and JWT-based login, often paired with `express-session` for session storage or `jsonwebtoken` for token-based auth.

## Fastify

Also ships without built-in auth; the `@fastify/jwt`, `@fastify/passport`, and `@fastify/session` plugins provide the equivalent building blocks within Fastify's plugin/decorator model.

## NestJS

Integrates Passport through the official `@nestjs/passport` package, with `AuthGuard` classes protecting routes based on the configured strategy, and an official `@nestjs/jwt` module for issuing and verifying tokens.

## Django

Includes a built-in `django.contrib.auth` app providing a `User` model, session-based login, permissions, and groups out of the box. Django REST Framework layers token and JWT authentication on top for API use cases.

## Flask

Has no built-in authentication; Flask-Login handles session-based user management and Flask-JWT-Extended is the common choice for token-based API authentication, both installed as separate extensions.

## FastAPI

Provides security utilities such as `OAuth2PasswordBearer` and `HTTPBearer` as injectable dependencies for extracting and validating credentials, but user storage, password hashing, and token issuance logic are left to the developer to implement.

## Ruby on Rails

Includes `has_secure_password` for straightforward bcrypt-based password authentication out of the box, while the Devise gem is the de facto standard for full-featured authentication (registration, confirmation, password resets, OAuth).

## Spring Boot

Spring Security is the standard, deeply integrated authentication and authorization framework, supporting form login, HTTP Basic, OAuth2/OpenID Connect, and JWT through a configurable filter chain.

## ASP.NET Core

ASP.NET Core Identity provides a complete built-in user management system (registration, password hashing, roles, two-factor auth), with cookie and JWT bearer authentication handlers configured directly in the middleware pipeline.

## Laravel

Ships with authentication scaffolding via starter kits (Breeze, Jetstream) and the underlying Fortify package for session-based web auth, plus Sanctum for lightweight API token/SPA authentication and Passport for full OAuth2 server support.

## Gin

Has no built-in authentication; teams typically implement JWT-based auth manually using a library like `golang-jwt`, wired in as custom middleware that validates tokens on protected routes.

## Fiber

Also has no built-in auth system, but the `fiber/jwt` middleware (wrapping `golang-jwt`) is a common drop-in for validating bearer tokens on protected route groups.

## Actix

Provides no built-in authentication; `actix-web-httpauth` supplies extractors for Basic/Bearer schemes, typically combined with the `jsonwebtoken` crate and custom middleware for verifying tokens.

## Phoenix

Doesn't bundle authentication by default, but the `mix phx.gen.auth` generator scaffolds a complete session-based authentication system directly into a new project. The Guardian library is the common choice for JWT-based API authentication.
