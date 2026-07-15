---
title: Provider and Model Support
description: How each AI framework abstracts over different model providers.
---

## Vercel AI SDK

Ships roughly 38 first-party, individually typed provider packages, covering most major model vendors with dedicated, purpose-built integrations.

## TanStack AI

Ships a smaller set of official provider adapters (around nine, including OpenAI, Anthropic, Gemini, Ollama, Groq, and xAI), reaching much broader model coverage through OpenRouter and a generic OpenAI-compatible adapter for any compatible endpoint.

## LangChain

Supports an enormous number of providers and integrations through its community-contributed integration ecosystem, arguably the broadest of any framework in this category.

## LangGraph

Inherits LangChain's model and provider integrations directly, since it's built on top of LangChain's chat model abstractions rather than defining its own.

## LlamaIndex

Supports a wide range of LLM and embedding providers through its own integrations layer, with particular depth around embedding models and vector-store providers for retrieval.

## Mastra

Supports the major providers (OpenAI, Anthropic, Google, and others) largely through the Vercel AI SDK's model providers under the hood rather than maintaining a fully separate provider layer.

## CrewAI

Supports most major LLM providers, commonly used with OpenAI, Anthropic, and local models served through Ollama.

## Semantic Kernel (Microsoft Agent Framework)

Supports OpenAI, Azure OpenAI, and other providers through a connector model, with particularly deep first-party support for Azure AI services.

## Haystack

Supports major LLM providers plus a wide range of document stores and retrieval backends (Elasticsearch, OpenSearch, Weaviate, and others) as pluggable pipeline components.
