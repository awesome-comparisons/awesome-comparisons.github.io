---
title: State Management
description: How each frontend framework handles local component state as well as state shared across the application.
---

## React

Local state is managed with `useState`/`useReducer`; cross-component state typically goes through the Context API or third-party libraries like Redux, Zustand, Jotai, or Recoil, since React ships no official global store.

## Vue

Local state uses `reactive()`/`ref()`. For shared application state, Vue's official Pinia library (successor to Vuex) provides a centralized store with reactive state, actions, and getters.

## Svelte

Svelte builds writable, readable, and derived stores directly into the language for sharing state across components. Svelte 5 runes (`$state`) can also be exported from modules to share reactive state without a separate store API.

## Angular

Component state lives on class properties, increasingly backed by signals. Shared state is idiomatically handled through injectable services, while NgRx offers a Redux-style store for larger applications.

## SolidJS

Signals and stores (`createStore`) cover both local and shared state; stores can simply be imported and used directly as shared reactive state without needing an additional state-management library.

## Qwik

Local component state uses `useSignal`/`useStore`; shared state is passed through context (`useContextProvider`), with all state remaining serializable to preserve Qwik's resumability model.

## Preact

Preact follows React's approach — `useState`/`useReducer`/Context — while also commonly using Preact Signals for shared reactive state that avoids unnecessary re-renders.

## Lit

Local state lives in an element's reactive properties. Shared state across Web Components is typically handled with external stores, simple pub/sub patterns, or the Context Protocol for Web Components.

## Alpine.js

Local state lives in `x-data`; shared, page-wide state uses `Alpine.store()`, which registers a reactive store accessible from any component on the page.

## Ember

Local state uses tracked properties; shared state is conventionally placed in Ember Services, which are singleton, dependency-injected classes rather than a dedicated external store library.

