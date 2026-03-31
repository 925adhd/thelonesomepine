"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SproutingPlantProps {
  className?: string;
}

export function SproutingPlant({ className = "" }: SproutingPlantProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rootsRef = useRef<(SVGPathElement | null)[]>([]);
  const stemRef = useRef<SVGPathElement>(null);
  const leavesRef = useRef<(SVGGElement | null)[]>([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Find the parent section to measure scroll against
    const section = el.closest("section") || el;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const progress = Math.min(
        Math.max(1 - rect.top / window.innerHeight, 0),
        1
      );

      // Stem grows first (0 → 0.4 of scroll progress)
      const stemProgress = Math.min(progress / 0.4, 1);
      if (stemRef.current) {
        stemRef.current.style.strokeDashoffset = `${200 * (1 - stemProgress)}`;
        stemRef.current.style.opacity = `${0.2 + stemProgress * 0.4}`;
      }

      // Roots follow (0.15 → 0.7 of scroll progress)
      rootsRef.current.forEach((root, i) => {
        if (!root) return;
        const delay = 0.15 + i * 0.08;
        const adjusted = Math.max((progress - delay) / 0.55, 0);
        const rootProgress = Math.min(adjusted, 1);

        const len = parseFloat(root.getAttribute("data-len") || "200");
        root.style.strokeDashoffset = `${len * (1 - rootProgress)}`;
        root.style.opacity = `${rootProgress * 0.35}`;
        root.style.filter = `blur(${(1 - rootProgress) * 0.8}px)`;
      });

      // Leaves unfurl last (0.3 → 1.0 of scroll progress)
      leavesRef.current.forEach((leaf, i) => {
        if (!leaf) return;
        const delay = 0.3 + i * 0.12;
        const adjusted = Math.max((progress - delay) / 0.5, 0);
        const leafProgress = Math.min(adjusted, 1);

        const eased =
          leafProgress < 1
            ? 1 - Math.pow(1 - leafProgress, 3)
            : 1;

        leaf.style.opacity = `${eased}`;
        leaf.style.transform = `scale(${eased}) rotate(${(1 - eased) * (i % 2 === 0 ? -20 : 20)}deg)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className={cn("relative", className)}>
      <svg
        viewBox="0 0 200 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        {/* Ground line */}
        <line
          x1="10"
          y1="200"
          x2="190"
          y2="200"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.12"
        />
        {/* Ground texture dots */}
        <g opacity="0.08">
          <circle cx="80" cy="201" r="2" fill="currentColor" />
          <circle cx="100" cy="203" r="1.5" fill="currentColor" />
          <circle cx="118" cy="202" r="1" fill="currentColor" />
          <circle cx="90" cy="204" r="1" fill="currentColor" />
          <circle cx="112" cy="201" r="1.5" fill="currentColor" />
          <circle cx="72" cy="202" r="0.8" fill="currentColor" />
          <circle cx="130" cy="203" r="1" fill="currentColor" />
        </g>

        {/* === STEM === */}
        <path
          ref={stemRef}
          d="M100 200 C100 185 99 160 100 130 C101 100 100 75 100 50"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{
            strokeDasharray: 200,
            strokeDashoffset: 200,
            opacity: 0.2,
            transition: "filter 0.3s ease",
          }}
        />

        {/* === ROOTS === */}
        {/* Main taproot */}
        <path
          ref={(el) => { rootsRef.current[0] = el; }}
          data-len="180"
          d="M100 200 C100 225 99 260 97 295 C95 325 92 355 88 390"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="animate-[wiggle_8s_infinite_ease-in-out]"
          style={{ strokeDasharray: 180, strokeDashoffset: 180, opacity: 0 }}
        />
        {/* Left root 1 — wide */}
        <path
          ref={(el) => { rootsRef.current[1] = el; }}
          data-len="120"
          d="M100 225 C82 235 58 245 35 258"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          className="animate-[wiggle_7s_0.5s_infinite_ease-in-out]"
          style={{ strokeDasharray: 120, strokeDashoffset: 120, opacity: 0 }}
        />
        {/* Left root 1 — tendril */}
        <path
          ref={(el) => { rootsRef.current[2] = el; }}
          data-len="60"
          d="M58 245 C48 258 40 272 32 282"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          style={{ strokeDasharray: 60, strokeDashoffset: 60, opacity: 0 }}
        />
        {/* Right root 1 — wide */}
        <path
          ref={(el) => { rootsRef.current[3] = el; }}
          data-len="110"
          d="M100 240 C118 250 145 262 168 275"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          className="animate-[wiggle_9s_1s_infinite_ease-in-out]"
          style={{ strokeDasharray: 110, strokeDashoffset: 110, opacity: 0 }}
        />
        {/* Right root 1 — tendril */}
        <path
          ref={(el) => { rootsRef.current[4] = el; }}
          data-len="50"
          d="M145 262 C155 275 162 290 166 302"
          stroke="currentColor"
          strokeWidth="0.7"
          strokeLinecap="round"
          style={{ strokeDasharray: 50, strokeDashoffset: 50, opacity: 0 }}
        />
        {/* Left root 2 — deeper */}
        <path
          ref={(el) => { rootsRef.current[5] = el; }}
          data-len="100"
          d="M97 275 C78 288 55 300 35 315"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          className="animate-[wiggle_6s_0.3s_infinite_ease-in-out]"
          style={{ strokeDasharray: 100, strokeDashoffset: 100, opacity: 0 }}
        />
        {/* Left root 2 — hair */}
        <path
          ref={(el) => { rootsRef.current[6] = el; }}
          data-len="35"
          d="M55 300 C45 310 38 318 30 322"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinecap="round"
          style={{ strokeDasharray: 35, strokeDashoffset: 35, opacity: 0 }}
        />
        {/* Right root 2 — deeper */}
        <path
          ref={(el) => { rootsRef.current[7] = el; }}
          data-len="90"
          d="M95 300 C112 312 135 325 155 340"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="animate-[wiggle_7s_0.7s_infinite_ease-in-out]"
          style={{ strokeDasharray: 90, strokeDashoffset: 90, opacity: 0 }}
        />
        {/* Tiny root hairs */}
        <path
          ref={(el) => { rootsRef.current[8] = el; }}
          data-len="30"
          d="M35 258 C28 265 22 270 18 278"
          stroke="currentColor"
          strokeWidth="0.4"
          strokeLinecap="round"
          style={{ strokeDasharray: 30, strokeDashoffset: 30, opacity: 0 }}
        />
        <path
          ref={(el) => { rootsRef.current[9] = el; }}
          data-len="25"
          d="M168 275 C175 282 178 292 180 298"
          stroke="currentColor"
          strokeWidth="0.4"
          strokeLinecap="round"
          style={{ strokeDasharray: 25, strokeDashoffset: 25, opacity: 0 }}
        />

        {/* === LEAVES === */}
        {/* Left leaf 1 — lowest */}
        <g
          ref={(el) => { leavesRef.current[0] = el; }}
          style={{ opacity: 0, transformOrigin: "100px 160px" }}
        >
          <path
            d="M100 160 C82 148 58 147 54 158 C50 169 70 176 100 166"
            fill="currentColor"
            fillOpacity="0.1"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />
          <path d="M100 163 C82 156 68 155 58 158" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
        </g>

        {/* Right leaf 1 */}
        <g
          ref={(el) => { leavesRef.current[1] = el; }}
          style={{ opacity: 0, transformOrigin: "100px 135px" }}
        >
          <path
            d="M100 135 C118 123 142 122 146 133 C150 144 130 151 100 141"
            fill="currentColor"
            fillOpacity="0.1"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />
          <path d="M100 138 C118 131 132 130 142 133" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
        </g>

        {/* Left leaf 2 — higher, slightly bigger */}
        <g
          ref={(el) => { leavesRef.current[2] = el; }}
          style={{ opacity: 0, transformOrigin: "100px 105px" }}
        >
          <path
            d="M100 105 C78 91 52 90 48 102 C44 114 68 120 100 111"
            fill="currentColor"
            fillOpacity="0.12"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.45"
          />
          <path d="M100 108 C78 100 62 99 52 102" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
        </g>

        {/* Right leaf 2 */}
        <g
          ref={(el) => { leavesRef.current[3] = el; }}
          style={{ opacity: 0, transformOrigin: "100px 78px" }}
        >
          <path
            d="M100 78 C120 64 146 63 150 75 C154 87 132 93 100 84"
            fill="currentColor"
            fillOpacity="0.12"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.45"
          />
          <path d="M100 81 C120 74 136 73 146 75" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
        </g>

        {/* Top new sprout unfurling */}
        <g
          ref={(el) => { leavesRef.current[4] = el; }}
          style={{ opacity: 0, transformOrigin: "100px 50px" }}
        >
          <path
            d="M100 50 C96 38 90 28 94 22 C98 16 103 22 100 38"
            fill="currentColor"
            fillOpacity="0.15"
            stroke="currentColor"
            strokeWidth="0.8"
            opacity="0.4"
          />
        </g>
      </svg>

      <style jsx>{`
        @keyframes wiggle {
          0% { transform: translateX(0); }
          50% { transform: translateX(0.5px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
