---
title: Mocking and Test Doubles
description: How each unit testing framework supports mocks, stubs, and spies.
---

## Jest

Ships comprehensive built-in mocking (`jest.fn()`, `jest.mock()`, module mocking, timer mocking) with no separate library needed.

## Vitest

Ships Jest-compatible built-in mocking (`vi.fn()`, `vi.mock()`), including module and timer mocking, mirroring Jest's API closely.

## Mocha

Has no built-in mocking at all — teams typically add Sinon.js for spies, stubs, and mocks alongside their chosen assertion library.

## pytest

Relies on Python's built-in `unittest.mock` module (commonly used via the `pytest-mock` plugin for cleaner fixture-based integration) rather than shipping its own mocking system.

## JUnit

Has no built-in mocking — Mockito is the near-universal standard companion library for mocks and stubs in the Java ecosystem.

## RSpec

Ships built-in "test doubles" and message expectations (`allow`/`expect(...).to receive`) as a first-class part of the framework itself.

## Go testing

Has no built-in mocking; Go's interface-based design makes hand-written fakes common, with libraries like Testify's mock package or generated mocks (via `mockgen`) as popular alternatives.

## xUnit

Has no built-in mocking; Moq or NSubstitute are the most common companion mocking libraries in the .NET ecosystem.

## PHPUnit

Ships a built-in mocking API (`createMock()`, `createStub()`) as part of the core framework, with no separate library required for typical use.

## Rust built-in tests

Has no built-in mocking framework; Rust's trait system makes hand-written fakes straightforward, with crates like `mockall` available for more automated mock generation.
