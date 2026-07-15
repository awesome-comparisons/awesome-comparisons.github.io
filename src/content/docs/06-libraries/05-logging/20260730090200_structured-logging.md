---
title: Structured Logging
description: How each logging library represents log entries — plain text versus structured, machine-parsable data.
---

## Winston

Supports structured JSON output through configurable formatters, though plain, human-readable text formatting is equally common depending on how a project configures it.

## Pino

Outputs structured JSON by default as its primary format, with human-readable formatting handled by a separate transform (`pino-pretty`) layered on top for local development.

## Python logging

Produces plain-text log lines by default; structured (JSON) output requires a custom `Formatter` subclass or a third-party extension, since it isn't a first-class built-in feature.

## Loguru

Produces colorized, human-readable text by default, with structured JSON output available as a configurable option (`serialize=True`) rather than the default.

## Log4j2

Supports structured output (JSON, XML) through configurable layouts, alongside its traditional plain-text pattern layout, chosen per appender.

## Logback

Also supports structured output through configurable encoders (including a JSON encoder), alongside its traditional plain-text pattern layout.

## Zap

Outputs structured JSON by default in production configurations, with a human-readable console encoder available for local development.

## slog

Built around structured key-value logging as its core model, with both a JSON handler and a human-readable text handler shipped in the standard library.

## tracing

Built around structured, typed fields attached to spans and events from the ground up, with JSON or human-readable formatting handled by pluggable subscriber implementations.

## Serilog

Structured logging is its defining feature — log messages use named property placeholders (`"User {UserId} logged in"`) that produce genuinely structured data, not just formatted strings.

## Monolog

Produces plain-text lines by default via its line formatter, with a JSON formatter available and commonly used for shipping logs to structured log aggregation services.
