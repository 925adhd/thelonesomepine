"use client";

import Link from "next/link";
import { IconMapPin } from "@tabler/icons-react";

export function StickyLocationPin() {
  return (
    <Link
      href="/visit"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-pine-800 text-white shadow-lg transition-all duration-300 hover:bg-pine-700 hover:shadow-xl active:scale-95 sm:hidden"
      aria-label="Find Us"
    >
      <IconMapPin className="h-5 w-5" stroke={2} />
    </Link>
  );
}
