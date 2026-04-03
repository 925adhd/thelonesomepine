"use client";

import { useEffect, useRef, useCallback } from "react";

export function DemoBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  // Keep --banner-height in sync via ResizeObserver
  const updateHeight = useCallback(() => {
    if (bannerRef.current) {
      const h = bannerRef.current.offsetHeight;
      document.documentElement.style.setProperty("--banner-height", `${h}px`);
    }
  }, []);

  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;

    updateHeight();

    const ro = new ResizeObserver(updateHeight);
    ro.observe(el);
    return () => {
      ro.disconnect();
      document.documentElement.style.removeProperty("--banner-height");
    };
  }, [updateHeight]);

  return (
    <div
      ref={bannerRef}
      className="fixed left-0 right-0 top-0 z-[110] flex items-center justify-center px-4 py-2 text-center text-xs sm:text-sm"
      style={{ backgroundColor: "#FACC15", color: "#1a1a00" }}
    >
      <span>
        Not the official website. This is a demo preview built by{" "}
        <a
          href="https://studio925.design"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-white/80"
        >
          Studio 925
        </a>
        .
      </span>
    </div>
  );
}
