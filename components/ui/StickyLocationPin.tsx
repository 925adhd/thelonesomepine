"use client";

import Link from "next/link";
import { IconMapPin } from "@tabler/icons-react";

export function StickyLocationPin() {
  return (
    <Link
      href="/visit"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-1.5 rounded-full bg-pine-800 py-3 pl-4 pr-5 text-cream shadow-lg transition-all duration-300 hover:bg-pine-700 hover:shadow-xl active:scale-95 sm:hidden"
      aria-label="Visit us — hours and directions"
    >
      <IconMapPin className="h-4 w-4" stroke={2} />
      <span className="text-xs font-semibold">Visit</span>
    </Link>
  );
}
