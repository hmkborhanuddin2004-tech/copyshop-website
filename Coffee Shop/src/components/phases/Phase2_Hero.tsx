"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function Phase2_Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const beanRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Fade in and slide up subtitle, heading, text, buttons
    tl.from(".brewlab-subtitle", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2,
    })
      .from(
        ".brewlab-heading",
        {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.5"
      )
      .from(
        beanRef.current,
        {
          scale: 0,
          rotation: -45,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      )
      .from(
        ".brewlab-desc",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .from(
        ".brewlab-buttons",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );

    // Subtle continuous floating motion for the coffee beans on the heading
    if (beanRef.current) {
      gsap.to(beanRef.current, {
        y: -10,
        rotation: 8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });
    }
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#482820] text-white min-h-[90vh] md:min-h-screen flex items-center overflow-hidden pt-28 md:pt-36 pb-32 md:pb-40"
    >
      {/* 1. Top-Left Coffee Beans Cluster (Original Webflow SVG Asset) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691709720b33ef9ac973be14_freepik__img1-img2__1942%203.svg"
        alt=""
        className="absolute top-0 left-0 z-[4] pointer-events-none max-w-[160px] sm:max-w-[220px] md:max-w-[280px]"
      />

      {/* 2. Background Video - EXACT Brewlab Video (Pouring coffee from jug, smoke rising, spinning cup splash!) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[1] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: "100% 50%" }}
          poster="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d%2F691acd2af101662369f36612_Hero%20%283%29_poster.0000000.jpg"
        >
          <source
            src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d%2F691acd2af101662369f36612_Hero%20%283%29_mp4.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d%2F691acd2af101662369f36612_Hero%20%283%29_webm.webm"
            type="video/webm"
          />
        </video>
        {/* Darkening overlay for contrast on left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#482820]/90 via-[#482820]/50 to-transparent z-[2]" />
      </div>

      {/* 3. Hero Content Container */}
      <div className="relative z-[10] mx-auto max-w-[1440px] px-6 md:px-12 w-full">
        <div className="max-w-[700px]">
          
          {/* Subtitle with dot and gradient line */}
          <div className="brewlab-subtitle flex items-center gap-4 text-sm md:text-base font-body tracking-wide text-white/90 mb-4 md:mb-6">
            <span>Cleveland-based Coffee shop</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              <div className="w-16 h-[2px] bg-gradient-to-r from-white/70 to-transparent" />
            </div>
          </div>

          {/* Heading with Original Tanker Font & Coffee Beans Asset */}
          <div className="relative inline-block">
            <h1 className="brewlab-heading font-display text-[64px] sm:text-[96px] md:text-[130px] lg:text-[152px] leading-[86%] tracking-[-1.25px] uppercase select-none text-white">
              <span className="text-[#FEBD02]">Coffee</span><br />
              Life&apos;s<br />
              Beginning
            </h1>

            {/* Original 3D Roasted Coffee Beans on the Heading */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={beanRef}
              src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691c18519088951dca55853c_freepik__img1-img2__1942%205.avif"
              alt="Roasted coffee beans"
              className="absolute top-[28%] right-[110px] sm:right-[150px] md:right-[180px] w-16 sm:w-22 md:w-28 pointer-events-none drop-shadow-2xl z-[12]"
            />
          </div>

          {/* Details / Description */}
          <div className="brewlab-desc pt-5 md:pt-7 max-w-[540px]">
            <p className="text-white/85 text-base md:text-lg font-body font-normal leading-relaxed">
              Did you know that your next favorite coffee may be hiding in plain sight? Take our quiz to get matched with the perfect beans for you.
            </p>
          </div>

          {/* Buttons: Out Products & Watch Video */}
          <div className="brewlab-buttons flex flex-wrap items-center gap-5 md:gap-7 pt-8 md:pt-10">
            {/* Out Products Button with Arrow Circle */}
            <a
              href="#products"
              className="inline-flex items-center gap-2 group cursor-pointer"
            >
              <div className="bg-white text-[#482820] text-sm md:text-base font-semibold px-8 md:px-9 py-3.5 md:py-4 rounded-full group-hover:bg-[#FEBD02] transition-colors">
                Out Products
              </div>
              <div className="w-12 h-12 md:w-13 md:h-13 rounded-full bg-white flex items-center justify-center group-hover:bg-[#FEBD02] transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/6916c55f77d2facae14e7b52_arrow-up-right-03-stroke-rounded%20(2)%201.svg"
                  alt=""
                  className="w-5 h-5 transition-transform group-hover:rotate-45"
                />
              </div>
            </a>

            {/* Watch Video Button with Glow Border and Play Icon */}
            <button
              onClick={() => {
                window.open("https://youtube.com/watch?v=O6_z1_zLIOI", "_blank");
              }}
              className="inline-flex items-center gap-3.5 text-white group hover:text-[#FEBD02] transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 md:w-13 md:h-13 rounded-full border border-white/25 bg-white/10 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:bg-white/20 transition-all">
                <svg
                  className="w-4 h-4 ml-0.5"
                  viewBox="0 0 15 16"
                  fill="currentColor"
                >
                  <path d="M2.61197 0.352788C1.16948 -0.474645 0 0.203198 0 1.86558V14.1332C0 15.7973 1.16948 16.4743 2.61197 15.6476L13.3345 9.49829C14.7775 8.67057 14.7775 7.32953 13.3345 6.502L2.61197 0.352788Z" />
                </svg>
              </div>
              <span className="text-sm md:text-base font-semibold font-body">Watch Video</span>
            </button>
          </div>

        </div>
      </div>

      {/* 4. Bottom Torn Paper Wave SVG (Exact Webflow Asset) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/69170e2153eca771b62ee3ba_Header%2013%201.svg"
        alt=""
        className="absolute bottom-[-1px] left-0 right-0 w-full z-[15] pointer-events-none object-cover"
        style={{ maxHeight: "120px" }}
      />
    </section>
  );
}
