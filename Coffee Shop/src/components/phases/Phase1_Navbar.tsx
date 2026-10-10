"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { useCartStore } from "@/lib/store";

import { gsap, ScrollTrigger } from "@/lib/gsap";

const LINKS = [
  { id: "about", label: "About Us" },
  { id: "products", label: "Product" },
  { id: "benefits", label: "Benefits" },
  { id: "testimonial", label: "Testimonial" },
];

export function Phase1_Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(LINKS.map(l => l.id));
  const toggleCart = useCartStore(state => state.toggleCart);
  const totalItems = useCartStore(state => state.totalItems());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let isMounted = true;
    requestAnimationFrame(() => {
      if (isMounted) setMounted(true);
    });
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    setOpen(false);

    const navOffset = 80;
    const targetY = Math.max(0, el.getBoundingClientRect().top + window.scrollY - navOffset);

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(72,40,32,0.92)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="flex items-center justify-between h-20 md:h-24 border-b border-white/15">
            {/* Left Menu Links */}
            <nav className="hidden md:flex items-center gap-8 flex-1">
              {LINKS.map(l => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className={`text-sm md:text-base font-body tracking-wide transition-colors ${
                    active === l.id ? "text-[var(--color-amber)]" : "text-white/80 hover:text-white"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </nav>

            {/* Center Brand Logo (Exact Webflow SVG) */}
            <div className="flex-1 flex justify-center items-center">
              <Link href="/" className="inline-block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/6915d228abc7ce63b82b7686_BrewLab.svg"
                  alt="BrewLab"
                  className="h-7 md:h-8 w-auto"
                />
              </Link>
            </div>

            {/* Right Order Now Button (Exact Webflow Component) */}
            <div className="flex-1 flex justify-end items-center gap-3">
              <button
                onClick={toggleCart}
                className="hidden md:inline-flex items-center gap-2 group cursor-pointer"
                aria-label="Order Now"
              >
                <div className="bg-white text-[var(--color-coffee)] text-sm md:text-base font-semibold px-7 py-3 rounded-full group-hover:bg-[var(--color-amber)] transition-colors flex items-center gap-2">
                  Order Now
                  {mounted && totalItems > 0 && (
                    <span className="bg-[var(--color-coffee)] text-white text-xs px-2 py-0.5 rounded-full">
                      {totalItems}
                    </span>
                  )}
                </div>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:bg-[var(--color-amber)] transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://cdn.prod.website-files.com/6915bbbef5b75d8daa2ff39d/6916c55f77d2facae14e7b52_arrow-up-right-03-stroke-rounded%20(2)%201.svg"
                    alt=""
                    className="w-5 h-5 transition-transform group-hover:rotate-45"
                  />
                </div>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-white p-2"
                onClick={() => setOpen(v => !v)}
                aria-label="Toggle menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <div className="md:hidden bg-[var(--color-coffee)] border-t border-white/10 px-6 py-4 space-y-3">
            {LINKS.map(l => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="block w-full text-left text-white/90 py-2 text-base font-body"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => { toggleCart(); setOpen(false); }}
              className="w-full bg-[var(--color-amber)] text-[var(--color-coffee)] font-semibold rounded-full py-3 mt-2"
            >
              Order Now {mounted && totalItems > 0 && `(${totalItems})`}
            </button>
          </div>
        )}
      </header>
    </>
  );
}
