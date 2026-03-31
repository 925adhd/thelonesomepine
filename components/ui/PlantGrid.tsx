"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlantModal } from "@/components/ui/PlantModal";
import { formatPrice } from "@/lib/utils";
import type { Plant } from "@/types";

interface PlantGridProps {
  plants: Plant[];
  imageMap: Record<string, { src: string; alt: string }>;
}

export function PlantGrid({ plants, imageMap }: PlantGridProps) {
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  const handleClose = useCallback(() => setSelectedPlant(null), []);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plants.map((plant, i) => {
          const image = imageMap[plant.id];
          return (
            <ScrollReveal key={plant.id} delay={i * 80}>
              <button
                type="button"
                onClick={() => setSelectedPlant(plant)}
                className="group w-full cursor-pointer overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-border-light transition-all duration-500 hover:shadow-lg hover:ring-border"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-surface-muted">
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
                  {/* Tap hint */}
                  <div className="absolute inset-0 flex items-center justify-center bg-pine-950/0 transition-all duration-300 group-hover:bg-pine-950/20">
                    <span className="rounded-full bg-white/0 px-4 py-2 text-xs font-medium text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:bg-white/90 group-hover:text-primary group-hover:opacity-100">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-text">
                    {plant.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                    {plant.description}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs text-text-light">
                    <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                    <span>{plant.care.split(".")[0]}</span>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border-light pt-4">
                    <span className="text-lg font-semibold text-primary">
                      {formatPrice(plant.price)}
                    </span>
                  </div>
                </div>
              </button>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Modal */}
      {selectedPlant && (
        <PlantModal
          plant={selectedPlant}
          image={imageMap[selectedPlant.id]}
          open={!!selectedPlant}
          onClose={handleClose}
        />
      )}
    </>
  );
}
