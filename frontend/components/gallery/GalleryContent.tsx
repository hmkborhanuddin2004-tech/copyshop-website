"use client";

import PageTransition from "@/components/ui/PageTransition";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function GalleryContent() {
  return (
    <PageTransition>
      {/* Page header — warm biscuit bg */}
      <div className="bg-[var(--color-surface-warm)] pt-12 pb-10 px-5 text-center border-b border-[var(--color-border)]">
        <p className="text-[var(--color-accent)] text-sm font-medium tracking-widest uppercase mb-3">
          A Look Inside
        </p>
        <h1
          className="text-[var(--color-primary)]"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          Gallery
        </h1>
      </div>

      {/* Gallery grid */}
      <div className="section py-14">
        <GalleryGrid />
      </div>
    </PageTransition>
  );
}
