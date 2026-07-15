---
title: Language and Framework Coupling
description: What language each ORM is written for, and whether it's bound to one framework or usable standalone.
---

## Active Record (Ruby on Rails)

Ruby, and inseparable from Rails itself — it isn't published or used as an independent library outside a Rails application.

## Eloquent (Laravel)

PHP, and while technically extractable as the `illuminate/database` package, it's designed for and almost always used within Laravel specifically.

## Django ORM

Python, and tightly bound to Django — it isn't designed to be used outside a Django project.

## Prisma

TypeScript/JavaScript, fully framework-agnostic — usable with Express, Next.js, NestJS, or any other Node.js setup.

## Drizzle

TypeScript/JavaScript, fully framework-agnostic, popular specifically in edge/serverless contexts (Cloudflare Workers, Vercel Edge Functions) thanks to its tiny footprint.

## TypeORM

TypeScript/JavaScript, framework-agnostic, commonly paired with NestJS in particular, though usable anywhere Node.js runs.

## Sequelize

JavaScript/Node.js, framework-agnostic, one of the longest-standing choices for plain Express or Node applications.

## SQLAlchemy

Python, framework-agnostic — commonly used with Flask and FastAPI, and usable in any Python project with no framework at all.

## Entity Framework Core

C#/.NET, framework-agnostic within the .NET ecosystem, though most commonly paired with ASP.NET Core.

## Hibernate (JPA)

Java, framework-agnostic, commonly used both standalone and as the default JPA implementation inside Spring Boot applications.

## GORM

Go, framework-agnostic, commonly paired with Gin, Fiber, or any other Go web framework (or none at all).

## Diesel

Rust, framework-agnostic, usable with Actix, Axum, or any other Rust web framework.
