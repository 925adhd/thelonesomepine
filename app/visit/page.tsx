import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/config/site";
import { logos, storeImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Find The Lonesome Pine inside The Rabbit Hole at 101 N Heyser Dr in Leitchfield, Kentucky. See our hours, location, and store photos.",
  alternates: {
    canonical: "/visit",
  },
};

export default function VisitPage() {
  return (
    <>
      {/* Hero */}
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
              Come Say Hello
            </p>
            <h1 className="heading-accent mt-3 font-[family-name:var(--font-playfair)] text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
              Visit Us
            </h1>
            <p className="mt-6 max-w-lg text-base text-pine-200/80 sm:text-lg">
              Stop by and browse our plants in person — we&apos;d love to meet
              you!
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Location + Hours cards */}
      <section className="py-12 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-2">
            {/* Location card */}
            <ScrollReveal>
              <div className="overflow-hidden rounded-2xl bg-surface-warm p-5 ring-1 ring-border-light sm:p-8">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
                  Location
                </h2>

                {/* Rabbit Hole storefront */}
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={storeImages.rabbitHole.src}
                    alt={storeImages.rabbitHole.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  Find us inside The Rabbit Hole, a local vendor market in Leitchfield.
                </p>

                {/* Divider */}
                <hr className="my-6 border-border-light" />

                {/* Shop location */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-light">
                    Shop Location
                  </p>
                  <div className="mt-3 flex items-start gap-4">
                    <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-border-light">
                      <Image
                        src={storeImages.rabbitHoleLogo.src}
                        alt={storeImages.rabbitHoleLogo.alt}
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                    <address className="space-y-0.5 not-italic">
                      <p className="text-sm font-medium">
                        <a
                          href={siteConfig.rabbitHoleFacebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline decoration-pine-300 underline-offset-2 transition-colors hover:text-accent"
                        >
                          {siteConfig.vendorLocation.venue}
                        </a>
                      </p>
                      <p className="text-sm text-text-muted">
                        {siteConfig.vendorLocation.street}
                      </p>
                      <p className="text-sm text-text-muted">
                        {siteConfig.vendorLocation.city},{" "}
                        {siteConfig.vendorLocation.stateCode}{" "}
                        {siteConfig.vendorLocation.zip}
                      </p>
                    </address>
                  </div>
                </div>

                {/* Divider */}
                <hr className="my-6 border-border-light" />

                {/* Nursery location */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-light">
                    Nursery Location
                  </p>
                  <div className="mt-3 flex items-start gap-4">
                    <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={logos.full.src}
                        alt={logos.full.alt}
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                    <address className="space-y-0.5 not-italic">
                      <p className="text-sm font-medium text-text">
                        {siteConfig.address.street}
                      </p>
                      <p className="text-sm text-text-muted">
                        {siteConfig.address.city},{" "}
                        {siteConfig.address.stateCode}{" "}
                        {siteConfig.address.zip}
                      </p>
                      <p className="text-sm text-text-light">
                        {siteConfig.address.county}
                      </p>
                    </address>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Hours card */}
            <ScrollReveal delay={150}>
              <div className="overflow-hidden rounded-2xl bg-surface-warm p-5 ring-1 ring-border-light sm:p-8 lg:sticky lg:top-28">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
                  Hours
                </h2>
                <div className="mt-6 divide-y divide-border-light">
                  {siteConfig.hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between py-3"
                    >
                      <span className="text-sm font-medium text-text">
                        {h.day}
                      </span>
                      <span className="text-sm text-text-muted">
                        {h.open === "Closed"
                          ? "Closed"
                          : `${h.open} – ${h.close}`}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs leading-relaxed text-text-light">
                  Hours may vary for holidays and special events. Reach out on
                  Instagram or email if you&apos;re unsure!
                </p>

                {/* Vendor booth photo — fills empty space */}
                <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={storeImages.vendorBooth.src}
                    alt={storeImages.vendorBooth.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Map */}
          <ScrollReveal>
            <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-border-light sm:mt-8">
              <iframe
                title="The Rabbit Hole location in Leitchfield, Kentucky"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.0!2d-86.29469!3d37.48147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886880d0ae3e1c43%3A0x5e3e5e62c4d4c8a0!2s101%20N%20Heyser%20Dr%2C%20Leitchfield%2C%20KY%2042754!5e0!3m2!1sen!2sus!4v1711900000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </ScrollReveal>

          {/* CTA card */}
          <ScrollReveal>
            <div className="mt-6 overflow-hidden rounded-2xl bg-surface-warm p-5 text-center ring-1 ring-border-light sm:mt-8 sm:p-8">
              <p className="text-sm text-text-muted">
                Have a question before you visit?
              </p>
              <Link
                href="/contact"
                className="group mt-3 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-light hover:shadow-md active:scale-[0.98]"
              >
                Get in Touch
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
        </div>
      </section>
    </>
  );
}
