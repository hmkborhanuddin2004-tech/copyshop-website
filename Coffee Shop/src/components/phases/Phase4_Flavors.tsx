"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { useCartStore } from "@/lib/store";

const PRODUCTS = [
  {
    id: "iced-hazelnut-latte",
    name: "ICED HAZELNUT LATTE",
    price: 18.99,
    desc: "Smooth espresso blended with creamy hazelnut and chilled milk.",
    poster:
      "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d%2F691af309a8d2638fd9bc5e63_freepik__a-cinematic-video-of-creamy-milk-being-poured-from__81344_poster.0000000.jpg",
    mp4: "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d%2F691af309a8d2638fd9bc5e63_freepik__a-cinematic-video-of-creamy-milk-being-poured-from__81344_mp4.mp4",
    webm: "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d%2F691af309a8d2638fd9bc5e63_freepik__a-cinematic-video-of-creamy-milk-being-poured-from__81344_webm.webm",
  },
  {
    id: "cold-brew-delight",
    name: "COLD BREW DELIGHT",
    price: 16.99,
    desc: "Slow-steeped coffee with a bold aroma and silky finish.",
    poster:
      "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d%2F691af40c2a95933793537c5d_freepik__a-highquality-360degree-product-spin-video-of-a-ch__81345_poster.0000000.jpg",
    mp4: "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d%2F691af40c2a95933793537c5d_freepik__a-highquality-360degree-product-spin-video-of-a-ch__81345_mp4.mp4",
    webm: "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d%2F691af40c2a95933793537c5d_freepik__a-highquality-360degree-product-spin-video-of-a-ch__81345_webm.webm",
  },
  {
    id: "mocha-fusion",
    name: "MOCHA FUSION",
    price: 18.99,
    desc: "Rich chocolate, fresh espresso, and whipped cream perfection.",
    poster:
      "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d%2F691af41a6b3e414bebda3642_freepik__a-highquality-360degree-product-spin-video-of-a-ch__81347_poster.0000000.jpg",
    mp4: "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d%2F691af41a6b3e414bebda3642_freepik__a-highquality-360degree-product-spin-video-of-a-ch__81347_mp4.mp4",
    webm: "https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d%2F691af41a6b3e414bebda3642_freepik__a-highquality-360degree-product-spin-video-of-a-ch__81347_webm.webm",
  },
];

export function Phase4_Flavors() {
  const containerRef = useRef<HTMLElement>(null);
  const addItem = useCartStore((state) => state.addItem);

  useGSAP(() => {
    gsap.from(".flavor-product-item", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".flavor-product-grid",
        start: "top 85%",
        once: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section
      id="products"
      ref={containerRef}
      className="relative bg-[#482820] text-white pt-20 md:pt-28 pb-32 md:pb-40 overflow-hidden scroll-mt-16 md:scroll-mt-20"
    >
      {/* Background Side Coffee Beans (Exact Webflow Assets) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691afdb61db6720acd89cf64_freepik__img1-img2__1942%203.avif"
        alt=""
        loading="lazy"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-28 md:w-44 pointer-events-none z-10 hidden sm:block select-none"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691afdb6f118e2d0240c3628_freepik__img1-img2__1942%204.avif"
        alt=""
        loading="lazy"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-28 md:w-44 pointer-events-none z-10 hidden sm:block select-none"
      />

      <div className="mx-auto max-w-[1300px] px-6 md:px-12 relative z-20">
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display text-[54px] sm:text-[76px] md:text-[96px] text-white uppercase tracking-tight">
            Popular Flavors
          </h2>
        </div>

        {/* 3 Cards: Pristine Pure White Containers matching Webflow with ZERO black bars */}
        <div className="flavor-product-grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1280px] mx-auto">
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              className="flavor-product-item flex flex-col items-center group w-full max-w-[420px] mx-auto md:max-w-none"
            >
              {/* Crisp Pure White Box Container with 48px rounded corners */}
              <div className="relative w-full h-[460px] sm:h-[480px] lg:h-[500px] rounded-[48px] overflow-hidden bg-white shadow-xl transition-all duration-500 group-hover:scale-[1.02] flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={p.poster}
                  className="absolute inset-0 w-full h-full object-cover scale-[1.08] origin-center"
                >
                  <source src={p.mp4} type="video/mp4" />
                  <source src={p.webm} type="video/webm" />
                </video>

                {/* Frosted hover overlay with Order Now button (matching Webflow) */}
                <div className="absolute inset-0 bg-[#4a3428]/25 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <button
                    onClick={() =>
                      addItem({
                        id: p.id,
                        name: p.name,
                        desc: p.desc,
                        price: Math.round(p.price * 120),
                        image: p.poster,
                      })
                    }
                    className="px-8 py-3.5 rounded-full bg-[#f8f5f1] text-[#482820] font-bold text-base outline outline-3 outline-[#482820] hover:bg-[#FEBD02] hover:text-[#482820] transition-colors cursor-pointer shadow-lg active:scale-95"
                  >
                    Order Now
                  </button>
                </div>
              </div>

              {/* Product Info Below */}
              <div className="pt-6 text-center max-w-[300px] mx-auto space-y-2">
                <div className="text-[#FEBD02] font-bold text-2xl font-body">
                  ${p.price.toFixed(2)}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  {p.name}
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
