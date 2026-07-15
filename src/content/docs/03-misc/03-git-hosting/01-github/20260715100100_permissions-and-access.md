---
title: Permissions and Access
description: How GitHub handles permissions and access control.
---

GitHub's access model is organized around organizations, teams, and repositories. Organization owners can create nested teams and grant each team a base permission level (such as read, triage, write, maintain, or admin) on a per-repository basis, while individual collaborators can also be added directly to a repository with a specific role. Repository-level settings can further restrict actions like force-pushing, merging without review, or bypassing required status checks via branch protection rules.

For larger organizations, GitHub Enterprise adds SAML/SSO single sign-on, SCIM-based user provisioning, IP allow lists, and more granular audit logging. Fine-grained personal access tokens and GitHub Apps allow scoping automation and integration permissions down to specific repositories and specific API capabilities, rather than granting blanket account-wide access.
