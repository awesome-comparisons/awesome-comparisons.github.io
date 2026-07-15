---
title: Native Integration
description: How each desktop framework/toolkit exposes OS-level capabilities like the filesystem, system tray, notifications, and platform APIs.
---

## Electron

Electron exposes native OS integration through its own Node.js-backed APIs (menus, tray, notifications, filesystem, dialogs, auto-update) accessible from the main process, plus arbitrary native modules via Node addons. Renderer processes reach these capabilities through IPC or preload scripts, since they run in a sandboxed web context. This gives broad native access but requires bridging across the process boundary.

## Tauri

Tauri exposes native functionality through a Rust-based command system and a permissions-scoped plugin architecture, letting the frontend invoke Rust functions for filesystem, shell, notifications, and system tray access. Because the core is Rust, any native OS API or system library is reachable directly or via crates. Its capability/permission model requires explicitly allow-listing what native APIs the webview can call.

## Qt

Qt provides extensive native integration modules (QtNetwork, QSystemTrayIcon, QtDBus on Linux, native file dialogs, drag-and-drop, clipboard) that wrap platform APIs consistently across OSes. For deeper platform-specific needs, Qt allows dropping to native code via platform plugins or QPA. Its broad first-party module ecosystem covers most native integration needs without third-party libraries.

## GTK

GTK integrates tightly with the Linux/GNOME desktop stack (D-Bus, GSettings, portals, notifications) and provides its own cross-platform abstractions for clipboard, drag-and-drop, and file choosers. On Windows and macOS it still functions but with less polished native feel and fewer platform-specific conveniences. GObject Introspection lets bound languages call native GTK/GLib APIs directly.

## JavaFX

JavaFX offers built-in APIs for system tray-like behavior (limited), clipboard, drag-and-drop, and file choosers, but for deeper OS integration developers typically rely on JNI or third-party libraries since JavaFX itself is not deeply OS-integrated. As a JVM library, it inherits Java's general approach of abstracting native details behind portable APIs. Native look-and-feel integration (e.g., system theming) is comparatively limited.

## WinForms

WinForms has direct, low-friction access to Windows APIs since controls are thin wrappers over Win32/GDI+, and P/Invoke lets developers call any native Windows API easily. System tray icons, native dialogs, and shell integration are straightforward and well-documented. This makes it one of the most native-integration-friendly frameworks, but strictly for Windows.

## WPF

WPF integrates deeply with Windows through native interop (HwndHost, P/Invoke, COM interop) and provides polished built-in support for features like Windows shell integration, jump lists, and native dialogs. Because it's part of the .NET/Windows ecosystem, DirectX and Windows Runtime APIs are readily accessible. Integration is excellent but exclusively Windows-focused.

## .NET MAUI

.NET MAUI reaches native APIs through its handler architecture and platform-specific project code, allowing direct calls into WinUI, iOS/macOS, or Android SDKs when the cross-platform abstraction isn't enough. Essential native features (geolocation, sensors, file system, notifications) are provided as unified cross-platform APIs. This mirrors Xamarin's approach of "shared code, native fallback."

## Flutter Desktop

Flutter Desktop reaches native OS capabilities via platform channels, which let Dart code invoke platform-specific C++/Swift/Kotlin code embedded in each desktop shell. Since the framework doesn't use native widgets, most integration (menus, tray, file dialogs) requires either community plugins or hand-written platform channel code. This makes native integration more manual than in some competitors, though the plugin ecosystem is growing.

## JUCE

JUCE provides native integration for audio-specific concerns (ASIO, CoreAudio, MIDI devices, plugin hosting) as well as general utilities for file access, native dialogs, and system tray. Its cross-platform abstractions are especially strong for audio hardware and plugin formats, reflecting its origins in professional audio software. General desktop integration exists but is secondary to its audio/plugin focus.

## wxWidgets

Because wxWidgets wraps genuine native controls, native integration (menus, dialogs, drag-and-drop, clipboard, tray icons) tends to behave exactly as platform users expect with minimal extra work. It also provides escape hatches to access underlying native handles (HWND, NSView, GtkWidget) for deeper platform-specific code. This native-wrapper design makes integration feel authentic across all three major desktop OSes.

## Avalonia

Avalonia provides cross-platform abstractions for tray icons, clipboard, drag-and-drop, and file dialogs, with a platform abstraction layer that can be extended for OS-specific needs. Deeper native calls require platform-specific interop code (P/Invoke on Windows, similar mechanisms elsewhere) since Avalonia itself doesn't use native widgets. Its integration model is comparable to WPF's but reimplemented to work uniformly across Windows, macOS, and Linux.
