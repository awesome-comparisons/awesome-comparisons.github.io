---
title: Test Syntax and Structure
description: How tests are written and organized in each unit testing framework.
---

## Jest

Tests are organized with global `describe`/`it` (or `test`) functions, with `beforeEach`/`afterEach` hooks for setup and teardown.

## Vitest

Uses the same `describe`/`it`/`test` API shape as Jest almost exactly, deliberately easing migration for teams switching from Jest.

## Mocha

Also uses `describe`/`it` blocks for structure, but requires a separate library (typically Chai) to actually write assertions inside them.

## pytest

Tests are plain functions prefixed with `test_`, grouped into files pytest auto-discovers; fixtures (via the `@pytest.fixture` decorator) handle setup/teardown instead of explicit hook methods.

## JUnit

Tests are methods annotated `@Test` inside a test class, with `@BeforeEach`/`@AfterEach` annotations for setup and teardown.

## RSpec

Tests are written as nested `describe`/`context`/`it` blocks with natural-language descriptions, designed to read like a specification document.

## Go testing

Tests are plain functions named `TestXxx` taking a `*testing.T` parameter, placed in `_test.go` files alongside the code they test.

## xUnit

Tests are methods annotated `[Fact]` (for a single case) or `[Theory]` (for parameterized cases) inside a plain C# class, with constructor/`IDisposable` used for setup/teardown instead of special lifecycle annotations.

## PHPUnit

Tests are methods prefixed `test` (or annotated `#[Test]`) inside a class extending `TestCase`, with `setUp()`/`tearDown()` methods for lifecycle hooks.

## Rust built-in tests

Tests are plain functions annotated `#[test]`, typically placed in a `#[cfg(test)] mod tests` block within the same file as the code being tested.
