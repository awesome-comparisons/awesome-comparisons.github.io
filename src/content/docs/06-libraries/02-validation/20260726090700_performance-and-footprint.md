---
title: Performance and Footprint
description: How each validation library performs and how much size or overhead it adds.
---

## Zod

Zod 4 significantly improved performance over Zod 3, though it remains noticeably larger than Valibot in bundle size (roughly 17.7KB for a simple schema vs Valibot's 1.37KB), a tradeoff for its more ergonomic chainable API.

## Valibot

Built specifically to minimize bundle size through tree-shakeable functions — around 90% smaller than Zod's standard build for equivalent schemas, making it a common choice for edge functions and browser-shipped code.

## ArkType

Competitive with Zod on runtime performance, with the performance gap between the two narrowing significantly as both libraries have matured (roughly 1.7x in independent 2026 benchmarks).

## Joi

Reasonably performant for typical request validation, though as an older library it wasn't designed with today's bundle-size-conscious, edge-runtime constraints in mind.

## Pydantic

Pydantic v2's validation core (`pydantic-core`) is written in Rust, giving it dramatically better performance than the pure-Python Pydantic v1, and making it one of the fastest validation libraries across any language in this group.

## Marshmallow

Pure Python and noticeably slower than Pydantic v2 for equivalent workloads, since it has no compiled core to fall back on.

## Hibernate Validator (Bean Validation)

Runs on the JVM with reflection-based validation; overhead is generally acceptable for typical request validation but higher than compiled-language validators for very high-throughput scenarios.

## FluentValidation

Runs on .NET with minimal overhead for typical use, benefiting from the CLR's JIT compilation, though building validators reflectively at startup adds a small one-time cost.

## go-playground/validator

Uses reflection to read struct tags, which adds some overhead compared to hand-written validation code, but remains fast enough for the overwhelming majority of Go web services.

## Garde

Uses derive macros to generate validation code at compile time rather than relying on runtime reflection, giving it minimal runtime overhead consistent with Rust's zero-cost-abstraction goals.

## Active Model Validations (Ruby on Rails)

Runs within Ruby's interpreted runtime; performance is rarely a bottleneck for typical form/model validation, though it's slower in absolute terms than compiled-language equivalents.

## Laravel Validator

Runs within PHP's runtime with modest overhead for typical request validation, generally not a performance concern relative to the rest of a typical web request's cost.
