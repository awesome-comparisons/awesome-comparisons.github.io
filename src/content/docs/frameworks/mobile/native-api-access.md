---
title: Native API Access
description: How each framework bridges application code to native device and platform APIs.
---

## React Native

Exposes native functionality through Native Modules and, in the newer architecture, TurboModules built on JSI, allowing JS to call into native code directly (largely synchronously) rather than through the older asynchronous, serialized bridge.

## Flutter

Uses Platform Channels (MethodChannel/EventChannel) to pass asynchronous messages between Dart and native platform code, with an FFI option for more direct, lower-overhead native calls. Most device features are accessed through community or first-party plugins built on this mechanism.

## SwiftUI

Has direct access to native APIs because it is itself part of the native platform SDK; it calls UIKit, AppKit, Foundation, and other system frameworks directly in Swift with no bridge layer required.

## Jetpack Compose

Calls Android SDK APIs directly since it's plain Kotlin running on the Android platform; there is no bridge or serialization layer between Compose code and native Android functionality.

## Kotlin Multiplatform

Uses the `expect`/`actual` mechanism to declare a common API in shared code and provide platform-specific implementations that call native APIs directly, via Kotlin/Native interop on iOS and standard JVM interop on Android.

## .NET MAUI

Provides cross-platform wrappers for common device APIs, and allows direct calls into native platform APIs through .NET bindings (partial classes and dependency injection) when platform-specific behavior is needed.

## Ionic

Relies on the underlying native runtime, typically Capacitor or Cordova, to bridge JavaScript running in the WebView to native device APIs through plugins; Ionic itself does not provide this bridge.

## NativeScript

Exposes native iOS and Android APIs directly to JavaScript/TypeScript through a runtime metadata/reflection bridge, letting application code call native classes and methods without needing a dedicated plugin for most APIs.

## Capacitor

Uses a plugin bridge to expose native functionality to web JavaScript, with a core set of official plugins (camera, filesystem, geolocation, etc.) and support for writing custom native plugins.

## Xamarin

Provides full native API bindings from C#, since Xamarin.iOS and Xamarin.Android bind directly to the underlying Objective-C/Swift and Java/Kotlin SDKs via the Mono runtime.

## Cordova

Accesses native device capabilities exclusively through a plugin architecture, where each plugin bridges specific native functionality (camera, contacts, etc.) to the JavaScript layer.

## Unity

Accesses native platform features through native plugins (Objective-C/Swift, Java/Kotlin, or C/C++) invoked via platform-specific plugin interfaces, alongside a set of engine-provided cross-platform APIs for common device functionality.
