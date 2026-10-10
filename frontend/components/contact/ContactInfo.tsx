import { MapPin, Phone, Mail, Clock } from "lucide-react";

const INFO_ITEMS = [
  {
    Icon: MapPin,
    label: "Address",
    value: "Senbagh Bazar Road, Senbagh 3820, Noakhali, Bangladesh",
    href: "https://maps.google.com/?q=Senbagh+Noakhali+Bangladesh",
    linkLabel: "Open in Google Maps",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+880 1812-345678",
    href: "tel:+8801812345678",
    linkLabel: "Call us",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "hello@brewcraftcoffee.com",
    href: "mailto:hello@brewcraftcoffee.com",
    linkLabel: "Send email",
  },
  {
    Icon: Clock,
    label: "Hours",
    value: "Mon–Fri 7 am–10 pm · Sat–Sun 8 am–11 pm",
    href: null,
    linkLabel: null,
  },
] as const;

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Info items */}
      <div className="warm-card p-8 space-y-6" style={{ background: "rgba(255,243,224,0.65)" }}>
        {INFO_ITEMS.map(({ Icon, label, value, href, linkLabel }) => (
          <div key={label} className="flex items-start gap-4">
            <span
              className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              <Icon size={18} className="text-[var(--color-accent)]" strokeWidth={1.7} />
            </span>
            <div>
              <p className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-0.5">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={linkLabel ?? undefined}
                  className="text-sm text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors duration-150 no-underline"
                >
                  {value}
                </a>
              ) : (
                <p className="text-sm text-[var(--color-primary)]">{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Embedded map */}
      <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-[var(--shadow-card)] h-64">
        <iframe
          title="BrewCraft Coffee location in Senbagh, Noakhali"
          src="https://maps.google.com/maps?q=Senbagh,Noakhali,Bangladesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
