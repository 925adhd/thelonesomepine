"use client";

import { useEffect } from "react";
import Image from "next/image";
import { IconPaw, IconPawOff } from "@tabler/icons-react";
import type { Plant } from "@/types";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface PlantModalProps {
  plant: Plant;
  image?: { src: string; alt: string };
  open: boolean;
  onClose: () => void;
}

export function PlantModal({ plant, image, open, onClose }: PlantModalProps) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-end justify-center sm:items-center",
        "transition-all duration-300",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      )}
      role="dialog"
      aria-modal="true"
      aria-label={plant.name}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 cursor-pointer bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-white shadow-2xl transition-all duration-300 sm:rounded-2xl",
          open ? "translate-y-0 scale-100" : "translate-y-8 scale-95"
        )}
      >
        {/* Details */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-text-light">
                {plant.category}
              </p>
              <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-2xl font-medium text-text">
                {plant.name}
              </h3>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className="text-xl font-semibold text-primary">
                {formatPrice(plant.price)}
              </span>
              <button
                onClick={onClose}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-text-muted transition-colors hover:bg-surface-muted hover:text-text"
                aria-label="Close"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Badges */}
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-pine-50 px-3 py-1 text-xs font-medium text-pine-700">
              {plant.difficulty}
            </span>
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
                plant.petSafe
                  ? "bg-green-50 text-green-700"
                  : "bg-amber-50 text-amber-700"
              )}
            >
              {plant.petSafe ? (
                <>
                  <IconPaw size={16} stroke={1.5} aria-hidden="true" />
                  Pet Friendly
                </>
              ) : (
                <>
                  <IconPawOff size={16} stroke={1.5} aria-hidden="true" />
                  Keep From Pets
                </>
              )}
            </span>
            {plant.inStock ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-pine-50 px-3 py-1 text-xs font-medium text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                In Stock
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-text-light">
                <span className="h-1.5 w-1.5 rounded-full bg-text-light" />
                Out of Stock
              </span>
            )}
          </div>

          {/* Extended description */}
          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            {plant.details}
          </p>

          {/* Care guide */}
          <div className="mt-4 rounded-xl bg-pine-50 p-4">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Care Guide
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-text-muted">
              {plant.care}
            </p>
          </div>

          {/* Footer note */}
          <p className="mt-4 text-center text-xs text-text-light">
            Stop by the shop or DM us on{" "}
            <a
              href="https://instagram.com/the_lonesome_pine"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-2 hover:text-accent"
            >
              Instagram
            </a>{" "}
            to grab this plant
          </p>
        </div>
      </div>
    </div>
  );
}
