"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

type Animation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade"
  | "scale"
  | "blur";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const animationClasses: Record<Animation, { hidden: string; visible: string }> =
  {
    "fade-up": {
      hidden: "translate-y-8 opacity-0",
      visible: "translate-y-0 opacity-100",
    },
    "fade-down": {
      hidden: "-translate-y-8 opacity-0",
      visible: "translate-y-0 opacity-100",
    },
    "fade-left": {
      hidden: "translate-x-8 opacity-0",
      visible: "translate-x-0 opacity-100",
    },
    "fade-right": {
      hidden: "-translate-x-8 opacity-0",
      visible: "translate-x-0 opacity-100",
    },
    fade: {
      hidden: "opacity-0",
      visible: "opacity-100",
    },
    scale: {
      hidden: "scale-95 opacity-0",
      visible: "scale-100 opacity-100",
    },
    blur: {
      hidden: "opacity-0 blur-sm",
      visible: "opacity-100 blur-0",
    },
  };

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className,
  threshold = 0.15,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold });
  const anim = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? anim.visible : anim.hidden,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
