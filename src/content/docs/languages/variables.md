---
title: Variables
description: How variables are declared, scoped, and mutated across 14 programming languages.
---

## JavaScript

Declared with `var` (function-scoped), or `let`/`const` (block-scoped); `const` prevents reassignment of the binding but does not make objects or arrays immutable. Bindings are dynamically typed, so a variable can hold any type over its lifetime.

## TypeScript

Uses the same `let`, `const`, and `var` declarations as JavaScript, but each binding can carry an explicit or inferred static type that the compiler checks at every assignment; the type annotations are erased before the code runs.

## Python

Variables need no declaration keyword—assignment itself creates the binding in the enclosing function, module, or class scope. Bindings are dynamically typed and freely rebindable; `global` and `nonlocal` are needed to modify names from an outer scope.

## Go

Declared with `var name type`, a short `name := value` form with type inference, or `const` for compile-time constants. Uninitialized variables get a well-defined zero value rather than garbage, and all bindings are statically typed.

## Rust

Declared with `let`, immutable by default unless marked `mut`; the same name can be shadowed by a new `let` binding in the same scope. `const` and `static` declare compile-time constants. All bindings are statically and strongly typed.

## Java

Declared with an explicit type, or with `var` for compiler-inferred local types since Java 10; `final` marks a variable as unassignable after initialization. All variables are statically typed.

## Kotlin

Declared with `val` for a read-only reference or `var` for a mutable one, both usually with inferred types. `val` prevents reassignment but, like JavaScript's `const`, doesn't make the referenced object itself immutable.

## Swift

Declared with `let` for constants and `var` for mutable variables, with strong type inference in most cases. Types can include optionals, which explicitly represent the possible absence of a value.

## C

Must be declared with an explicit type before use, and are scoped to the block in which they're declared; uninitialized local variables hold indeterminate garbage values. Storage class specifiers like `static`, `extern`, and `auto` control lifetime and linkage.

## C++

Declaration works like C but adds `auto` for compiler-inferred types, `const` and `constexpr` for immutability (the latter evaluated at compile time), and references as an alias-based alternative to pointers.

## C#

Declared with an explicit type or with `var` for compiler-inferred local types; `const` fixes a compile-time constant while `readonly` allows one-time assignment at runtime, typically in a constructor. Variables are statically typed.

## Ruby

No declaration syntax is needed—assigning to a name creates it. Sigils indicate scope: a bare name is a local variable, `$name` is global, `@name` is an instance variable, `@@name` is a class variable, and capitalized names are constants. All are dynamically typed.

## PHP

Variables are always prefixed with `$` and require no declaration; they are dynamically typed and, by default, scoped to the function they're created in, requiring the `global` keyword to access a global variable from inside a function.

## Elixir

The `=` operator performs pattern matching rather than assignment, binding variables to matched values. A name can be rebound to a new value later in the same scope, but the values themselves are always immutable once created, and all bindings are dynamically typed.
