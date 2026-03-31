import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { plantImages } from "@/data/images";
import { formatPrice } from "@/lib/utils";
import plantsData from "@/data/plants.json";
import type { Plant } from "@/types";

const featuredWithImages = [
  {
    plant: (plantsData as Plant[]).find((p) => p.id === "pothos-golden")!,
    image: plantImages.goldenPothos,
  },
  {
    plant: (plantsData as Plant[]).find((p) => p.id === "monstera-deliciosa")!,
    image: plantImages.dieffenbachia,
  },
  {
    plant: (plantsData as Plant[]).find((p) => p.id === "snake-plant")!,
    image: plantImages.zebraPlant,
  },
  {
    plant: (plantsData as Plant[]).find((p) => p.id === "lavender")!,
    image: plantImages.christmasCactus,
  },
];

export function FeaturedPlants() {
  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32"
      aria-labelledby="featured-heading"
    >

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <ScrollReveal>
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
        </ScrollReveal>

        {/* Asymmetric grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {featuredWithImages.map(({ plant, image }, i) => (
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
              <article className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border-light transition-all duration-500 hover:shadow-xl hover:ring-border">
                <div
                  className={`relative overflow-hidden ${
                    i === 0 || i === 3 ? "aspect-[16/10]" : "aspect-[4/3]"
                  }`}
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
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">
                      {formatPrice(plant.price)}
                    </span>
                    <span className="text-xs text-text-light">
                      {plant.care.split(".")[0]}
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal className="mt-16 text-center">
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
    </section>
  );
}
