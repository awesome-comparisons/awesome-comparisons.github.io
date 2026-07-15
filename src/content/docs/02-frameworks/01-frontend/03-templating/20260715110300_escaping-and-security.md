---
title: Escaping and Security
description: How each templating language handles HTML auto-escaping by default and how developers opt out for raw output.
---

## Pug

Pug HTML-escapes interpolated output by default when using `#{expression}` or the buffered `=` syntax, preventing accidental injection of raw markup. Unescaped output is available via the `!{expression}` syntax or the unbuffered `!=` form when raw HTML is intentionally needed.

## Mustache

Mustache auto-escapes standard `{{ variable }}` tags, converting HTML-sensitive characters to entities. Raw, unescaped output is available through triple-mustache tags `{{{ variable }}}` or the equivalent `{{& variable}}` form, which should only be used for trusted content.

## Handlebars

Handlebars follows Mustache's convention, auto-escaping `{{ variable }}` output and requiring the explicit triple-brace `{{{ variable }}}` syntax to render raw HTML. This keeps the safe default while still allowing an explicit, visible opt-out.

## Blade

Blade auto-escapes `{{ $variable }}` output through PHP's `htmlspecialchars`, and requires the distinct `{!! $variable !!}` syntax to emit raw HTML. The visual difference between the two forms makes unescaped output easy to spot in review.

## ERB

Plain ERB in Ruby does not auto-escape output by default, so a bare `<%= variable %>` inserts a string as-is. Rails' ActionView layers auto-escaping on top of ERB so that string interpolation is escaped automatically, with `.html_safe` or `raw()` used to explicitly mark or force unescaped content.

## Django Templates

Django Templates auto-escape all variable output by default as part of its `autoescape` context processor behavior, converting characters like `<` and `&` to entities. Escaping can be disabled per-value with the `|safe` filter or for a block with `{% autoescape off %}`.

## Jinja2

Jinja2 supports auto-escaping and it is the default in web-framework integrations like Flask, though the escaping behavior must be explicitly enabled when Jinja2 is used standalone. The `|safe` filter or `Markup`/`{% autoescape %}` block marks content as pre-sanitized to bypass escaping.

## EJS

EJS escapes output written with `<%= %>`, HTML-encoding the result automatically, while the `<%- %>` tag deliberately renders the value unescaped. Developers choose between the two tags explicitly depending on whether the content is trusted markup.

## Twig

Twig auto-escapes output by default, matching its Jinja2 heritage, and requires an explicit `|raw` filter to bypass escaping for a given value. This default-safe behavior is a core part of Symfony's security posture for rendered templates.

## Thymeleaf

Thymeleaf auto-escapes text rendered via `th:text` and inline `[[${...}]]` expressions, escaping HTML-sensitive characters by default. Unescaped, literal HTML output is available through `th:utext` or the unescaped inline syntax `[(${...})]` when the content is already trusted markup.

## Edge.js

Edge auto-escapes the standard `{{ expression }}` output form to guard against HTML injection, mirroring Mustache/Handlebars' convention. The triple-brace `{{{ expression }}}` form opts into rendering raw, unescaped HTML when the content is already trusted.
