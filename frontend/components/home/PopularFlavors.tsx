import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { PopularFlavor } from "@/lib/types";
import TornDivider from "@/components/ui/TornDivider";

const FLAVORS: PopularFlavor[] = [
  {
    id: "iced-hazelnut",
    name: "Iced Hazelnut Latte",
    tagline: "Smooth espresso blended with creamy roasted hazelnut and chilled oat milk.",
    price: 4.75,
    volume: "16 oz",
    badge: "Bestseller",
    imageUrl: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&h=700&fit=crop",
  },
  {
    id: "cold-brew",
    name: "Cold Brew Delight",
    tagline: "Slow-steeped for 18 hours with single-origin beans. Silky and bold finish.",
    price: 4.25,
    volume: "16 oz",
    badge: "Cold Steeped",
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=700&fit=crop",
  },
  {
    id: "mocha-fusion",
    name: "Mocha Fusion",
    tagline: "Rich artisan dark chocolate ganache, double espresso, and whipped foam.",
    price: 4.95,
    volume: "12 oz",
    badge: "Indulgent",
    imageUrl: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=700&fit=crop",
  },
];

export default function PopularFlavors() {
  return (
    <section
      className="relative bg-[#1C1917] text-white pt-16 pb-20 px-5 overflow-hidden"
      aria-labelledby="popular-flavors-heading"
    >
      <div className="max-w-[1200px] mx-auto relative z-20">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent-glow)] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles size={14} aria-hidden="true" />
              <span>Customer Favorites</span>
            </div>
            <h2
              id="popular-flavors-heading"
              className="text-white text-3xl md:text-5xl font-bold tracking-tight uppercase"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Popular Flavors
            </h2>
          </div>

          <Link
            href="/menu"
            className="btn-outline border-white/30 text-white hover:bg-white hover:text-[#1C1917] self-start md:self-auto text-sm px-6 py-2.5 rounded-full inline-flex items-center gap-2 group transition-all"
          >
            <span>View All Menu</span>
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {FLAVORS.map((flavor) => (
            <article
              key={flavor.id}
              className="group rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[var(--color-accent)]/50 backdrop-blur-xl p-5 flex flex-col transition-all duration-300 hover:-translate-y-2 shadow-2xl"
            >
              {/* Image container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 bg-[#292524]">
                <Image
                  src={flavor.imageUrl}
                  alt={flavor.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {flavor.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1C1917]/85 backdrop-blur-md text-[var(--color-accent-glow)] text-xs font-semibold border border-white/10">
                    {flavor.badge}
                  </span>
                )}
                <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[var(--color-accent)] text-white text-sm font-bold shadow-md">
                  ${flavor.price.toFixed(2)}
                </span>
              </div>

              {/* Card body */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3
                      className="text-white text-xl font-bold group-hover:text-[var(--color-accent-glow)] transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {flavor.name}
                    </h3>
                    <span className="text-white/40 text-xs font-mono">
                      {flavor.volume}
                    </span>
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed mb-5">
                    {flavor.tagline}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-[var(--color-accent)] text-white text-center text-sm font-semibold transition-all duration-200 block"
                >
                  Order at Counter
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <TornDivider color="#FFF3E0" position="bottom" />
      </div>
    </section>
  );
}
