---
title: Operators
description: How different programming languages handle arithmetic, comparison, logical, and overloadable operators.
---

## JavaScript

Standard arithmetic, comparison (including loose `==` and strict `===`), and
logical operators (`&&`, `||`, `??` for nullish coalescing). Supports
optional chaining (`?.`) and spread/rest syntax. No operator overloading;
`typeof`/`instanceof` cover runtime type checks.

## Python

Arithmetic includes floor division (`//`) and exponentiation (`**`);
comparisons can be chained (`a < b < c`). Logical operators are the keywords
`and`/`or`/`not` rather than symbols. Operator overloading is supported via
dunder methods (`__add__`, `__eq__`, etc.), and the walrus operator (`:=`)
allows assignment within expressions.

## TypeScript

Runtime operators are identical to JavaScript's, since TypeScript compiles
away its type layer. Adds type-level operators such as `keyof`, `extends`,
union (`|`) and intersection (`&`), plus the non-null assertion (`!`). No
operator overloading at runtime.

## Java

Conventional operator set with no overloading. Ternary (`?:`) is available,
integer division truncates, and `instanceof` supports pattern matching in
newer versions to bind the checked type directly.

## C#

Allows operator overloading via static `operator` methods, and provides
null-conditional (`?.`) and null-coalescing (`??`, `??=`) operators.
Pattern-matching operators (`is`, relational patterns) extend conditional
logic beyond simple comparisons.

## C++

Extends C's operator set with extensive overloading support (`operator+`,
`operator<<`, etc.), enabling custom types to behave like built-ins. Also
adds the three-way comparison ("spaceship") operator `<=>` for concise
ordering logic.

## C

Covers arithmetic, bitwise, and logical operators plus pointer arithmetic
and the comma operator. No overloading, and implicit type conversions
between numeric types can be a common source of subtle bugs.

## PHP

Standard arithmetic and comparison operators, including both loose (`==`)
and strict (`===`) equality, plus the spaceship (`<=>`) and null-coalescing
(`??`, `??=`) operators. No user-level operator overloading in core PHP.

## Go

Deliberately minimal: arithmetic, comparison, logical (`&&`, `||`), and
bitwise operators, all short-circuiting where relevant. No operator
overloading, no ternary operator, and increment/decrement (`++`/`--`) are
statements rather than expressions.

## Rust

Full arithmetic/logical/bitwise set, with operator overloading achieved
through traits like `Add` and `Sub`. No implicit numeric conversions, integer
overflow is checked in debug builds, and there's no ternary — `if` is used
as an expression instead.

## Kotlin

Operator overloading works through naming conventions (defining functions
like `plus()` marked `operator`). Notable extras include infix functions,
the Elvis operator (`?:`), safe-call (`?.`), and range operators (`..`,
`..<`). No dedicated ternary; `if` doubles as an expression.

## Ruby

Almost every operator is sugar for a method call, so classes can overload
`+`, `==`, `<=>`, and others by defining the corresponding method. Includes
the spaceship operator (`<=>`) for comparisons and safe navigation (`&.`)
for nil-safe calls.

## Dart

Standard arithmetic, comparison, and logical operators, plus null-aware
ones like `??`, `??=`, and `?.` for working with nullable types. Supports
operator overloading by defining methods such as `operator+` on a class.

## Swift

Supports operator overloading and even custom operator definitions.
Provides nil-coalescing (`??`), inclusive/half-open ranges (`...`, `..<`),
and overflow-safe variants (`&+`, `&-`) for wraparound arithmetic.
Increment/decrement operators were removed from the language.

## Perl

Distinguishes numeric operators (`==`, `!=`, `<`) from separate string
operators (`eq`, `ne`, `lt`); arithmetic includes exponentiation (`**`), and
the ternary (`?:`) operator is supported. No user-definable operator
overloading without the `overload` pragma.

## Elixir

Arithmetic, comparison, and logical operators, with strict boolean versions
(`and`/`or`/`not`, requiring booleans) alongside truthy versions (`&&`,
`||`, `!`). The pipe operator (`|>`) threads a value through a sequence of
calls, and `=` is a match operator rather than plain assignment.

## Scala

Nearly every operator is really a method call under the syntax sugar —
`a + b` desugars to `a.+(b)` — so custom types get operator-like syntax
simply by defining methods named `+`, `==`, and so on. Pattern matching via
`match`/`case` stands in for a traditional switch statement.

## Clojure

Arithmetic, comparison, and logical operations are ordinary prefix functions
(`(+ a b)`, `(= a b)`, `(and a b)`) rather than infix operators, so there's
no operator overloading in the conventional sense — polymorphism instead
comes through protocols and multimethods.

## Haskell

Arithmetic and comparison operators (`+`, `==`, `<`) are just infix
functions defined per typeclass (`Num`, `Eq`, `Ord`), so any type can
support them by implementing the right instance. Custom operators can be
defined freely, and the function composition (`.`) and application (`$`)
operators are used pervasively.
