"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export function Phase5_Benefits() {
  const containerRef = useRef<HTMLElement>(null);
  const cupRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Perfect Slow-Motion Balance (0.37x speed: slightly slower than 0.45x, much faster than 0.22x)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const enforce = () => {
      video.muted = true;
      video.playbackRate = 0.37;
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    enforce();

    const onVisible = () => {
      if (!document.hidden) enforce();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, []);

  useGSAP(() => {
    // 1. Natural, gentle breathing and subtle organic tilt for the cup
    if (cupRef.current) {
      gsap.to(cupRef.current, {
        y: -14,
        rotation: 1.2,
        scale: 1.015,
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.4,
      });

      // 2. Cinematic natural slow-motion floating beans (4.2s - 6.2s float cycle)
      const beans = containerRef.current?.querySelectorAll(".splash-bean");
      if (beans) {
        beans.forEach((b, i) => {
          gsap.to(b, {
            y: -22 - (i % 3) * 12,
            x: (i % 2 === 0 ? 1 : -1) * (10 + i * 4),
            rotation: 35 + i * 20,
            duration: 4.2 + i * 0.5, // Perfect slow-motion float
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.35,
          });
        });
      }
    }
  }, { scope: containerRef });

  return (
    <section
      id="benefits"
      ref={containerRef}
      className="relative bg-[#FEBD02] text-[#482820] pt-28 md:pt-40 pb-48 sm:pb-56 md:pb-64 lg:pb-72 overflow-hidden flex flex-col items-center justify-center min-h-[105vh] scroll-mt-16 md:scroll-mt-20"
    >
      {/* Top Wave: Seamlessly transitions Coffee Brown (#482820) from Phase 4 into Golden Yellow (#FEBD02) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691c021fe5be5a70061df439_Frame%202147239540.svg"
        alt=""
        loading="lazy"
        className="absolute top-[-2px] left-0 right-0 w-full z-20 pointer-events-none object-cover object-top h-20 sm:h-28 md:h-36"
      />

      {/* 4 Feature Items Framing the Central Cup (Exact Webflow Layout - 100% Always Visible) */}
      <div className="relative z-30 mx-auto max-w-[1320px] px-6 md:px-12 w-full my-auto">
        <div className="flex flex-col gap-28 md:gap-40 lg:gap-52">
          
          {/* Top Row: - Premium Quality (Left) & Sustainable - (Right) */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* - Premium Quality */}
            <div className="w-full max-w-[340px] text-left">
              <h3 className="font-display text-3xl sm:text-4xl text-[#482820] uppercase tracking-wide">
                - Premium Quality
              </h3>
              <p className="mt-3 font-body text-[#482820]/90 text-sm sm:text-base leading-relaxed">
                Beans that have been hand-picked from the finest coffee regions around the world have been used to make this coffee
              </p>
            </div>

            {/* Sustainable - */}
            <div className="w-full max-w-[340px] text-left md:text-right md:ml-auto">
              <h3 className="font-display text-3xl sm:text-4xl text-[#482820] uppercase tracking-wide">
                Sustainable -
              </h3>
              <p className="mt-3 font-body text-[#482820]/90 text-sm sm:text-base leading-relaxed">
                From farms that are committed to caring for the environment, our products are ethically sourced
              </p>
            </div>
          </div>

          {/* Bottom Row: - Expert Roasting (Left) & Fresh Always - (Right) */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* - Expert Roasting */}
            <div className="w-full max-w-[340px] text-left">
              <h3 className="font-display text-3xl sm:text-4xl text-[#482820] uppercase tracking-wide">
                - Expert Roasting
              </h3>
              <p className="mt-3 font-body text-[#482820]/90 text-sm sm:text-base leading-relaxed">
                The best way to make sure that every cup of coffee has the perfect flavor is to roast it in small batches
              </p>
            </div>

            {/* Fresh Always - */}
            <div className="w-full max-w-[340px] text-left md:text-right md:ml-auto">
              <h3 className="font-display text-3xl sm:text-4xl text-[#482820] uppercase tracking-wide">
                Fresh Always -
              </h3>
              <p className="mt-3 font-body text-[#482820]/90 text-sm sm:text-base leading-relaxed">
                Our products are roasted to order, and they are delivered within days of the roasting process
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Center Splashing Coffee Cup - Elevated Completely Above Bottom White Wave with 0.22x Super Slow Motion */}
      <div
        ref={cupRef}
        className="absolute bottom-[90px] sm:bottom-[115px] md:bottom-[135px] lg:bottom-[150px] left-1/2 -translate-x-1/2 w-full max-w-[500px] sm:max-w-[620px] md:max-w-[740px] lg:max-w-[850px] pointer-events-none z-[25] select-none flex justify-center items-center"
      >
        <div className="relative w-full aspect-video flex items-center justify-center">
          
          {/* Official Cinematic Video of Coffee Splash with Balanced 0.37x Slow Motion */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onPlay={(e) => {
              e.currentTarget.playbackRate = 0.37;
            }}
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = 0.37;
              e.currentTarget.play().catch(() => {});
            }}
            onTimeUpdate={(e) => {
              if (e.currentTarget.playbackRate !== 0.37) {
                e.currentTarget.playbackRate = 0.37;
              }
            }}
            className="w-full h-full object-contain pointer-events-none drop-shadow-[0_30px_45px_rgba(72,40,32,0.35)]"
            style={{
              maskImage: "radial-gradient(ellipse at 50% 60%, black 60%, transparent 92%)",
              WebkitMaskImage: "radial-gradient(ellipse at 50% 60%, black 60%, transparent 92%)",
            }}
            poster="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d%2F691c00a76b219c62ddd62bef_Quality-Ensure-Hero-BG-Footages%20%281%29_poster.0000000.jpg"
          >
            <source
              src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d%2F691c00a76b219c62ddd62bef_Quality-Ensure-Hero-BG-Footages%20%281%29_mp4.mp4"
              type="video/mp4"
            />
            <source
              src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d%2F691c00a76b219c62ddd62bef_Quality-Ensure-Hero-BG-Footages%20%281%29_webm.webm"
              type="video/webm"
            />
          </video>

          {/* Gentle Rising Steam / Warm Aroma Wisps Above the Froth */}
          <div className="absolute top-[8%] sm:top-[12%] left-1/2 -translate-x-1/2 w-28 sm:w-36 pointer-events-none opacity-50 z-[28] flex justify-center">
            <svg
              viewBox="0 0 100 120"
              fill="none"
              className="w-full h-auto animate-pulse"
              style={{ animationDuration: "5s" }}
            >
              <path
                d="M38 110 C24 85 46 60 32 35 C22 15 36 5 42 0"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="blur(2.5px)"
              />
              <path
                d="M56 110 C68 85 46 60 58 35 C68 15 54 5 48 0"
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="blur(2.5px)"
              />
            </svg>
          </div>

          {/* Additional Dynamic 3D Flying Beans in Ultra-Slow-Motion Zero-Gravity Drift */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691c18519088951dca55853c_freepik__img1-img2__1942%205.avif"
            alt=""
            className="splash-bean absolute top-[14%] left-[47%] w-10 sm:w-14 drop-shadow-2xl pointer-events-none"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691c18519088951dca55853c_freepik__img1-img2__1942%205.avif"
            alt=""
            className="splash-bean absolute top-[20%] right-[35%] w-8 sm:w-12 -rotate-45 drop-shadow-2xl pointer-events-none"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691c18519088951dca55853c_freepik__img1-img2__1942%205.avif"
            alt=""
            className="splash-bean absolute top-[26%] left-[36%] w-9 sm:w-12 rotate-25 drop-shadow-2xl pointer-events-none"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691c18519088951dca55853c_freepik__img1-img2__1942%205.avif"
            alt=""
            className="splash-bean absolute top-[34%] right-[27%] w-7 sm:w-10 rotate-90 drop-shadow-xl pointer-events-none"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/691c18519088951dca55853c_freepik__img1-img2__1942%205.avif"
            alt=""
            className="splash-bean absolute top-[36%] left-[29%] w-7 sm:w-10 -rotate-30 drop-shadow-xl pointer-events-none"
          />
        </div>
      </div>

      {/* Bottom Wave: Transitions from Golden Yellow (#FEBD02) to Crisp White (#FFFFFF) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/69170e2153eca771b62ee3ba_Header%2013%201.svg"
        alt=""
        loading="lazy"
        className="absolute bottom-[-1px] left-0 right-0 w-full z-10 pointer-events-none object-cover object-top"
        style={{ maxHeight: "134px" }}
      />
    </section>
  );
}
