---
title: Query Language
description: How 14 popular databases let you ask questions of your data, from SQL dialects to APIs and DSLs.
---

## PostgreSQL

Uses standard SQL extended with rich features like window functions,
common table expressions, JSON operators, and the procedural PL/pgSQL
language for stored functions and triggers.

## MySQL

Speaks a SQL dialect that mostly follows ANSI SQL with some notable
deviations, and supports stored procedures, views, and triggers for
encapsulating logic server-side.

## SQLite

Implements a substantial subset of SQL-92, with a few quirks such as
dynamic type affinity that make its type handling more permissive than
most other SQL databases.

## MongoDB

Exposes a JSON-like query API where filters are expressed as documents
(`find({...})`), complemented by an aggregation pipeline for multi-stage
transformations, grouping, and joins across collections.

## Redis

Has no query language at all; interaction happens through discrete commands
per data structure (`GET`, `HSET`, `ZADD`, and so on), with Lua scripting
available for atomic, multi-step server-side logic.

## Cassandra

Uses CQL (Cassandra Query Language), which looks SQL-like on the surface
but intentionally omits joins and unrestricted filtering to keep queries
aligned with the partition-based storage model.

## DynamoDB

Primarily accessed through API operations like GetItem, Query, and Scan
using key-condition and filter expressions rather than a general query
language, though PartiQL offers an optional SQL-compatible syntax.

## CockroachDB

Implements PostgreSQL-compatible SQL, deliberately matching Postgres syntax
and wire protocol closely enough that many Postgres drivers and tools work
without modification.

## MariaDB

Uses a SQL dialect compatible with MySQL's, with some additional syntax of
its own, such as dynamic columns and sequences, layered on top.

## Oracle Database

Combines standard SQL with PL/SQL, a full procedural extension for stored
procedures, packages, and triggers, plus an extensive library of analytic
SQL functions.

## SQL Server

Uses T-SQL (Transact-SQL), a SQL dialect with procedural extensions,
strong windowing/analytic function support, and integration with the CLR
for custom logic.

## Elasticsearch

Primarily queried through a JSON-based Query DSL tailored for full-text
search and filtering, with newer piped query languages (ES|QL) and a
SQL-like interface available for more analytical use cases.

## Neo4j

Uses Cypher, a declarative query language that expresses graph patterns
visually, using ASCII-art-like syntax to describe nodes and the
relationships connecting them.

## Firestore

Has no standalone query language; queries are built by chaining methods
(`where`, `orderBy`, `limit`) on client SDK objects, which the SDK compiles
into underlying RPC calls.
