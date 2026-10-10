import Image from "next/image";
import Link from "next/link";
import { Coffee, Flame, CheckCircle2 } from "lucide-react";
import TornDivider from "@/components/ui/TornDivider";

export default function RoastingBanner() {
  return (
    <section
      className="relative bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#92400E] text-white py-20 px-5 overflow-hidden"
      aria-labelledby="roasting-banner-heading"
    >
      <div className="max-w-[1200px] mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/20 backdrop-blur-md text-amber-100 text-xs font-semibold uppercase tracking-wider">
              <Flame size={14} className="text-amber-300" aria-hidden="true" />
              <span>Small-Batch Craft Roasting</span>
            </div>

            <h2
              id="roasting-banner-heading"
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] uppercase"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Secret Is In The Small Batches
            </h2>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-xl font-light">
              We never mass-roast. Every Monday and Thursday morning, our master roasters roast specialty-grade beans in 15-kilo micro-batches to unlock the peak floral, caramel, and chocolate tasting notes.
            </p>

            {/* Micro value props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-white/95">
                <CheckCircle2 size={17} className="text-amber-200 shrink-0" aria-hidden="true" />
                <span>100% Ethically Sourced</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/95">
                <CheckCircle2 size={17} className="text-amber-200 shrink-0" aria-hidden="true" />
                <span>Resting Period Precision</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/95">
                <CheckCircle2 size={17} className="text-amber-200 shrink-0" aria-hidden="true" />
                <span>Roast Date On Every Bag</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/95">
                <CheckCircle2 size={17} className="text-amber-200 shrink-0" aria-hidden="true" />
                <span>Barista Calibrated Grind</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="px-8 py-3.5 rounded-full bg-white text-[#92400E] hover:bg-[#FFF3E0] font-bold text-sm tracking-wide transition-all shadow-xl hover:-translate-y-0.5"
              >
                Our Roasting Story
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full border border-white/40 text-white hover:bg-white/10 font-medium text-sm transition-all"
              >
                Visit Our Roastery
              </Link>
            </div>
          </div>

          {/* Visual card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square max-w-[420px] mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=800&fit=crop"
                alt="Coffee beans roasting inside drum roaster with rich aroma"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400 text-[#92400E] flex items-center justify-center font-bold">
                    <Coffee size={20} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">Batch #342 Roasted Today</p>
                    <p className="text-amber-200 text-xs">Ethiopian Yirgacheffe Natural</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <TornDivider color="#FAFAF9" position="bottom" />
      </div>
    </section>
  );
}
