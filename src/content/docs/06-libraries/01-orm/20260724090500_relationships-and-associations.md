---
title: Relationships and Associations
description: How each ORM lets you define relationships between models.
---

## Active Record (Ruby on Rails)

Relationships are declared with simple class-level macros (`has_many`, `belongs_to`, `has_one`), which then expose the related records as regular Ruby methods/attributes on the model.

## Eloquent (Laravel)

Relationships are declared as methods returning a relationship type (`hasMany`, `belongsTo`, `belongsToMany`), accessed on the model like a dynamic property once called.

## Django ORM

Relationships are declared as fields on the model (`ForeignKey`, `ManyToManyField`, `OneToOneField`), with Django automatically creating the reverse relationship accessor on the related model.

## Prisma

Relationships are declared directly in the schema file with `@relation` attributes, and the generated client exposes them as nested, type-safe fields you can optionally `include` in a query.

## Drizzle

Relationships are declared explicitly via a separate `relations()` helper alongside your table definitions, then queried through Drizzle's relational query API when nested data is needed.

## TypeORM

Relationships are declared with decorators (`@OneToMany`, `@ManyToOne`, `@ManyToMany`) directly on entity class properties.

## Sequelize

Relationships are declared through association methods called on model classes (`User.hasMany(Post)`), configuring how models relate outside the class definitions themselves.

## SQLAlchemy

Relationships are declared with the `relationship()` construct, typically alongside explicit foreign key columns, giving fine control over loading strategy per relationship.

## Entity Framework Core

Relationships are usually inferred from navigation properties and foreign key conventions on your C# classes, with explicit configuration available via Fluent API when convention isn't enough.

## Hibernate (JPA)

Relationships are declared with annotations (`@OneToMany`, `@ManyToOne`, `@ManyToMany`) specifying fetch type and cascade behavior directly on entity fields.

## GORM

Relationships are inferred from struct fields and naming conventions (a `UserID` field implies a belongs-to relationship), with tags available to override the defaults.

## Diesel

Relationships aren't automatically inferred — joins are expressed explicitly through Diesel's query builder and macros that describe how tables relate for that specific query.
