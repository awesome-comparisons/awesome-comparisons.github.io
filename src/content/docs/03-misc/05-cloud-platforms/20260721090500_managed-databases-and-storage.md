---
title: Managed Databases and Storage
description: What managed data storage services each cloud/hosting platform offers.
---

## AWS

An enormous catalog: RDS (relational), DynamoDB (NoSQL), S3 (object storage), ElastiCache (Redis/Memcached), and many more — generally the deepest and most mature managed data portfolio of any provider.

## GCP

Cloud SQL (relational), Firestore/Bigtable (NoSQL), Cloud Storage (object storage), and BigQuery, its widely used managed data warehouse for large-scale analytics.

## Azure

Azure SQL Database, Cosmos DB (multi-model NoSQL), Blob Storage (object storage), and a broad set of enterprise-oriented managed data services.

## Vercel

No general-purpose managed database of its own historically, though it offers Vercel Storage products (KV, Blob, Postgres) built as thin managed layers over underlying infrastructure partners.

## Cloudflare

Offers its own storage primitives purpose-built for Workers: KV (key-value), R2 (S3-compatible object storage with no egress fees), D1 (SQLite-based relational), and Durable Objects for stateful coordination.

## Netlify

No general-purpose managed database of its own; typically paired with an external database or BaaS provider rather than one bundled into the platform.

## DigitalOcean

Managed Databases covering PostgreSQL, MySQL, Redis/Valkey, and MongoDB, plus Spaces for S3-compatible object storage — a smaller but still solid managed data catalog.

## Render

Managed PostgreSQL and Redis instances offered directly alongside your web services, with no broader storage catalog beyond that.

## Fly.io

Offers Fly Postgres (self-managed Postgres running on Fly Machines) and object storage through Tigris, a partner integration, rather than an extensive first-party data portfolio.

## Heroku

Heroku Postgres and Heroku Redis are the platform's long-standing managed data add-ons, historically a major reason developers chose Heroku in the first place.
