---
title: Performance and Startup Time
description: How quickly each CLI library's tools start up and run.
---

## Commander.js

Starts as fast as Node.js itself can start and load the script, with negligible overhead from Commander's own parsing logic.

## Yargs

Similar startup profile to Commander — bound mainly by Node.js's own startup time rather than Yargs' parsing overhead.

## oclif

Notably slower to start than a plain script due to its module-loading and plugin-discovery machinery — commonly cited at roughly 200-500ms before user code even runs, a deliberate tradeoff for its plugin architecture.

## Click

Starts as fast as the Python interpreter itself can start, with minimal overhead from Click's own command dispatch.

## argparse

Effectively the fastest-starting Python option, being part of the standard library with no extra import overhead beyond the interpreter itself.

## Typer

Similar startup profile to Click (which it's built on), with a small amount of added overhead for inspecting type hints at startup.

## Cobra

Starts near-instantly as a compiled Go binary, with Cobra's own command-tree setup adding negligible overhead.

## Clap

Among the fastest of any library here — a compiled Rust binary using Clap can start in single-digit milliseconds, with argument parsing itself effectively free at that scale.

## Thor

Starts as fast as the Ruby interpreter itself can start, with Thor's own command dispatch adding negligible overhead.

## picocli

Starts as fast as the JVM itself can start, which (unlike compiled Go/Rust binaries) includes JVM startup overhead unless compiled ahead-of-time with GraalVM.

## Symfony Console

Starts as fast as the PHP interpreter itself can start, with Symfony Console's own command dispatch adding negligible overhead relative to PHP's own bootstrap cost.
