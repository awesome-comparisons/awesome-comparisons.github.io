---
title: Database and Data Model
description: What database each backend-as-a-service platform is built on and how data is modeled.
---

## Supabase

A full, unmodified Postgres database — relational tables, SQL, foreign keys, and extensions like PostGIS or pgvector all work exactly as they would with any other Postgres instance.

## Firebase

Offers Cloud Firestore, a NoSQL document database organized into collections and documents, plus the older Realtime Database, a single large JSON tree — neither supports SQL or relational joins natively.

## Appwrite

Uses its own document-oriented database abstraction (with an optional relationships feature), backed internally by MariaDB, giving a NoSQL-style API without requiring direct SQL.

## Convex

Uses a custom-built document database with a TypeScript-defined schema, where every query function automatically tracks which data it read so the platform knows exactly what to re-run when that data changes.

## PocketBase

Uses SQLite as its database, exposed through a collections-based API; reads are fast and the whole database is a single file, but write concurrency is limited compared to a client-server database under heavy load.

## Nhost

A production-grade, unmodified Postgres database, with every table and relationship automatically exposed through a real-time GraphQL API via its embedded Hasura layer.

## AWS Amplify

Typically backed by DynamoDB, a NoSQL key-value/document database, provisioned and modeled through Amplify's GraphQL schema tooling (AppSync), though it can also front other AWS data services.

## Hasura

Not a database itself — it sits on top of an existing Postgres (or other supported) database you provide and generates its GraphQL API directly from that schema.
