---
title: Language and Framework Coupling
description: What language each validation library targets, and whether it's bound to a specific framework.
---

## Zod

TypeScript/JavaScript, fully framework-agnostic — used across Express, Next.js, tRPC, and countless other setups.

## Valibot

TypeScript/JavaScript, fully framework-agnostic, particularly popular in edge/serverless contexts where its small bundle size matters most.

## ArkType

TypeScript/JavaScript, fully framework-agnostic, usable anywhere Zod or Valibot would be.

## Joi

JavaScript/Node.js, framework-agnostic today, though historically closely associated with the hapi framework, which it was originally built alongside.

## Pydantic

Python, framework-agnostic but especially popular with FastAPI, which uses Pydantic models directly for request/response validation and OpenAPI schema generation.

## Marshmallow

Python, framework-agnostic, commonly paired with Flask projects, though usable in any Python codebase.

## Hibernate Validator (Bean Validation)

Java, framework-agnostic by design as the reference implementation of the JSR 380 standard, used by Spring Boot, Jakarta EE, and Quarkus alike.

## FluentValidation

C#/.NET, framework-agnostic within the .NET ecosystem, though most commonly wired into ASP.NET Core's request pipeline.

## go-playground/validator

Go, framework-agnostic, widely used across Gin, Echo, Fiber, and plain net/http projects.

## Garde

Rust, framework-agnostic, commonly paired with Axum or Actix Web, or used entirely standalone.

## Active Model Validations (Ruby on Rails)

Ruby, and inseparable from Rails — it isn't published or used as an independent library outside a Rails (or standalone Active Model) context.

## Laravel Validator

PHP, and tightly bound to Laravel — while its underlying rule logic can technically be used outside Laravel via the `illuminate/validation` package, it's designed for and almost always used within Laravel itself.
