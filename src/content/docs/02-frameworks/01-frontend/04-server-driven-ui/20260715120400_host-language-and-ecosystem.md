---
title: Host Language and Ecosystem
description: What backend language and framework each server-driven UI approach is built for.
---

## Livewire

A PHP library built specifically for Laravel, generally considered the framework that popularized this whole "server-driven, HTML-over-the-wire" pattern for modern web frameworks.

## Hotwire (Turbo + Stimulus)

Created by Basecamp for Ruby on Rails, where it's been the default frontend approach since Rails 7; Turbo and Stimulus are framework-agnostic libraries that have since been adopted well beyond the Rails ecosystem, including via Symfony UX.

## Phoenix LiveView

Built for Phoenix, the web framework for Elixir, leaning on the BEAM VM's cheap concurrent processes to keep one stateful process per connected client; widely considered the model that inspired Livewire and much of this broader pattern.

## django-unicorn

A community library for Django (Python), explicitly modeled on Laravel Livewire's approach and API design, bringing the same pattern to the Python/Django ecosystem.

## HTMX

Framework-agnostic and language-agnostic by design — it's just a client-side JS library that talks to whatever backend returns HTML fragments — but it's especially prominent in the Python world paired with Django or Flask, often alongside Alpine.js.

## Blazor Server

Part of ASP.NET Core (.NET/C#), Microsoft's official server-rendered take on this pattern, conceptually parallel to LiveView and Livewire but built around SignalR instead of raw WebSockets or plain HTTP.

## Symfony UX Turbo

Symfony's (PHP) official bridge to the Hotwire ecosystem, part of the broader Symfony UX initiative that also includes the Stimulus bridge — the PHP-world counterpart to Rails' native Hotwire integration, for teams that want the same pattern without Rails.
