---
title: Package Management
description: The package manager and package format each Linux distribution uses.
---

## Ubuntu

Uses APT over `.deb` packages, the same format and tooling as Debian, plus first-party support for Snap packages that bundle their own dependencies for cross-distribution portability.

## Debian

Uses APT over `.deb` packages, the foundation that Ubuntu and many other distributions build on, backed by one of the largest curated software repositories in the Linux world.

## Fedora

Uses DNF over `.rpm` packages, the modern successor to YUM, resolving dependencies from Fedora's official repositories and community repositories like RPM Fusion for additional software.

## Arch Linux

Uses pacman over its own simple binary package format, paired with the community-run Arch User Repository (AUR) for a vast range of user-maintained build scripts covering software not in the official repos.

## openSUSE

Uses Zypper over `.rpm` packages, tightly integrated with YaST for a combined command-line and graphical package management experience.

## Linux Mint

Uses APT over `.deb` packages inherited from its Ubuntu base, with its own Software Manager and Update Manager providing a simplified, curated interface on top.

## Alpine Linux

Uses its own lightweight `apk` package manager over `.apk` packages, designed to be fast and minimal, fitting Alpine's small footprint and popularity as a container base image.

## NixOS

Uses the Nix package manager, which installs each package in isolation under a unique hash-based path in the Nix store, allowing multiple versions to coexist and enabling fully reproducible, declarative system builds.
