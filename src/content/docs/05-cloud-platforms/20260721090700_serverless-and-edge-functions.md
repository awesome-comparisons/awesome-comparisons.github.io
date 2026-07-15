---
title: Serverless and Edge Functions
description: How each cloud/hosting platform runs short-lived, on-demand functions — only covering platforms that actually offer this.
---

_Render, Fly.io, and Heroku are intentionally omitted here — none of the three offer a dedicated serverless/edge-function product; they run long-lived containers or VMs instead. See [Compute Model](/content/05-cloud-platforms/20260721090100_compute-model) for how those three actually run code._

## AWS

Lambda, the service that popularized the "serverless function" model — functions triggered by HTTP requests, queues, schedules, or almost any other AWS event source, billed per invocation and execution time.

## GCP

Cloud Functions (and increasingly Cloud Run, which also supports request-triggered, scale-to-zero containers) for event-driven and HTTP-triggered serverless workloads.

## Azure

Azure Functions, triggered by HTTP requests, timers, or events from other Azure services, with a consumption plan that scales to zero like its AWS and GCP counterparts.

## Vercel

Serverless Functions (Node.js/Python/etc., run per-region) and Edge Functions (lighter-weight, V8-isolate-based, run at the edge), automatically chosen based on how a project's API routes are configured.

## Cloudflare

Workers are the platform's core offering, not an add-on — V8-isolate-based functions with near-zero cold start that run at the edge across hundreds of cities.

## Netlify

Functions (AWS Lambda-backed) and Edge Functions (Deno-based, running at the edge), mirroring Vercel's two-tier model of regional versus edge execution.

## DigitalOcean

DigitalOcean Functions, based on the open-source Apache OpenWhisk project (via DigitalOcean's acquisition of Nimbella), supporting Node.js, Python, Go, PHP, and other runtimes.
