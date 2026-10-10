"use client";

import { motion } from "framer-motion";

interface BeanProps {
  x: string;
  y: string;
  size: number;
  rotation: number;
  delay?: number;
  duration?: number;
  opacity?: number;
}

const BEANS_DATA: BeanProps[] = [
  { x: "6%", y: "18%", size: 34, rotation: -25, delay: 0, duration: 6, opacity: 0.8 },
  { x: "12%", y: "65%", size: 28, rotation: 45, delay: 1.2, duration: 7.5, opacity: 0.65 },
  { x: "88%", y: "22%", size: 42, rotation: 30, delay: 0.5, duration: 8, opacity: 0.85 },
  { x: "92%", y: "70%", size: 30, rotation: -40, delay: 1.8, duration: 6.8, opacity: 0.7 },
  { x: "46%", y: "12%", size: 22, rotation: 60, delay: 2.2, duration: 5.5, opacity: 0.5 },
];

function CoffeeBeanSvg({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 32 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* Coffee bean body */}
      <path
        d="M16 2C24 2 30 10 30 21C30 32 24 40 16 40C8 40 2 32 2 21C2 10 8 2 16 2Z"
        fill="#3E2723"
        stroke="#5D4037"
        strokeWidth="1.5"
      />
      {/* Highlighting */}
      <path
        d="M10 6C18 3 24 9 24 16"
        stroke="#8D6E63"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Center crevice */}
      <path
        d="M16 6C14 13 18 19 15 26C13 32 17 36 16 38"
        stroke="#1A0C06"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Floating 3D Roasted Coffee Bean particles with gentle floating & wobble animation.
 */
export default function FloatingBeans({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-10 ${className}`}
      aria-hidden="true"
    >
      {BEANS_DATA.map((bean, idx) => (
        <motion.div
          key={idx}
          className="absolute"
          style={{
            left: bean.x,
            top: bean.y,
            opacity: bean.opacity,
          }}
          animate={{
            y: [0, -18, 0, 12, 0],
            rotate: [bean.rotation, bean.rotation + 12, bean.rotation - 8, bean.rotation],
          }}
          transition={{
            duration: bean.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bean.delay,
          }}
        >
          <CoffeeBeanSvg size={bean.size} />
        </motion.div>
      ))}
    </div>
  );
}
