---
title: Databases
description: Postgres vs MySQL vs SQLite for small-to-mid apps.
---

## Postgres

Rich type system (JSONB, arrays, ranges), strong consistency guarantees,
excellent extension ecosystem (PostGIS, pgvector). Good default choice
when unsure.

## MySQL

Slightly simpler operational model, very well understood at scale,
widely supported by managed hosting providers.

## SQLite

Zero-config, embedded, no network hop. Ideal for local-first apps, edge
functions, or anywhere a full database server is overkill.

```sql
-- SQLite is a single file — no server process to manage
CREATE TABLE comparisons (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL
);
```

## Rule of thumb

Start with SQLite for prototypes and single-node deployments, move to
Postgres once you need concurrent writers or advanced query features.
