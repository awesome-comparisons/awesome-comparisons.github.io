---
title: Context and Correlation
description: How each logging library attaches shared context (like a request ID) across related log entries.
---

## Winston

Supports child loggers that inherit and extend a parent's default metadata, commonly used to attach a request ID to every log line within a single request's handling.

## Pino

Supports child loggers (`logger.child({ requestId })`) that automatically include the given fields on every subsequent log call made through them.

## Python logging

Supports context via `LoggerAdapter` or, more robustly, `contextvars`-based filters to automatically attach request-scoped data across async code without passing it explicitly everywhere.

## Loguru

Supports binding context to a logger (`logger.bind(request_id=...)`) which then automatically appears on every subsequent log call made through that bound logger.

## Log4j2

Supports the Mapped Diagnostic Context (MDC), a thread-local key-value store that gets automatically included in every log line written from that thread.

## Logback

Also supports MDC, inherited from the same design lineage as Log4j2, for attaching request-scoped context to every log line on a thread.

## Zap

Supports attaching fields to a logger instance (`logger.With(...)`) that then appear on every subsequent call made through that derived logger, commonly used per-request.

## slog

Supports attaching fields to a logger (`logger.With(...)`) the same way Zap does, producing a derived logger that includes that context on every call.

## tracing

Its defining feature — spans represent a scope of execution (like a request) and any events logged within that span automatically inherit its fields, working correctly even across concurrent async tasks.

## Serilog

Supports "enrichers" and `LogContext.PushProperty()` to attach ambient properties to every log event emitted within a given scope, including across async/await boundaries.

## Monolog

Supports a "processor" mechanism that can inject shared context (like a request ID) into every log record before it's handled, applied consistently across all configured handlers.
