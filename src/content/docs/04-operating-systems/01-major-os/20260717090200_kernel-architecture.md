---
title: Kernel Architecture
description: The kernel each operating system is built on and its overall architecture.
---

## Linux

The Linux kernel is a monolithic kernel (with loadable modules), where drivers and core subsystems mostly run in kernel space for performance, while still supporting a very wide range of hardware and configurations.

## Windows

Built on the Windows NT kernel, a hybrid kernel that keeps core services (scheduler, memory manager) in kernel space while running many other subsystems, like the graphics and window manager historically, closer to or within kernel space for performance.

## macOS

Built on XNU, a hybrid kernel that combines the Mach microkernel with components from BSD Unix, giving it Mach's message-passing architecture alongside a traditional Unix-style process and file model.

## iOS

Shares the same XNU/Darwin kernel as macOS, but layers a far stricter app sandboxing and code-signing model on top, since apps generally can't be side-loaded or run outside Apple's controlled distribution model.

## Android

Runs on a modified Linux kernel with mobile-specific additions (like the Binder IPC mechanism and wakelocks for power management) layered underneath the Android runtime (ART) that actually executes app code.

## ChromeOS

Also runs on the Linux kernel, but wraps it in a minimal, mostly read-only system image, with verified boot cryptographically checking the kernel and system partitions on every startup and rolling back automatically if tampering is detected.
