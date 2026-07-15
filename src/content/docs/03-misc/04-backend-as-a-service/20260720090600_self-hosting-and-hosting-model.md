---
title: Self-Hosting and Hosting Model
description: Whether and how each backend-as-a-service platform can be run outside its vendor's own cloud.
---

## Supabase

Fully open source and self-hostable via Docker Compose or Kubernetes, in addition to Supabase's own managed cloud offering — the same stack runs either way.

## Firebase

Fully proprietary and only available as a managed Google Cloud service; there is no official way to self-host Firebase's own runtime.

## Appwrite

Fully open source and designed to be self-hosted via Docker, with an official managed Appwrite Cloud offering as an alternative for teams that don't want to run it themselves.

## Convex

Primarily offered as a managed cloud service; a self-hosted option exists but the primary, most polished experience is Convex's own hosted platform.

## PocketBase

Distributed as a single open-source binary meant to be self-hosted anywhere — on a VPS, a Raspberry Pi, or any server that can run a Go executable — with no official managed cloud offering from the core project.

## Nhost

Open source and self-hostable (it's built from Postgres, Hasura, and its own services), alongside an official managed Nhost Cloud platform.

## AWS Amplify

Not self-hostable in the usual sense — it provisions and manages real AWS resources (Cognito, AppSync, DynamoDB, Lambda) directly in your own AWS account, so it's tied to AWS rather than portable to other infrastructure.

## Hasura

Open source at its core and commonly self-hosted as a container in front of your own Postgres database, with Hasura Cloud available as a managed alternative.
