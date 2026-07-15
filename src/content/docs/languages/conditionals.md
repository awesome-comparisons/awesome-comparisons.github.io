---
title: Conditionals
description: How different programming languages express branching logic.
---

## JavaScript

`if`/`else` and `switch` (with loose comparison and fallthrough by default)
cover branching, alongside the ternary operator. `switch` only does simple
equality checks, so there's no structural pattern matching built in.

## Python

`if`/`elif`/`else` and a conditional expression (`x if cond else y`) handle
most branching. Python 3.10 added `match`/`case` for structural pattern
matching against literals, types, and destructured sequences/mappings.

## TypeScript

Same runtime conditionals as JavaScript, but the compiler performs control
flow analysis to narrow union types across `if`/`switch` branches, making
discriminated-union switches a common and type-safe pattern.

## Java

`if`/`else` and ternary as usual. `switch` supports classic fallthrough
statements as well as modern switch expressions with arrow syntax, and newer
versions add pattern matching for `switch` over types and record shapes.

## C#

`if`/`else` and ternary as usual. `switch` supports both traditional
statements and expressive switch expressions with type patterns, relational
patterns, and property patterns for rich structural matching.

## C++

Inherits C's conditionals and adds `if constexpr` for compile-time
branching during template instantiation, plus structured bindings that can
be introduced directly within an `if` or `switch` initializer.

## C

`if`/`else`, `switch` with fallthrough requiring explicit `break`, and the
ternary operator. No structural pattern matching is available.

## PHP

`if`/`elseif`/`else` and `switch` (loose comparison, with fallthrough) cover
traditional branching. The `match` expression (PHP 8+) offers strict
comparison and no fallthrough, plus the ternary and null-coalescing
operators for compact checks.

## Go

`if`/`else` supports an optional init statement scoped to the branch.
`switch` doesn't fall through by default (needs explicit `fallthrough`), and
a type switch lets code branch on an interface's dynamic type. No ternary
operator exists.

## Rust

`if` is an expression that can produce a value. `match` provides exhaustive
pattern matching with guards and destructuring, and `if let`/`while let`
offer concise matching against a single pattern, commonly `Option`/`Result`.

## Kotlin

`if` is an expression, making the ternary operator unnecessary. `when`
replaces `switch` with much more power — matching ranges, types, multiple
values, or arbitrary conditions in a single construct.

## Ruby

`if`/`elsif`/`else`, the negated `unless`, and postfix modifiers (`do_thing
if condition`) for concise one-liners. `case`/`when` uses the flexible `===`
operator, enabling matches against classes, ranges, and regexes.

## Dart

`if`/`else` and the ternary (`?:`) operator handle simple branching, with
null-aware operators (`??`, `?.`) filling in for null checks. Since Dart 3,
`switch` supports rich pattern matching over types, records, and destructured
values, including `when` guard clauses.

## Swift

`if`/`else` and `guard` (for early-exit validation) handle simple branching.
`switch` must be exhaustive and supports rich pattern matching over ranges,
tuples, and `where` clauses, with no implicit fallthrough between cases.

## Perl

`if`/`unless`/`elsif`/`else` cover branching, with postfix conditionals
(`do_thing if $condition`) for concise one-liners and a standard ternary
operator. Perl has no traditional `switch` statement; the experimental
`given`/`when` construct exists but is deprecated in favor of chained `if`.

## Elixir

`cond` evaluates a list of boolean expressions in order, while `case`
pattern-matches a value against clauses with optional guards. `if`/`unless`
exist as convenience macros for simple binary branches; there is no
traditional `switch`.

## Scala

`if`/`else` is an expression that returns a value, so a separate ternary
operator isn't needed. `match` provides powerful pattern matching over case
classes, types, sequences, and guards, commonly replacing both `switch` and
long conditional chains.

## Clojure

Being a Lisp, branching is expression-based via `if`, `if-let`, `when`,
`cond`, and `case`, each returning a value rather than executing a
statement. There's no traditional `switch`; `cond` handles multi-branch
logic and `case` does fast dispatch on constant values.

## Haskell

`if`/`then`/`else` is an expression requiring both branches to produce the
same type, with no bare `else`-less form. Guards on function equations and
`case` expressions with pattern matching are the idiomatic way to branch,
and there's no traditional `switch` or ternary operator.
