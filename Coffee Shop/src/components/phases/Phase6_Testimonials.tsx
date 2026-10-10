"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const TESTIMONIALS = [
  {
    name: "Sarah Thompson",
    text: "I've tried coffee from all over the city, and this place is hands down my favorite. The espresso is rich and smooth.",
    avatar:
      "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691b10c6ec4fa97c2b09db33_Ellipse%203%20(3).avif",
  },
  {
    name: "Michael Chen",
    text: '"I\'ve tried many coffee brands, but BrewLab is the only one I keep coming back to. Worth every penny!"',
    avatar:
      "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691c05b52bedab215017f93f_Ellipse%203%20(5).avif",
  },
  {
    name: "Emma Davis",
    text: '"BrewLab\'s attention to quality is unmatched. Every bag is consistently excellent and the freshness is remarkable."',
    avatar:
      "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691c05b54f170e476fb05d67_Ellipse%203%20(4).avif",
  },
];

export function Phase6_Testimonials() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".testimonial-card-item", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".testimonials-grid",
        start: "top 80%",
        once: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section
      id="testimonial"
      ref={containerRef}
      className="relative bg-white py-24 md:py-36 overflow-hidden scroll-mt-16 md:scroll-mt-20"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-display text-[46px] sm:text-[68px] md:text-[88px] text-[#482820] uppercase tracking-tight">
            It&apos;s our customers who love us
          </h2>
        </div>

        <div className="testimonials-grid grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="testimonial-card-item rounded-[32px] p-8 md:p-10 bg-[#f8f5f1] border border-[#47261e]/10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                {/* Quote Icon */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691b0d1313026f20ebc3c212_Frame%20(12).svg"
                  alt=""
                  className="w-10 h-10 mb-6"
                />
                <p className="font-body text-[#482820]/90 text-base md:text-lg leading-relaxed">
                  {t.text}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#482820]/15 flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover shadow-sm"
                />
                <div>
                  <h4 className="font-display text-xl text-[#482820] uppercase tracking-wide">
                    {t.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
