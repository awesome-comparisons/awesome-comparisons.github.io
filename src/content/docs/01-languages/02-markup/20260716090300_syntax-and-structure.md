---
title: Syntax and Structure
description: How each markup language marks up structure in a document.
---

## HTML

Uses paired opening/closing tags (`<p>...</p>`) with attributes for metadata, organized into a nested tree of elements that browsers parse into the DOM; many tags may be self-closing or optionally closed.

## XML

Uses strictly paired, case-sensitive tags with attributes, requiring every element to be properly closed and nested — there is no tolerance for the ambiguity HTML allows.

## Markdown

Uses lightweight, punctuation-based conventions — `#` for headings, `*`/`_` for emphasis, `-`/numbers for lists, backticks for code — designed to visually resemble the plain-text formatting people already used.

## AsciiDoc

Uses similar lightweight punctuation for inline formatting but adds explicit block syntax (`====` for examples, `----` for listings, attribute lines) for the richer document structures Markdown doesn't natively define.

## reStructuredText

Uses indentation and punctuation patterns — section titles underlined with repeated symbols, `::` for literal blocks, directives like `.. note::` — with every construct following one strict, documented form.

## LaTeX

Uses backslash-prefixed commands and environments (`\section{}`, `\begin{itemize}...\end{itemize}`) rather than tags, describing document structure and semantics that the TeX engine then typesets.
