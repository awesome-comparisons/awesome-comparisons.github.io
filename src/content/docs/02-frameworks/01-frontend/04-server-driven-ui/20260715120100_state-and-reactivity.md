---
title: State and Reactivity
description: Where each server-driven UI framework's component state lives and what triggers a re-render.
---

## Livewire

Component state lives in a PHP class on the server; it's serialized into the page on first render and sent back and forth on every interaction, so the class is effectively rehydrated from that payload on each request rather than staying resident in memory.

## Hotwire (Turbo + Stimulus)

Turbo has no component-state model of its own — the server remains the single source of truth for state, and Turbo just governs how new HTML for that state is delivered and swapped in, while Stimulus controllers hold small bits of transient client-side state (like a toggled class) directly in the DOM.

## Phoenix LiveView

State lives in a long-lived, stateful Elixir/OTP process assigned to each connected client, held in memory in the `socket.assigns` map for as long as the WebSocket connection stays open; any assign change triggers a re-render of just the affected template parts.

## django-unicorn

Component state lives in a Python class whose public attributes are serialized to the page and round-tripped on every AJAX call, similar to Livewire's rehydrate-per-request model rather than a persistent in-memory process.

## HTMX

htmx has no component or state model at all — the server, in whatever backend framework or language, remains fully responsible for state, and htmx only reacts to DOM events by fetching and swapping HTML; any client-side-only state is typically handled by a small companion library like Alpine.js.

## Blazor Server

Component state is regular C# object state held in memory on the server for the lifetime of the SignalR circuit; user interactions from the browser invoke event handlers on that server-side object directly, and any state change triggers Blazor's diffing engine to compute a UI update.

## Symfony UX Turbo

State lives in Symfony's normal request/response cycle (Doctrine entities, session, etc.) with no separate component-state layer; Turbo Streams broadcast state changes, for example via a `#[Broadcast]` attribute on a Doctrine entity, whenever the underlying data changes.
