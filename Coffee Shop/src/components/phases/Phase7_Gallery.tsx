"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const GALLERY_ITEMS = [
  {
    id: 1,
    img: "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691b0417e55b01eee7fec7d5_Rectangle%20240649682%20(2).avif",
  },
  {
    id: 2,
    img: "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691b0418a6634a89e3e1c293_Rectangle%20240649684%20(2).avif",
  },
  {
    id: 3,
    img: "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691b042666900bf41db99f9e_Rectangle%20240649683%20(1).avif",
  },
];

export function Phase7_Gallery() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".gallery-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".gallery-grid",
        start: "top 80%",
      },
    });
  }, { scope: containerRef });

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative bg-[#482820] text-white py-24 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display text-[54px] sm:text-[76px] md:text-[96px] text-white uppercase tracking-tight">
            Our Gallery
          </h2>
        </div>

        <div className="gallery-grid grid md:grid-cols-3 gap-6 md:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="gallery-card relative aspect-[3/4] rounded-[32px] overflow-hidden group shadow-xl border border-white/10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.img}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Instagram Floating Button */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691c26a664b471452481ec50_Frame%20(14).svg"
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave Divider (Exact Webflow Asset) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691af849eea3f8b380326d67_Header%2013%20(1)%202.svg"
        alt=""
        loading="lazy"
        className="absolute bottom-[-1px] left-0 right-0 w-full z-10 pointer-events-none object-cover"
        style={{ maxHeight: "120px" }}
      />
    </section>
  );
}
