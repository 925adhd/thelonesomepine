"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconChevronDown } from "@tabler/icons-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlantModal } from "@/components/ui/PlantModal";
import { plantImages } from "@/data/images";
import { formatPrice, cn } from "@/lib/utils";
import plantsData from "@/data/plants.json";
import type { Plant } from "@/types";

const featuredWithImages = [
  {
    plant: (plantsData as Plant[]).find((p) => p.id === "pothos-golden")!,
    image: plantImages.goldenPothos,
  },
  {
    plant: (plantsData as Plant[]).find((p) => p.id === "dieffenbachia")!,
    image: plantImages.dieffenbachia,
  },
  {
    plant: (plantsData as Plant[]).find((p) => p.id === "zebra-plant")!,
    image: plantImages.zebraPlant,
  },
  {
    plant: (plantsData as Plant[]).find((p) => p.id === "christmas-cactus")!,
    image: plantImages.christmasCactus,
  },
];

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

export function FeaturedPlants() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [modalPlant, setModalPlant] = useState<{
    plant: Plant;
    image: { src: string; alt: string };
  } | null>(null);
  const isDesktop = useIsDesktop();

  const handleClose = useCallback(() => setModalPlant(null), []);

  const handleDetails = (plant: Plant, image: { src: string; alt: string }) => {
    if (isDesktop) {
      setModalPlant({ plant, image });
    } else {
      setExpandedId((prev) => (prev === plant.id ? null : plant.id));
    }
  };

  return (
    <section
      id="featured-plants"
      className="scroll-mt-20 relative overflow-hidden py-12 sm:py-24 lg:py-32"
      aria-labelledby="featured-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Hand-Picked
          </p>
          <h2
            id="featured-heading"
            className="heading-accent mt-3 font-[family-name:var(--font-playfair)] text-3xl font-medium text-primary sm:text-4xl lg:text-5xl"
          >
            Featured Plants
          </h2>
          <p className="mt-6 text-base leading-relaxed text-text-muted sm:text-lg">
            A few of our favorites, curated for plant lovers of all
            experience levels.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="mt-10 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-12">
          {featuredWithImages.map(({ plant, image }, i) => {
            const isExpanded = expandedId === plant.id && !isDesktop;

            return (
              <ScrollReveal
                key={plant.id}
                delay={i * 100}
                className={
                  i === 0
                    ? "lg:col-span-7"
                    : i === 1
                      ? "lg:col-span-5"
                      : i === 2
                        ? "lg:col-span-5"
                        : "lg:col-span-7"
                }
              >
                <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border-light transition-all duration-500 hover:shadow-xl hover:ring-border">
                  <div
                    className={`relative cursor-pointer overflow-hidden ${
                      i === 0 || i === 3 ? "aspect-[16/10]" : "aspect-[4/3]"
                    }`}
                    onClick={() => handleDetails(plant, image)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105"
                      sizes={
                        i === 0 || i === 3
                          ? "(max-width: 640px) 100vw, 58vw"
                          : "(max-width: 640px) 100vw, 42vw"
                      }
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-pine-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Stock badge */}
                    {plant.inStock && (
                      <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-accent shadow-sm backdrop-blur-sm">
                        In Stock
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-text-light">
                      {plant.category}
                    </p>
                    <h3 className="mt-1.5 font-[family-name:var(--font-playfair)] text-xl font-medium text-text">
                      {plant.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-muted">
                      {plant.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-4 border-t border-border-light pt-4">
                      <span className="shrink-0 text-lg font-semibold text-primary">
                        {formatPrice(plant.price)}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleDetails(plant, image)}
                        className="flex cursor-pointer items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-pine-50 active:bg-pine-100"
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? "Less" : "Details"}
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
                        <p className="text-sm leading-relaxed text-text-muted">
                          {plant.details}
                        </p>
                        <div className="mt-3 rounded-xl bg-pine-50 p-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                            Care Guide
                          </p>
                          <p className="mt-1.5 text-xs leading-relaxed text-text-muted">
                            {plant.care}
                          </p>
                        </div>
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

        {/* CTA */}
        <ScrollReveal className="mt-10 text-center sm:mt-16">
          <Link
            href="/plants"
            className="group inline-flex items-center gap-3 rounded-full border border-primary bg-primary px-8 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-primary-light hover:shadow-lg active:scale-[0.98]"
          >
            View All Plants
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </ScrollReveal>
      </div>

      {/* Modal — desktop only */}
      {modalPlant && (
        <PlantModal
          plant={modalPlant.plant}
          image={modalPlant.image}
          open={!!modalPlant}
          onClose={handleClose}
        />
      )}
    </section>
  );
}
