---
title: Parallelization and Performance
description: How each unit testing framework runs tests quickly at scale.
---

## Jest

Parallelizes test files across worker processes by default, though a heavier startup cost per worker and a slower transform pipeline have made it noticeably slower than Vitest on large suites.

## Vitest

Runs on top of Vite's fast transform pipeline and parallelizes across worker threads, generally benchmarking significantly faster than Jest for equivalent test suites.

## Mocha

Runs tests serially in a single process by default; parallel execution was added later and requires explicit configuration rather than being the out-of-the-box default.

## pytest

Runs serially by default, with the popular `pytest-xdist` plugin adding parallel execution across multiple processes when needed.

## JUnit

Supports parallel test execution (introduced as a configurable feature in JUnit 5) at the class or method level, though it's opt-in rather than the default.

## RSpec

Runs serially by default; parallel execution requires an additional gem (like `parallel_tests`) splitting the suite across processes.

## Go testing

Parallelizes at the package level by default and supports marking individual tests with `t.Parallel()` for finer-grained concurrency within a package.

## xUnit

Parallelizes test classes by default (test collections run in parallel unless explicitly disabled), one of the more parallel-by-default frameworks in this group.

## PHPUnit

Runs serially by default; parallel execution requires a separate tool like ParaTest layered on top of PHPUnit itself.

## Rust built-in tests

Runs tests in parallel across threads by default automatically, requiring no configuration to get concurrent test execution.
