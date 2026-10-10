"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/data/gallery";
import type { GalleryImage } from "@/lib/types";

function Lightbox({
  image,
  onClose,
}: {
  image: GalleryImage;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Lightbox: ${image.alt}`}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close image preview"
        className="absolute top-5 right-5 text-white/70 hover:text-white
                   w-11 h-11 rounded-full bg-white/10 hover:bg-white/20
                   flex items-center justify-center transition-all duration-150 cursor-pointer"
      >
        <X size={20} aria-hidden="true" />
      </button>

      <figure
        className="relative max-w-3xl w-full aspect-square rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 95vw, 768px"
          priority
        />
        {image.caption && (
          <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white text-sm px-5 py-3">
            {image.caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}

export default function GalleryGrid() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <>
      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        role="list"
        aria-label="Coffee shop gallery"
      >
        {GALLERY_IMAGES.map((img) => (
          <button
            key={img.id}
            type="button"
            role="listitem"
            onClick={() => setSelected(img)}
            aria-label={`Open image: ${img.alt}`}
            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer
                       focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]
                       focus-visible:outline-offset-2 group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />
            {/* Hover caption overlay */}
            <div
              className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/50
                          transition-all duration-300 flex items-end"
              aria-hidden="true"
            >
              {img.caption && (
                <span className="translate-y-full group-hover:translate-y-0 transition-transform duration-300
                                  text-white text-sm font-medium px-4 py-3 block w-full">
                  {img.caption}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <Lightbox image={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
