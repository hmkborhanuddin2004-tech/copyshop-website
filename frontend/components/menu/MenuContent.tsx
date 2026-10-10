"use client";

import PageTransition from "@/components/ui/PageTransition";
import MenuCategory from "@/components/menu/MenuCategory";
import { DRINKS, PASTRIES } from "@/lib/data/menu";

export default function MenuContent() {
  return (
    <PageTransition>
      {/* Page header — warm biscuit bg instead of dark */}
      <div className="bg-[var(--color-surface-warm)] pt-10 pb-16 px-5 text-center border-b border-[var(--color-border)]">
        <p className="text-[var(--color-accent)] text-sm font-medium tracking-widest uppercase mb-2">
          What We Serve
        </p>
        <h1
          className="text-[var(--color-primary)] mb-3"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          Our Menu
        </h1>
        <p className="text-[var(--color-muted)] max-w-md mx-auto text-sm">
          All prices include tax. Seasonal items may vary — ask at the counter.
        </p>
      </div>

      {/* Menu content */}
      <div className="section py-16">
        <MenuCategory category="drinks" items={DRINKS} />
        <MenuCategory category="pastries" items={PASTRIES} />
      </div>
    </PageTransition>
  );
}
