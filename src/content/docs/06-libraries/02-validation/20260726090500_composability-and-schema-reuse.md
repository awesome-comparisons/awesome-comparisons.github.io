---
title: Composability and Schema Reuse
description: How each validation library lets you extend, combine, and reuse schemas.
---

## Zod

Schemas compose naturally through methods like `.extend()`, `.merge()`, `.pick()`, `.omit()`, and support unions/intersections, making it easy to build larger schemas from smaller reusable pieces.

## Valibot

Composes schemas by nesting and combining the same standalone functions used to build them, with dedicated utilities for unions, intersections, and partial/picked variants.

## ArkType

Composes schemas through its type-syntax operators (like `|` for unions and `&` for intersections), reading similarly to how you'd compose TypeScript types themselves.

## Joi

Composes schemas through methods like `.concat()` and `.keys()`, letting you build on top of existing schemas rather than starting from scratch.

## Pydantic

Composes schemas through class inheritance (a model can extend another model) and by nesting models as fields, a natural fit for Python's existing object model.

## Marshmallow

Composes schemas through class inheritance and by nesting schemas as fields, similar in spirit to Pydantic's approach.

## Hibernate Validator (Bean Validation)

Composes constraints through Java class inheritance and by validating nested objects with `@Valid`, plus supports grouping constraints into different validation "profiles."

## FluentValidation

Composes validators by calling `SetValidator()` to nest one validator inside another, and supports validator inheritance for shared base rules.

## go-playground/validator

Composes rules by nesting structs (nested struct fields are validated automatically) and via the `dive` tag for validating each element of a slice or map.

## Garde

Composes rules by nesting structs that each derive their own `Validate` implementation, with the outer struct's validation automatically covering nested fields.

## Active Model Validations (Ruby on Rails)

Composes rules through Ruby module inclusion (shared validation modules mixed into multiple models) and conditional validations (`validates ..., if: :some_condition`).

## Laravel Validator

Composes rules through reusable custom Rule classes and Form Request classes that can be extended, plus array-based rule sets that are easy to merge across contexts.
