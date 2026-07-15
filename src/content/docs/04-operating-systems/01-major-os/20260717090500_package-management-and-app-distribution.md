---
title: Package Management and App Distribution
description: How software is installed and distributed on each operating system.
---

## Linux

Software is installed through a distribution's package manager (APT on Debian/Ubuntu, DNF on Fedora, pacman on Arch, and others), pulling from that distribution's repositories, alongside newer sandboxed formats like Flatpak and Snap that work across distributions.

## Windows

Traditionally installed via standalone `.exe`/`.msi` installers downloaded from vendors, with Microsoft more recently adding the Microsoft Store and the `winget` command-line package manager as centralized alternatives.

## macOS

Apps are typically distributed as `.dmg`/`.app` bundles downloaded directly from developers or through the Mac App Store, with Homebrew serving as the de facto community package manager for command-line tools and developer software.

## iOS

Apps can only be installed through the App Store (aside from limited enterprise/developer sideloading and, in some regions, alternative marketplaces mandated by regulation), with Apple reviewing every submission before it's published.

## Android

Apps are primarily distributed through the Google Play Store, but Android uniquely allows installing APK files directly from other sources ("sideloading") or through alternative app stores, subject to a user permission prompt.

## ChromeOS

Runs traditional Chrome/web apps plus Android apps from the Google Play Store and Linux (Debian-based) packages via the built-in Crostini container, giving it three separate app ecosystems rather than one native package system.
