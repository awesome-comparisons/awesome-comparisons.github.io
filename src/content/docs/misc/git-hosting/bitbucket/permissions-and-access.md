---
title: Permissions and Access
description: How Bitbucket handles permissions and access control.
---

Bitbucket organizes repositories under workspaces (formerly "teams"/accounts), where workspace-level roles control who can create and administer repositories, and individual repositories can further grant user or group permissions such as read, write, or admin. Branch permissions and merge checks let administrators require pull request approvals, passing builds, or specific reviewers before code can be merged into protected branches.

Bitbucket integrates with Atlassian's broader identity tooling, including SSO/SAML and SCIM provisioning on higher plans, so user access can be centrally managed alongside other Atlassian products like Jira and Confluence. App passwords and OAuth consumers allow scoping third-party or automation access to specific capabilities rather than a user's full account permissions.
