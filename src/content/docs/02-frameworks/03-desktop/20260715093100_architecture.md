---
title: Architecture
description: How each desktop framework/toolkit structures its runtime, from bundled browser engines to native widget toolkits and managed-runtime UI stacks.
---

## Electron

Electron bundles a full Chromium renderer with a Node.js runtime in a multi-process architecture, mirroring the browser's main/renderer process split. The main process has full Node access and controls native APIs, while renderer processes run web content and communicate via IPC. This gives apps a complete browser engine and JS runtime at the cost of shipping both with every app.

## Tauri

Tauri uses a Rust backend paired with the operating system's native webview (WebView2 on Windows, WebKitGTK on Linux, WKWebView on macOS) instead of bundling a browser engine. The frontend runs in that webview while a Rust core handles system-level work, communicating through a command/event IPC bridge. This keeps binaries small and gives access to Rust's ecosystem for backend logic.

## Qt

Qt is a mature C++ application framework built around its own object model (QObject, signals/slots, meta-object compiler) and a native-rendered widget/QML toolkit. It provides its own event loop, module system (Core, Widgets, Quick, Network, etc.), and can render either classic widgets or QML/Qt Quick scenes. Applications are compiled natively per platform against Qt's abstraction layer.

## GTK

GTK is a C-based, object-oriented toolkit built on GObject, providing a native widget hierarchy and its own main loop and event system. It powers GNOME and is commonly paired with language bindings (Python, Rust, C++) via GObject Introspection. The architecture centers on a widget tree, CSS-based theming, and signal-based event handling.

## JavaFX

JavaFX is a UI framework running on the JVM, structured around a scene graph of nodes rendered through a hardware-accelerated pipeline (Prism) with its own windowing toolkit (Glass). It uses FXML for declarative UI definition and a property/binding system for reactive updates. As a JVM library, it inherits Java's managed runtime, garbage collection, and cross-platform bytecode model.

## WinForms

Windows Forms is a thin, event-driven .NET wrapper directly over the Win32 GDI+ and USER32 native controls. Each control is essentially a managed handle to an underlying native window (HWND), giving it a simple, imperative, designer-driven architecture. It has minimal abstraction layers, making it lightweight but tightly coupled to Windows.

## WPF

WPF is a .NET UI framework built on a retained-mode scene graph rendered via DirectX, decoupling logical UI elements from pixel-based rendering. It introduces XAML markup, a dependency property system, routed events, and strong data-binding/MVVM support. The architecture separates visual composition from application logic more thoroughly than WinForms.

## .NET MAUI

.NET MAUI is a single-project evolution of Xamarin.Forms that abstracts UI definitions in XAML/C# and maps them at runtime to each platform's native controls (via platform-specific handlers). It runs on .NET's cross-platform runtime and uses a shared abstraction layer over Windows (WinUI 3), macOS/iOS (Catalyst/UIKit-derived), and Android native widgets. The handler architecture allows swapping platform renderers without changing app code.

## Flutter Desktop

Flutter Desktop extends Flutter's engine, written in C++ with the Skia (and increasingly Impeller) rendering backend, to Windows, macOS, and Linux embedders. The architecture keeps Flutter's core model: a Dart application layer compiled ahead-of-time, a widget/element/render-object tree, and the engine drawing everything itself rather than delegating to native widgets. Desktop embedders provide window management and platform channel integration.

## JUCE

JUCE is a C++ application framework originally built for audio software, combining its own cross-platform windowing and component/widget system with audio processing and plugin-hosting infrastructure. It provides a single codebase abstraction over native windowing APIs and draws its own UI rather than wrapping native controls. Its architecture is optimized for real-time audio applications and plugin formats (VST, AU, AAX).

## wxWidgets

wxWidgets is a C++ toolkit that wraps each platform's native widget set behind a common API, so a Windows build uses real Win32 controls, a macOS build uses Cocoa controls, and a GTK build uses native GTK widgets. This "native wrapper" architecture trades a thinner abstraction for authentic native look, feel, and behavior on each OS. Applications compile natively per platform against these bindings.

## Avalonia

Avalonia is a .NET UI framework inspired by WPF, using XAML and a retained-mode scene graph but with its own cross-platform rendering layer instead of relying on platform-specific graphics stacks. It runs on Windows, macOS, and Linux (and beyond) by drawing its own controls through backend renderers (Skia by default), giving consistent visuals across platforms. The architecture reuses much of WPF's binding/styling model while decoupling rendering from any single OS.
