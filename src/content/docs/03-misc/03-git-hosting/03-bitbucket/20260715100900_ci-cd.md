---
title: CI/CD
description: How Bitbucket handles CI/CD.
---

Bitbucket's native CI/CD offering is Bitbucket Pipelines, configured through a `bitbucket-pipelines.yml` file at the root of a repository that defines steps run inside Docker containers. Pipelines are enabled per-repository and run on Atlassian-hosted infrastructure by default, with the option to add self-hosted runners for jobs that need custom environments or access to internal networks.

Pipelines usage is metered in build minutes that scale with the plan tier, and it integrates with the same permission and branch-restriction model as the rest of Bitbucket, so deployments can be gated behind required reviewers or branch permissions. Compared to GitHub Actions' large third-party marketplace or GitLab's deeply unified pipeline features, Bitbucket Pipelines is comparatively simpler and more narrowly scoped to build/test/deploy automation.
