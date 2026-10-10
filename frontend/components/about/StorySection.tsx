import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const MISSION_PILLARS = [
  "Sourcing only specialty-grade, ethically traded beans",
  "Baking every item in-house, from scratch, every morning",
  "Reducing waste through reusable packaging and composting",
  "Supporting local farmers and artisan suppliers",
  "Creating a welcoming space for everyone in the community",
];

export default function StorySection() {
  return (
    <section className="section py-20" aria-labelledby="story-heading">
      {/* Our Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-20">
        <div>
          <p className="text-[var(--color-accent)] text-sm font-medium tracking-widest uppercase mb-3">
            Since 2018
          </p>
          <h2
            id="story-heading"
            className="text-[var(--color-primary)] mb-5"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Our Story
          </h2>
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              BrewCraft began as an artisanal coffee passion project in Senbagh,
              Noakhali, driven by the belief that world-class specialty coffee
              should be accessible right in our local community.
            </p>
            <p>
              Today, we have a warm sanctuary — handcrafted wooden tables,
              in-house roasting, and a kitchen that runs from dawn. Our commitment
              to pure, unadulterated coffee craft has never wavered.
            </p>
            <p>
              Everything here is made with care. Our single-origin beans are
              roasted in micro-batches, and our pastries are baked fresh every
              morning. We know our regulars by name, and we take pride in every
              single cup we pour.
            </p>
          </div>
        </div>

        {/* Story image */}
        <div className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
          <Image
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop"
            alt="Barista carefully pouring a latte at BrewCraft Coffee Roasters"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Mission */}
      <div className="warm-card p-10 md:p-14" style={{ background: "rgba(255,243,224,0.7)" }}>
        <div className="max-w-2xl">
          <p className="text-[var(--color-accent)] text-sm font-medium tracking-widest uppercase mb-3">
            What We Stand For
          </p>
          <h2
            className="text-[var(--color-primary)] mb-8"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            }}
          >
            Our Mission
          </h2>
          <ul className="space-y-4" role="list">
            {MISSION_PILLARS.map((pillar) => (
              <li key={pillar} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="text-[var(--color-accent)] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-[var(--color-muted)] leading-relaxed">
                  {pillar}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
