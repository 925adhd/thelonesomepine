"use client";

import { useEffect, useState } from "react";
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

const animationClasses: Record<
  Animation,
  { hidden: string; visible: string; hiddenMobile: string }
> = {
  "fade-up": {
    hidden: "translate-y-8 opacity-0",
    hiddenMobile: "translate-y-3 opacity-0",
    visible: "translate-y-0 opacity-100",
  },
  "fade-down": {
    hidden: "-translate-y-8 opacity-0",
    hiddenMobile: "-translate-y-3 opacity-0",
    visible: "translate-y-0 opacity-100",
  },
  "fade-left": {
    hidden: "translate-x-8 opacity-0",
    hiddenMobile: "translate-x-3 opacity-0",
    visible: "translate-x-0 opacity-100",
  },
  "fade-right": {
    hidden: "-translate-x-8 opacity-0",
    hiddenMobile: "-translate-x-3 opacity-0",
    visible: "translate-x-0 opacity-100",
  },
  fade: {
    hidden: "opacity-0",
    hiddenMobile: "opacity-0",
    visible: "opacity-100",
  },
  scale: {
    hidden: "scale-95 opacity-0",
    hiddenMobile: "scale-[0.98] opacity-0",
    visible: "scale-100 opacity-100",
  },
  blur: {
    hidden: "opacity-0 blur-sm",
    hiddenMobile: "opacity-0 blur-[1px]",
    visible: "opacity-100 blur-0",
  },
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className,
  threshold = 0.15,
}: ScrollRevealProps) {
  const isMobile = useIsMobile();
  const { ref, isVisible } = useScrollReveal({
    threshold: isMobile ? 0.05 : threshold,
  });
  const anim = animationClasses[animation];

  const mobileDuration = Math.min(duration, 400);
  const mobileDelay = Math.min(delay, 80);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible
          ? anim.visible
          : isMobile
            ? anim.hiddenMobile
            : anim.hidden,
        className
      )}
      style={{
        transitionDuration: `${isMobile ? mobileDuration : duration}ms`,
        transitionDelay: `${isMobile ? mobileDelay : delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
