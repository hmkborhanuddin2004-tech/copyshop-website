import type { OperatingHours } from "@/lib/types";
import { Clock } from "lucide-react";

const HOURS: OperatingHours[] = [
  { days: "Monday – Friday", hours: "7:00 am – 8:00 pm" },
  { days: "Saturday – Sunday", hours: "8:00 am – 6:00 pm" },
];

export default function HoursSection() {
  return (
    <section
      className="bg-[var(--color-primary)] text-white py-20 px-5"
      aria-labelledby="hours-heading"
    >
      <div className="max-w-[700px] mx-auto text-center">
        {/* Icon + label */}
        <div className="flex items-center justify-center gap-2.5 mb-4">
          <Clock
            size={22}
            className="text-[var(--color-accent-glow)]"
            aria-hidden="true"
          />
          <p className="text-[var(--color-accent-glow)] text-sm font-medium tracking-widest uppercase">
            Opening Hours
          </p>
        </div>

        <h2
          id="hours-heading"
          className="text-white mb-10"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
          }}
        >
          We&rsquo;re Here When You Need Us
        </h2>

        {/* Hours table */}
        <dl className="space-y-4">
          {HOURS.map(({ days, hours }) => (
            <div
              key={days}
              className="flex items-center justify-between max-w-sm mx-auto
                         border-b border-white/10 pb-4 last:border-0 last:pb-0"
            >
              <dt className="text-white/70 text-sm font-medium">{days}</dt>
              <dd className="text-[var(--color-accent-glow)] text-sm font-semibold tabular-nums">
                {hours}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-white/40 text-xs">
          Public holiday hours may vary — follow us on Instagram for updates.
        </p>
      </div>
    </section>
  );
}
