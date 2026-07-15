---
title: UI Rendering
description: Whether each framework draws native platform widgets, a custom rendering engine, or HTML in a WebView.
---

## React Native

Renders actual native platform components (real `UIView`/Android `View` instances) through its Fabric renderer, rather than drawing custom pixels or using a WebView. From the OS's perspective, the resulting views are indistinguishable from a fully native app's.

## Flutter

Uses its own rendering engine (traditionally Skia, moving to Impeller) to draw every pixel of the UI itself, including widgets that mimic Material and Cupertino styles. It does not use native platform widgets at all, giving pixel-perfect consistency across platforms at the cost of reimplementing platform look-and-feel.

## SwiftUI

Renders through native UIKit/AppKit backing views under the hood; declarative SwiftUI view descriptions are diffed and translated into real, native platform controls. There is no custom paint layer or bridge involved.

## Jetpack Compose

Draws UI directly onto Android's Canvas rather than composing traditional Android View widgets, though it interoperates smoothly with existing Views when needed. It's a custom rendering layer, but one built specifically for and tied to the Android platform.

## Kotlin Multiplatform

KMP itself has no opinion on rendering; shared modules typically leave UI to platform-native toolkits (SwiftUI, Jetpack Compose, or Views/UIKit). When paired with Compose Multiplatform, UI rendering instead uses a Skia-based custom engine similar in spirit to Flutter.

## .NET MAUI

Maps its XAML/C# control set onto genuine native controls per platform through its handlers architecture, so a MAUI `Button` ultimately renders as a real native button on each OS.

## Ionic

Renders entirely as HTML and CSS inside a WebView, using Ionic's own web component library styled to visually approximate native iOS/Android design languages. Nothing is a true native widget.

## NativeScript

Instantiates actual native UI widget classes at runtime (real `UIView`/Android `View` objects) directly from JavaScript/TypeScript, so rendering is genuinely native rather than simulated or web-based.

## Capacitor

Like Ionic and Cordova, the UI is HTML/CSS/JS rendered inside a WebView; Capacitor itself is concerned with the native shell and plugin bridge rather than how content is drawn.

## Xamarin

Xamarin.iOS and Xamarin.Android render fully native controls directly; Xamarin.Forms adds a shared abstraction that still maps down to real native controls per platform, the same approach later carried into MAUI.

## Cordova

Renders entirely within a native WebView using HTML, CSS, and JavaScript, with no native widget rendering of its own.

## Unity

Uses its own GPU-driven rendering pipeline to draw scenes, sprites, and UI (via uGUI or UI Toolkit) rather than relying on platform native widgets, since it's built for real-time graphics and games rather than typical form-based UI.
