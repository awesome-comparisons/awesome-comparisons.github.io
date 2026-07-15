---
title: App Store Distribution
description: How apps built with each framework are packaged and submitted to app stores.
---

## React Native

Builds a standard native app via Xcode and Gradle, producing an ordinary IPA/AAB that is submitted to the Apple App Store and Google Play just like a fully native app.

## Flutter

Its own toolchain produces native IPA and APK/AAB artifacts, which go through the standard App Store and Play Store submission processes with no special handling required.

## SwiftUI

Distributed exclusively through Apple's channels: the App Store, TestFlight, or enterprise distribution; there is no Android or Play Store counterpart.

## Jetpack Compose

Distributed exclusively through Google Play (or direct APK sideloading); there is no iOS or App Store equivalent since it's an Android-only framework.

## Kotlin Multiplatform

Shared logic is compiled into an otherwise ordinary native iOS or Android app, so distribution follows the same App Store/Play Store process as any native app with no extra requirements imposed by KMP itself.

## .NET MAUI

Produces signed IPA and AAB/APK packages for standard App Store and Play Store submission, and can additionally target the Microsoft Store or direct distribution for Windows and macOS.

## Ionic

Typically packaged via Capacitor or Cordova into a native app for App Store/Play Store submission, though the same web codebase can also be deployed directly to the browser as a PWA outside app stores.

## NativeScript

Builds genuine native app packages using standard native build tooling, so submission to the App Store and Play Store follows the same process as any native app.

## Capacitor

Generates real Xcode and Android Studio projects that are built and submitted through the normal App Store and Play Store pipelines.

## Xamarin

Produces native IPA/APK builds through Visual Studio for standard store submission, following the same process now carried forward by its successor, .NET MAUI.

## Cordova

Wraps the web app into a native container package for store submission; such WebView-based apps have historically drawn extra App Store scrutiny if they feel insufficiently native.

## Unity

Exports a native build per target platform for submission to the App Store or Play Store like any game, and also supports many other distribution targets (Steam, consoles, and more) through its build system.
