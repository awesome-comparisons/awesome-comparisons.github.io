---
title: Subcommands and Nesting
description: How each CLI library supports multi-level command structures.
---

## Commander.js

Supports nested subcommands (`git remote add`) by attaching sub-programs to a parent command, though deeply nested CLIs require more manual wiring than some alternatives.

## Yargs

Supports nested subcommands through its command modules, with each module able to define its own subcommands recursively.

## oclif

Built specifically around multi-command CLIs from the start — commands are namespaced by file path (`src/commands/config/set.ts` becomes `cli config:set`), making deep nesting a natural default rather than an add-on.

## Click

Supports nested command groups (`@click.group()`) that themselves contain subcommands or further nested groups, a core, well-supported feature of the library.

## argparse

Supports one level of subcommands natively via subparsers; deeper nesting is possible but requires manually nesting subparsers within subparsers.

## Typer

Supports nested command groups by mounting one Typer app inside another (`app.add_typer(sub_app)`), inheriting Click's underlying group support with a simpler interface.

## Cobra

Supports arbitrarily deep command nesting by attaching child `Command` objects to parents, the same pattern used by large CLIs like `kubectl`'s many nested resource subcommands.

## Clap

Supports nested subcommands through the builder API or nested enums in the derive API, letting a CLI's subcommand tree be modeled as ordinary nested Rust types.

## Thor

Supports nested subcommands by registering another Thor subclass as a `subcommand`, letting command namespaces grow into their own dedicated classes.

## picocli

Supports nested subcommands by registering child `@Command`-annotated classes on a parent command, building arbitrarily deep command hierarchies.

## Symfony Console

Supports command namespacing through colon-separated naming conventions (`app:cache:clear`) rather than a true nested subcommand tree, though commands can still be logically grouped this way.
