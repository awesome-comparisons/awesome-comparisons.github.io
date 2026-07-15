---
title: Replication
description: How 14 popular databases copy data across nodes for durability, availability, and read scaling.
---

## PostgreSQL

Uses WAL-based streaming replication to maintain read replicas, replicating
either the whole cluster (physical) or selected tables (logical). Async
replication is the default, with synchronous replication available for
stronger durability guarantees.

## MySQL

Replicates via the binary log, historically in an async primary-replica
topology. Semisynchronous replication and Group Replication add stronger
guarantees, with the latter enabling multi-primary configurations.

## SQLite

Has no built-in replication mechanism since it's an embedded, single-file
database. Multi-node durability relies on external tools like Litestream or
application-level file copying.

## MongoDB

Organizes nodes into replica sets with automatic, Raft-like primary
election. Replication is asynchronous by default, but write concern
settings (e.g., majority) let applications trade latency for durability.

## Redis

Replicates asynchronously from a primary to one or more replicas. Redis
Sentinel adds automated failover, while Redis Cluster combines sharding
with per-shard replica sets for both scale and availability.

## Cassandra

Peer-to-peer with no single primary; every node can accept writes. A
configurable replication factor determines how many copies of each
partition exist across nodes and datacenters, with consistency tuned per
operation.

## DynamoDB

Synchronously replicates data across multiple Availability Zones under the
hood, transparent to the developer. Global Tables extend this with
asynchronous multi-region replication for globally distributed
applications.

## CockroachDB

Replicates data ranges using the Raft consensus protocol, requiring a
quorum of replicas to acknowledge writes. This makes replication
synchronous by design, prioritizing strong consistency.

## MariaDB

Inherits MySQL's binary-log replication lineage, and additionally offers
native Galera Cluster support for synchronous, multi-primary replication
across nodes.

## Oracle Database

Provides Data Guard for physical or logical standby replication aimed at
disaster recovery, and GoldenGate for flexible, often multi-master,
heterogeneous replication scenarios.

## SQL Server

Always On Availability Groups support both synchronous and asynchronous
replicas for HA and disaster recovery, alongside older transactional
replication and log shipping options.

## Elasticsearch

Each shard has a configurable number of replica shards that asynchronously
mirror its data across the cluster, providing both fault tolerance and
additional capacity for serving read/search traffic.

## Neo4j

Causal clustering separates core servers, which replicate writes via Raft,
from read replicas that asynchronously pull updates to scale out read
throughput.

## Firestore

Fully managed multi-region synchronous replication is built in when a
database is configured in multi-region mode, entirely abstracted away from
application code.
