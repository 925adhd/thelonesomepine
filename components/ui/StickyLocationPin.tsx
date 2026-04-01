"use client";

import { IconMapPin } from "@tabler/icons-react";

export function StickyLocationPin() {
  return (
    <a
      href="https://www.google.com/maps/search/?api=1&query=101+N+Heyser+Dr,+Leitchfield,+KY+42754"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-pine-800 text-cream shadow-lg transition-all duration-300 hover:bg-pine-700 hover:shadow-xl active:scale-95 sm:hidden"
      aria-label="Get directions in Google Maps"
    >
      <IconMapPin className="h-5 w-5" stroke={2} />
    </a>
  );
}
