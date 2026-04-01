import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconHeart, IconUsers, IconLeaf } from "@tabler/icons-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ScrollVideo } from "@/components/ui/ScrollVideo";
import { siteConfig } from "@/config/site";
import { storeImages, plantImages, ownerImages } from "@/data/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Stephanie Barrett and The Lonesome Pine — hand-selected houseplants inside The Rabbit Hole in Leitchfield, Grayson County, Kentucky.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    icon: <IconHeart className="h-6 w-6" stroke={1.5} />,
    title: "Plant Love",
    description:
      "Every plant in our shop is hand-selected and cared for. We only sell plants we'd want in our own home.",
  },
  {
    icon: <IconUsers className="h-6 w-6" stroke={1.5} />,
    title: "Community First",
    description:
      "We're your neighbors. We love Grayson County and we're proud to be part of this community.",
  },
  {
    icon: <IconLeaf className="h-6 w-6" stroke={1.5} />,
    title: "Always Learning",
    description:
      "We're always happy to share what we know. Free advice, care tips, and a judgment-free zone.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex items-end overflow-hidden bg-primary-dark pb-10 pt-36 sm:pb-14 sm:pt-40">
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
              Our Story
            </p>
            <h1 className="heading-accent mt-3 font-[family-name:var(--font-playfair)] text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
              About Us
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <ScrollReveal animation="fade-right" className="order-2 lg:order-1">
              <div className="space-y-6 text-base leading-relaxed text-text-muted sm:text-lg">
                <p className="font-[family-name:var(--font-playfair)] text-2xl leading-snug text-text sm:text-3xl">
                  Small shop. Big plant love.
                </p>
                <p>
                  The Lonesome Pine is owned and operated by Stephanie Barrett, a
                  Grayson County native who turned a personal plant obsession
                  into something her whole community could enjoy. Her goal is
                  simple — bring unique, healthy houseplants to Leitchfield
                  and help people find the right one for their space.
                </p>
                <p>
                  You can find us inside{" "}
                  <a
                    href={siteConfig.rabbitHoleFacebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-text underline decoration-pine-300 underline-offset-2 transition-colors hover:text-accent"
                  >
                    The Rabbit Hole
                  </a>{" "}
                  at 101 N Heyser Dr in Leitchfield, Kentucky, where I set up
                  shop alongside other amazing local vendors.
                </p>
                <p>
                  Whether you&apos;re a seasoned plant parent or just bringing
                  home your first one, Stephanie would love to help you find
                  the right plant for your space. Reach out anytime — we&apos;re
                  so glad you&apos;re here!
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200} className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl sm:aspect-[3/4]">
                  <Image
                    src={ownerImages.stephanieKids.src}
                    alt={ownerImages.stephanieKids.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>

                <div className="absolute -bottom-6 -right-6 -z-10 hidden h-full w-full rounded-2xl bg-pine-100/60 sm:block" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-[#fff9ef] py-16 sm:py-24 lg:py-32">
        {/* Vine video — background on desktop */}
        <div className="pointer-events-none absolute bottom-0 left-[65%] hidden w-full max-w-6xl -translate-x-1/2 sm:block">
          <ScrollVideo
            src="/images/vine-divider.mp4"
            className="mix-blend-darken opacity-[0.07]"
            playbackRate={1}
            endAt={2.5}
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                What We&apos;re About
              </p>
              <h2 className="heading-accent heading-accent-center mt-3 font-[family-name:var(--font-playfair)] text-3xl font-medium text-primary sm:text-4xl">
                Our Values
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 120}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-pine-50 text-accent">
                    {value.icon}
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-xl font-medium text-text">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Vine video — inline centered on mobile */}
          <div className="mt-12 origin-center translate-x-[50%] scale-[2] sm:hidden">
            <ScrollVideo
              src="/images/vine-divider.mp4"
              className="mix-blend-darken opacity-[0.15]"
              playbackRate={1}
              endAt={2.5}
            />
          </div>
        </div>
      </section>


      {/* Image Gallery Strip */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              From Our Shop
            </p>
            <h2 className="heading-accent heading-accent-center mt-3 text-center font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary sm:text-3xl">
              A Few Favorites
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-5">
            {[
              plantImages.christmasCactus,
              plantImages.goldenPothos,
              plantImages.spiderPlant,
              plantImages.hoyaHeart,
            ].map((image, i) => (
              <ScrollReveal key={image.src} delay={i * 100} animation="scale">
                <div className="group relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-10 text-center">
            <Link
              href="/plants"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
            >
              See all our plants
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
    </>
  );
}
