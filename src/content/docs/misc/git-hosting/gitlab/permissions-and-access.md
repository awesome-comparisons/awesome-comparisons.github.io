---
title: Permissions and Access
description: How GitLab handles permissions and access control.
---

GitLab organizes access around groups, subgroups, and projects, with a fixed hierarchy of roles (Guest, Reporter, Developer, Maintainer, and Owner) that can be assigned at the group or project level and inherited downward through subgroups and nested projects. This role hierarchy is more standardized across the product than a purely per-repository permission model, making it straightforward to reason about who can do what across an entire group tree.

Higher tiers add enterprise-grade controls such as SAML/SSO single sign-on, group-managed accounts, IP allow lists, and detailed audit events, while protected branches and protected tags let maintainers restrict who can push, merge, or delete specific refs. Personal access tokens and project/group access tokens can be scoped to specific API permissions, limiting the blast radius of any single credential.
