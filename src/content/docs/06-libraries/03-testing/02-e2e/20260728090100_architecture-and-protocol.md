---
title: Architecture and Protocol
description: How each end-to-end testing tool actually communicates with and controls the browser.
---

## Playwright

Uses its own custom browser protocol, communicating directly with patched builds of Chromium, Firefox, and WebKit, which is a large part of why it can offer consistent behavior across all three.

## Cypress

Runs inside the browser alongside the application under test, executing commands in the same run loop as the app itself rather than driving the browser from an entirely separate process.

## Selenium

Uses the standardized W3C WebDriver protocol (increasingly with WebDriver BiDi for richer bidirectional communication), talking to a separate browser driver executable for each browser.

## Puppeteer

Uses the Chrome DevTools Protocol (CDP) directly, giving fine-grained control specifically over Chromium-based browsers.

## WebdriverIO

Supports both the WebDriver protocol and Chrome DevTools Protocol, letting teams choose the standardized cross-browser approach or CDP's deeper Chromium-specific control as needed.

## TestCafe

Uses neither WebDriver nor CDP — it works by injecting a proxy script into the page itself, intercepting and controlling behavior directly in the browser without an external automation protocol.
