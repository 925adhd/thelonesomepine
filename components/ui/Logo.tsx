interface LogoProps {
  size?: "small" | "large";
  className?: string;
  color?: string;
}

export function Logo({
  size = "small",
  className = "",
  color = "currentColor",
}: LogoProps) {
  const isLarge = size === "large";

  return (
    <svg
      viewBox="0 0 280 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${isLarge ? "h-16 w-auto sm:h-20 md:h-28 lg:h-32" : "h-8 w-auto sm:h-9"} ${className}`}
      role="img"
      aria-label="The Lonesome Pine"
    >
      {/* Pine tree icon */}
      <g fill={color}>
        {/* Tree layers */}
        <polygon points="40,4 28,22 34,22 24,36 31,36 22,48 58,48 49,36 56,36 46,22 52,22" />
        {/* Trunk */}
        <rect x="37" y="48" width="6" height="10" rx="1" />
        {/* Ground line */}
        <rect x="30" y="57" width="20" height="2" rx="1" />
      </g>

      {/* "THE" text */}
      <text
        x="72"
        y="22"
        fill={color}
        fontFamily="inherit"
        fontSize="11"
        fontWeight="500"
        letterSpacing="0.25em"
      >
        THE
      </text>

      {/* "LONESOME" text */}
      <text
        x="72"
        y="42"
        fill={color}
        fontFamily="inherit"
        fontSize="22"
        fontWeight="600"
        letterSpacing="0.05em"
      >
        LONESOME
      </text>

      {/* "PINE" text */}
      <text
        x="72"
        y="58"
        fill={color}
        fontFamily="inherit"
        fontSize="22"
        fontWeight="600"
        letterSpacing="0.05em"
      >
        PINE
      </text>

      {/* Decorative line under text */}
      <line
        x1="72"
        y1="64"
        x2="180"
        y2="64"
        stroke={color}
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
}
