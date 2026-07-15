---
title: CI/CD
description: How GitHub handles CI/CD.
---

GitHub's native CI/CD solution is GitHub Actions, a workflow automation system driven by YAML files stored under `.github/workflows/` in a repository. Workflows are triggered by events such as pushes, pull requests, issue activity, or schedules, and run on jobs composed of reusable "actions" pulled from a large community marketplace, GitHub's own first-party actions, or custom scripts.

Actions run on GitHub-hosted runners (Linux, Windows, and macOS images) or on self-hosted runners for cases needing custom hardware, network access, or compliance control. Because the marketplace of pre-built actions is extensive and workflow files live alongside the code they build, Actions has become the default CI/CD choice for most GitHub-hosted projects, complementing (and largely displacing) third-party CI integrations.
