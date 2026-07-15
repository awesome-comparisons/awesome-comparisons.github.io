---
title: Client-Side JS Footprint
description: How much client-side JavaScript each server-driven UI framework requires or ships.
---

## Livewire

Ships a small core JavaScript library to handle AJAX requests and DOM patching, and as of Livewire 3 bundles Alpine.js for the sprinkles of client-only interactivity (toggles, transitions) that don't need a server round trip.

## Hotwire (Turbo + Stimulus)

Turbo itself is a small JavaScript library requiring no application code to get Drive/Frames/Streams working; Stimulus adds lightweight, HTML-annotated controllers (`data-controller`, `data-action`) for the minority of behavior that genuinely needs client-side JS.

## Phoenix LiveView

Ships a small client-side JavaScript library that maintains the WebSocket connection and applies DOM patches via morphdom; custom client interactivity beyond that is added through explicit JS hooks attached to DOM elements, kept intentionally minimal.

## django-unicorn

Ships a small client-side JavaScript library, built on morphdom, that handles the AJAX round trip and DOM patching automatically — application authors generally don't write custom JavaScript for standard component behavior.

## HTMX

htmx itself is a single, dependency-free JavaScript library (roughly 14KB gzipped) with no build step or framework requirement; teams commonly pair it with Alpine.js for small pockets of purely client-side state, like a dropdown's open/closed flag, that don't warrant a server request.

## Blazor Server

Ships a generic JavaScript runtime (`blazor.server.js`) that manages the SignalR connection and applies rendered diffs; no page-specific JavaScript is required unless the app calls out to browser APIs through JS interop.

## Symfony UX Turbo

Requires effectively no custom JavaScript for Drive/Frames/Streams to work; where client-side behavior is needed, Symfony UX pairs it with the Stimulus bridge, keeping any hand-written JS scoped to small, declarative controllers.
