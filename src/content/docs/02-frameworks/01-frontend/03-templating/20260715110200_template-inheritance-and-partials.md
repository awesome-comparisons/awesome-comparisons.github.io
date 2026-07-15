---
title: Template Inheritance and Partials
description: How each templating language lets templates share layouts and reuse smaller fragments across pages.
---

## Pug

Pug supports `extends` to inherit a parent layout and `block` to define named sections that child templates override, along with a separate `include` keyword for pulling in reusable partial files. This gives a Django/Jinja2-like inheritance model alongside straightforward file inclusion.

## Mustache

Mustache reuses its section syntax for partials via `{{> partialName}}`, which inlines another named template at that point. It has no dedicated inheritance/block-override mechanism, so layout composition typically relies on convention or host-application code rather than a built-in `extends` keyword.

## Handlebars

Handlebars supports partials with `{{> partialName}}`, similar to Mustache, and adds partial blocks (`{{#> partialName}}...{{/partialName}}`) that let a caller supply default content a partial can override. True layout inheritance is usually handled by the surrounding application rather than Handlebars itself.

## Blade

Blade provides explicit layout inheritance with `@extends('layout')`, `@section('name')`/`@endsection` in child templates, and `@yield('name')` in the parent layout to mark insertion points. Reusable fragments are included with `@include('partial')`, and components offer a more structured alternative for reusable pieces.

## ERB

Rails layers layout and partial conventions on top of plain ERB: controller actions render into a shared `layout` file automatically, and `render partial: 'name'` includes reusable `_name.html.erb` partial files. ERB itself has no `extends`/`block` syntax — this is an ActionView/Rails convention rather than a language feature.

## Django Templates

Django Templates provide `{% extends "base.html" %}` for layout inheritance and `{% block name %}...{% endblock %}` to define overridable sections in the parent that children fill in. Smaller reusable pieces are pulled in with `{% include "partial.html" %}`.

## Jinja2

Jinja2 mirrors Django's model closely, with `{% extends "base.html" %}` and `{% block name %}...{% endblock %}` for inheritance, plus `{% include "partial.html" %}` for including other templates and macros for reusable parameterized snippets.

## EJS

EJS has no built-in inheritance system; composition is done with `<%- include('partial') %>` to insert another template file's rendered output inline. Layout-style patterns are typically achieved through nested includes or handled by a surrounding framework rather than native EJS constructs.

## Twig

Twig follows the Jinja2-inspired model with `{% extends 'base.html.twig' %}` and `{% block name %}...{% endblock %}` for layout inheritance, plus `{% include 'partial.html.twig' %}` for embedding other templates and reusable "embed" blocks for hybrid cases.

## Thymeleaf

Thymeleaf uses fragment expressions rather than a linear extends chain: fragments are defined with `th:fragment` and pulled into other templates with `th:insert` or `th:replace`, letting layouts assemble pages from named, reusable pieces of markup. This fragment-based composition serves the role that inheritance plays in other engines.

## Edge.js

Edge wraps page content with a base structure via the `@layout()` tag, with the layout rendering the page's content through a `$slots.main()` call. Reusable fragments are defined as components under `resources/views/components/` and consumed as their own tags elsewhere.
