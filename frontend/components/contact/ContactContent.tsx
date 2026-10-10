"use client";

import PageTransition from "@/components/ui/PageTransition";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactContent() {
  return (
    <PageTransition>
      {/* Page header — warm biscuit bg */}
      <div className="bg-[var(--color-surface-warm)] pt-10 pb-16 px-5 text-center border-b border-[var(--color-border)]">
        <p className="text-[var(--color-accent)] text-sm font-medium tracking-widest uppercase mb-2">
          Reach Out
        </p>
        <h1
          className="text-[var(--color-primary)] mb-3"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          Contact Us
        </h1>
        <p className="text-[var(--color-muted)] max-w-md mx-auto text-sm">
          Questions, feedback, or just want to say hi — we&rsquo;d love to hear from you.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="section py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-[var(--color-primary)] mb-6"
              style={{ fontFamily: "var(--font-heading)", fontSize: "2rem" }}
            >
              Send a Message
            </h2>
            <ContactForm />
          </div>
          <div>
            <h2
              className="text-[var(--color-primary)] mb-6"
              style={{ fontFamily: "var(--font-heading)", fontSize: "2rem" }}
            >
              Find Us
            </h2>
            <ContactInfo />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
