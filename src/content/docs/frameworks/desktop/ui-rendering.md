---
title: UI Rendering
description: How each desktop framework/toolkit draws its interface, from HTML/CSS layout engines to native widgets and self-drawn scene graphs.
---

## Electron

Electron renders UI as ordinary HTML, CSS, and JavaScript through Chromium's layout and compositing engine, exactly like a web page. Any web framework (React, Vue, plain DOM) can be used, and styling follows standard web CSS. Visuals are entirely custom-drawn by the browser engine rather than reflecting native OS widgets.

## Tauri

Tauri renders UI with HTML/CSS/JS inside the OS-provided webview, so the rendering engine (and its quirks) differs slightly per platform (Chromium-based WebView2, WebKit on macOS/Linux). Developers use standard web frameworks for layout and styling, with no bundled rendering engine of its own. Visual consistency across OSes depends on the underlying native webview's rendering behavior.

## Qt

Qt offers two rendering paths: classic Widgets, which paint native-styled controls via QStyle, and Qt Quick/QML, which renders through a scene graph with OpenGL/Vulkan/Metal/software backends for fluid, GPU-accelerated animations. Widgets emulate native appearance per platform, while QML scenes are fully custom-drawn. Both are declarative-friendly but QML is designed for modern, animated UIs.

## GTK

GTK draws its widgets itself using a CSS-based theming engine, giving every control a consistent look across platforms rather than mimicking each OS's native controls. Rendering goes through Cairo/OpenGL (GTK3) or the GPU-accelerated Vulkan/OpenGL renderer in GTK4. Layout follows a box/grid-based widget hierarchy styled largely like web CSS.

## JavaFX

JavaFX renders through its own scene graph and the Prism rendering pipeline, which is hardware-accelerated where available and falls back to software rendering. UI can be styled with CSS and laid out via FXML or programmatic APIs, with all controls custom-drawn rather than delegating to native OS widgets. This gives consistent cross-platform appearance at the cost of native look-and-feel fidelity.

## WinForms

WinForms renders controls by directly hosting native Win32/GDI+ common controls, so buttons, text boxes, and menus look exactly like standard Windows controls. Custom drawing is possible via GDI+ but the default experience is thin wrapping over OS-drawn widgets. There is no cross-platform rendering abstraction since it targets Windows only.

## WPF

WPF renders everything through a retained-mode vector graphics system built on DirectX, meaning all controls (even "native-looking" ones) are actually custom-drawn shapes and templates. This enables rich styling, templating, animation, and effects far beyond WinForms, using resolution-independent vector layout. Visuals are consistent across Windows versions but not native-widget based.

## .NET MAUI

.NET MAUI maps XAML-defined controls to genuine native platform widgets at runtime via handlers, so a Button becomes a real WinUI, UIKit/Mac Catalyst, or Android button. Rendering is therefore delegated to each platform's native rendering stack rather than done by MAUI itself. This yields authentic native look and feel but means visual behavior can vary slightly per platform.

## Flutter Desktop

Flutter draws every pixel itself through its Skia (or Impeller) graphics engine, rendering its own widget set rather than using any native OS controls. This produces pixel-perfect consistency across Windows, macOS, and Linux, with layout driven by Flutter's widget/render-object tree. The tradeoff is that UI never automatically matches native platform aesthetics.

## JUCE

JUCE components are custom-drawn using its own 2D graphics API, layered over the platform's native graphics context (Direct2D/GDI, CoreGraphics, or software rendering), giving full control over pixel-level appearance. This suits highly customized audio-plugin UIs like knobs, meters, and waveform displays, but does not use native OS widgets. JUCE also supports OpenGL-accelerated rendering for demanding UIs.

## wxWidgets

wxWidgets renders by delegating drawing to each platform's real native widgets, so a wx button on Windows is a genuine Win32 control and a wx button on macOS is a genuine Cocoa control. This gives the most authentic native appearance and behavior among cross-platform toolkits, since the OS itself draws the controls. Layout is managed through wxWidgets' sizer system atop these native widgets.

## Avalonia

Avalonia renders its own controls through a composition/scene-graph layer, using Skia as the default rendering backend across all supported platforms, similar in spirit to WPF but not tied to DirectX. Styling uses XAML with a selector-based CSS-like styling system, and controls are lookless templates that render consistently everywhere. This favors visual consistency over native-widget fidelity, though it supports platform-adaptive themes.
