---
title: Plugin and Extensibility
description: Whether each CLI library supports a plugin system for third parties to extend a CLI after it ships.
---

## Commander.js

Has no built-in plugin system — extending a Commander-based CLI means modifying its own source, since it's designed for a single, self-contained tool rather than a plugin host.

## Yargs

Has no built-in plugin system of its own, similar to Commander in this respect, though its middleware feature offers some hooks for extending request-like processing of arguments.

## oclif

Its defining feature: a full plugin architecture where third-party npm packages install as CLI plugins and appear as native commands, the same system the Salesforce CLI uses to ship dozens of independently maintained plugins.

## Click

Has no built-in plugin system, though its group/command composition makes it straightforward to assemble a CLI's commands from multiple installable Python packages manually.

## argparse

Has no plugin system at all — it's a low-level parsing library, not a CLI application framework with an extensibility story.

## Typer

Has no built-in plugin system, inheriting Click's composability for assembling commands from multiple sources but without a dedicated plugin-discovery mechanism.

## Cobra

Has no built-in plugin system for dynamically loading third-party commands at runtime, though its command-composition model makes statically compiling in additional commands straightforward.

## Clap

Has no plugin system — as a compiled Rust binary, dynamically loading third-party commands isn't a natural fit for its compile-time-oriented design.

## Thor

Has no built-in plugin system, though its class-based commands can be composed from multiple Ruby gems manually.

## picocli

Has no built-in plugin system, though its annotation-driven commands can be assembled from classes defined across multiple JARs.

## Symfony Console

Supports adding commands from installed Symfony bundles/packages, giving it a more plugin-like extensibility model than most of the libraries in this group besides oclif.
