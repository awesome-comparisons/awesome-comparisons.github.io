---
title: ORM and Data Access
description: The default or most common ORM and data-access layer used with Express, Fastify, NestJS, Django, Flask, FastAPI, Ruby on Rails, Spring Boot, ASP.NET Core, Laravel, Gin, Fiber, Actix, and Phoenix.
---

## Express

Has no built-in data-access layer at all; developers bring their own, most commonly Prisma, Sequelize, or TypeORM for SQL, and Mongoose for MongoDB. The choice of ORM and its conventions are entirely up to the project.

## Fastify

Also ships without any bundled ORM. Prisma, Knex (as a query builder), and Mongoose are common companions, usually wired in as Fastify plugins so the database client is decorated onto the app instance.

## NestJS

Framework-agnostic on data access but provides first-class integration modules for TypeORM, Prisma, and Mongoose, exposing them as injectable providers through Nest's dependency injection system so repositories can be consumed like any other service.

## Django

Ships with the Django ORM built directly into the framework: models are defined as Python classes in `models.py`, migrations are auto-generated from model changes, and QuerySets provide a lazy, chainable query API across Postgres, MySQL, SQLite, and Oracle.

## Flask

Has no built-in ORM; Flask-SQLAlchemy is the de facto standard extension, wrapping SQLAlchemy's Core and ORM layers with Flask-specific configuration and session management conveniences.

## FastAPI

Ships without an ORM as well; SQLAlchemy (increasingly its async engine) is the most common pairing, often combined with Pydantic-based SQLModel for a unified model/schema definition, or async drivers like `asyncpg` for raw queries.

## Ruby on Rails

Active Record is the built-in ORM and one of Rails' signature features, mapping database tables to Ruby classes by convention, with migrations, associations (`has_many`, `belongs_to`), and validations all defined declaratively on the model.

## Spring Boot

Spring Data JPA, built on top of Hibernate, is the standard data-access approach: repository interfaces automatically generate implementations for common queries, and entities are mapped with JPA annotations.

## ASP.NET Core

Entity Framework Core is Microsoft's official ORM, supporting a code-first workflow with migrations, a `DbContext`/`DbSet` model, and LINQ as the primary query language against the mapped entities.

## Laravel

Eloquent is the built-in ORM, implementing the Active Record pattern with expressive relationship definitions, migrations, and a fluent query builder that underlies it for lower-level queries.

## Gin

Has no built-in data layer; GORM is the most widely used companion ORM in the Go ecosystem, though many Gin projects use `database/sql` directly or a lighter query builder like `sqlx`.

## Fiber

Also has no bundled data-access layer; like Gin, it's commonly paired with GORM or `sqlx`, with the framework itself staying entirely focused on HTTP concerns.

## Actix

Ships without an ORM; Diesel (a compile-time-checked query builder/ORM) and SeaORM (async-first) are the most common choices, with `sqlx` also popular for teams that prefer raw async SQL with compile-time verification.

## Phoenix

Ecto is the standard data-mapping and query library used with Phoenix — not a classic ORM, but an explicit system of schemas, changesets for validation/casting, and a composable query DSL for building SQL queries.
