import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center px-5 py-32">
      <div className="text-center">
        <p className="text-8xl font-light text-pine-200 sm:text-9xl">404</p>
        <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-medium text-primary sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-base text-text-muted">
          Looks like this path leads into the woods. Let&apos;s get you back
          on track.
        </p>
        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-primary-light hover:shadow-lg active:scale-[0.98]"
        >
          Back to Home
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
    </div>
  );
}
