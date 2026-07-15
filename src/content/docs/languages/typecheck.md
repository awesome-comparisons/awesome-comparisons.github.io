---
title: Type Checking
description: How and when type correctness is verified across 14 programming languages.
---

## JavaScript

Dynamically typed with no compile-time checking; types are determined and coerced at runtime, and mistakes like calling a method on the wrong type only surface when that code path executes.

## TypeScript

Adds a static, structural type system with type inference on top of JavaScript, checked entirely at compile time by the compiler; all type information is erased before the code runs, so there is no runtime enforcement.

## Python

Dynamically typed at runtime using duck typing—an object is valid if it has the right methods and attributes. Optional type hints can be checked ahead of time by external tools like mypy or pyright, but CPython itself does not enforce them.

## Go

Statically typed and checked entirely at compile time, with structural satisfaction of interfaces (no explicit "implements" declaration needed) and, since Go 1.18, generic type parameters also checked at compile time.

## Rust

Static and strongly typed, with local type inference, no implicit conversions, and compile-time checking of generics through traits; ownership and borrowing rules are checked as an additional compile-time layer on top of types.

## Java

Static and nominally typed, checked at compile time by `javac`; generics are enforced at compile time but erased at runtime (type erasure), so some type information isn't available to reflection at runtime.

## Kotlin

Static typing with null safety built directly into the type system—nullable and non-null types are distinct—along with smart casts, all verified at compile time.

## Swift

Static typing with strong type inference and optionals as first-class citizens of the type system, used to represent the absence of a value safely; verified at compile time.

## C

Static but permissive: the compiler checks types at compile time, but allows many implicit conversions and unchecked casts, offering comparatively little compile-time safety net.

## C++

Static typing that is stricter than C in principle but still permits unsafe casts (like `reinterpret_cast`); templates are type-checked at instantiation time, with C++20 concepts adding clearer, earlier constraint checking.

## C#

Static and nominally typed, checked at compile time, with generics reified (preserved) at runtime rather than erased; nullable reference types, opt-in since C# 8, add compile-time null safety checks.

## Ruby

Dynamically typed with duck typing, similar to Python; optional gradual typing is available through external tools like Sorbet or RBS-based checkers, but is not enforced by the interpreter itself.

## PHP

Dynamically typed by default with runtime type juggling between scalar types; optional type declarations on parameters, return values, and properties are checked at runtime, while static analyzers like Psalm and PHPStan add compile-time-style checks externally.

## Elixir

Dynamically typed at runtime; developers can add optional `@spec` typespecs that are checked statically by the external Dialyzer tool using success typing, and newer Elixir releases have begun introducing a built-in gradual type system for compile-time warnings.
