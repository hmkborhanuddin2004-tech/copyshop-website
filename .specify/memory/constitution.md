<!--
Sync Impact Report:
- Version change: none -> 1.0.0
- Added sections: Core Principles (Full-Stack TypeScript, Extreme Performance & Web Vitals, Market-Specific Localization, Modern Animations & UX, Progressive Web App First), Development Workflow, Integration & Payment Standards, Governance
- Follow-up TODOs: None
-->
# Brewlab Coffee Shop Clone Constitution

## Core Principles

### I. Full-Stack TypeScript
The architecture must exclusively use TypeScript via Next.js 15 (App Router) and React 19. Do not introduce Python, C++, or other backend languages. All components must be modular, adhering to a strict maximum of 400-500 lines per file. Code must compile with `strict: true` and zero ESLint errors.

### II. Extreme Performance & Web Vitals
Performance targets are non-negotiable: LCP < 2.5s, CLS < 0.1, INP < 200ms. All heavy assets (pseudo-3D videos, hero videos) must be hosted on a CDN (Cloudinary/AWS) to prevent Vercel bandwidth exhaustion. Video formats must support alpha channels (WebM/HEVC) with AVIF/WebP image fallbacks. `requestAnimationFrame` must be used for scroll-linked effects.

### III. Market-Specific Localization (Bangladesh)
The application must adopt a mobile-first approach (80%+ mobile traffic). Smart network detection (`navigator.connection`) must be implemented to disable autoplaying videos on slow 2G/3G connections. The UI must support a Bangla/English language toggle (via next-intl) and integrate local SEO schemas (`LocalBusiness`, `AggregateRating`).

### IV. Modern Animations & UX
Cinematic and fluid UX is required. Rely on GSAP 3 (`@gsap/react`, ScrollTrigger, SplitText) combined with Tailwind CSS v4. Instead of heavy WebGL/Three.js libraries, implement pseudo-3D effects using pre-rendered rotating looping videos overlaid with CSS perspective and `rotateY()`.

### V. Progressive Web App (PWA) First
The application must support PWA installation, allowing users to "Add to Home Screen". Mobile navigation must prioritize accessible tap targets (min 48x48px) and a highly visible sticky "Order Now" call-to-action.

## Development Workflow

Development will follow a structured 14-day build sequence:
1. **Foundation (Days 1-2):** Setup design tokens, GSAP configs, and base UI components.
2. **Core Sections (Days 3-9):** Build individual phases sequentially (Hero, About, Flavors, Benefits, Testimonials, Gallery) following the 400-line per file limit.
3. **Checkout & Polish (Days 10-14):** Implement Zustand for cart state, zero-JS forms via React 19 `useActionState`, and rigorous QA/Lighthouse testing.

## Integration & Payment Standards

Cart state must be managed with Zustand to avoid unnecessary re-renders. Payment processing must integrate SSLCommerz for unified bKash/Nagad/Rocket support alongside Cash on Delivery and WhatsApp order flows.

## Governance

This Constitution supersedes all other architecture decisions. Any deviation from the TypeScript-only stack, performance budgets, or animation strategies requires an amendment to this document.

**Version**: 1.0.0 | **Ratified**: 2026-10-08 | **Last Amended**: 2026-10-08
