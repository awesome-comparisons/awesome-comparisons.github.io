---
title: Schema and Migrations
description: How 14 popular databases handle schema definition, enforcement, and evolution over time.
---

## PostgreSQL

Enforces a strict schema with a rich `ALTER TABLE` feature set for
evolving it. Migrations are typically handled with external tools such as
Flyway, Alembic, or Sqitch, applied as versioned SQL scripts.

## MySQL

Also enforces schema strictly. Historically, some `ALTER TABLE` operations
locked the whole table, though InnoDB's online DDL support has since made
many common changes non-blocking. Migration tooling like Liquibase or
framework-native migrations is standard.

## SQLite

Uses type affinity rather than strict typing, making its schema looser in
practice. `ALTER TABLE` support is limited (no column type changes, and
`DROP COLUMN` support only arrived in 3.35), so bigger changes often
require a rebuild-and-copy pattern.

## MongoDB

Schema-less by default — documents within a collection can vary in shape
— though optional JSON Schema validation rules can be attached to a
collection to enforce structure when desired.

## Redis

Has no schema concept whatsoever. Structure lives entirely in the
application's choice of data type (string, hash, list, set, sorted set)
and how it interprets the values stored.

## Cassandra

Defines a schema per table but treats it flexibly — adding new columns is
cheap. Changing a partition key or column type generally isn't possible in
place and requires creating a new table and migrating the data.

## DynamoDB

Requires only the primary key (and any index keys) to be defined upfront;
every other item attribute is optional and can vary freely, so adding new
fields needs no migration step at all.

## CockroachDB

Enforces a strict relational schema just like Postgres, but supports
online schema changes that avoid blocking concurrent reads and writes
while the change is rolled out cluster-wide.

## MariaDB

Shares MySQL's schema rigidity and InnoDB online DDL capabilities, and
integrates with the same broad ecosystem of migration tools.

## Oracle Database

Enforces a strict schema with extensive DDL capabilities, including
`DBMS_REDEFINITION` for reorganizing or altering large tables online
without downtime.

## SQL Server

Enforces a strict schema, with online index and schema-change operations
available in Enterprise edition; migrations are commonly managed through
SSDT projects or ORM-driven migration frameworks like EF Migrations.

## Elasticsearch

Uses mappings to define each field's type per index. Dynamic mapping can
infer types from incoming documents automatically, but correcting or
changing a field's type after the fact generally requires reindexing into
a new index.

## Neo4j

Schema-optional: node labels and relationship types don't need to be
declared in advance, though constraints and indexes can be added on
specific properties to enforce structure where it matters.

## Firestore

Documents and collections are schema-less, with structure enforced only by
convention in application code. There's no formal migration mechanism —
changing a document's shape is just a matter of writing it differently.
