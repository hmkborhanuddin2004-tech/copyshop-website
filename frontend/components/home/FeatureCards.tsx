import { Coffee, Croissant, Heart, Sparkles } from "lucide-react";

const FEATURES = [
  {
    id: "coffee",
    Icon: Coffee,
    title: "Fresh Micro-Roast",
    description:
      "Single-origin beans sourced directly from Ethiopia and Colombia — roasted in 15kg small batches every week for peak aroma.",
    color: "text-amber-700",
    bg: "bg-amber-100/80",
    badge: "100% Arabica",
  },
  {
    id: "pastries",
    Icon: Croissant,
    title: "Oven-Fresh Pastries",
    description:
      "Our artisan baker arrives at 4 am every morning. Flaky French croissants, cinnamon swirls, and warm scones baked daily.",
    color: "text-amber-800",
    bg: "bg-amber-200/60",
    badge: "Baked at 4am",
  },
  {
    id: "atmosphere",
    Icon: Heart,
    title: "Cozy Living Space",
    description:
      "Warm wooden tables, ambient acoustic beats, and fast Wi-Fi. Designed for quiet morning rituals, reading, and conversations.",
    color: "text-rose-700",
    bg: "bg-rose-100/70",
    badge: "Community Hub",
  },
] as const;

export default function FeatureCards() {
  return (
    <section
      className="relative bg-gradient-to-b from-[#FFF3E0] via-[#FAF0E4] to-[#FFF3E0] py-24 px-5 overflow-hidden border-y border-amber-900/10"
      aria-labelledby="features-heading"
    >
      {/* Warm ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-400/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/25 text-[var(--color-accent)] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles size={13} aria-hidden="true" />
            <span>Why BrewCraft</span>
          </div>
          <h2
            id="features-heading"
            className="text-[var(--color-primary)] text-3xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Everything You Need for a Great Day
          </h2>
          <p className="text-[var(--color-muted)] text-base mt-3 max-w-lg mx-auto">
            Thoughtfully crafted coffee, oven-warm treats, and an unhurried space to begin your morning right.
          </p>
        </div>

        {/* Rich Amber Glassmorphic Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map(({ id, Icon, title, description, color, bg, badge }) => (
            <article
              key={id}
              className="relative p-8 rounded-3xl bg-white/75 hover:bg-white backdrop-blur-xl border border-amber-900/10 hover:border-amber-600/40 shadow-[0_10px_30px_rgba(180,83,9,0.08)] hover:shadow-[0_20px_45px_rgba(180,83,9,0.16)] hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`${bg} w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    <Icon className={color} size={30} strokeWidth={1.8} />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 border border-amber-500/20">
                    {badge}
                  </span>
                </div>

                <h3
                  className="text-[var(--color-primary)] mb-3 text-2xl font-bold group-hover:text-[var(--color-accent)] transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {title}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-900/10 flex items-center text-xs font-bold text-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-colors">
                <span>Learn more</span>
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
