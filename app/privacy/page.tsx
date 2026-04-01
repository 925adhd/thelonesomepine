import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for The Lonesome Pine. Learn how we handle your information when you visit our website or shop.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-primary-dark pb-10 pt-36 sm:pb-14 sm:pt-40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-400">
            Legal
          </p>
          <h1 className="heading-accent mt-3 font-[family-name:var(--font-playfair)] text-4xl font-medium text-white sm:text-5xl">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="prose prose-pine mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
          <p className="text-sm text-text-light">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
            Information We Collect
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            When you visit our website, we may collect basic analytics data such
            as pages visited, referring URLs, and general device information. We
            do not use cookies for tracking purposes.
          </p>

          <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
            How We Use Your Information
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            Any information collected is used solely to improve our website
            experience and understand how visitors interact with our content. We
            do not sell, rent, or share personal information with third parties
            for marketing purposes.
          </p>

          <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
            Third-Party Services
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            Our website may contain links to external websites such as social
            media platforms (Facebook, Instagram). These sites have their own
            privacy policies, and we are not responsible for their content or
            practices.
          </p>

          <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
            Contact Us
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            If you have questions about this privacy policy, contact us at{" "}
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
