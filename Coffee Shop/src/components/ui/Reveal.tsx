"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useLowDataMode } from "@/hooks/useLowDataMode";

export function Reveal({
  children,
  y = 80,
  delay = 0,
  className,
}: { children: React.ReactNode; y?: number; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const lowData = useLowDataMode();

  useGSAP(() => {
    if (!ref.current || lowData) return;
    gsap.from(ref.current, {
      y,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay,
      scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
    });
  }, { dependencies: [lowData], scope: ref });

  return <div ref={ref} className={className}>{children}</div>;
}
