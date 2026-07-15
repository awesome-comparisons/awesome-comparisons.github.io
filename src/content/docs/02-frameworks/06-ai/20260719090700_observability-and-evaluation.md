---
title: Observability and Evaluation
description: How each AI framework supports tracing, debugging, and evaluating LLM application quality.
---

## Vercel AI SDK

Provides telemetry hooks and integrates with OpenTelemetry, with deeper tracing available through Vercel's own platform tooling, like AI Gateway observability, when deployed there.

## TanStack AI

As a young, library-first project, leaves most observability and evaluation tooling to external libraries rather than shipping its own, consistent with its "compose what you need" philosophy.

## LangChain

Pairs closely with LangSmith, its companion platform for tracing, debugging, and evaluating LLM applications, which has become a widely used observability layer even for non-LangChain apps.

## LangGraph

Integrates with LangSmith for tracing graph execution step by step, particularly useful for debugging complex, multi-node agent workflows.

## LlamaIndex

Integrates with its own observability tooling as well as third-party providers, focused on tracing retrieval and query pipelines.

## Mastra

Treats evaluation as a first-class, code-based concept — eval suites run in CI and can gate deploys on metrics like faithfulness and answer relevance, alongside built-in OpenTelemetry tracing.

## CrewAI

Offers basic execution logging and integrates with external observability platforms, without as mature a first-party evaluation story as some newer frameworks.

## Semantic Kernel (Microsoft Agent Framework)

Integrates with standard .NET/Python telemetry conventions and Azure Monitor/Application Insights for enterprises already on Azure.

## Haystack

Provides pipeline-level logging and integrates with observability tools, with evaluation components purpose-built for measuring RAG quality, like retrieval relevance and answer correctness.
