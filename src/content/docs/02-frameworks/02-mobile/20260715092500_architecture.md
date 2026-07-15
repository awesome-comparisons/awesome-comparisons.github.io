---
title: Architecture
description: How each mobile framework structures its language, runtime, and app architecture.
---

## React Native

Apps are written in JavaScript/TypeScript using React's component model. Historically, communication between the JS thread and native modules went through an asynchronous bridge; the newer architecture replaces this with JSI, enabling direct, largely synchronous calls between JS and native code via TurboModules and the Fabric renderer.

## Flutter

Apps are written in Dart and compiled ahead-of-time to native machine code. Flutter ships its own framework and rendering engine, so the widget tree, layout, and painting are all handled by Flutter itself rather than delegating to platform UI toolkits.

## SwiftUI

A declarative UI framework built into Swift for Apple platforms only (iOS, macOS, watchOS, tvOS). It integrates tightly with UIKit/AppKit and the wider Apple SDK, with the SwiftUI runtime managing view diffing and state-driven updates.

## Jetpack Compose

Google's declarative UI toolkit for Android, written in Kotlin and powered by a compiler plugin that manages recomposition. It is Android-only and sits directly on top of the Android platform APIs rather than abstracting them.

## Kotlin Multiplatform

Structures apps so that business logic, networking, and data layers are written once in Kotlin and compiled per target: Kotlin/Native for iOS, JVM bytecode for Android. UI is typically left native per platform, though Compose Multiplatform can extend sharing into the UI layer.

## .NET MAUI

A single-project, C#/.NET architecture targeting Android, iOS, macOS, and Windows. It uses a "handlers" pattern that maps cross-platform controls onto native platform controls, evolving directly from the older Xamarin.Forms abstraction.

## Ionic

A web-based architecture using HTML, CSS, and JavaScript with a framework of choice (Angular, React, or Vue), rendered inside a WebView shell provided by Capacitor or Cordova. The app logic is standard web app architecture wrapped for mobile distribution.

## NativeScript

Apps are written in JavaScript or TypeScript, but instead of a WebView, a runtime bridge exposes native iOS/Android APIs directly to JS via reflection-based metadata, allowing direct instantiation of native objects from application code.

## Capacitor

A native container architecture that wraps a web application, with each platform represented as a real native project (Xcode/Android Studio). A plugin bridge connects JS code to native functionality, making it a spiritual successor to Cordova with a more modern, native-project-first structure.

## Xamarin

Built on C#/.NET running on the Mono runtime, with Xamarin.iOS and Xamarin.Android providing full native API bindings. Xamarin.Forms added a shared-UI abstraction layer on top, conceptually the direct predecessor of .NET MAUI. Xamarin is now deprecated in favor of MAUI.

## Cordova

The original hybrid architecture: an HTML/CSS/JS app runs inside a native WebView, with a plugin system providing access to device capabilities. It forms the historical foundation that Ionic and other hybrid tools built upon.

## Unity

A C# scripting layer on top of the Unity game engine and its own cross-platform runtime (via IL2CPP). It's structured around scenes, game objects, and components rather than typical app-screen architecture, and is primarily aimed at games and real-time 3D/2D content rather than conventional CRUD-style apps.
