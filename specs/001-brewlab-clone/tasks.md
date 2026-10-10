# Task Breakdown: Brewlab Coffee Shop Clone

**Feature Branch**: `001-brewlab-clone`
**Date**: 2026-10-08

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create project structure per implementation plan
- [x] T002 Initialize Next.js 15 app with Tailwind CSS v4 and TypeScript
- [x] T003 [P] Configure fonts (Tanker, Inter, Smooch Sans) in `src/lib/fonts.ts`
- [x] T004 [P] Setup design tokens in `src/app/globals.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [x] T005 Setup centralized GSAP configuration in `src/lib/gsap.ts`
- [x] T006 [P] Create `useLowDataMode` hook in `src/hooks/useLowDataMode.ts`
- [x] T007 [P] Create `useScrollSpy` hook in `src/hooks/useScrollSpy.ts`
- [x] T008 [P] Build common UI components (`SplitHeading`, `Reveal`, `VideoLazy`, `TornDivider`)
- [x] T009 Create base Zustand store shell in `src/lib/store.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Immersive Landing Experience (Priority: P1) 🚀 MVP

**Goal**: Deliver a fast-loading, visually captivating homepage with cinematic animations that load instantly without blocking interactivity.

**Independent Test**: Load the homepage and verify the GSAP SplitText reveal and background video load seamlessly, with proper degradation on slow connections.

### Implementation for User Story 1

- [x] T010 [P] [US1] Build Phase 1: Sticky Navbar in `src/components/phases/Phase1_Navbar.tsx`
- [x] T011 [P] [US1] Build Phase 2: Hero Section in `src/components/phases/Phase2_Hero.tsx`
- [x] T012 [P] [US1] Build Phase 3: About Strip in `src/components/phases/Phase3_About.tsx`
- [x] T013 [US1] Integrate Phases 1-3 into `src/app/page.tsx`

**Checkpoint**: At this point, User Story 1 is fully functional and testable independently. (Already completed in Day 1-2 effort).

---

## Phase 4: User Story 2 - Explore Pseudo-3D Products (Priority: P2)

**Goal**: Showcase dynamic, 360-degree representations of coffee flavors using lazy-loaded video assets mapped to cursor movement.

**Independent Test**: Scroll to the "Popular Flavors" section and observe videos spinning and tilting on cursor hover via CSS perspective.

### Implementation for User Story 2

- [x] T014 [P] [US2] Build Phase 4: Popular Flavors pseudo-3D section in `src/components/phases/Phase4_Flavors.tsx`
- [x] T015 [P] [US2] Build Phase 5: Quality & Benefits parallax cup section in `src/components/phases/Phase5_Benefits.tsx`
- [x] T016 [P] [US2] Build Phase 6: Testimonials slider in `src/components/phases/Phase6_Testimonials.tsx`
- [x] T017 [P] [US2] Build Phase 7: Visual Gallery section in `src/components/phases/Phase7_Gallery.tsx`
- [x] T018 [US2] Integrate Phases 4-7 into `src/app/page.tsx` sequentially.

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently.

---

## Phase 5: User Story 3 - Add to Cart and Checkout (Priority: P2)

**Goal**: Allow seamless cart addition and zero-JS compatible checkout with local payment methods.

**Independent Test**: Add an item to the Zustand cart, open the sliding drawer, and navigate to the checkout form to see SSLCommerz options.

### Implementation for User Story 3

- [x] T019 [P] [US3] Implement full `CartStore` actions and computed properties in `src/lib/store.ts`
- [x] T020 [P] [US3] Build sliding Cart Drawer component in `src/components/layout/CartDrawer.tsx`
- [x] T021 [US3] Integrate `CartDrawer` into `Phase1_Navbar.tsx` and Add-to-Cart buttons in `Phase4_Flavors.tsx`
- [x] T022 [US3] Build Checkout form UI with `useActionState` in `src/app/checkout/page.tsx`
- [x] T023 [US3] Build Phase 8: CTA Subscription & Footer in `src/components/phases/Phase8_Footer.tsx`
- [x] T024 [US3] Integrate Phase 8 into `src/app/page.tsx`

**Checkpoint**: Core e-commerce flow is now functional.

---

## Phase 6: User Story 4 - PWA Installation (Priority: P3)

**Goal**: Make the application installable on mobile devices with an offline caching strategy.

**Independent Test**: Load the site on a mobile device and verify the "Add to Home Screen" prompt appears and the app launches in standalone mode.

### Implementation for User Story 4

- [x] T025 [P] [US4] Generate `manifest.json` and place in `public/manifest.json`
- [x] T026 [P] [US4] Add necessary meta tags (theme-color, apple-mobile-web-app-capable) to `src/app/layout.tsx`
- [x] T027 [US4] Implement basic service worker for offline asset caching in `public/sw.js` and register it in `layout.tsx`

**Checkpoint**: All user stories should now be independently functional.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T028 [P] Audit all components for `strict: true` compliance and zero ESLint errors
- [x] T029 Run Lighthouse tests for LCP, CLS, and INP metrics
- [x] T030 Ensure all missing `<svg>` elements or media fallbacks are populated
- [x] T031 Run quickstart.md validation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Completed
- **Foundational (Phase 2)**: Completed
- **User Stories (Phase 3+)**: US1 completed. US2, US3, and US4 can proceed.
  - US2 (Phases 4-7) is entirely visual and can be done parallel to US3 (Zustand & Checkout).
- **Polish (Final Phase)**: Depends on all desired user stories being complete.

### Parallel Opportunities

- All visual phases (T014 to T017) in US2 can be built in parallel.
- `CartStore` implementation (T019) can be built in parallel with visual phases.
- PWA setup (T025-T027) is fully decoupled and can be built anytime.

## Implementation Strategy

We will proceed iteratively starting with **User Story 2 (Phase 4-7 visual components)**, followed by **User Story 3 (Cart & Checkout)**.
