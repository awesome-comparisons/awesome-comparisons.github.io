---
title: Async Testing Support
description: How each unit testing framework handles testing asynchronous code.
---

## Jest

Supports `async`/`await` directly in test functions, plus returning a Promise from a test, both handled natively without extra configuration.

## Vitest

Also supports `async`/`await` and Promise-returning tests natively, identical in behavior to Jest's async support.

## Mocha

Supports `async`/`await`, Promise-returning tests, and the older `done` callback style for asynchronous tests, having supported async patterns since well before native `async`/`await`.

## pytest

Supports async test functions through the `pytest-asyncio` plugin (or similar), since core pytest itself doesn't natively run `async def` tests without that extension.

## JUnit

Has no special async test syntax — asynchronous code is typically tested by blocking on the result (e.g. via `CompletableFuture.get()`) within an otherwise ordinary synchronous test.

## RSpec

Has no special built-in async syntax; asynchronous behavior is typically tested by waiting on results directly or using gems tailored to the async library in use.

## Go testing

Handles concurrency directly through Go's own goroutines and channels within a test function; the `testing` package has no special "async test" mode since Go's concurrency primitives are used as-is.

## xUnit

Supports `async Task` test methods natively — declaring a test method as `async` and awaiting inside it works out of the box.

## PHPUnit

Has no native async test support, consistent with PHP's traditionally synchronous execution model; async PHP libraries are typically tested by resolving to a final synchronous result.

## Rust built-in tests

Requires an async runtime attribute macro (like `#[tokio::test]`) to run `async fn` tests, since the built-in test harness itself only runs synchronous functions by default.
