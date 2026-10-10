import type { MenuItem } from "@/lib/types";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const priceFormatted = item.price.toFixed(2);

  return (
    <article
      className="warm-card p-6 flex flex-col gap-3 group
                 hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5
                 transition-all duration-300"
      aria-label={`${item.name}, $${priceFormatted}`}
    >
      {/* Name + price row */}
      <div className="flex items-start justify-between gap-3">
        <h3
          className="text-[var(--color-primary)] leading-tight flex-1"
          style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem" }}
        >
          {item.name}
        </h3>
        <span
          className="shrink-0 px-3 py-1 rounded-full text-sm font-semibold
                     bg-[var(--color-accent)] text-white tabular-nums"
          aria-label={`Price: $${priceFormatted}`}
        >
          ${priceFormatted}
        </span>
      </div>

      {/* Description */}
      <p className="text-[var(--color-muted)] text-sm leading-relaxed">
        {item.description}
      </p>

      {/* Availability indicator */}
      {!item.isAvailable && (
        <p className="text-xs text-red-500 font-medium" role="status">
          Currently unavailable
        </p>
      )}
    </article>
  );
}
