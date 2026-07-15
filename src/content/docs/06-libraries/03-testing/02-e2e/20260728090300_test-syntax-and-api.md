---
title: Test Syntax and API
description: How tests are written and structured in each end-to-end testing tool.
---

## Playwright

Tests are written with `test()`/`test.describe()` blocks and an async, promise-based API (`await page.click(...)`), with built-in test runner features like fixtures and parallel workers.

## Cypress

Tests are written with `describe()`/`it()` blocks using a chainable, jQuery-inspired command syntax (`cy.get(...).click()`), where commands are queued rather than immediately awaited.

## Selenium

Tests are written using whatever test framework the chosen language pairs it with (JUnit, pytest, and so on), with Selenium itself providing the WebDriver API calls (`driver.findElement(...).click()`) used inside those tests.

## Puppeteer

Tests are written using a promise-based API (`await page.click(...)`) similar in shape to Playwright's, typically paired with a separate test runner like Jest since Puppeteer itself doesn't include one.

## WebdriverIO

Tests are written with `describe()`/`it()` blocks and either a synchronous-looking command style or promise-based async/await, depending on configuration.

## TestCafe

Tests are written with a `fixture`/`test` structure and a fluent, chainable action API (`await t.click(...)`), with built-in test runner features similar to Playwright's or Cypress's.
