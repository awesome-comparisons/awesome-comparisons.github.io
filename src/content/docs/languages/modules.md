---
title: Modules
description: How different programming languages organize and share code across files.
---

## JavaScript

ES modules (`import`/`export`) are the standard today, though CommonJS
(`require`/`module.exports`) remains common in older Node.js code.
`import()` supports dynamic, asynchronous loading.

## Python

A module is simply a file, and a package is a directory containing an
`__init__.py`. Code is brought in with `import` or `from ... import`, and
`__all__` controls what a wildcard import exposes.

## TypeScript

Uses the same `import`/`export` syntax as JavaScript, extended with
type-only imports/exports and declaration files (`.d.ts`) that describe the
shape of untyped JavaScript modules. Namespaces exist as a legacy
alternative.

## Java

Packages provide namespacing and typically mirror the directory structure.
Classes are imported explicitly. Since Java 9, the module system (JPMS,
configured via `module-info.java`) adds stronger encapsulation across
groups of packages.

## C#

Assemblies are the unit of deployment and versioning, while namespaces
provide logical organization within and across assemblies. The `using`
directive imports a namespace, and access modifiers control visibility.

## C++

Traditionally follows C's header/source split. C++20 introduces a native
module system (`import`/`export module`), though adoption across tooling
and codebases is still gradual.

## C

Has no native module system. Code is split into header files (declarations)
and source files (definitions), joined via textual `#include` and resolved
at link time.

## PHP

`namespace` organizes code into logical hierarchies, with `use` importing
names from other namespaces. Files are typically loaded via autoloading
(Composer following PSR-4) rather than manual `require`/`include`.

## Go

Organized around packages, typically one per directory, with import paths
resolved through the module system defined in `go.mod`. Visibility is
determined by capitalization: exported identifiers start with an uppercase
letter.

## Rust

Modules are declared with `mod` and form a tree within a crate, the unit of
compilation and distribution. `pub` controls visibility, `use` brings paths
into scope, and Cargo (via `Cargo.toml`) manages external crate
dependencies.

## Kotlin

Uses packages similarly to Java, but files don't need to match the
directory layout. Visibility modifiers (`public`, `internal`, `private`)
control exposure, and Kotlin projects typically interop with Java's module
system or Gradle's module boundaries.

## Ruby

Files are loaded explicitly with `require`/`require_relative`. The
`module` keyword provides namespacing and also enables mixins via
`include`/`extend`, rather than enforcing hard package boundaries.

## Dart

Code is organized into libraries, and `import` brings in another file or a
package resolved via `pubspec.yaml` and the pub.dev registry. Prefixes
(`as`), selective imports (`show`/`hide`), and `export` for re-exporting
round out the system.

## Swift

Code is organized into modules, generally corresponding to a framework or
build target; `import` brings in an entire module at once. Access control
keywords (`public`, `internal`, `private`, `fileprivate`) define what's
visible outside a file or module.

## Perl

A module is a `.pm` file matching its package name, loaded with `use`
(compile-time) or `require` (runtime). CPAN is the de facto ecosystem for
third-party modules, and `Exporter` controls which symbols a module shares
with its caller.

## Elixir

`defmodule` groups related functions and provides namespacing. `alias`,
`import`, and `require` control how other modules are referenced within a
file, while Mix manages project structure and dependencies at the build
level.

## Scala

Packages provide namespacing similar to Java and are imported with
`import`, while `object`s serve as singleton modules for grouping values
and factory-like functions. sbt (or another build tool) resolves external
dependencies, typically from Maven-compatible repositories.

## Clojure

Code is grouped into namespaces declared with `ns`, which typically map
one-to-one with source files. `require` brings in other namespaces (often
aliased), `import` brings in Java classes, and Leiningen/deps.edn manage
external library dependencies.

## Haskell

Each file declares a `module` with an explicit export list controlling
what's visible, and `import` brings in other modules, optionally qualified
or restricted to specific names. Cabal or Stack manage packages and
dependencies, typically resolved through Hackage.
