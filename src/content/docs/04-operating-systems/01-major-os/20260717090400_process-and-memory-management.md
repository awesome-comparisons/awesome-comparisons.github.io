---
title: Process and Memory Management
description: How each operating system schedules processes and manages memory.
---

## Linux

Uses the Completely Fair Scheduler (or newer EEVDF scheduler in recent kernels) for process scheduling and a virtual memory system with overcommit and an OOM killer that terminates processes when memory runs critically low.

## Windows

Uses a priority-based, preemptive scheduler with dynamic priority boosting for interactive processes, and a virtual memory manager that pages to disk and can compress memory in newer versions to delay swapping.

## macOS

Uses a Mach-based scheduler with support for Quality of Service classes that let apps hint how much priority their background work needs, alongside compressed memory to reduce swapping, especially valuable on lower-RAM Macs.

## iOS

Has no user-visible swap file at all — instead of paging to disk, iOS aggressively compresses inactive memory and terminates background apps outright under memory pressure, prioritizing the foreground app's responsiveness.

## Android

Runs each app in its own Linux process, managed by the Android runtime's lifecycle model rather than raw Linux scheduling alone; the low-memory killer (or newer kernel memory management like LMKD) terminates background app processes by priority when memory is tight.

## ChromeOS

Inherits Linux's process model but applies it primarily to sandboxed browser tabs, Android app containers, and Linux (Crostini) containers, each isolated from the others and from the host system.
