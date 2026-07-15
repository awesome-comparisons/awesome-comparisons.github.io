---
title: Getting Started
description: How to navigate and contribute comparisons.
---

This page walks through how the content in this project is organized.

## Structure

Content lives under `src/content/docs` as plain Markdown files. Folders
map directly to sections in the sidebar:

```
src/content/docs/
├── languages/
├── frameworks/
│   ├── frontend/
│   ├── mobile/
│   ├── desktop/
│   └── backend/
└── misc/
    ├── databases/
    ├── servers/
    └── git-hosting/
```

Almost every file follows the same shape: frontmatter, then one
`## Item Name` heading per language, framework, or tool, each followed
by a short paragraph — a one-paragraph summary of how that item
handles the topic, not an exhaustive deep dive. For example,
`languages/concurrency.md` has a `## Go` section describing goroutines
and channels, a `## Python` section describing the GIL and `asyncio`,
and so on for every language covered.

The one exception is `misc/git-hosting/`, where each platform
(`github/`, `gitlab/`, `bitbucket/`) gets its own subfolder of
single-subject pages, since there's only one item per file rather than
several being compared.

## Reading a page

Click any file in the sidebar to open it. The page you're reading right
now is rendered straight from Markdown — no manual HTML involved.

## Contributing

1. Pick an existing topic file to extend, or add a new `.md` file under
   the relevant category folder for a new topic
2. Include `title` (required) and `description` (optional) frontmatter
3. Follow the `## Item Name` + short paragraph pattern above — keep
   each paragraph a summary, not a tutorial
4. New languages, frameworks, or tools should be added consistently
   across every topic file in that category, not just one
