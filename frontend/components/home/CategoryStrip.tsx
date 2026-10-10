import Image from "next/image";
import Link from "next/link";
import type { CategoryGear } from "@/lib/types";

const CATEGORIES: CategoryGear[] = [
  {
    id: "beans",
    title: "Whole Beans",
    count: "6 Roasts",
    imageUrl: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&h=400&fit=crop",
  },
  {
    id: "espresso",
    title: "Fresh Espresso",
    count: "Signature",
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop",
  },
  {
    id: "iced",
    title: "Cold Brews",
    count: "Chilled",
    imageUrl: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=400&fit=crop",
  },
  {
    id: "pastries",
    title: "Oven Pastries",
    count: "Baked 4am",
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop",
  },
  {
    id: "gear",
    title: "Barista Gear",
    count: "Artisan",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop",
  },
];

export default function CategoryStrip() {
  return (
    <section
      className="bg-[var(--color-surface-warm)] pt-6 pb-16 px-5 relative z-20"
      aria-labelledby="category-strip-heading"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase">
              Curated Selection
            </p>
            <h2
              id="category-strip-heading"
              className="text-[var(--color-primary)] text-2xl md:text-3xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Explore By Category
            </h2>
          </div>
          <Link
            href="/menu"
            className="text-[var(--color-accent)] hover:text-[var(--color-primary)] text-sm font-semibold transition-colors hidden sm:inline-flex items-center gap-1"
          >
            Full Menu <span>→</span>
          </Link>
        </div>

        {/* Squircle category cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href="/menu"
              className="group flex flex-col items-center text-center p-4 rounded-3xl bg-white/70 hover:bg-white backdrop-blur-md border border-white/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden mb-3.5 bg-amber-50">
                <Image
                  src={cat.imageUrl}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                  sizes="(max-width: 768px) 96px, 112px"
                />
              </div>
              <h3 className="text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                {cat.title}
              </h3>
              <span className="text-xs text-[var(--color-muted)] mt-0.5">
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
