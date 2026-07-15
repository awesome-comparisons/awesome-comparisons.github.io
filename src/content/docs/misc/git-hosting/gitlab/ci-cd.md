---
title: CI/CD
description: How GitLab handles CI/CD.
---

GitLab CI/CD is built directly into the platform rather than bolted on, configured through a `.gitlab-ci.yml` file at the root of a repository that defines stages, jobs, and pipelines. Historically this tight, first-party integration between source control and CI/CD has been GitLab's strongest differentiator, letting teams define build, test, security-scanning, and deployment pipelines without adopting a separate CI product.

Pipelines run on GitLab-hosted shared runners or on self-hosted runners registered by an organization, and support advanced features like parent-child pipelines, merge trains, and built-in container/Auto DevOps templates. Because CI/CD, issue tracking, and security scanning all live in the same application, pipeline results, vulnerability findings, and code review can surface directly in merge requests without extra integration work.
