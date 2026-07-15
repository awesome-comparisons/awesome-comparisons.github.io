---
title: Use Cases
description: What kinds of applications and workloads 14 popular databases are typically chosen for.
---

## PostgreSQL

A strong general-purpose choice for OLTP applications and complex
analytical queries alike, favored when teams need rich SQL, strong
consistency, and extensions like PostGIS for geospatial workloads.

## MySQL

Common in web applications, content management systems, and e-commerce
platforms, particularly where read-heavy workloads, simplicity, and broad
managed-hosting support are priorities.

## SQLite

Well suited to embedded and mobile apps, local-first software, automated
testing, and edge/serverless functions — anywhere a full client-server
database would be unnecessary overhead.

## MongoDB

Popular for content catalogs, product catalogs, and applications with
evolving or deeply nested document structures, where rapid iteration on
data shape matters more than rigid schema enforcement.

## Redis

Widely used as a caching layer, session store, and backing store for
real-time features like leaderboards and rate limiting, as well as
lightweight pub/sub messaging and queues.

## Cassandra

Fits write-heavy time-series and IoT data, and applications spanning
multiple datacenters that need to stay available even during partial
outages, at the cost of strict consistency.

## DynamoDB

A natural fit for serverless, AWS-native applications that need
predictable low-latency access at very large scale, common in gaming and
ad-tech workloads.

## CockroachDB

Chosen for globally distributed applications that need both strong
consistency and horizontal scale, including financial and other regulated
systems that require geo-partitioned data.

## MariaDB

Often used as a drop-in MySQL replacement in open-source-first
environments, particularly where teams want to avoid Oracle's MySQL
licensing terms while keeping a familiar relational workflow.

## Oracle Database

Deployed heavily in large enterprises for OLTP and data warehousing,
especially mission-critical financial and ERP systems that require vendor
support and strict compliance guarantees.

## SQL Server

Common in enterprises standardized on the Microsoft stack, integrating
tightly with business-intelligence tools like SSRS and SSAS and with
.NET-centric application development.

## Elasticsearch

The go-to choice for full-text search, log and event analytics (as in the
ELK stack), observability platforms, and features like autocomplete or
relevance-ranked search.

## Neo4j

Suited to problems that are naturally graph-shaped: fraud detection,
recommendation engines, social networks, and knowledge graphs where
relationships between entities are as important as the entities
themselves.

## Firestore

A common backend for mobile and web apps that need real-time data sync,
offline support, and serverless auto-scaling with minimal operational
overhead, especially within the Firebase ecosystem.
