---
title: Tool Calling and Agents
description: How each AI framework defines and executes tool calls and agent behavior.
---

## Vercel AI SDK

Tools are defined independently via a `tool()` helper; client-side execution flows through `onToolCall` callbacks in UI hooks rather than a shared definition, and version 6 introduces a reusable `Agent` class bundling a model, tools, and settings together.

## TanStack AI

Uses isomorphic tool definitions — a tool is defined once with `toolDefinition()` and given separate `.server()`/`.client()` implementations from that single contract, with built-in support for tool-approval (human-in-the-loop) flows.

## LangChain

Tools are discrete objects or functions bound to a model or agent executor, backed by a large ecosystem of prebuilt tool integrations covering search, code execution, APIs, and more.

## LangGraph

Models agents and tools as nodes and edges in an explicit state graph, giving fine-grained control over exactly when and how a tool call happens within a larger workflow.

## LlamaIndex

Supports tool-calling agents, but its tools are typically oriented around querying indexes and data sources rather than general-purpose actions.

## Mastra

Tool inputs and outputs are defined with Zod schemas for end-to-end type safety, giving editor autocomplete on every parameter and avoiding the loosely-typed tool definitions common in JS ports of Python-first frameworks.

## CrewAI

Tools are assigned to individual agents as part of their role definition, so each agent in a crew only has access to the tools relevant to its assigned task.

## Semantic Kernel (Microsoft Agent Framework)

Exposes functions as "plugins" that models can call, with automatic function-calling wired directly into the SDK's planning and orchestration layer.

## Haystack

Exposes retrieval, generation, and processing steps as composable pipeline components rather than agent "tools" in the LangChain sense, though it also supports agent-style tool use for more dynamic pipelines.
