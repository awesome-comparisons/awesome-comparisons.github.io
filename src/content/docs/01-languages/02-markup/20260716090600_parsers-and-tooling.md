---
title: Parsers and Tooling
description: How each markup language is processed into its final rendered form.
---

## HTML

Parsed directly by browser engines (Blink, Gecko, WebKit) into a DOM tree following the detailed, error-tolerant parsing algorithm specified in the HTML Living Standard.

## XML

Parsed by strict, standardized XML parsers (e.g. libxml2, Java's built-in XML APIs) into a DOM or streamed via SAX/StAX; any parser that encounters malformed XML is required to stop and report an error rather than guess.

## Markdown

Processed by one of many independent implementations (CommonMark reference implementations, `markdown-it`, `remark`, GitHub's own renderer) that convert it to HTML; behavior can differ subtly between processors since the format has no single canonical grammar.

## AsciiDoc

Primarily processed by the Asciidoctor toolchain (Ruby, with a JavaScript port), which converts documents to HTML, PDF, EPUB, and other formats with a more consistent, specification-driven pipeline than most Markdown tools.

## reStructuredText

Parsed by Python's docutils library, most commonly through the Sphinx documentation generator, which layers cross-referencing, indexing, and multi-format output (HTML, PDF, man pages) on top of the base parser.

## LaTeX

Processed by a TeX engine (pdfTeX, XeTeX, LuaTeX) that compiles the source, often across multiple passes, into a typeset output like PDF, resolving references, citations, and layout in the process.
