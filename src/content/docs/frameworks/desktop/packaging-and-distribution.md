---
title: Packaging and Distribution
description: How each desktop framework/toolkit packages apps for installation and delivers updates across Windows, macOS, and Linux.
---

## Electron

Electron apps are typically packaged with tools like Electron Forge or electron-builder, producing platform installers (NSIS/MSI on Windows, DMG on macOS, AppImage/deb/rpm on Linux) that bundle the entire Chromium/Node runtime. Auto-update is well supported via built-in modules or services like Squirrel. Bundle sizes are large since each app ships its own browser engine copy.

## Tauri

Tauri produces small native installers (MSI/NSIS, DMG, AppImage/deb) using its own bundler, since it doesn't need to ship a browser engine — only the compiled Rust binary and app assets. It includes a built-in updater plugin for signed, differential-style updates. Resulting bundle sizes are dramatically smaller than Electron's, often single-digit megabytes.

## Qt

Qt apps are distributed using platform-specific tools like windeployqt, macdeployqt, and linuxdeployqt to bundle required Qt libraries, or via static linking for self-contained binaries. Commercial and open-source licensing considerations (LGPL vs. commercial) affect how libraries can be bundled and distributed. Qt Installer Framework is also available for building cross-platform installers.

## GTK

GTK apps on Linux are commonly distributed through system package managers, Flatpak, or Snap, which handle dependency bundling in a sandboxed way. Windows and macOS distribution requires manually bundling the GTK runtime and its dependencies (via MSYS2 or homebrew-based toolchains), which is less streamlined than on Linux. Flatpak in particular has become the de facto modern distribution path for GTK/GNOME apps.

## JavaFX

JavaFX apps are packaged using jlink and jpackage (part of the standard JDK tooling) to produce self-contained native installers (MSI, DMG, deb/rpm) bundling a minimal JVM runtime. This avoids requiring users to install Java separately. Distribution size is moderate due to the bundled runtime, and each platform is packaged independently.

## WinForms

WinForms apps are distributed as standard Windows executables via MSI/ClickOnce installers or, more recently, self-contained .NET deployments that bundle the runtime. ClickOnce historically simplified auto-updating for WinForms apps in enterprise settings. Since it's Windows-only, there's no cross-platform packaging concern.

## WPF

WPF apps share .NET's deployment options: framework-dependent (requiring the .NET/Windows Desktop runtime installed) or self-contained deployments that bundle the runtime, packaged via MSI, MSIX, or ClickOnce. MSIX has become the modern preferred format for Windows Store distribution and enterprise deployment. Auto-update can leverage MSIX's built-in update model or third-party tools.

## .NET MAUI

.NET MAUI apps are packaged per target platform using their native mechanisms: MSIX for Windows, .app/.pkg or Mac App Store bundles for macOS, and APK/AAB for Android, all driven from a single project via .NET's build tooling. Distribution channels align with each platform's standard stores (Microsoft Store, Mac App Store) or sideloading options. This unifies the build process while still producing genuinely native installer formats.

## Flutter Desktop

Flutter Desktop apps are packaged using platform-specific bundling (MSIX for Windows, .app/DMG for macOS, and Snap/AppImage/deb for Linux), often orchestrated through Flutter's build commands plus community tooling like msix or flutter_distributor. The Flutter engine and Dart runtime are bundled into the app package. Distribution follows standard app store or direct-download workflows per OS.

## JUCE

JUCE includes the Projucer tool (or CMake integration) to generate native build projects per platform, and audio plugins are packaged into their respective standardized formats (VST3, AU, AAX) alongside standalone app installers. Distribution often follows audio industry conventions, including code-signing and notarization requirements for macOS plugins. Standalone apps are packaged like typical native C++ applications per OS.

## wxWidgets

wxWidgets apps are compiled natively per platform and distributed using standard OS-native installer tooling (NSIS/MSI, DMG, deb/rpm/AppImage), since the toolkit itself doesn't dictate a packaging format. Because it links against native widget libraries already present on the OS, bundled runtime size is minimal compared to toolkits that ship their own widget-rendering engine. Distribution effectively follows whatever native workflow the target platform normally uses.

## Avalonia

Avalonia apps use .NET's publishing model, producing self-contained or framework-dependent builds packaged into MSI/MSIX on Windows, DMG/.app on macOS, and AppImage/deb/rpm on Linux, often via community tooling built around `dotnet publish`. Native AOT and single-file publishing options help reduce distribution size. Cross-platform builds are produced from the same codebase, each targeting its OS's native installer format.
