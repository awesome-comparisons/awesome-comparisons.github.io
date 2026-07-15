---
title: Custom and Async Validation
description: How each validation library supports custom rules and asynchronous checks (like a uniqueness lookup against a database).
---

## Zod

Supports custom synchronous rules via `.refine()`/`.superRefine()`, and dedicated async variants (`.refine()` accepts an async function) for checks like database lookups.

## Valibot

Supports custom validation through its `check()` action, including async variants, following the same functional composition style as its other validators.

## ArkType

Supports custom validation through its `.narrow()` method for arbitrary predicate logic, with async validation support more limited than Zod's or Valibot's mature async story.

## Joi

Supports custom rules via `.custom()`, including asynchronous custom methods, one of the more mature async validation stories in the JavaScript ecosystem given Joi's age.

## Pydantic

Supports custom validation via `@field_validator`/`@model_validator` decorators; async validators aren't run automatically during model construction, so async checks are typically performed separately after validation.

## Marshmallow

Supports custom validation via the `@validates` decorator for per-field rules and `@validates_schema` for cross-field rules, with async support requiring extra handling since Marshmallow's core validation is synchronous.

## Hibernate Validator (Bean Validation)

Supports custom constraints by implementing `ConstraintValidator`, but the specification is fundamentally synchronous — async checks like uniqueness are typically performed outside the validation layer.

## FluentValidation

Supports custom rules via `.Must()` and has first-class async support via `MustAsync()`/`ValidateAsync()`, making database-backed rules straightforward to express.

## go-playground/validator

Supports custom validation functions registered via `RegisterValidation()`, though the library's validation flow is synchronous, so async checks are typically done separately.

## Garde

Supports custom validation via a `custom` rule pointing to your own function, with async checks generally handled outside Garde's synchronous validation pass, consistent with the rest of the Rust validator/garde lineage.

## Active Model Validations (Ruby on Rails)

Supports fully custom validation methods and validator classes, including checks against the database (like `uniqueness: true`), since Rails validations run synchronously within the request/response cycle Ruby already blocks on.

## Laravel Validator

Supports custom Rule classes and closures for arbitrary logic, plus built-in database-aware rules like `unique:table,column` and `exists:table,column` for common async-style lookups.
