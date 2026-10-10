import type { MenuItem, MenuCategory } from "@/lib/types";
import MenuCard from "./MenuCard";
import { Coffee, Croissant } from "lucide-react";

interface MenuCategoryProps {
  category: MenuCategory;
  items: MenuItem[];
}

const CATEGORY_META = {
  drinks: {
    label: "Drinks",
    Icon: Coffee,
    description: "Expertly pulled espresso, cold-brew, and seasonal specials — all made to order.",
  },
  pastries: {
    label: "Pastries",
    Icon: Croissant,
    description: "Fresh from the oven every morning — laminated, filled, and dusted with care.",
  },
} as const;

export default function MenuCategory({ category, items }: MenuCategoryProps) {
  const { label, Icon, description } = CATEGORY_META[category];
  const available = items.filter((i) => i.isAvailable);

  return (
    <section aria-labelledby={`${category}-heading`} className="mb-16">
      {/* Category header */}
      <div className="flex items-center gap-3 mb-3">
        <span
          className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center"
          aria-hidden="true"
        >
          <Icon size={22} className="text-[var(--color-accent)]" strokeWidth={1.7} />
        </span>
        <h2
          id={`${category}-heading`}
          className="text-[var(--color-primary)]"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
          }}
        >
          {label}
        </h2>
      </div>
      <p className="text-[var(--color-muted)] text-sm mb-8 max-w-lg">
        {description}
      </p>

      {/* Item grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {available.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>

      {/* Divider */}
      <hr className="mt-14 border-[var(--color-border)]" />
    </section>
  );
}
