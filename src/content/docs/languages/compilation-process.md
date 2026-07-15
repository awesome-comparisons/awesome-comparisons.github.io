---
title: Compilation Process
description: How source code moves from text to executable form in 14 programming languages.
---

## JavaScript

There is no separate build step for the developer; the engine parses source directly and uses tiered compilation—starting in an interpreter, then promoting hot code to a baseline and eventually an optimizing JIT compiler, deoptimizing back to the interpreter if runtime assumptions about types turn out wrong.

## TypeScript

Source is first type-checked against its declared and inferred types, then that type information is erased and the syntax is downleveled to a target JavaScript version, producing plain JavaScript with no separate linking step.

## Python

Source files are compiled to `.pyc` bytecode (often cached on disk) the first time they're imported, and that bytecode is then executed by CPython's stack-based virtual machine, with names resolved dynamically at runtime.

## Go

A single fast pipeline parses, type-checks, and lowers code to an SSA-based intermediate form, optimizes it, generates native machine code, and statically links everything—including the Go runtime—into one self-contained binary.

## Rust

Source passes through HIR and then MIR, where the borrow checker verifies ownership and lifetime rules, before generics are monomorphized and the code is lowered to LLVM IR for optimization, native code generation, and linking.

## Java

`javac` compiles source into machine-independent bytecode packaged as `.class` files; at runtime the JVM loads and verifies that bytecode, interprets it initially, and JIT-compiles frequently executed methods into native code.

## Kotlin

Source is parsed and type-checked, then lowered to JVM bytecode alongside ordinary Java classes for the JVM target, or alternatively lowered to LLVM IR for Kotlin/Native or to JavaScript for Kotlin/JS.

## Swift

The compiler builds an AST, lowers it to Swift Intermediate Language (SIL) where Swift-specific optimizations and safety diagnostics happen, then further lowers to LLVM IR for native code generation and linking, all ahead of time.

## C

Preprocessing expands macros and includes, each translation unit is then compiled independently into object code, and finally the linker combines object files and libraries into a single executable.

## C++

Follows the same preprocess-compile-link pipeline as C, but with heavier work per stage: templates are instantiated at compile time and headers are repeatedly reparsed per translation unit, which is a major reason C++ builds are slower.

## C#

Roslyn compiles source into CIL instructions and metadata bundled into an assembly (a DLL or EXE); when the program runs, the CLR's JIT compiles each CIL method into native machine code the first time it's invoked.

## Ruby

MRI parses source into an AST and compiles it on the fly into YARV bytecode instructions immediately before execution, interpreting that bytecode without a persistent, shareable compiled artifact by default.

## PHP

On each request the Zend Engine parses and compiles source into opcodes; OPcache can store those compiled opcodes in shared memory so subsequent requests skip re-parsing and go straight to execution by the Zend VM.

## Elixir

Source is compiled into Erlang Abstract Format and then into BEAM bytecode stored in `.beam` files, which the BEAM virtual machine loads and executes; code can also be evaluated interactively without producing files via `iex`.
