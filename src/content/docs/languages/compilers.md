---
title: Compilers
description: The primary compilers, interpreters, and toolchains used by 14 programming languages.
---

## JavaScript

Not compiled ahead of time by developers; engines like V8 (Chrome, Node.js), SpiderMonkey (Firefox), and JavaScriptCore (Safari) parse and JIT-compile source code to machine code at runtime.

## TypeScript

Primarily transpiled to JavaScript by the official `tsc` compiler, which also performs type checking; faster alternative toolchains like esbuild, swc, and Babel strip types without full type checking for quicker builds.

## Python

The reference implementation, CPython, compiles source to bytecode run on its own interpreter/VM. Alternatives include PyPy, which adds a JIT for speed, and Cython for compiling to native C extensions.

## Go

Built around a single official toolchain, `gc` (`cmd/compile`), which compiles directly to native machine code and produces statically linked binaries. The alternative `gccgo` compiles via the GCC backend.

## Rust

Compiled by `rustc`, which uses LLVM as its backend to perform optimization and generate native machine code for a wide range of target platforms.

## Java

Source is compiled by `javac` into JVM bytecode, then executed by a Java Virtual Machine such as HotSpot or OpenJ9, which JIT-compiles frequently run bytecode to native instructions.

## Kotlin

Compiled by `kotlinc` to JVM bytecode for standard use, but also supports Kotlin/Native (via LLVM) for native binaries and Kotlin/JS for compiling to JavaScript.

## Swift

Compiled by `swiftc`, which is built on the LLVM compiler infrastructure, producing optimized native binaries ahead of time.

## C

Compiled ahead of time by toolchains such as GCC, Clang, or MSVC, translating source directly into native machine code for the target platform.

## C++

Also compiled ahead of time, most commonly with GCC, Clang, or MSVC, all of which handle the language's heavier template instantiation and optimization workload.

## C#

Compiled by the Roslyn compiler into Common Intermediate Language (CIL), which the .NET Common Language Runtime then JIT-compiles to native code; .NET also supports ahead-of-time compilation via Native AOT.

## Ruby

The reference implementation, MRI (also called CRuby), compiles source into internal YARV bytecode that its interpreter executes. Alternative implementations JRuby and TruffleRuby run on the JVM and GraalVM respectively.

## PHP

The Zend Engine compiles source into opcodes that are interpreted at runtime, with OPcache commonly used to cache compiled opcodes and avoid recompiling on every request.

## Elixir

Compiled by `elixirc` down to BEAM bytecode, which runs on the Erlang virtual machine (BEAM), the same runtime used by Erlang itself.
