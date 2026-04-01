import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for The Lonesome Pine website. Read our terms and conditions for using this site.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="bg-primary-dark pb-10 pt-36 sm:pb-14 sm:pt-40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-400">
            Legal
          </p>
          <h1 className="heading-accent mt-3 font-[family-name:var(--font-playfair)] text-4xl font-medium text-white sm:text-5xl">
            Terms of Service
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="prose prose-pine mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
          <p className="text-sm text-text-light">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
            Acceptance of Terms
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            By accessing and using this website, you accept and agree to be
            bound by these terms of service. If you do not agree to these terms,
            please do not use our website.
          </p>

          <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
            Use of Website
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            This website is provided for informational purposes about{" "}
            {siteConfig.name} and our products. Content on this site, including
            text, images, and graphics, is owned by {siteConfig.name} and is
            protected by applicable intellectual property laws.
          </p>

          <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
            Product Information
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            Plant availability, pricing, and inventory shown on this website are
            subject to change without notice. For the most current inventory,
            please visit us in person or contact us directly.
          </p>

          <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
            Limitation of Liability
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            {siteConfig.name} is not liable for any damages arising from the use
            of this website. Plant care advice provided on this site or in
            person is offered as general guidance and may not apply to all
            conditions.
          </p>

          <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
            Contact Us
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            Questions about these terms? Contact us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-primary underline decoration-pine-300 underline-offset-2 hover:text-accent"
            >
              {siteConfig.email}
            </a>
            .
          </p>

          <div className="mt-12 border-t border-border-light pt-6">
            <Link
              href="/"
              className="text-sm font-medium text-primary underline decoration-pine-300 underline-offset-2 hover:text-accent"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
