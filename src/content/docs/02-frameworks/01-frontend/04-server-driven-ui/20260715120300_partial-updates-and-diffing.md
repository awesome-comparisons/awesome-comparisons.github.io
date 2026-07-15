---
title: Partial Updates and Diffing
description: How each server-driven UI framework decides which part of the DOM to update after a change.
---

## Livewire

Uses a morphdom-based diff between the previously rendered HTML and the newly rendered HTML to patch only the changed DOM nodes, preserving element state like focus and scroll position.

## Hotwire (Turbo + Stimulus)

Turbo Frames scope an update to a single, explicitly marked section of the page, while Turbo Streams describe an explicit DOM action (append, prepend, replace, update, remove) targeting an element by ID — there's no automatic tree diffing, updates are declared server-side.

## Phoenix LiveView

The server tracks the previously rendered template output per connection and computes a minimal diff against the newly rendered output, sending only the changed values over the wire; the client library then patches the DOM to match using morphdom.

## django-unicorn

Compares the previous and newly rendered HTML for a component and uses morphdom on the client to apply only the differences, the same general approach as Livewire.

## HTMX

Doesn't diff at all by default — a response fragment replaces, or is inserted around, a target element according to the chosen `hx-swap` mode (e.g. `innerHTML`, `outerHTML`, `beforeend`); a separate morph extension can layer in morphdom-style diffing where finer-grained patching is wanted.

## Blazor Server

The server keeps an in-memory render tree for each component and diffs it against the newly computed tree whenever state changes, sending only a compact set of edit operations over SignalR for the client runtime to apply.

## Symfony UX Turbo

Turbo Streams specify the exact DOM action and target element to update, much like plain Hotwire, so updates are explicit and declarative rather than computed by automatic tree diffing.
