import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie policy for The Lonesome Pine. Learn about how cookies are used on our website.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="bg-primary-dark pb-10 pt-36 sm:pb-14 sm:pt-40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-400">
            Legal
          </p>
          <h1 className="heading-accent mt-3 font-[family-name:var(--font-playfair)] text-4xl font-medium text-white sm:text-5xl">
            Cookie Policy
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="prose prose-pine mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
          <p className="text-sm text-text-light">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
            What Are Cookies
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            Cookies are small text files stored on your device when you visit a
            website. They are widely used to make websites work more efficiently
            and provide information to site owners.
          </p>

          <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
            How We Use Cookies
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            Our website uses minimal cookies. We use cookieless analytics to
            understand how visitors use our site without tracking individual
            users. We do not use advertising cookies or third-party tracking
            cookies.
          </p>

          <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
            Essential Cookies
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            Some cookies are essential for the website to function properly.
            These are strictly necessary and cannot be disabled. They do not
            store any personally identifiable information.
          </p>

          <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
            Managing Cookies
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            You can control and manage cookies through your browser settings.
            Please note that disabling certain cookies may affect the
            functionality of this website.
          </p>

          <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl font-medium text-primary">
            Contact Us
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            If you have questions about our cookie policy, contact us at{" "}
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
