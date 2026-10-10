"use client";
import { useEffect, useRef, useState } from "react";
import { useLowDataMode } from "@/hooks/useLowDataMode";

type Props = {
  src: string;
  webm?: string;
  poster: string;
  className?: string;
  aspect?: string;
};

export function VideoLazy({ src, webm, poster, className, aspect = "16/9" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const lowData = useLowDataMode();

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { rootMargin: "200px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const showVideo = visible && !lowData;

  return (
    <div style={{ aspectRatio: aspect }} className={className}>
      {showVideo ? (
        <video
          ref={ref}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={poster}
          className="h-full w-full object-cover"
        >
          {webm && <source src={webm} type="video/webm" />}
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={poster} alt="" className="h-full w-full object-cover" loading="lazy" />
      )}
    </div>
  );
}
