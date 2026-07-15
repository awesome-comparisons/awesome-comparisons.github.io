---
title: Scaling
description: How 14 popular databases grow to handle more data and traffic, vertically or horizontally.
---

## PostgreSQL

Scales primarily by adding more CPU/memory to a single node, plus read
replicas for read-heavy workloads. Horizontal write scaling requires
partitioning or extensions like Citus, since sharding isn't built in
natively.

## MySQL

Similar vertical-first story, extended with read replicas for scale-out
reads. Horizontal sharding is typically handled at the application layer or
via tools like Vitess rather than natively.

## SQLite

Effectively single-machine, single-writer; there's no cluster mode.
Concurrent readers are well supported, but scaling write throughput beyond
one process isn't a design goal.

## MongoDB

Built for horizontal scale from the start: sharding distributes collections
across shards by a shard key, with `mongos` routers directing queries
transparently to the right shard.

## Redis

Redis Cluster shards the keyspace across nodes using hash slots, combined
with per-shard replicas, allowing both storage and throughput to scale
horizontally.

## Cassandra

Designed for linear horizontal scalability using consistent hashing across
a peer-to-peer ring of nodes, spanning multiple datacenters with no single
point of failure.

## DynamoDB

Automatically partitions tables by partition key and scales elastically,
with on-demand or provisioned capacity modes; scaling is fully managed and
largely invisible to the application.

## CockroachDB

Horizontally scalable by design: data is split into ranges that are
automatically rebalanced and split further as a table grows across an
arbitrary number of nodes.

## MariaDB

Scales much like MySQL — vertically first, with replicas for read scaling
— while tools like MaxScale help distribute load or shard data across
multiple servers.

## Oracle Database

Emphasizes vertical scaling, with Real Application Clusters (RAC) enabling
multiple instances to share a single storage layer for scale-out
compute. A separate sharding feature exists for horizontal distribution.

## SQL Server

Vertical scaling is the primary lever, supplemented by read-scale
availability group replicas and, on Azure SQL, elastic database pools for
horizontal distribution.

## Elasticsearch

Horizontally scalable by design: indices are split into shards distributed
across nodes, so adding nodes increases both storage capacity and query
throughput.

## Neo4j

Vertical scaling handles write throughput on a single instance, while
causal clustering adds read replicas for scale-out reads; sharding a graph
across machines is inherently harder and handled via federation (Fabric).

## Firestore

Scales automatically and horizontally as a fully managed service, with no
server provisioning, sharding configuration, or capacity planning required
from the developer.
