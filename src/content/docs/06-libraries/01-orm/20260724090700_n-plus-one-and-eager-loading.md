---
title: N+1 and Eager Loading
description: How each ORM helps developers avoid N+1 query problems when loading related data.
---

## Active Record (Ruby on Rails)

Provides `includes`/`eager_load` to preload associations in one or two extra queries instead of one per record, plus the Bullet gem is commonly used to detect N+1 queries in development.

## Eloquent (Laravel)

Provides `with()` for eager loading relationships, and will throw an error in "strict mode" if lazy loading happens where it wasn't expected, helping catch N+1 issues early.

## Django ORM

Provides `select_related` (SQL joins, for single-valued relationships) and `prefetch_related` (separate queries, for multi-valued relationships) to explicitly control eager loading.

## Prisma

Uses `include`/`select` on a query to eager-load relations in an optimized way, avoiding N+1 patterns as long as relations are requested through the query itself rather than accessed lazily afterward.

## Drizzle

Its relational query API supports nested `with` clauses to fetch related data efficiently in one query, while its lower-level query builder requires explicit joins if you write it that way instead.

## TypeORM

Supports eager loading via `relations` options or the QueryBuilder's `leftJoinAndSelect`, with lazy relations (Promises) also available but easy to accidentally trigger N+1 queries with.

## Sequelize

Supports eager loading through the `include` option on queries, joining related models in a single query when configured correctly.

## SQLAlchemy

Offers fine-grained control over loading strategy per relationship (`joinedload`, `subqueryload`, `selectinload`), letting you tune exactly how related data is fetched.

## Entity Framework Core

Supports eager loading via `.Include()` on a LINQ query, lazy loading via proxies (opt-in), and explicit loading for on-demand fetches — three distinct strategies to choose from.

## Hibernate (JPA)

Supports `FetchType.EAGER`/`FetchType.LAZY` per relationship, plus JPQL `JOIN FETCH` for query-specific eager loading, with lazy loading as the default for collections.

## GORM

Supports eager loading via `Preload()`, explicitly joining related data in a separate query per relation to avoid N+1 patterns when used correctly.

## Diesel

Has no automatic relationship loading at all — every join is written out explicitly in the query, which avoids N+1 problems by construction since there's no lazy loading to accidentally trigger.
