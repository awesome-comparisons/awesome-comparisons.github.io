---
title: Schema Definition API
description: How each validation library lets you define a schema or set of rules.
---

## Zod

Schemas are built by chaining methods on a base type (`z.object({ name: z.string().min(1) })`), composing larger schemas out of smaller ones the same way throughout.

## Valibot

Schemas are built by composing standalone functions (`object({ name: string([minLength(1)]) })`) rather than chaining methods, which is what makes unused validators tree-shakeable.

## ArkType

Schemas are written using a compact string syntax that mirrors TypeScript's own type syntax (`type({ name: "string>0" })`), parsed into validators at definition time.

## Joi

Schemas are built by chaining methods on a base type (`Joi.object({ name: Joi.string().min(1) })`), an API style Zod's design was itself influenced by.

## Pydantic

Schemas are ordinary Python classes with type-hinted fields (`class User(BaseModel): name: str`), with validation rules layered on through type hints, `Field()`, and validator decorators.

## Marshmallow

Schemas are declared as classes with explicit field objects (`name = fields.Str(required=True)`), keeping the schema definition separate from any plain Python domain object it maps to.

## Hibernate Validator (Bean Validation)

Rules are declared as annotations directly on class fields (`@NotNull`, `@Size(min = 1)`), validated by calling a `Validator` against an instance of the annotated class.

## FluentValidation

Rules are declared in a separate validator class using a fluent, chainable API (`RuleFor(x => x.Name).NotEmpty()`), explicitly decoupled from the model class being validated.

## go-playground/validator

Rules are declared as struct tags (`Name string \`validate:"required,min=1"\``), read via reflection when the struct is validated.

## Garde

Rules are declared as attributes on struct fields using a derive macro (`#[garde(length(min = 1))]`), generating a `Validate` trait implementation at compile time.

## Active Model Validations (Ruby on Rails)

Rules are declared as class-level macros directly in the model (`validates :name, presence: true`), read declaratively at the top of the class.

## Laravel Validator

Rules are declared as arrays of strings or rule objects, either inline in a controller or extracted into a dedicated Form Request class (`'name' => 'required|string|min:1'`).
