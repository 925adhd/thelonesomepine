import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { plantImages } from "@/data/images";

const galleryItems = [
  plantImages.spiderPlant,
  plantImages.hoyaHeart,
  plantImages.trailingPlant,
  plantImages.norfolkPine,
  plantImages.stringOfPearls,
  plantImages.zebraPlant,
];

export function PlantGallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-20 relative overflow-hidden bg-surface-warm py-12 sm:py-24 lg:py-32"
      aria-labelledby="gallery-heading"
    >

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              From Our Shop
            </p>
            <h2
              id="gallery-heading"
              className="heading-accent heading-accent-center mt-3 font-[family-name:var(--font-playfair)] text-3xl font-medium text-primary sm:text-4xl lg:text-5xl"
            >
              Plant Gallery
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
              A peek at some of the unique plants that have passed through our
              shop. Follow us on{" "}
              <a
                href="https://instagram.com/the_lonesome_pine"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline decoration-pine-300 underline-offset-2 transition-colors hover:text-accent"
              >
                Instagram
              </a>{" "}
              for the latest.
            </p>
          </div>
        </ScrollReveal>

        {/* Masonry-style grid */}
        <div className="mt-10 columns-2 gap-4 sm:mt-16 sm:columns-3 lg:gap-5">
          {galleryItems.map((image, i) => (
            <ScrollReveal key={image.src} delay={i * 80} animation="scale">
              <div className="group mb-4 overflow-hidden rounded-xl lg:mb-5">
                <div className="relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
