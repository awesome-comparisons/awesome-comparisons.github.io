---
title: Error Handling and Messages
description: How each validation library reports and lets you customize validation errors.
---

## Zod

Returns a structured `ZodError` containing an array of issues (path, message, error code) for every failed rule, with custom messages settable per rule.

## Valibot

Returns a structured list of issues similar in shape to Zod's, with custom messages configurable per validator function.

## ArkType

Returns structured, precise error messages that describe exactly what shape was expected versus received, a particular point of emphasis in its design.

## Joi

Returns a structured `ValidationError` with a `details` array describing each failure, with custom messages configurable per rule or globally per schema.

## Pydantic

Raises a `ValidationError` containing a structured list of errors (location, message, type) for every failed field, easily serialized to JSON for API error responses.

## Marshmallow

Returns a dictionary of field names mapped to lists of error messages, with custom error messages configurable per field.

## Hibernate Validator (Bean Validation)

Returns a set of `ConstraintViolation` objects, each describing the failed property path and message, with messages customizable per annotation and externalizable to resource bundles for i18n.

## FluentValidation

Returns a `ValidationResult` containing a list of `ValidationFailure` objects (property name, error message), with fully customizable messages per rule, including support for localization.

## go-playground/validator

Returns a `ValidationErrors` slice of field-level errors describing the failed tag and field, with custom messages typically layered on by translating error codes yourself.

## Garde

Returns a `Report` containing path-keyed validation errors for every failed field, with custom messages settable per rule via macro attributes.

## Active Model Validations (Ruby on Rails)

Populates an `errors` object on the model instance with messages per attribute, with default messages overridable per validation and easily localized through Rails' i18n system.

## Laravel Validator

Populates an error "message bag" keyed by field name, with default messages overridable per rule and fully integrated with Laravel's localization files.
