import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { storeImages } from "@/data/images";

export function LocationPreview() {
  return (
    <section id="location" className="scroll-mt-20 py-16 sm:py-24 lg:py-32" aria-labelledby="location-heading">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl bg-primary-dark sm:rounded-3xl">
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src={storeImages.truckDisplay.src}
                alt={storeImages.truckDisplay.alt}
                fill
                className="object-cover opacity-20"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/95 to-primary-dark/80" />
            </div>

            <div className="relative grid gap-6 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-16">
              {/* Text */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-pine-400 sm:text-xs">
                  Find Us
                </p>
                <h2
                  id="location-heading"
                  className="mt-2 font-[family-name:var(--font-playfair)] text-2xl font-medium text-white sm:mt-3 sm:text-4xl lg:text-5xl"
                >
                  Come Say Hello
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-pine-200/80 sm:mt-6 sm:text-base lg:text-lg">
                  We&apos;re a small shop with a big love for plants.
                  Stop by, browse around, and let us help you find
                  the perfect one for your space.
                </p>

                <Link
                  href="/visit"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all duration-300 hover:shadow-xl active:scale-[0.98] sm:mt-8"
                >
                  Hours &amp; Directions
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
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
              </div>

              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl lg:aspect-[3/4]">
                <Image
                  src={storeImages.rabbitHole.src}
                  alt={storeImages.rabbitHole.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
