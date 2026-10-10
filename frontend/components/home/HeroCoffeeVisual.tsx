"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

/**
 * Interactive Hero Coffee Pour & Splash Visual inspired by Brewlab.
 * Features:
 * - Carafe pouring rich espresso into ceramic cup
 * - Dynamic splash droplets with floating coffee beans
 * - Rising gentle steam animation
 * - Mouse parallax tilt on hover
 */
export default function HeroCoffeeVisual() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 24, y: y * 24 });
  };

  const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

  return (
    <div
      className="relative w-full max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Golden ambient backlight glow */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-amber-600/35 via-yellow-500/25 to-transparent blur-3xl pointer-events-none" />

      {/* Main Coffee Pouring & Splash Composite */}
      <motion.div
        className="relative w-[92%] h-[92%] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.65)] border-2 border-amber-400/25 bg-[#2A1810]"
        animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=900&h=900&fit=crop"
          alt="Barista pouring steaming hot espresso with rich crema"
          fill
          priority
          className="object-cover scale-105"
          sizes="(max-width: 768px) 100vw, 540px"
        />

        {/* Liquid gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/90 via-transparent to-[#1C1917]/30" />

        {/* Rising Steam Animation (SVG paths wafting upwards) */}
        <div className="absolute top-8 right-16 pointer-events-none opacity-80" aria-hidden="true">
          <motion.div
            className="w-10 h-28 border-r-2 border-white/40 blur-sm rounded-full"
            animate={{ y: [0, -32, -60], opacity: [0, 0.7, 0], scaleX: [1, 1.4, 2] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="w-12 h-24 border-r-2 border-amber-100/35 blur-sm rounded-full -ml-3"
            animate={{ y: [0, -28, -55], opacity: [0, 0.6, 0], scaleX: [1, 1.3, 1.8] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 1 }}
          />
        </div>

        {/* Floating Splash Droplets & Roast Tag */}
        <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase tracking-wider mb-0.5">
              <Sparkles size={13} />
              <span>Extraction Live</span>
            </div>
            <p className="text-white text-sm font-semibold">9 Bar Pressure · 93°C</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-amber-500/25 border border-amber-400/40 text-amber-200 text-xs font-bold">
            100% Arabica
          </span>
        </div>
      </motion.div>

      {/* Floating 3D Coffee Bean with Inverse Parallax */}
      <motion.div
        className="absolute -top-3 -left-4 w-14 h-18 pointer-events-none z-30"
        animate={{ x: -mousePos.x * 1.2, y: -mousePos.y * 1.2 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <svg viewBox="0 0 32 42" className="w-12 h-16 drop-shadow-[0_12px_20px_rgba(0,0,0,0.8)]">
          <path d="M16 2C24 2 30 10 30 21C30 32 24 40 16 40C8 40 2 32 2 21C2 10 8 2 16 2Z" fill="#3E2723" stroke="#5D4037" strokeWidth="1.5" />
          <path d="M10 6C18 3 24 9 24 16" stroke="#8D6E63" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
          <path d="M16 6C14 13 18 19 15 26C13 32 17 36 16 38" stroke="#1A0C06" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Floating Bean Bottom Right */}
      <motion.div
        className="absolute -bottom-4 -right-3 w-16 h-20 pointer-events-none z-30"
        animate={{ x: -mousePos.x * 1.5, y: -mousePos.y * 1.5 }}
        transition={{ type: "spring", stiffness: 90, damping: 14 }}
      >
        <svg viewBox="0 0 32 42" className="w-14 h-18 rotate-45 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]">
          <path d="M16 2C24 2 30 10 30 21C30 32 24 40 16 40C8 40 2 32 2 21C2 10 8 2 16 2Z" fill="#2E1C14" stroke="#4A2E20" strokeWidth="1.5" />
          <path d="M16 6C14 13 18 19 15 26C13 32 17 36 16 38" stroke="#100703" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </motion.div>
    </div>
  );
}
