---
title: Authentication
description: Placeholder API authentication reference.
---

This is placeholder reference content for a hypothetical API layer,
used to demonstrate deeper folder nesting in the content viewer.

## API keys

Requests are authenticated with a bearer token:

```bash
curl -H "Authorization: Bearer <token>" https://api.example.com/v1/comparisons
```

Tokens are scoped read-only for this dataset.
