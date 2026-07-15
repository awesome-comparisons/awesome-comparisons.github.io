---
title: Command and Argument Definition
description: How each CLI library lets you define commands, options, and arguments.
---

## Commander.js

Commands and options are defined through a fluent, chainable API (`program.command('build').option('-w, --watch')`), building up the CLI declaratively at startup.

## Yargs

Commands and options are defined through a similarly chainable API, but with a richer configuration object per option (type coercion, validation, default values, conflicts between options) than Commander offers.

## oclif

Each command is its own class in its own file, with flags and arguments declared as static class properties — a more structured, file-per-command convention than Commander's single-file style.

## Click

Commands are plain Python functions decorated with `@click.command()`, with options and arguments added via `@click.option()`/`@click.argument()` decorators stacked on top.

## argparse

Commands and options are defined imperatively by creating an `ArgumentParser` and calling `add_argument()` for each one, with subcommands added via a separate subparsers object.

## Typer

Commands and options are inferred directly from a Python function's signature and type hints (`def build(watch: bool = False)`), requiring far less explicit declaration than Click or argparse.

## Cobra

Commands are defined as `cobra.Command` structs with `Use`, `Short`, and a `Run` function, with flags attached via a companion `pflag` package.

## Clap

Commands and arguments can be defined either through a builder API or, more commonly today, through a `#[derive(Parser)]` macro on a plain Rust struct whose fields become the CLI's arguments.

## Thor

Commands are defined as methods on a class inheriting from `Thor`, with a `desc` call above each method describing it and `method_option` for flags.

## picocli

Commands and options are defined through annotations (`@Command`, `@Option`, `@Parameters`) directly on a Java class and its fields.

## Symfony Console

Commands are defined as classes extending `Command`, configuring arguments and options in a `configure()` method and implementing the command logic in `execute()`.
