"use client";

import PageTransition from "@/components/ui/PageTransition";
import StorySection from "@/components/about/StorySection";
import TeamGrid from "@/components/about/TeamGrid";

export default function AboutContent() {
  return (
    <PageTransition>
      {/* Page hero — warm biscuit bg */}
      <div className="bg-[var(--color-surface-warm)] pt-10 pb-6 px-5 text-center border-b border-[var(--color-border)]">
        <p className="text-[var(--color-accent)] text-sm font-medium tracking-widest uppercase mb-2">
          Who We Are
        </p>
        <h1
          className="text-[var(--color-primary)]"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          About BrewCraft Coffee
        </h1>
      </div>

      <StorySection />
      <TeamGrid />
    </PageTransition>
  );
}
