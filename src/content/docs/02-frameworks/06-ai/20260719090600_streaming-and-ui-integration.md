---
title: Streaming and UI Integration
description: How each AI framework streams model output into a frontend.
---

## Vercel AI SDK

Streaming and UI integration is a core strength — hooks like `useChat`, `useCompletion`, and `useObject` wire streamed model output directly into React, Vue, Svelte, or Angular components.

## TanStack AI

Ships a broader set of purpose-built hooks (`useGenerateImage`, `useSummarize`, `useRealtimeChat`, and more) across all its supported frameworks, using its own native AG-UI event protocol for streaming.

## LangChain

Supports streaming responses from chains and models, but has no first-party UI hook layer of its own — UI wiring is left to the application or a separate library like the Vercel AI SDK.

## LangGraph

Supports streaming intermediate graph state and outputs, primarily consumed through its own SDKs and LangGraph Platform tooling rather than dedicated frontend hooks.

## LlamaIndex

Supports streaming query responses, but similarly has no dedicated frontend framework bindings of its own.

## Mastra

Designed to pair naturally with frontend frameworks via streaming responses, commonly used alongside the Vercel AI SDK's UI hooks on the client side.

## CrewAI

Focused on backend agent orchestration with no built-in frontend or UI streaming layer.

## Semantic Kernel (Microsoft Agent Framework)

Supports streaming responses from models and agents, generally consumed through custom application code rather than prebuilt UI components.

## Haystack

Supports streaming generation output from pipelines, but ships no frontend UI integration of its own, focusing purely on the backend pipeline.
