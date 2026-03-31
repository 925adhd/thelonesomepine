import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlantGrid } from "@/components/ui/PlantGrid";
import { storeImages, plantImages } from "@/data/images";
import plantsData from "@/data/plants.json";
import type { Plant, PlantCategory } from "@/types";

export const metadata: Metadata = {
  title: "Our Plants",
  description:
    "Browse our selection of unique and healthy houseplants at The Lonesome Pine in Leitchfield, Kentucky. Succulents, tropicals, trailing plants, and more.",
};

const plantImageMap: Record<string, { src: string; alt: string }> = {
  "pothos-golden": plantImages.goldenPothos,
  "snake-plant": plantImages.zebraPlant,
  "monstera-deliciosa": plantImages.dieffenbachia,
  "succulent-echeveria": plantImages.stringOfPearls,
  "fern-boston": plantImages.trailingPlant,
  lavender: plantImages.christmasCactus,
  "hydrangea-blue": plantImages.norfolkPine,
  "tomato-cherry": plantImages.spiderPlant,
};

const categoryOrder: PlantCategory[] = [
  "Houseplants",
  "Outdoor Plants",
  "Succulents",
  "Vegetable Starts",
];

export default function PlantsPage() {
  const plants = plantsData as Plant[];
  const categories = plants.reduce<Record<string, Plant[]>>((acc, plant) => {
    if (!acc[plant.category]) acc[plant.category] = [];
    acc[plant.category].push(plant);
    return acc;
  }, {});

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-end overflow-hidden bg-primary-dark pb-10 pt-32 sm:pb-14 sm:pt-36">
        <div className="absolute inset-0">
          <Image
            src={storeImages.plantDisplay.src}
            alt={storeImages.plantDisplay.alt}
            fill
            className="object-cover opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-primary-dark/60" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-400">
              Our Collection
            </p>
            <h1 className="heading-accent mt-3 font-[family-name:var(--font-playfair)] text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
              Our Plants
            </h1>
            <p className="mt-6 max-w-lg text-base text-pine-200/80 sm:text-lg">
              Inventory changes often — stop by to see what&apos;s new, or
              reach out on Instagram for the latest arrivals.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Plant listings */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="space-y-24">
            {categoryOrder.map((category) => {
              const categoryPlants = categories[category];
              if (!categoryPlants?.length) return null;

              return (
                <div key={category}>
                  <ScrollReveal>
                    <div className="flex items-end justify-between border-b border-border pb-4">
                      <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary sm:text-3xl">
                        {category}
                      </h2>
                      <span className="text-sm text-text-light">
                        {categoryPlants.length}{" "}
                        {categoryPlants.length === 1 ? "plant" : "plants"}
                      </span>
                    </div>
                  </ScrollReveal>

                  <div className="mt-8">
                    <PlantGrid
                      plants={categoryPlants}
                      imageMap={plantImageMap}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-24 rounded-3xl bg-surface-warm p-10 text-center sm:p-16">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary sm:text-3xl">
                Looking for something specific?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base text-text-muted">
                Our inventory changes with the seasons. Send us a message on
                Instagram or stop by — we might have exactly what you need.
              </p>
              <a
                href="https://instagram.com/the_lonesome_pine"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-8 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-primary-light hover:shadow-lg active:scale-[0.98]"
              >
                Follow @the_lonesome_pine
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
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
