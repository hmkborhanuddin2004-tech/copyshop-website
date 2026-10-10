"use client";
import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { useLowDataMode } from "@/hooks/useLowDataMode";

type Props = {
  children: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  animateOnLoad?: boolean;
};

export function SplitHeading({ children, as: Tag = "h2", className, delay = 0, animateOnLoad = false }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const lowData = useLowDataMode();

  useGSAP(() => {
    if (!ref.current || lowData) return;

    const split = new SplitText(ref.current, {
      type: "chars,words,lines",
    });

    ref.current.setAttribute("aria-label", children);
    split.chars.forEach(char => {
      char.setAttribute("aria-hidden", "true");
    });

    gsap.from(split.chars, {
      yPercent: 120,
      opacity: 0,
      duration: 0.9,
      ease: "power4.out",
      stagger: 0.02,
      delay,
      scrollTrigger: animateOnLoad ? undefined : { trigger: ref.current, start: "top 85%", once: true },
    });

    return () => split.revert();
  }, { dependencies: [lowData], scope: ref });

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
