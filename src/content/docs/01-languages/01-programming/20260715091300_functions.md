---
title: Functions
description: How different programming languages define and work with functions.
---

## JavaScript

Functions are first-class values, declared via `function` or as arrow
functions (which capture `this` lexically). Support default and rest
parameters, and closures are pervasive for encapsulating state and building
higher-order functions.

## Python

Defined with `def`, supporting default, keyword, `*args`, and `**kwargs`
parameters. Closures, decorators (functions that wrap other functions), and
`lambda` for small anonymous expressions are all core idioms.

## TypeScript

Adds typed parameters, return types, and function overload signatures on
top of JavaScript's function forms. Generics allow writing reusable
functions that stay type-safe across different input types.

## Java

Methods always belong to a class; overloading is resolved by parameter
signature. Lambda expressions (since Java 8) implement functional
interfaces, and varargs allow variable-length parameter lists.

## C#

Supports overloading, optional and named parameters, delegates and lambda
expressions for passing behavior, local functions nested inside methods,
and extension methods that add functionality to existing types.

## C++

Builds on C with function overloading resolved by signature, default
argument values, templates for generic functions, and lambdas (C++11) with
explicit capture lists for closures.

## C

Declared with an explicit return type and fixed parameter list. No
overloading, no default arguments, and no closures — function pointers are
used instead for passing behavior around.

## PHP

Declared with `function`, supporting default and named arguments (8.0+) and
variadics. Anonymous functions/closures require an explicit `use()` clause
to capture outer variables, and first-class callable syntax was added in
PHP 8.1.

## Go

Declared with `func`, notable for supporting multiple return values
(commonly used for a result plus an error) and named return parameters. No
default arguments and no overloading, but closures and first-class function
values are fully supported.

## Rust

Declared with `fn` and require explicit parameter/return types. Closures
capture their environment and are typed by the `Fn`, `FnMut`, or `FnOnce`
traits depending on how they use captured variables. Generics provide
polymorphism instead of overloading.

## Kotlin

Declared with `fun`, and can exist at the top level outside any class.
Supports default and named arguments, extension functions that add methods
to existing types, and concise lambda syntax including trailing-lambda
calls.

## Ruby

Defined with `def`; a method implicitly returns the value of its last
expression. Supports default, keyword, and splat arguments, while blocks,
procs, and lambdas serve as the language's closures.

## Dart

Declared with a return type and name, or as arrow functions (`=>`) for
single-expression bodies. Supports named, optional, and default parameters,
and closures capture surrounding variables just like any other first-class
function value.

## Swift

Declared with `func`, with distinct external/internal parameter labels for
readable call sites. Supports default values, variadic parameters, and
closures with trailing-closure syntax; functions are first-class types.

## Perl

Subroutines are declared with `sub` and traditionally receive arguments as
the `@_` array, though signatures (stable since 5.36) allow named
parameters. Anonymous subs and closures are fully supported, commonly
assigned to scalars holding code references.

## Elixir

Functions live inside modules, defined with `def`/`defp`, and are
identified by name plus arity. Multiple clauses of the same function can
pattern-match different argument shapes. Anonymous functions use `fn...end`
or the `&` capture shorthand, designed to compose well with the pipe
operator.

## Scala

Declared with `def`; functions and methods are distinct but easily
converted via eta-expansion. Supports currying through multiple parameter
lists, default and named arguments, and anonymous functions/lambdas that are
first-class values implementing the `FunctionN` traits.

## Clojure

Defined with `defn` (or anonymously via `fn`/the `#()` reader syntax), and a
single definition can support multiple arities. Being a Lisp, functions are
first-class values, closures over lexical scope are the norm, and variadic
parameters are declared with `&`.

## Haskell

Functions are defined by equations, often with pattern matching across
multiple clauses and guards, and are curried by default — every
multi-argument function is really a chain of single-argument functions.
Lambdas use `\x -> ...` syntax, and partial application and point-free style
are idiomatic.
