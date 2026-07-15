---
title: RAG and Data Integration
description: How each AI framework handles retrieval-augmented generation and connecting models to your own data.
---

## Vercel AI SDK

Provides low-level primitives for streaming and embeddings but leaves retrieval and indexing — vector stores, chunking strategy — to the developer or a paired library.

## TanStack AI

Focuses primarily on model interaction, streaming, and tool calling rather than shipping its own retrieval or indexing layer, expecting RAG to be composed from separate data libraries.

## LangChain

Has broad built-in support for document loaders, text splitters, and integrations with most popular vector databases, making it a common default choice for building RAG pipelines.

## LangGraph

Doesn't add its own RAG primitives, but is commonly used to orchestrate multi-step retrieval-and-generation workflows built from LangChain's retrieval components.

## LlamaIndex

RAG and data indexing is its core focus — it's built around ingesting, chunking, indexing, and querying your own documents, generally considered to have the deepest RAG-specific tooling in this category.

## Mastra

Supports RAG through its own composable primitives for chunking, embedding, and vector store integration, alongside its agent and workflow features.

## CrewAI

Supports RAG through tool integrations, such as connecting an agent to a retriever tool, rather than shipping first-party indexing infrastructure.

## Semantic Kernel (Microsoft Agent Framework)

Supports retrieval through connectors to vector stores, including Azure AI Search, as one of many available plugins and connectors.

## Haystack

RAG pipelines are Haystack's original and primary use case, with mature, well-documented components for chunking, embedding, retrieval, and ranking.
