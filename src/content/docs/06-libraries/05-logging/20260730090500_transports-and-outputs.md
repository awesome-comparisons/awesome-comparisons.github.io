---
title: Transports and Outputs
description: Where each logging library can send log output.
---

## Winston

Supports a large ecosystem of community "transports" (over 80) covering files, databases, and virtually every popular log aggregation service, its single biggest differentiator from Pino.

## Pino

Ships a minimal core focused on writing JSON to stdout, with additional destinations (files, log services) handled by separate transport packages that run in worker threads to avoid blocking the main event loop.

## Python logging

Ships built-in handlers for files, rotating files, syslog, HTTP, and more, with third-party handlers available for virtually any external logging service.

## Loguru

Calls output destinations "sinks" and supports files (with built-in rotation/retention), stdout/stderr, and custom callables, with third-party integrations available for external services.

## Log4j2

Ships a wide range of built-in "appenders" (console, file, rolling file, database, network sockets, and more), plus a large ecosystem of additional appenders for external systems.

## Logback

Also ships a wide range of built-in appenders similar in scope to Log4j2's, reflecting their shared authorship and design lineage.

## Zap

Writes to any `io.Writer`, keeping the core library simple while making it easy to direct output to files, network sockets, or anything else Go's standard I/O interfaces support.

## slog

Writes through pluggable "handlers," with built-in text and JSON handlers, and third-party handlers available for external logging platforms.

## tracing

Writes through pluggable "subscribers," with implementations available for console output, JSON, OpenTelemetry export, and other observability backends.

## Serilog

Ships a large ecosystem of "sinks" covering files, consoles, and most major structured-log platforms (Seq, Elasticsearch, and many others), configured declaratively.

## Monolog

Ships a large set of built-in "handlers" covering files, syslog, email, Slack, and most major log aggregation services, one of its most widely relied-upon features.
