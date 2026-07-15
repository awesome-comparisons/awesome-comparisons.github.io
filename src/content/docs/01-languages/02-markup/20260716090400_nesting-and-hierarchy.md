---
title: Nesting and Hierarchy
description: How each markup language represents nested, hierarchical document structure.
---

## HTML

Nesting is explicit and unlimited in depth through parent/child tags, forming a full DOM tree; the browser's parser will still attempt to build a tree even from imperfectly nested markup.

## XML

Nesting is explicit, unlimited, and strictly enforced — every element must close in the reverse order it opened, and a schema (DTD/XSD) can further constrain which elements may nest inside which.

## Markdown

Nesting is shallow and convention-based — lists can nest via indentation and blockquotes can nest via repeated `>`, but there's no general mechanism for arbitrary nested custom structures without falling back to raw HTML.

## AsciiDoc

Supports deeper structural nesting than Markdown through explicit block delimiters and section levels (`=`, `==`, `===`), plus includes for composing large documents out of smaller nested files.

## reStructuredText

Nesting is primarily expressed through indentation, similar to Python itself — sections nest by title underline style, and directives/blocks nest by consistent indentation levels.

## LaTeX

Nesting is expressed through explicit `\begin{}`/`\end{}` environments and sectioning commands (`\chapter`, `\section`, `\subsection`), which can be nested arbitrarily deeply and are tracked by the compiler for things like numbering and tables of contents.
