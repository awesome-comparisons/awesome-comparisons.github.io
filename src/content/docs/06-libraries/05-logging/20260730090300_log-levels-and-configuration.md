---
title: Log Levels and Configuration
description: How each logging library lets you configure log levels and behavior.
---

## Winston

Supports configurable log levels (including fully custom level sets) with per-transport level filtering, so different outputs can capture different severities from the same logger.

## Pino

Supports the standard set of levels (trace through fatal) with a single numeric level threshold per logger instance, deliberately simpler than Winston's per-transport level configuration.

## Python logging

Supports a hierarchical logger namespace where each logger can have its own level and handlers, configurable via code or declarative dictConfig/fileConfig setups.

## Loguru

Supports the same general level concept as the standard library but with a much simpler configuration API — adding a new "sink" with its own level and format is typically a single function call.

## Log4j2

Supports a hierarchical logger configuration (by package/class) with per-appender level filtering, configurable via XML, JSON, YAML, or properties files, plus automatic reconfiguration on file changes.

## Logback

Also supports hierarchical, per-package logger configuration via XML or Groovy config files, with the same automatic-reload capability Log4j2 offers.

## Zap

Supports configurable levels with an atomic level type that can be changed at runtime without restarting the process, useful for adjusting verbosity in a running service.

## slog

Supports a small set of built-in levels (Debug, Info, Warn, Error) plus custom levels via arbitrary integers, with level filtering configured per handler.

## tracing

Supports level filtering per-span or per-target through its `EnvFilter`, commonly configured via an environment variable at startup for fine-grained, module-by-module control.

## Serilog

Supports a minimum level per sink plus dynamic level switching at runtime via a `LoggingLevelSwitch`, without needing to restart the application.

## Monolog

Supports the standard PSR-3 level set with per-handler level filtering, so different handlers (files, external services) can each capture a different severity threshold.
