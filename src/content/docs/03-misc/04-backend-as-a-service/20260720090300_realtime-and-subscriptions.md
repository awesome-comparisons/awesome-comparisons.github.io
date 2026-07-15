---
title: Realtime and Subscriptions
description: How each backend-as-a-service platform pushes live data updates to clients.
---

## Supabase

Provides Realtime, a service that streams Postgres changes (via logical replication) to subscribed clients over WebSockets, alongside presence and broadcast channels for ad hoc real-time messaging.

## Firebase

Both Firestore and the Realtime Database push live updates to any client listening on a query or document, which was one of Firebase's defining, earliest features.

## Appwrite

Provides realtime subscriptions over WebSockets for database, storage, and account events, letting clients react immediately to changes without polling.

## Convex

Realtime is the default, not an add-on: every query function's result is automatically kept live, and Convex re-runs and pushes updated results to every subscribed client whenever the underlying data it depends on changes.

## PocketBase

Provides realtime subscriptions over Server-Sent Events for database record changes, built into the same single-binary server as everything else.

## Nhost

Inherits Hasura's GraphQL subscriptions, letting clients subscribe to live query results over WebSockets directly against the Postgres data.

## AWS Amplify

Supports realtime data through AWS AppSync's GraphQL subscriptions, pushing updates to subscribed clients over managed WebSocket connections.

## Hasura

GraphQL subscriptions are one of its core features — clients subscribe to a query and receive live updates whenever the underlying Postgres data changes, without any custom pub/sub code.
