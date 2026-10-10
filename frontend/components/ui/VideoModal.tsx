"use client";

import { useEffect, useRef } from "react";
import { X, Play } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      closeBtnRef.current?.focus();
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="BrewCraft Craft Story Video"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        ref={closeBtnRef}
        type="button"
        onClick={onClose}
        aria-label="Close craft story preview"
        className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer"
      >
        <X size={22} aria-hidden="true" />
      </button>

      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl bg-[#1C1917] border border-white/15"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video w-full overflow-hidden bg-black flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&fit=crop"
          >
            <source
              src="https://cdn.dribbble.com/userupload/46198277/file/e03b40adde54541ac15b68658ed5a407.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>
        </div>

        <div className="p-6 bg-[#1C1917]/95">
          <p className="text-[var(--color-accent-glow)] text-xs font-semibold tracking-wider uppercase mb-1">
            Behind The Cup
          </p>
          <h3
            className="text-white text-xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            From Green Bean to Perfect Extraction
          </h3>
          <p className="text-white/60 text-sm mt-1">
            See how our master roasters roast, grind, and pour every cup with care every morning at BrewCraft in Senbagh, Noakhali.
          </p>
        </div>
      </div>
    </div>
  );
}
