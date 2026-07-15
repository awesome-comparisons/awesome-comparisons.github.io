---
title: Mobile and Cross-Platform Support
description: How each end-to-end testing tool handles mobile or non-browser platforms.
---

## Playwright

Can emulate mobile viewports and user agents within a desktop browser, but doesn't automate real native mobile apps — it's a browser automation tool first.

## Cypress

Has no native mobile app testing support and only offers viewport emulation within the browser, similar in scope to Playwright's mobile web emulation.

## Selenium

Extends to real mobile app automation through Appium, which is built on WebDriver-compatible protocols, giving Selenium's ecosystem a path to native iOS/Android testing.

## Puppeteer

Has no mobile app testing support at all — it's scoped specifically to Chromium/Chrome browser automation, with only basic viewport emulation for mobile web.

## WebdriverIO

Extends to native mobile app testing through built-in Appium integration, letting the same framework cover web, iOS, and Android automation.

## TestCafe

Has no native mobile app testing support, focused specifically on browser-based testing with mobile browser emulation only.
