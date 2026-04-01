import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="flex flex-1 items-center justify-center px-5 pb-32 pt-40">
      <div className="text-center">
        <p className="text-6xl sm:text-7xl">🌿</p>
        <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-medium text-primary sm:text-4xl">
          Thank You!
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-text-muted">
          We got your message and will get back to you soon. In the meantime,
          feel free to browse our plants or follow us on social media.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/plants"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-primary-light hover:shadow-lg active:scale-[0.98]"
          >
            Browse Plants
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
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-border px-8 py-4 text-sm font-semibold text-primary transition-all duration-300 hover:bg-surface-muted active:scale-[0.98]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
