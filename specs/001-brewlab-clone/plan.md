# Implementation Plan: Brewlab Coffee Shop Clone

**Branch**: `001-brewlab-clone` | **Date**: 2026-10-08 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-brewlab-clone/spec.md`

## Summary

The Brewlab Coffee Shop Clone is a premium e-commerce landing experience divided into 8 distinct sequential scroll-linked phases. The implementation leverages Next.js 15 (App Router), React 19, Tailwind CSS v4, and GSAP 3 to deliver a visually captivating, pseudo-3D mobile-first PWA, strictly targeting a LCP under 2.5s and zero ESLint errors across a 100% TypeScript codebase.

## Technical Context

**Language/Version**: TypeScript 5.6+, Node 20.x+

**Primary Dependencies**: Next.js 15, React 19, Tailwind CSS v4 (Turbopack), Zustand (State), GSAP 3 (ScrollTrigger, SplitText, `@gsap/react`), next-intl (i18n).

**Storage**: None in MVP (stateless cart via Zustand + LocalStorage).

**Testing**: Web Vitals via Lighthouse/Next.js Speed Insights.

**Target Platform**: Mobile-first Web (Progressive Web App - PWA), target audience: Bangladesh.

**Project Type**: Server-Side Rendered (SSR) Web Application.

**Performance Goals**: LCP < 2.5s, CLS < 0.1, INP < 200ms, Initial JS < 150KB.

**Constraints**: Strict 400-500 lines of code per component/file. External video assets must be loaded via CDN. No WebGL/Three.js (use MP4/WebM pseudo-3D).

**Scale/Scope**: 8 visual phases, single comprehensive landing/checkout flow.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Full-Stack TypeScript**: Verified. No Python/C++ logic used.
- **Extreme Performance**: Verified. Lazy loading, intersection observers, and `prefers-reduced-data` fallbacks are architected into the UI components.
- **Market Localization**: Verified. SSLCommerz/bKash references and `navigator.connection` logic is integrated.
- **Modern Animations**: Verified. GSAP 3 is the exclusive motion engine.
- **PWA**: Verified. Manifest and offline asset caching strategies are prioritized.

## Project Structure

### Documentation (this feature)

```text
specs/001-brewlab-clone/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output (/speckit-tasks command)
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── checkout/
├── components/
│   ├── phases/          # 8 Distinct Sections (e.g., Phase1_Navbar.tsx)
│   ├── ui/              # Reusable atoms (VideoLazy.tsx, SplitHeading.tsx)
│   └── layout/          # Layout wrappers
├── hooks/
│   ├── useLowDataMode.ts
│   └── useScrollSpy.ts
├── lib/
│   ├── gsap.ts          # Centralized GSAP config
│   ├── fonts.ts         # Font configurations
│   └── store.ts         # Zustand cart state
└── public/
    ├── images/
    ├── videos/
    └── fonts/
```

**Structure Decision**: A single front-end driven architecture using Next.js 15 App router.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| GSAP over CSS | SplitText and complex scrubbed ScrollTrigger logic | Native CSS cannot handle character-level staggering and scroll scrubbing efficiently. |
| Zustand over Context | Frequent cart updates | React Context triggers full sub-tree re-renders; Zustand handles isolated state slices natively. |
