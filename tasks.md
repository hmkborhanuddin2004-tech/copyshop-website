# BrewCraft Template Componentization Tasks

## Phase 1: Setup
- [X] T001 Create `frontend/components/home/` and `frontend/components/layout/` directories if not exist

## Phase 2: Core Layout Components (User Story 1)
- [X] T002 [US1] Create `frontend/components/layout/Navbar.tsx` extracting the navbar HTML from the original template
- [X] T003 [US1] Create `frontend/components/layout/Footer.tsx` extracting the footer HTML from the original template

## Phase 3: Home Page Sections (User Story 2)
- [X] T004 [US2] Create `frontend/components/home/HeroSection.tsx` extracting the hero section HTML
- [X] T005 [US2] Create `frontend/components/home/AboutSection.tsx` extracting the about section HTML
- [X] T006 [US2] Create `frontend/components/home/ProductsSection.tsx` extracting the products section HTML
- [X] T007 [US2] Create `frontend/components/home/BenefitsSection.tsx` extracting the benefits section HTML
- [X] T008 [US2] Create `frontend/components/home/TestimonialsSection.tsx` extracting the testimonials section HTML
- [X] T009 [US2] Create `frontend/components/home/GallerySection.tsx` extracting the gallery section HTML
- [X] T010 [US2] Create `frontend/components/home/CTASection.tsx` extracting the CTA section HTML

## Phase 4: Assembly (User Story 3)
- [X] T011 [US3] Update `frontend/app/page.tsx` to import and render all the newly created sections instead of using `dangerouslySetInnerHTML`.
- [X] T012 [US3] Ensure `frontend/app/layout.tsx` includes the `Navbar` and `Footer` appropriately, or keep them in `page.tsx` if it's a single-page landing site.
