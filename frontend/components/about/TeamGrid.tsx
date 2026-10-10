import Image from "next/image";
import { TEAM_MEMBERS } from "@/lib/data/team";

export default function TeamGrid() {
  return (
    <section
      className="bg-[var(--color-primary)] py-20 px-5"
      aria-labelledby="team-heading"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[var(--color-accent-glow)] text-sm font-medium tracking-widest uppercase mb-3">
            The People Behind the Cup
          </p>
          <h2
            id="team-heading"
            className="text-white"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Meet the Team
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.id}
              className="text-center glass-card p-8 group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Circular photo */}
              <div className="relative w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden ring-2 ring-[var(--color-accent)] ring-offset-4 ring-offset-[var(--color-primary)]">
                <Image
                  src={member.imageUrl}
                  alt={`Portrait of ${member.name}, ${member.role}`}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>

              <h3
                className="text-white text-xl mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {member.name}
              </h3>
              <p className="text-[var(--color-accent-glow)] text-sm font-medium tracking-wide mb-3">
                {member.role}
              </p>
              {member.bio && (
                <p className="text-white/55 text-sm leading-relaxed">
                  {member.bio}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
