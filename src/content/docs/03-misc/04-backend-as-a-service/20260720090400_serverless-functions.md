---
title: Serverless Functions
description: How each backend-as-a-service platform runs custom server-side logic.
---

## Supabase

Offers Edge Functions, Deno-based TypeScript functions deployed close to users, alongside Postgres functions and triggers for logic that belongs directly in the database.

## Firebase

Offers Cloud Functions, which run in response to HTTPS requests or Firebase/Firestore events (like a document being created), executed on Google Cloud's managed Node.js/Python/Go runtimes.

## Appwrite

Offers Functions that run custom code in response to events or HTTP requests, executable in multiple languages via isolated runtimes.

## Convex

Server logic is central rather than an add-on: queries, mutations, and actions are all just TypeScript functions that run on Convex's platform, with actions specifically used for calling external APIs or running longer async work.

## PocketBase

Supports extending the server with Go or JavaScript (via an embedded JS runtime) hooks that run inside the same single binary, rather than a separate managed functions product.

## Nhost

Offers Serverless Functions written in TypeScript/JavaScript that run alongside the Postgres/Hasura backend, plus support for Hasura's own event triggers and actions for custom business logic.

## AWS Amplify

Uses AWS Lambda for custom backend logic, wired into the rest of the stack through AppSync resolvers or direct API Gateway routes.

## Hasura

Extends its auto-generated API through Actions (custom mutations backed by your own HTTP webhook) and Event Triggers (webhooks fired on database changes), rather than hosting arbitrary functions itself.
