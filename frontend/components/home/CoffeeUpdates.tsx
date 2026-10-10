import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";
import type { BlogUpdate } from "@/lib/types";

const ARTICLES: BlogUpdate[] = [
  {
    id: "origin",
    title: "Journey to Origin: Exploring Ethiopian Coffee Farms",
    summary: "Follow our master roaster on our direct-trade sourcing trip to Guji, meeting the farmers who grow our beans.",
    imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&h=500&fit=crop",
    date: "Oct 2026",
    readTime: "4 min read",
  },
  {
    id: "latte-art",
    title: "Creating Beautiful Designs with Silk Latte Art",
    summary: "Barista secrets: mastering micro-foam temperature and wrist tilt to pour hearts and rosettas at home.",
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&h=500&fit=crop",
    date: "Sep 2026",
    readTime: "3 min read",
  },
  {
    id: "ritual",
    title: "The Mindful Coffee Ritual for Better Mornings",
    summary: "How taking five intentional minutes to grind, bloom, and brew sets an unhurried tone for your entire day.",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&h=500&fit=crop",
    date: "Aug 2026",
    readTime: "5 min read",
  },
];

export default function CoffeeUpdates() {
  return (
    <section
      className="relative bg-[#FAF0E4] py-24 px-5 border-b border-amber-900/10"
      aria-labelledby="updates-heading"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen size={15} aria-hidden="true" />
              <span>Journal & Craft</span>
            </div>
            <h2
              id="updates-heading"
              className="text-[var(--color-primary)] text-3xl md:text-5xl font-bold uppercase"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Coffee Shop Updates
            </h2>
          </div>

          <Link
            href="/about"
            className="text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-primary)] inline-flex items-center gap-1.5 transition-colors"
          >
            <span>All Stories</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="rounded-3xl bg-white/80 hover:bg-white backdrop-blur-xl border border-amber-900/10 hover:border-amber-600/30 overflow-hidden group flex flex-col hover:-translate-y-2 transition-all duration-300 shadow-[0_10px_25px_rgba(180,83,9,0.06)] hover:shadow-[0_20px_40px_rgba(180,83,9,0.12)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-amber-50">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#1C1917]/85 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5">
                  <Clock size={12} aria-hidden="true" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[var(--color-accent)] font-semibold mb-2">
                    {article.date}
                  </p>
                  <h3
                    className="text-lg font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2 mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed line-clamp-3 mb-4">
                    {article.summary}
                  </p>
                </div>

                <Link
                  href="/about"
                  className="text-xs font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] inline-flex items-center gap-1 mt-auto"
                >
                  <span>Read Story</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
