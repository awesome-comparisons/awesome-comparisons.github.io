# Contributing

Thanks for considering a contribution to Awesome Comparisons!

## What we're looking for

- **New comparisons** for tools, frameworks, or services that solve similar problems and don't already have an entry.
- **Missing entries** in an existing comparison (a tool that should be covered but isn't).
- **Corrections** — inaccuracies, outdated details, missed nuance, or anything that doesn't match real-world behavior of the tools involved.

Corrections from people who actually use these tools day to day are the most valuable contributions this project can get.

## Ground rules

- Comparisons must be **objective**. Focus on real trade-offs and verifiable facts, not marketing language or personal preference.
- Every claim should be **accurate and, where possible, verifiable** against official docs, changelogs, or source code — not assumed or inferred.
- Keep entries **up to date**. Call out version numbers where behavior differs between versions.
- Write in clear, plain language. Avoid hype words ("blazing fast", "best-in-class", etc.).

## How to add or edit a comparison

Comparisons live as Markdown files under `src/content/docs`, grouped into folders by category.

Each file needs frontmatter with a title and description:

```md
---
title: My Comparison
description: A short summary shown in the sidebar and page header.
---

Your content here.
```

1. Fork the repo and create a branch for your change.
2. Add or edit the relevant Markdown file under `src/content/docs/<category>/`.
3. Run the project locally to preview your change (see `package.json` for scripts).
4. Run the linter (`eslint.config.js`) and fix any issues before opening a PR.
5. Open a pull request with a clear description of what changed and why. For corrections, link to a source (docs, changelog, issue, etc.) supporting the fix where possible.

## Reporting a problem without fixing it

If you spot something wrong but don't have time to fix it, please open an issue describing:

- Which comparison/page it's on
- What's inaccurate or outdated
- A source or reference for the correct information, if you have one

## Code of conduct

Be respectful and constructive. Assume good faith. Disagreements about technical trade-offs are normal — keep discussion focused on the content, not the contributor.
