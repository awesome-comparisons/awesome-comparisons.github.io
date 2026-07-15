---
title: Debugging and Tooling
description: What debugging and inspection tools each end-to-end testing tool provides.
---

## Playwright

Ships a Trace Viewer that records a full timeline of actions, network requests, console logs, and DOM snapshots for any test run, plus a codegen tool that records browser interactions into test code automatically.

## Cypress

Ships a Test Runner UI with "time travel" debugging — every command's before/after DOM snapshot is inspectable directly in the browser, widely regarded as one of the most polished debugging experiences in this group.

## Selenium

Has no built-in visual debugging UI of its own; debugging typically relies on screenshots, logs, and whatever tooling the paired test framework or IDE provides.

## Puppeteer

Has no built-in visual debugging UI; developers typically rely on running in "headed" (visible) mode, screenshots, or the Chrome DevTools directly since Puppeteer is CDP-based.

## WebdriverIO

Provides a visual test runner and integrates with tools like its own WDIO browser extension for debugging, alongside straightforward screenshot and video capture.

## TestCafe

Provides a "live mode" for watching tests execute in real time and detailed step-by-step reporting on failures, though without a dedicated trace/timeline viewer as rich as Playwright's.
