"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollVideoProps {
  src: string;
  className?: string;
  playbackRate?: number;
  endAt?: number;
}

export function ScrollVideo({ src, className = "", playbackRate = 1, endAt }: ScrollVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    // Find the parent section to observe
    const section = container.closest("section") || container;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);

          // Small delay so the reveal animation starts first
          setTimeout(() => {
            video.playbackRate = playbackRate;
            if (endAt) {
              const checkTime = () => {
                if (video.currentTime >= endAt) {
                  video.pause();
                  return;
                }
                requestAnimationFrame(checkTime);
              };
              requestAnimationFrame(checkTime);
            }
            video.play().catch(() => {
              // Autoplay blocked — that's fine
            });
          }, 600);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasTriggered]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "overflow-hidden transition-all duration-1000 ease-[var(--ease-out-expo)]",
        hasTriggered
          ? "opacity-100 scale-100 blur-0"
          : "opacity-0 scale-95 blur-sm",
        className
      )}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
