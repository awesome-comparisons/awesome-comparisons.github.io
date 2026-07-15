---
title: Loops
description: How JavaScript, TypeScript, Python, Go, Rust, Java, Kotlin, Swift, C, C++, C#, Ruby, PHP, and Elixir express iteration and repetition.
---

## JavaScript

Offers `for`, `for...in` (object keys), `for...of` (iterables), and
`while`/`do...while`. In practice, array methods like `map`, `forEach`, and
`reduce` are often preferred over explicit loops for collection processing.

## TypeScript

Uses the same loop constructs as JavaScript, with the added benefit of
typed iterables and generics ensuring the values produced by a loop are
statically known. No new looping syntax is introduced.

## Python

`for` iterates over any iterable (lists, ranges, generators), and `while`
handles condition-based repetition; there is no C-style counting `for`.
Loops can carry an `else` clause, and comprehensions are a common
alternative for building collections.

## Go

A single `for` keyword covers every loop form: C-style with init/condition/
post, condition-only (acting like `while`), infinite (`for {}`), and
range-based iteration over slices, maps, strings, and channels. There is no
separate `while` keyword.

## Rust

`loop` provides an infinite loop that can yield a value via `break`,
`while` handles conditional repetition, and `for` iterates over anything
implementing `IntoIterator`, commonly ranges (`0..10`). There is no
C-style counting loop.

## Java

Supports the traditional three-part `for`, the enhanced for-each loop over
`Iterable`s and arrays, and `while`/`do...while`. Streams provide a
functional alternative for transforming collections.

## Kotlin

`for` iterates over ranges and iterables, and `while`/`do...while` cover
conditional looping; there is no C-style `for`. Ranges (`1..10`) and
collection functions like `forEach` are idiomatic complements.

## Swift

`for-in` iterates over sequences and ranges, `while` and `repeat-while`
(the do-while equivalent) cover conditional loops. The traditional C-style
`for` was removed; `stride(from:to:by:)` handles custom step iteration.

## C

Provides exactly three forms: `for`, `while`, and `do...while`. There's no
built-in iteration protocol, so looping over arrays typically involves
manual index management.

## C++

Includes everything from C plus the range-based `for` loop (C++11), which
iterates over any type exposing `begin()`/`end()`. STL algorithms (`for_each`,
`transform`, etc.) offer a more declarative alternative.

## C#

`for`, `foreach` (over `IEnumerable`), and `while`/`do...while` cover
iteration. LINQ provides a functional, query-like alternative to writing
explicit loops over collections.

## Ruby

Iterator methods taking a block (`each`, `map`, `times`, `upto`) are the
idiomatic way to loop. `while`/`until` exist for condition-based repetition,
and `for` is available but rarely used in practice.

## PHP

`for` and `foreach` (with `key => value` support for arrays and iterators)
are the primary loop forms, alongside `while`/`do...while`. There's no
comprehension syntax; `array_map`/`array_filter` fill that role instead.

## Elixir

Has no mutable, imperative loop constructs — iteration is achieved through
recursion or functions in the `Enum`/`Stream` modules (`map`, `reduce`,
`each`). The `for` construct that does exist is a comprehension, not a
traditional loop.
