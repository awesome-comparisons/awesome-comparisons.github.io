---
title: Operators
description: How JavaScript, TypeScript, Python, Go, Rust, Java, Kotlin, Swift, C, C++, C#, Ruby, PHP, and Elixir handle arithmetic, comparison, logical, and overloadable operators.
---

## JavaScript

Standard arithmetic, comparison (including loose `==` and strict `===`), and
logical operators (`&&`, `||`, `??` for nullish coalescing). Supports
optional chaining (`?.`) and spread/rest syntax. No operator overloading;
`typeof`/`instanceof` cover runtime type checks.

## TypeScript

Runtime operators are identical to JavaScript's, since TypeScript compiles
away its type layer. Adds type-level operators such as `keyof`, `extends`,
union (`|`) and intersection (`&`), plus the non-null assertion (`!`). No
operator overloading at runtime.

## Python

Arithmetic includes floor division (`//`) and exponentiation (`**`);
comparisons can be chained (`a < b < c`). Logical operators are the keywords
`and`/`or`/`not` rather than symbols. Operator overloading is supported via
dunder methods (`__add__`, `__eq__`, etc.), and the walrus operator (`:=`)
allows assignment within expressions.

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

## Java

Conventional operator set with no overloading. Ternary (`?:`) is available,
integer division truncates, and `instanceof` supports pattern matching in
newer versions to bind the checked type directly.

## Kotlin

Operator overloading works through naming conventions (defining functions
like `plus()` marked `operator`). Notable extras include infix functions,
the Elvis operator (`?:`), safe-call (`?.`), and range operators (`..`,
`..<`). No dedicated ternary; `if` doubles as an expression.

## Swift

Supports operator overloading and even custom operator definitions.
Provides nil-coalescing (`??`), inclusive/half-open ranges (`...`, `..<`),
and overflow-safe variants (`&+`, `&-`) for wraparound arithmetic.
Increment/decrement operators were removed from the language.

## C

Covers arithmetic, bitwise, and logical operators plus pointer arithmetic
and the comma operator. No overloading, and implicit type conversions
between numeric types can be a common source of subtle bugs.

## C++

Extends C's operator set with extensive overloading support (`operator+`,
`operator<<`, etc.), enabling custom types to behave like built-ins. Also
adds the three-way comparison ("spaceship") operator `<=>` for concise
ordering logic.

## C#

Allows operator overloading via static `operator` methods, and provides
null-conditional (`?.`) and null-coalescing (`??`, `??=`) operators.
Pattern-matching operators (`is`, relational patterns) extend conditional
logic beyond simple comparisons.

## Ruby

Almost every operator is sugar for a method call, so classes can overload
`+`, `==`, `<=>`, and others by defining the corresponding method. Includes
the spaceship operator (`<=>`) for comparisons and safe navigation (`&.`)
for nil-safe calls.

## PHP

Standard arithmetic and comparison operators, including both loose (`==`)
and strict (`===`) equality, plus the spaceship (`<=>`) and null-coalescing
(`??`, `??=`) operators. No user-level operator overloading in core PHP.

## Elixir

Arithmetic, comparison, and logical operators, with strict boolean versions
(`and`/`or`/`not`, requiring booleans) alongside truthy versions (`&&`,
`||`, `!`). The pipe operator (`|>`) threads a value through a sequence of
calls, and `=` is a match operator rather than plain assignment.
