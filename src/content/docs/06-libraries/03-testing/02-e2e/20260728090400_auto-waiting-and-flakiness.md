---
title: Auto-Waiting and Flakiness Handling
description: How each end-to-end testing tool handles timing issues and reduces flaky tests.
---

## Playwright

Auto-waits for elements to be actionable (visible, stable, enabled) before interacting with them, a core design goal specifically aimed at eliminating the flakiness that plagued earlier tools.

## Cypress

Automatically retries assertions and commands until they pass or time out, built around the idea that most flakiness comes from testing against a moving target before the app has settled.

## Selenium

Historically required explicit waits (`WebDriverWait`) to avoid flakiness, though modern versions encourage better patterns; flakiness has traditionally been a bigger practical challenge with Selenium than with Playwright or Cypress.

## Puppeteer

Provides waiting utilities (`waitForSelector`, `waitForNavigation`) that must generally be used explicitly, offering less automatic waiting behavior than Playwright's built-in actionability checks.

## WebdriverIO

Provides built-in implicit and explicit wait utilities, with configurable automatic retries for assertions, landing somewhere between Selenium's manual approach and Playwright's fully automatic one.

## TestCafe

Automatically waits for elements to appear and become actionable before acting on them, a built-in design goal similar in spirit to Playwright's and Cypress's approach.
