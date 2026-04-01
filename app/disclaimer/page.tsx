import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Disclaimer for The Lonesome Pine website. Read about the limitations of information provided on our site.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-primary-dark pb-10 pt-36 sm:pb-14 sm:pt-40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-400">
            Legal
          </p>
          <h1 className="heading-accent mt-3 font-[family-name:var(--font-playfair)] text-4xl font-medium text-white sm:text-5xl">
            Disclaimer
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="prose prose-pine mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
          <p className="text-sm text-text-light">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
            General Information
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            The information provided on this website is for general
            informational purposes only. While we strive to keep the information
            up to date and accurate, {siteConfig.name} makes no representations
            or warranties about the completeness, accuracy, or reliability of
            any information on this site.
          </p>

          <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
            Plant Care Advice
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            Any plant care tips, recommendations, or advice provided on this
            website or in person are intended as general guidance. Results may
            vary based on your specific environment, climate, and care routine.
            {siteConfig.name} is not responsible for the outcome of plant care
            based on our suggestions.
          </p>

          <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
            Product Availability
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            Plant inventory, pricing, and availability shown on this website are
            subject to change at any time without notice. For the most current
            stock, please visit us in person or reach out on social media.
          </p>

          <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
            External Links
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            This website may contain links to external sites. We have no control
            over the content and nature of these sites and are not responsible
            for their content or privacy practices.
          </p>

          <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
            Contact Us
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            If you have questions about this disclaimer, contact us at{" "}
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
