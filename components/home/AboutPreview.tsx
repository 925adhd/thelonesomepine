import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BranchDivider } from "@/components/ui/Botanicals";
import { ScrollVideo } from "@/components/ui/ScrollVideo";
import { ownerImages } from "@/data/images";

export function AboutPreview() {
  return (
    <section
      className="relative overflow-hidden bg-surface-warm py-24 sm:py-32"
      aria-labelledby="about-preview-heading"
    >
      {/* Video layer — behind everything, bleeds under the text */}
      <ScrollVideo
        src="/images/plant-growing-roots-animation.mp4"
        className="pointer-events-none absolute -top-16 bottom-1/3 left-0 right-0 scale-75 opacity-[0.08] mix-blend-multiply sm:bottom-0 sm:top-0 sm:scale-100 sm:opacity-[0.09]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text content */}
          <ScrollReveal animation="fade-right">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Our Story
              </p>
              <h2
                id="about-preview-heading"
                className="heading-accent mt-3 font-[family-name:var(--font-playfair)] text-3xl font-medium text-primary sm:text-4xl lg:text-5xl"
              >
                Rooted in
                <br />
                Community
              </h2>
              <p className="mt-6 text-base leading-relaxed text-text-muted sm:text-lg">
                The Lonesome Pine started with a simple love for plants and a
                desire to share that love with our neighbors in Grayson County.
                We specialize in unique and healthy houseplants to help you
                style your home and life.
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
                Whether you&apos;re a seasoned plant parent or just bringing
                home your first succulent, we&apos;re here to help. Reach out
                to us with any questions — we&apos;re so glad you&apos;re here!
              </p>

              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-200 hover:text-accent"
              >
                Learn more about us
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
            </div>
          </ScrollReveal>

          {/* Family photo */}
          <ScrollReveal animation="fade-left" delay={200}>
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={ownerImages.family.src}
                  alt={ownerImages.family.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              {/* Decorative offset */}
              <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-2xl bg-pine-100/50" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
