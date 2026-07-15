---
title: Performance
description: How each framework's execution model affects runtime performance and UI responsiveness.
---

## React Native

Performance is generally close to native, though historically limited by bridge overhead when crossing between JS and native code. The newer JSI/Fabric architecture removes most of this overhead by allowing direct, largely synchronous native calls.

## Flutter

Compiles to native ARM/x64 machine code ahead-of-time and renders through its own engine without a bridge, giving consistently smooth performance (commonly 60/120fps) that is largely independent of platform UI thread quirks.

## SwiftUI

Fully native performance, since it compiles as ordinary Swift code and renders through native platform frameworks directly, with no abstraction or bridging overhead.

## Jetpack Compose

Native Android performance as compiled Kotlin bytecode; early versions carried some recomposition overhead compared to the classic View system, but this has been substantially optimized in subsequent releases.

## Kotlin Multiplatform

Shared code compiles to native binaries (Kotlin/Native on iOS, JVM bytecode on Android) rather than being interpreted, so performance is close to fully native code with no bridge in the shared business-logic layer.

## .NET MAUI

Runs on the .NET runtime (including Native AOT options) and renders through real native controls, giving good performance overall, with some overhead attributable to the handlers abstraction layer versus writing fully native UI directly.

## Ionic

Performance is bounded by WebView rendering and JavaScript execution, which is typically noticeably slower than native for complex animations or heavy UI interaction, though adequate for many content- and form-driven apps.

## NativeScript

Avoids WebView overhead by instantiating native widgets directly, but the JS-to-native reflection bridge can add cost when making frequent or high-volume native API calls.

## Capacitor

Shares the same WebView-bound performance characteristics as Ionic and Cordova; its bridge is comparatively lightweight, but overall UI performance is still constrained by running inside a WebView.

## Xamarin

Near-native performance thanks to AOT compilation and direct native bindings via Mono; Xamarin.Forms, like early MAUI, carried some additional rendering overhead from its shared-UI abstraction layer.

## Cordova

Typically the weakest performer of the group for UI-heavy or animation-heavy apps, since everything runs inside a WebView; it remains a reasonable choice for simpler, content-oriented apps.

## Unity

Delivers high performance for graphics-intensive workloads by compiling C# to native code via IL2CPP and driving a dedicated GPU rendering pipeline, making it well suited to real-time games and 3D/2D content rather than typical app UI.
