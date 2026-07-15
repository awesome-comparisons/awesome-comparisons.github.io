---
title: Transport Mechanism
description: How each server-driven UI framework moves updates between the server and the browser.
---

## Livewire

Livewire components make AJAX requests back to the same Laravel route on every user interaction, sending the component's serialized state and the triggered action; the server re-renders the component and returns updated HTML for the client to apply.

## Hotwire (Turbo + Stimulus)

Turbo Drive intercepts link clicks and form submissions and replaces full-page navigations with background HTTP requests, while Turbo Frames scope those requests to a page fragment and Turbo Streams deliver targeted HTML update actions (append/replace/remove) either as a synchronous HTTP response or asynchronously over a WebSocket via Action Cable.

## Phoenix LiveView

LiveView opens a persistent WebSocket connection when a page loads; all subsequent interactions are sent over that socket to a stateful Elixir process on the server, which computes and pushes back only the minimal HTML diff for the client to patch.

## django-unicorn

Unicorn makes plain AJAX (XHR/fetch) requests to a Django endpoint on each user interaction, sending the component's current serialized state and the action to perform; Django restores component state, executes the action, and returns updated HTML for the client to apply.

## HTMX

htmx issues regular HTTP requests (GET/POST/etc.) triggered by attributes like `hx-get`/`hx-post` on any element and any event, then swaps the returned HTML fragment into the DOM per the configured `hx-swap` strategy — there's no persistent connection or custom protocol involved.

## Blazor Server

Blazor Server keeps a persistent connection open via SignalR (WebSocket, falling back to Server-Sent Events or long polling), over which the server sends serialized UI diffs computed from its render tree and receives UI events from the browser.

## Symfony UX Turbo

Symfony UX Turbo brings Hotwire's Turbo model to Symfony: Drive/Frames work over standard HTTP requests, while Turbo Streams can be returned synchronously from a controller or broadcast asynchronously to subscribed clients over the Mercure protocol, a WebSocket-like SSE-based hub.
