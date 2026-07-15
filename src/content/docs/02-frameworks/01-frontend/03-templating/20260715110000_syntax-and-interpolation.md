---
title: Syntax and Interpolation
description: How each templating language delimits and outputs dynamic values within a template.
---

## Pug

Pug uses significant whitespace and indentation instead of closing tags, generating HTML elements from bare tag names. Dynamic output is written inline with `#{expression}` for string interpolation or via buffered code lines prefixed with `=`.

## Mustache

Mustache uses double-curly-brace tags, with `{{ variable }}` rendering an HTML-escaped value looked up from the current context. Its syntax is intentionally minimal, offering no expressions beyond simple variable and section tags.

## Handlebars

Handlebars keeps Mustache's `{{ variable }}` interpolation syntax but adds `{{{ }}}` for unescaped output and `{{helper arg}}` calls for invoking registered helper functions. This layers expression-like capability on top of an otherwise familiar Mustache-style tag format.

## Blade

Blade, Laravel's engine, uses `{{ $variable }}` for escaped output and compiles directly down to plain PHP, so any PHP expression can appear inside the braces. Raw, unescaped output uses the `{!! $variable !!}` syntax instead.

## ERB

ERB embeds Ruby directly in templates using `<% %>` tags for statements and `<%= %>` tags for expressions whose return value is inserted into the output. This gives templates full access to arbitrary Ruby code at the point of interpolation.

## Django Templates

Django Templates use `{{ variable }}` for output, restricted to simple dotted-path lookups and filters rather than arbitrary expressions, reflecting the template language's deliberately constrained design. Filters are applied with a pipe, as in `{{ value|filter }}`.

## Jinja2

Jinja2 also uses `{{ expression }}` for output, but supports a much richer expression language including method calls, arithmetic, and inline conditionals within the braces. Statements like loops and blocks use a separate `{% %}` tag delimiter.

## EJS

EJS embeds JavaScript in HTML using `<% %>` for control-flow statements and `<%= %>` for escaped output, with `<%- %>` reserved for raw, unescaped HTML insertion. The syntax closely mirrors ERB's tag conventions but runs on JavaScript.

## Twig

Twig, modeled on Jinja2, uses `{{ expression }}` for output and `{% %}` for statements, supporting filters, method calls, and a fairly expressive expression syntax. Output is HTML-escaped by default.

## Thymeleaf

Thymeleaf takes an attribute-based approach, adding `th:text` or `th:value` attributes to ordinary HTML tags rather than using bracket delimiters embedded in text. It also supports inline expression syntax like `[[${expression}]]` for output within the body of an element.

## Edge.js

Edge, AdonisJS's templating engine, uses `{{ expression }}` to evaluate and output a JavaScript expression with automatic HTML escaping. Raw, unescaped output uses the triple-brace form `{{{ expression }}}`.
