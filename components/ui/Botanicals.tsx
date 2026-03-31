/**
 * Hand-drawn style botanical SVG illustrations.
 * Used as subtle decorative accents throughout the site.
 */

interface BotanicalProps {
  className?: string;
}

/** A single delicate leaf with stem */
export function LeafAccent({ className = "" }: BotanicalProps) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M60 190 C60 190 60 100 60 10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M60 40 C40 35 20 50 15 75 C12 90 25 95 60 80"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.06"
        strokeLinecap="round"
      />
      <path
        d="M60 40 C80 35 100 50 105 75 C108 90 95 95 60 80"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.06"
        strokeLinecap="round"
      />
      <path
        d="M60 80 C45 78 30 90 28 110 C26 125 38 128 60 115"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.06"
        strokeLinecap="round"
      />
      <path
        d="M60 80 C75 78 90 90 92 110 C94 125 82 128 60 115"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.06"
        strokeLinecap="round"
      />
      <path
        d="M60 120 C50 118 38 128 36 142 C34 152 42 155 60 147"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.06"
        strokeLinecap="round"
      />
      <path
        d="M60 120 C70 118 82 128 84 142 C86 152 78 155 60 147"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.06"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** A trailing vine with small leaves */
export function VineAccent({ className = "" }: BotanicalProps) {
  return (
    <svg
      viewBox="0 0 300 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 40 C50 35 80 50 120 40 C160 30 190 55 240 40 C270 32 285 45 300 40"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Small leaves along the vine */}
      <path
        d="M60 38 C55 28 45 26 42 32 C40 36 48 40 60 38"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M120 40 C125 30 135 28 138 34 C140 38 132 42 120 40"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M180 44 C175 34 165 32 162 38 C160 42 168 46 180 44"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M240 40 C245 30 255 28 258 34 C260 38 252 42 240 40"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth="0.8"
      />
    </svg>
  );
}

/** A small branch with leaves — great for section dividers */
export function BranchDivider({ className = "" }: BotanicalProps) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Center stem */}
      <line
        x1="40"
        y1="20"
        x2="160"
        y2="20"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.3"
      />
      {/* Left leaves */}
      <path
        d="M65 20 C58 12 48 11 46 16 C44 20 52 23 65 20"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.5"
      />
      <path
        d="M80 20 C73 28 63 29 61 24 C59 20 67 17 80 20"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.5"
      />
      {/* Center dot */}
      <circle cx="100" cy="20" r="2" fill="currentColor" opacity="0.15" />
      {/* Right leaves */}
      <path
        d="M120 20 C127 12 137 11 139 16 C141 20 133 23 120 20"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.5"
      />
      <path
        d="M135 20 C142 28 152 29 154 24 C156 20 148 17 135 20"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.5"
      />
    </svg>
  );
}

/** Single pine tree silhouette — nods to the brand name */
export function PineTree({ className = "" }: BotanicalProps) {
  return (
    <svg
      viewBox="0 0 60 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Tree trunk */}
      <rect x="27.5" y="72" width="5" height="14" rx="1.5" fill="currentColor" opacity="0.4" />
      {/* Bottom tier */}
      <polygon points="30,52 8,78 52,78" fill="currentColor" opacity="0.5" />
      {/* Middle tier */}
      <polygon points="30,35 14,62 46,62" fill="currentColor" opacity="0.65" />
      {/* Top tier */}
      <polygon points="30,12 20,45 40,45" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

/** Corner leaf cluster — for card/section corners */
export function CornerLeaves({ className = "" }: BotanicalProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M90 95 C70 85 55 60 50 30"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.3"
        strokeLinecap="round"
      />
      <path
        d="M70 78 C60 65 48 62 46 70 C44 76 55 80 70 78"
        fill="currentColor"
        fillOpacity="0.06"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.4"
      />
      <path
        d="M58 55 C48 42 36 39 34 47 C32 53 43 57 58 55"
        fill="currentColor"
        fillOpacity="0.06"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.4"
      />
      <path
        d="M80 90 C75 78 68 72 64 76 C60 80 68 86 80 90"
        fill="currentColor"
        fillOpacity="0.06"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.4"
      />
    </svg>
  );
}
