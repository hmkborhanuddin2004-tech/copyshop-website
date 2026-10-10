"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const CATEGORIES = [
  {
    title: "Shop Bundles",
    img: "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691ad4a398d723026f025e9a_shopping-cart-box-coffee-beans-shopping-online-export-import%201.avif",
    alt: "White coffee cup filled with coffee beans on saucer with boxes",
  },
  {
    title: "Shop Capsules",
    img: "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691ad5ccd8d5051c3b15cebc_glass-jar-filled-with-coffee-beans%201.avif",
    alt: "Glass jar with wooden lid filled with coffee beans",
  },
  {
    title: "Dark Roast",
    img: "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691ad4a3e2246aa4396562d1_black-cup-full-coffee-beans-wooden-board%201.avif",
    alt: "Black cup spilling coffee beans onto wooden board",
  },
  {
    title: "Medium Roast",
    img: "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691ad4a33981a890542325cc_glass-jar-coffee-beans-white-surface%201.avif",
    alt: "Glass jar tipped over spilling coffee beans",
  },
  {
    title: "Shop Organic",
    img: "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691ad4a38e28de136f4ecbc0_front-view-coffee-concept-wooden-table%201.avif",
    alt: "Vintage wooden coffee grinder with bowl of beans",
  },
];

export function Phase3_About() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Stagger animation for the 5 category cards (runs once on scroll)
    gsap.from(".about-category-card", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-category-grid",
        start: "top 85%",
        once: true,
      },
    });

    // Reveal for the large manifesto text
    gsap.from(".manifesto-line", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-manifesto",
        start: "top 80%",
        once: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative bg-white pt-16 md:pt-24 pb-0 overflow-hidden scroll-mt-16 md:scroll-mt-20"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* 1. TOP: 5 Category Cards */}
        <div className="about-category-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {CATEGORIES.map((c) => (
            <div
              key={c.title}
              className="about-category-card flex flex-col items-center group cursor-pointer"
            >
              <div className="w-full aspect-square rounded-[32px] p-6 bg-[#f8f5f1] border border-[#47261e]/10 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h2 className="mt-4 font-display text-[22px] sm:text-[26px] md:text-[30px] text-[#482820] tracking-wide uppercase text-center">
                {c.title}
              </h2>
            </div>
          ))}
        </div>

        {/* 2. BOTTOM: Brand Manifesto with Badges */}
        <div className="about-manifesto mt-24 md:mt-36 mb-16 md:mb-24 text-center max-w-[1240px] mx-auto">
          {/* Cursive yellow "BrewLab" Header */}
          <div className="font-script text-[75px] sm:text-[95px] md:text-[110px] text-[#FEBD02] leading-none mb-1 select-none">
            BrewLab
          </div>

          {/* Huge Tanker text with embedded colored badge pills */}
          <h2 className="font-display text-[36px] sm:text-[54px] md:text-[76px] lg:text-[96px] leading-[104%] text-[#482820] uppercase tracking-[-0.5px]">
            <div className="manifesto-line">
              We believe coffee is more{" "}
              <span
                className="inline-block align-middle mx-1.5 md:mx-2.5 rounded-full h-[36px] sm:h-[50px] md:h-[68px] w-[80px] sm:w-[110px] md:w-[145px] bg-[#b35f3d] bg-no-repeat bg-center shadow-md transition-transform hover:scale-110"
                style={{
                  backgroundImage: `url('https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691ada2c83e3d7fc4408ab63_coffee-beans-wooden-scoop%201.avif')`,
                  backgroundSize: "auto 74px",
                }}
              />
            </div>
            <div className="manifesto-line">
              than a drink it’s a ritual. We
            </div>
            <div className="manifesto-line">
              <span
                className="inline-block align-middle mx-1.5 md:mx-2.5 rounded-full h-[36px] sm:h-[50px] md:h-[68px] w-[80px] sm:w-[110px] md:w-[145px] bg-[#8bc7ee] bg-no-repeat bg-center shadow-md transition-transform hover:scale-110"
                style={{
                  backgroundImage: `url('https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691ae7f5ab523c664eb556d7_ground-coffee-coffee-beans-isolated-white-background-close-up-with-full-dept-field%201.avif')`,
                  backgroundSize: "auto 60px",
                }}
              />{" "}
              source premium beans, roast
            </div>
            <div className="manifesto-line">
              in small batches,{" "}
              <span
                className="inline-block align-middle mx-1.5 md:mx-2.5 rounded-full h-[36px] sm:h-[50px] md:h-[68px] w-[80px] sm:w-[110px] md:w-[145px] bg-[#FEBD02] bg-no-repeat bg-center shadow-md transition-transform hover:scale-110"
                style={{
                  backgroundImage: `url('https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691ae867d065a8261c002d09_roasted-coffee-beans-scoop%201.avif')`,
                  backgroundSize: "auto 70px",
                }}
              />{" "}
              &amp; deliver
            </div>
          </h2>
        </div>
      </div>

      {/* 3. Bottom Wave Divider into next section (Original Webflow Asset) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691aef1ff3fe8593c72c20e1_Frame%202147239539.svg"
        alt=""
        loading="lazy"
        className="w-full block pointer-events-none object-cover"
        style={{ maxHeight: "130px" }}
      />
    </section>
  );
}
