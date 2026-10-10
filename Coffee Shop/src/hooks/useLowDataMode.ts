"use client";
import { useEffect, useState } from "react";

export function useLowDataMode() {
  const [lowData, setLowData] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(prefers-reduced-data: reduce)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Chrome/Android only — always falls back gracefully
    // @ts-expect-error connection is experimental
    const conn = navigator.connection;
    const slow = conn?.effectiveType && /(^|-)2g$/.test(conn.effectiveType);
    const saveData = conn?.saveData === true;

    requestAnimationFrame(() => {
      setLowData(mq.matches || reduced.matches || slow || saveData);
    });

    const update = () => setLowData(mq.matches || reduced.matches);
    mq.addEventListener("change", update);
    reduced.addEventListener("change", update);
    
    return () => {
      mq.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  return lowData;
}
