# Research: Brewlab Coffee Shop Clone

## UI/UX Design System Intelligence

**Decision:** Adopt the "Liquid Glass" and "Feature-Rich Showcase" pattern.
**Rationale:** The user requested a cinematic, high-end experience mirroring the Brewlab template. This pattern enforces dark/gold accent palettes, high contrast (4.5:1), and fluid morphing using lensed translucency (glassmorphism) matched with Cormorant/Montserrat typography styles (using Tanker, Inter, and Smooch Sans as project-specific substitutes).
**Alternatives considered:** Flat material design (rejected for lacking the premium aesthetic required for a boutique coffee brand).

## GSAP Animation Presets

**Decision:** Use the `Complex` intensity tier for the Hero sequence and `Subtle` for scroll reveals.
**Rationale:** 
- **Hero Stagger (SplitText):** `gsap.from(split.chars, { opacity: 0, y: 20, rotateX: -40, duration: 0.6, stagger: 0.015, ease: 'expo.out' });`. This provides the desired "cinematic reveal" the user highlighted in Phase 2.
- **Scroll Reveals:** `gsap.from(el, { opacity: 0, y: 12, duration: 0.35, ease: 'power1.out', scrollTrigger: { ... } });`. This prevents visual fatigue as the user scrolls through the 8 phases.
**Alternatives considered:** CSS `@keyframes` (rejected due to lack of scroll-scrubbing capabilities).

## Low Data Mode / Market Constraints

**Decision:** Implement `useLowDataMode` utilizing `navigator.connection` and `prefers-reduced-data`.
**Rationale:** Over 80% of the Bangladesh market operates on mobile networks of varying quality. GSAP and video assets must immediately degrade to static text and WebP/AVIF images if slow connections are detected to preserve the < 2.5s LCP budget.
**Alternatives considered:** Loading all videos unconditionally (rejected as it violates the core LCP/Web Vitals requirements).
