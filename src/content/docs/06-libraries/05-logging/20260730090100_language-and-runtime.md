---
title: Language and Runtime
description: What language and runtime each logging library targets.
---

## Winston

JavaScript/TypeScript, running on Node.js.

## Pino

JavaScript/TypeScript, running on Node.js, the default logger for the Fastify framework.

## Python logging

Python, part of the standard library itself, requiring no external dependency.

## Loguru

Python, a third-party library designed as a drop-in improvement over the standard library's `logging` module.

## Log4j2

Java (and other JVM languages), widely used directly and as a backend implementation for the SLF4J facade.

## Logback

Java (and other JVM languages), designed from the start as SLF4J's native implementation.

## Zap

Go, a standalone third-party library.

## slog

Go, part of the standard library since Go 1.21, requiring no external dependency for basic use.

## tracing

Rust, a standalone crate widely used alongside async runtimes like Tokio.

## Serilog

C#/.NET, a standalone third-party library.

## Monolog

PHP, a standalone library implementing the PSR-3 standard logging interface used across the PHP ecosystem.
