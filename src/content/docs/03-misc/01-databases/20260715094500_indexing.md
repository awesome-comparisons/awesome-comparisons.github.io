---
title: Indexing
description: How 14 popular databases implement indexes to speed up lookups and queries.
---

## PostgreSQL

Defaults to B-tree indexes, but also ships GiST, SP-GiST, GIN, BRIN, and hash
index types for specialized needs like full-text search, ranges, and arrays.
Supports partial indexes, expression indexes, and covering indexes via the
`INCLUDE` clause.

## MySQL

InnoDB clusters the table around the primary key's B-tree, so secondary
indexes store the primary key as a pointer back to the row. Also supports
full-text and spatial indexes, plus an internal adaptive hash index for
frequently accessed pages.

## SQLite

Uses B-tree structures for both tables (rowid-ordered) and indexes. Supports
partial and expression indexes but has no hash or bitmap index types,
keeping the feature set intentionally minimal.

## MongoDB

B-tree indexes can be created on any field, including fields inside nested
documents and arrays (multikey indexes). Offers compound, text, geospatial,
and wildcard indexes to match its flexible document model.

## Redis

Has no built-in secondary indexing; data is accessed primarily by key.
Applications commonly build manual indexes using sorted sets or hashes, or
add the RediSearch module for full secondary-index and search capabilities.

## Cassandra

The partition key doubles as the primary access path via consistent
hashing. Native secondary indexes exist but scale poorly and are generally
discouraged in favor of denormalized tables or materialized views built for
each query pattern.

## DynamoDB

Requires a primary key (partition key, optionally with a sort key) defined
upfront, plus explicit Global and Local Secondary Indexes to support
additional access patterns. There is no ad-hoc or dynamic indexing after the
fact.

## CockroachDB

Follows the Postgres model closely, supporting B-tree secondary indexes and
GIN-style inverted indexes for JSON and array columns, all automatically
distributed and replicated across the cluster.

## MariaDB

Shares MySQL's InnoDB-based B-tree indexing and clustered primary keys, and
adds a columnar index implementation in its ColumnStore engine for
analytical workloads.

## Oracle Database

Offers B-tree indexes alongside bitmap indexes, which are especially
efficient for low-cardinality columns common in data warehousing. Also
supports function-based and domain-specific indexes for text or spatial
data.

## SQL Server

Distinguishes between a clustered index, which physically orders the table
data, and nonclustered indexes that reference it. Also provides columnstore
indexes for analytic workloads and filtered indexes over subsets of rows.

## Elasticsearch

Built around the inverted index, mapping terms to the documents that
contain them for fast full-text search, complemented by doc values for
efficient sorting and aggregations. This is fundamentally different from
B-tree-based databases.

## Neo4j

Uses index-free adjacency as its core storage model, so relationship
traversals don't require a lookup index at all. Separate schema indexes
(B-tree and full-text) exist to find starting nodes quickly by property
value.

## Firestore

Automatically maintains single-field indexes for every field in a
document. Queries that filter or sort on multiple fields require composite
indexes, which must be explicitly defined and which add to write costs.
