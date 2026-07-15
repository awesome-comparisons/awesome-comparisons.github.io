---
title: Scripting and Languages
description: What programming language(s) each game engine uses for gameplay code.
---

## Unity

C# is the primary scripting language, running on Unity's own .NET-based runtime, with an increasingly capable Data-Oriented Technology Stack (DOTS) for performance-critical ECS-style code.

## Unreal Engine

C++ for performance-critical and low-level gameplay systems, paired with Blueprints, a visual scripting system that covers a large share of gameplay logic without writing C++ at all.

## Godot

GDScript, a Python-like language purpose-built for Godot, alongside official support for C# and C++ (GDExtension) for teams that want a more traditional or performance-critical language.

## GameMaker

GML (GameMaker Language), a purpose-built scripting language designed to be approachable for beginners, alongside a visual "drag and drop" scripting mode for code-free logic.

## Construct

No traditional scripting language at all by default — logic is built entirely through its visual event-sheet system, though JavaScript can be added for advanced custom behavior.

## CryEngine

C++ for core engine and gameplay code, with Lua historically used for scripting and a Flowgraph visual scripting system for designer-friendly logic.

## Cocos Creator

JavaScript/TypeScript as the primary scripting languages, reflecting its web and mobile-first design, with the underlying engine itself written in C++.

## Bevy

Rust exclusively — there's no separate scripting language, gameplay code is written in the same Rust the engine itself is built with.

## Defold

Lua as the sole scripting language, chosen deliberately for being lightweight, fast, and simple to embed.
