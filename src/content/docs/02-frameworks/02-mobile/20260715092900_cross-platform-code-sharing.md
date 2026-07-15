---
title: Cross-Platform Code Sharing
description: How much application code each framework lets you share across iOS, Android, and other targets.
---

## React Native

Enables high code sharing across iOS and Android from a single JavaScript/TypeScript codebase, with additional reach to web via React Native Web; most apps ship one codebase for both mobile platforms.

## Flutter

Offers very high code sharing: a single Dart codebase and Flutter's own widget set typically produce pixel-identical UI and behavior across iOS, Android, and other supported targets like web and desktop.

## SwiftUI

No cross-platform sharing outside the Apple ecosystem; it targets iOS, macOS, watchOS, and tvOS only, with no path to Android or other platforms.

## Jetpack Compose

No cross-platform sharing on its own, as it is Android-only. Code sharing across platforms requires the separate Compose Multiplatform project rather than Jetpack Compose itself.

## Kotlin Multiplatform

Purpose-built for sharing business logic, networking, and data layers across platforms while keeping UI native, though UI sharing is also possible when combined with Compose Multiplatform.

## .NET MAUI

Shares C# logic and XAML-based UI across Android, iOS, macOS, and Windows within a single project structure, one of the more UI-inclusive sharing models among native-rendering frameworks.

## Ionic

Maximizes code sharing since the app is fundamentally a web application; the same codebase runs across iOS, Android, and can be deployed directly to browsers as a web app or PWA.

## NativeScript

Shares the large majority of JavaScript/TypeScript business logic and often UI markup across platforms, with platform-specific adjustments possible where native behavior diverges.

## Capacitor

Shares essentially the entire web codebase across platforms, similar to Ionic; only the thin native shell and any platform-specific plugin configuration differ per target.

## Xamarin

Shares C# business logic broadly across platforms; Xamarin.Forms extends this to shared UI (as MAUI later formalized), while writing directly against Xamarin.iOS/Xamarin.Android trades sharing for finer native control.

## Cordova

Shares the full HTML/CSS/JS codebase across platforms, with native code limited mainly to plugins and platform-specific configuration.

## Unity

Shares scenes, assets, and C# scripts across a very wide range of build targets (iOS, Android, desktop, consoles, and more), with the engine handling most platform-specific build and runtime differences.
