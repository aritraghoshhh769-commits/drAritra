# **App Name**: CanvasStory

## Core Features:

- Image Sequence Animation: Renders a scroll-driven image sequence animation using HTML5 Canvas for high performance.
- Frame Preloading: Preloads all image frames before rendering the animation to prevent flicker and ensure smooth playback.
- Scroll Progress Mapping: Maps scroll progress (0 to 1) to the image sequence frames to control the animation.
- LERP Smoothing: Uses LERP (linear interpolation) smoothing for fluid motion during the animation.
- Text Overlay System: Supports scroll-based text overlays with configurable start, end, position, title, and subtitle.
- Loading Spinner: Displays a minimal loading spinner while preloading the image frames.
- Responsiveness: Handles window resize events and adapts the animation for mobile-friendly viewing.

## Style Guidelines:

- Primary color: Deep Teal Slate (#3F6E73) provides a sophisticated, medical feel. The slightly desaturated teal is not overly vibrant, helping maintain a minimal feel.
- Background color: Charcoal Ink (#1F2A2E) provides a premium, dark-mode experience.
- Accent color: Warm Medical Gold (#C8A95A) provides a subtle, professional accent.
- Font: 'Inter' (sans-serif) for headings and body text provides a modern, neutral, and readable style.
- Parent scroll container height: h-[400vh]; Canvas: position: sticky; top: 0; h-screen w-full. Adheres to defined scroll mechanics.
- Smooth fade-in/out effects for text overlays based on scroll position, ensuring a cinematic experience.