"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { IconPaw, IconPawOff, IconChevronDown } from "@tabler/icons-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlantModal } from "@/components/ui/PlantModal";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { Plant } from "@/types";

interface PlantGridProps {
  plants: Plant[];
  imageMap: Record<string, { src: string; alt: string }>;
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isDesktop;
}

export function PlantGrid({ plants, imageMap }: PlantGridProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [modalPlant, setModalPlant] = useState<Plant | null>(null);
  const isDesktop = useIsDesktop();

  const handleClose = useCallback(() => setModalPlant(null), []);

  const handleMoreInfo = (plant: Plant) => {
    if (isDesktop) {
      setModalPlant(plant);
    } else {
      setExpandedId((prev) => (prev === plant.id ? null : plant.id));
    }
  };

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plants.map((plant, i) => {
          const image = imageMap[plant.id];
          const isExpanded = expandedId === plant.id && !isDesktop;

          return (
            <ScrollReveal key={plant.id} delay={i * 80}>
              <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border-light transition-all duration-500 hover:shadow-lg hover:ring-border">
                {/* Image */}
                <div
                  className="relative aspect-square cursor-pointer overflow-hidden bg-surface-muted"
                  onClick={() => handleMoreInfo(plant)}
                >
                  {image ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-4xl text-pine-300">
                      🌱
                    </div>
                  )}
                  {plant.inStock && (
                    <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-accent shadow-sm backdrop-blur-sm">
                      In Stock
                    </span>
                  )}
                  {/* Desktop hover hint */}
                  <div className="absolute inset-0 hidden items-center justify-center bg-pine-950/0 transition-all duration-300 hover:bg-pine-950/20 lg:flex">
                    <span className="rounded-full bg-white/0 px-4 py-2 text-xs font-medium text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:bg-white/90 group-hover:text-primary group-hover:opacity-100">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-text">
                    {plant.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                    {plant.description}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs text-text-light">
                    <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                    <span>{plant.care.split(".")[0]}</span>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border-light pt-4">
                    <span className="text-lg font-semibold text-primary">
                      {formatPrice(plant.price)}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleMoreInfo(plant)}
                      className="flex cursor-pointer items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-pine-50 active:bg-pine-100"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? "Less" : "More info"}
                      <IconChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-300 lg:hidden",
                          isExpanded && "rotate-180"
                        )}
                        stroke={2}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>

                {/* Expandable details — mobile/tablet only */}
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-[var(--ease-out-expo)] lg:hidden",
                    isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border-light px-5 pb-5 pt-4">
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2">
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
                              <IconPaw size={14} stroke={1.5} aria-hidden="true" />
                              Pet Friendly
                            </>
                          ) : (
                            <>
                              <IconPawOff size={14} stroke={1.5} aria-hidden="true" />
                              Keep From Pets
                            </>
                          )}
                        </span>
                      </div>

                      {/* Details */}
                      <p className="mt-3 text-sm leading-relaxed text-text-muted">
                        {plant.details}
                      </p>

                      {/* Care guide */}
                      <div className="mt-3 rounded-xl bg-pine-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                          Care Guide
                        </p>
                        <p className="mt-1.5 text-xs leading-relaxed text-text-muted">
                          {plant.care}
                        </p>
                      </div>

                      {/* Footer */}
                      <p className="mt-3 text-center text-xs text-text-light">
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
              </article>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Modal — desktop only */}
      {modalPlant && (
        <PlantModal
          plant={modalPlant}
          image={imageMap[modalPlant.id]}
          open={!!modalPlant}
          onClose={handleClose}
        />
      )}
    </>
  );
}
