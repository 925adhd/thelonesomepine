"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { storeImages } from "@/data/images";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      className="grain relative flex min-h-[75vh] items-center overflow-hidden bg-pine-950 sm:min-h-screen sm:items-center"
      aria-label="Welcome"
    >
      {/* Background image with ken burns effect */}
      <div className="absolute inset-0 scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]">
        <Image
          src={storeImages.plantDisplay.src}
          alt={storeImages.plantDisplay.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
      </div>

      {/* Light overlay — keeps plants vibrant */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Subtle bottom gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-24 lg:px-12">
        <div className="-mt-20 flex flex-col items-center space-y-4 text-center sm:mt-0 sm:max-w-2xl sm:items-start sm:space-y-6 sm:text-left">
          {/* Eyebrow */}
          <div
            className="hidden transition-all duration-1000 ease-[var(--ease-out-expo)] sm:block"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-xs">
              <span className="h-1 w-1 rounded-full bg-pine-300 sm:h-1.5 sm:w-1.5" />
              Leitchfield, Kentucky
            </span>
          </div>

          {/* Logo as H1 */}
          <h1
            className=""
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 1s cubic-bezier(0.16,1,0.3,1) 200ms, transform 1s cubic-bezier(0.16,1,0.3,1) 200ms",
            }}
          >
            <Image
              src="/images/logotransparent.png"
              alt="The Lonesome Pine"
              width={400}
              height={400}
              className="h-52 w-auto drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] sm:h-48 md:h-60 lg:h-72"
            />
            <span className="sr-only">The Lonesome Pine</span>
          </h1>

          {/* Subheading */}
          <p
            className="max-w-sm text-base leading-relaxed text-white/80 sm:max-w-lg sm:text-lg md:text-xl"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 1s cubic-bezier(0.16,1,0.3,1) 400ms, transform 1s cubic-bezier(0.16,1,0.3,1) 400ms",
            }}
          >
            <span className="sm:hidden">
              Unique & healthy houseplants — a proud vendor inside The Rabbit Hole.
            </span>
            <span className="hidden sm:inline">
              We specialize in unique and healthy houseplants to help you style
              your home and life. We&apos;re so glad you&apos;re here.
            </span>
          </p>

          {/* CTAs */}
          <div
            className="flex items-center justify-center gap-4 sm:justify-start"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 1s cubic-bezier(0.16,1,0.3,1) 600ms, transform 1s cubic-bezier(0.16,1,0.3,1) 600ms",
            }}
          >
            <Link
              href="/plants"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold text-pine-900 shadow-lg transition-all duration-300 hover:bg-pine-50 hover:shadow-2xl active:scale-[0.98] sm:px-10 sm:py-4 sm:text-base"
            >
              Browse Our Plants
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
            <Link
              href="/contact"
              className="text-xs font-medium text-white/70 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white sm:no-underline sm:rounded-full sm:border sm:border-white/20 sm:bg-white/5 sm:px-10 sm:py-4 sm:text-base sm:text-white/85 sm:backdrop-blur-sm sm:hover:border-white/35 sm:hover:bg-white/10 sm:active:scale-[0.98]"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-surface to-transparent sm:h-32" />

      <style jsx>{`
        @keyframes kenburns {
          from {
            transform: scale(1.05);
          }
          to {
            transform: scale(1.12);
          }
        }
      `}</style>
    </section>
  );
}
