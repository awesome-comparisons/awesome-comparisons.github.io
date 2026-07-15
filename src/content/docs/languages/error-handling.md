---
title: Error Handling
description: How different programming languages model and propagate failure.
---

## JavaScript

Uses `throw`/`try`/`catch`/`finally`, and any value can technically be
thrown, though `Error` objects are conventional. Asynchronous failures
propagate as rejected Promises, handled via `.catch()` or `try`/`catch`
around `await`. There are no checked exceptions.

## Python

`try`/`except`/`else`/`finally` handles exceptions, which form a hierarchy
rooted at `BaseException`. Custom errors are defined by subclassing
`Exception`, and context managers (`with`) are the idiomatic way to
guarantee cleanup.

## TypeScript

Shares JavaScript's runtime `try`/`catch` model exactly; the type system
does not track which errors a function might throw, so typed error handling
relies on conventions like returning tagged union "result" types.

## Java

Distinguishes checked exceptions (must be declared or caught) from
unchecked ones, all handled with `try`/`catch`/`finally`.
Try-with-resources automatically closes resources, and exceptions form a
hierarchy under `Throwable`.

## C#

Uses `try`/`catch`/`finally` with all exceptions unchecked, organized under
a hierarchy rooted at `System.Exception`. The `using` statement ensures
disposable resources are cleaned up even when an exception occurs.

## C++

Supports exceptions (`throw`/`try`/`catch`) with stack unwinding, commonly
paired with RAII for automatic cleanup. `noexcept` documents non-throwing
functions, and error-code-based alternatives (like `std::expected`) are
also used, especially in performance-sensitive code.

## C

Has no exception mechanism. Failures are communicated through return codes
and the global `errno`; `setjmp`/`longjmp` provide a rarely-used
non-local jump mechanism for exceptional control flow.

## PHP

Supports exceptions (`throw`/`try`/`catch`/`finally`) under the `Throwable`
interface, which covers both `Exception` and `Error` since PHP 7. Multiple
`catch` blocks and multi-type catches are supported; some failures still
surface as separate warnings/notices rather than exceptions.

## Go

Ordinary errors are values: functions return an `(result, error)` pair that
callers check explicitly rather than catching exceptions. `panic`/`recover`
exist but are reserved for truly unexpected, unrecoverable situations.

## Rust

Recoverable errors are modeled with `Result<T, E>`, propagated concisely
with the `?` operator. `panic!` is reserved for unrecoverable errors,
typically unwinding the stack (or aborting, depending on configuration).
There are no exceptions.

## Kotlin

Has only unchecked exceptions — none must be declared — handled with
`try`/`catch`/`finally`, which can also be used as an expression. Nullable
types and sealed classes (or a `Result` type) are often favored over
exceptions for expected failure cases.

## Ruby

Exceptions are raised with `raise` and handled with `rescue`/`ensure`, with
`retry` allowing a rescued block to be re-attempted. Most errors descend
from `StandardError`, and `rescue` clauses can target specific exception
classes.

## Dart

Uses exceptions (`try`/`catch`/`throw`) plus `Future`/async error
propagation; any object can be thrown, though `Exception` and `Error`
subtypes are conventional. Async errors surface through a rejected
`Future` or a thrown error inside an `async` function, catchable with
`try`/`catch` around `await` or `.catchError()`.

## Swift

Functions that can fail are marked `throws` and called with `try` inside a
`do`/`catch` block, with errors conforming to the `Error` protocol.
`Result<Success, Failure>` offers an explicit alternative for representing
success or failure as a value.

## Perl

Traditionally uses `die`/`eval` for exception-like handling, where `die`
raises an error (often a string or object) and `eval` catches it by
checking `$@` afterward. Modules like `Try::Tiny` and `Try::Catch` provide
cleaner, more structured `try`/`catch` syntax on top of this.

## Elixir

Favors returning `{:ok, value}`/`{:error, reason}` tuples for expected
failure and embraces "let it crash" for the unexpected, relying on
supervisors to restart failed processes. `raise`/`rescue`/`try` exist for
truly exceptional cases, and process exits can propagate via links.

## Scala

Supports exceptions plus idiomatic functional alternatives: `Option` for
optional values, `Either` for two-way results, and `Try` for wrapping
code that may throw. Pattern matching over these types makes handling
failure explicit and composable rather than relying on control flow.

## Clojure

Uses JVM exceptions (`try`/`catch`/`throw`/`finally`) since it runs on the
JVM, but enriches them with `ex-info`, which attaches an arbitrary map of
structured data to an exception. `ex-data` retrieves that map in a
`catch` block, giving exceptions richer, inspectable context.

## Haskell

Avoids exceptions in pure code, instead favoring `Maybe` for optional
results and `Either` for computations that can fail with an error value,
composed via the type system rather than control flow. Exceptions still
exist for IO, handled through `Control.Exception` with functions like
`catch` and `try`.
