---
title: Orchestration and Workflows
description: How each AI framework coordinates multi-step or multi-agent work.
---

## Vercel AI SDK

Orchestration is comparatively lightweight, built around `stopWhen` stopping conditions and the newer `Agent` abstraction rather than a dedicated workflow or graph engine.

## TanStack AI

Offers composable "strategy functions" for controlling an agent loop, combining conditions like iteration limits and token budgets, rather than a full graph-based orchestration engine.

## LangChain

Provides chains and agent executors for orchestration, though complex, stateful multi-step workflows are increasingly delegated to its sibling project, LangGraph.

## LangGraph

Purpose-built for orchestration — workflows are modeled as an explicit graph of nodes and edges with persisted state, supporting cycles, branching, and durable checkpoints for production use.

## LlamaIndex

Offers "workflows" as an explicit orchestration primitive for chaining retrieval and generation steps, alongside simpler query-engine abstractions for straightforward RAG use cases.

## Mastra

Ships a dedicated workflow engine designed for reliability — if a step fails, the workflow resumes from that step rather than re-running the whole thing and re-spending LLM tokens.

## CrewAI

Orchestrates multiple agents as a "crew" executing tasks sequentially or hierarchically, with a process manager coordinating handoffs between agents.

## Semantic Kernel (Microsoft Agent Framework)

Following its merger with AutoGen, provides unified orchestration for both single-agent workflows and multi-agent conversations and handoffs within one framework.

## Haystack

Orchestrates work as directed pipelines of components (retriever, ranker, generator, and so on), a narrower, more linear model than the general-purpose agent graphs used elsewhere in this category.
