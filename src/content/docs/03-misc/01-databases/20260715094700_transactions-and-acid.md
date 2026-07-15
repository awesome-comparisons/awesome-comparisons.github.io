---
title: Transactions and ACID
description: How 14 popular databases balance ACID guarantees against availability and scale.
---

## PostgreSQL

Fully ACID compliant, using MVCC to provide non-blocking reads. Supports
all standard isolation levels, including a true serializable level (SSI)
that detects and prevents anomalies other databases allow.

## MySQL

ACID compliant when using the default InnoDB storage engine, with support
for all four SQL isolation levels. The older MyISAM engine, still present
for some workloads, is not transactional.

## SQLite

Fully ACID for a single writer at a time; transactions are serialized.
Write-Ahead Logging (WAL) mode improves concurrency by letting readers
proceed while a write is in progress, without weakening durability.

## MongoDB

Individual document writes are always atomic. Multi-document ACID
transactions were added in version 4.0 for replica sets and extended to
sharded clusters in 4.2, letting applications wrap several operations
across collections in one transaction.

## Redis

Supports MULTI/EXEC transactions that queue commands and execute them
atomically, plus optimistic locking via WATCH. However, it lacks rollback
on runtime command errors and doesn't offer traditional isolation levels.

## Cassandra

Not ACID by default; it favors availability and partition tolerance with
tunable consistency levels (ONE, QUORUM, ALL) chosen per query. Lightweight
transactions using Paxos provide limited compare-and-set style atomicity
when needed.

## DynamoDB

Reads and writes are eventually consistent by default, with strongly
consistent reads available as an option. TransactWriteItems and
TransactGetItems provide full ACID semantics across multiple items and
tables when explicitly requested.

## CockroachDB

Fully ACID with serializable isolation as the only (and default) isolation
level. Distributed transactions are coordinated through Raft consensus,
prioritizing consistency even across nodes and regions.

## MariaDB

ACID compliant via the InnoDB (or XtraDB) storage engine, mirroring
MySQL's transactional model and isolation level support closely.

## Oracle Database

Fully ACID with a long-standing reputation for robust multi-version read
consistency, making it a traditional choice for mission-critical OLTP
systems that cannot tolerate anomalies.

## SQL Server

Fully ACID, supporting all four standard isolation levels plus snapshot
isolation, which uses row versioning to reduce reader/writer blocking.

## Elasticsearch

Not ACID and has no multi-document transaction support. It offers optimistic
concurrency control via document versioning and is near-real-time rather
than immediately consistent after a write.

## Neo4j

ACID transactions are supported for graph writes on a single instance, with
causal consistency guarantees ensuring a client reads its own writes across
a causal cluster.

## Firestore

Provides strong consistency for single-document reads and supports
multi-document ACID transactions with serializable isolation, subject to
limits like a maximum of 500 documents and a bounded transaction duration.
