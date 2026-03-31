"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu — slides in from right, dark green */}
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[85] bg-black/40 transition-opacity duration-300 md:hidden",
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        id="mobile-menu"
        className={cn(
          "fixed right-0 top-0 z-[90] flex h-full w-72 flex-col bg-pine-950 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden",
          mobileMenuOpen
            ? "pointer-events-auto translate-x-0"
            : "pointer-events-none translate-x-full"
        )}
      >
        <div className="flex flex-1 flex-col justify-between px-6 pb-8 pt-24">
          {/* Nav links */}
          <nav>
            <ul className="space-y-1" role="list">
              {siteConfig.navigation.map((item, i) => {
                const mobileLabel = item.label === "Visit & Contact" ? "Contact" : item.label;
                return (
                  <li
                    key={item.href}
                    style={{
                      opacity: mobileMenuOpen ? 1 : 0,
                      transform: mobileMenuOpen
                        ? "translateX(0)"
                        : "translateX(40px)",
                      transition: `opacity 0.4s ease ${150 + i * 75}ms, transform 0.4s ease ${150 + i * 75}ms`,
                    }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block border-b border-white/10 py-4 font-[family-name:var(--font-western)] text-2xl transition-colors duration-200",
                        pathname === item.href || pathname === item.href + "/"
                          ? "text-white"
                          : "text-white/60 active:text-white"
                      )}
                    >
                      {mobileLabel}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom section */}
          <div
            style={{
              opacity: mobileMenuOpen ? 1 : 0,
              transition: "opacity 0.5s ease 500ms",
            }}
          >
            {/* Location */}
            <div className="mb-6 text-sm text-white/50">
              <p className="font-medium text-white/70">
                Vendor inside {siteConfig.vendorLocation.venue}
              </p>
              <p className="mt-1">
                {siteConfig.vendorLocation.street},{" "}
                {siteConfig.vendorLocation.city},{" "}
                {siteConfig.vendorLocation.stateCode}
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 transition-colors hover:text-white"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header bar — always on top */}
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-[100] border-b shadow-sm backdrop-blur-sm transition-colors duration-300",
          mobileMenuOpen
            ? "border-white/10 bg-pine-950"
            : "border-pine-800/30 bg-pine-950 sm:border-gray-200 sm:bg-white/90"
        )}
      >
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "flex items-center gap-2 font-[family-name:var(--font-western)] text-lg tracking-tight transition-colors duration-300 hover:opacity-80 sm:text-xl",
              mobileMenuOpen ? "text-white" : "text-white sm:text-green-950"
            )}
          >
            <Image
              src="/images/pine.png"
              alt=""
              width={28}
              height={28}
              className={cn(
                "h-6 w-auto transition-all duration-300 sm:h-7",
                "brightness-0 invert sm:brightness-100 sm:invert-0",
                mobileMenuOpen && "brightness-0 invert"
              )}
              aria-hidden="true"
            />
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 md:flex" role="list">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200",
                    pathname === item.href || pathname === item.href + "/"
                      ? "bg-gray-200 text-green-950"
                      : "text-green-950 hover:bg-gray-100 hover:text-pine-700"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={cn(
              "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors duration-300 md:hidden",
              mobileMenuOpen ? "text-white" : "text-white sm:text-gray-700"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative h-5 w-5">
              <span
                className={cn(
                  "absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current transition-all duration-300",
                  mobileMenuOpen && "top-[9px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[9px] block h-0.5 w-5 rounded-full bg-current transition-all duration-300",
                  mobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute bottom-1 left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300",
                  mobileMenuOpen && "bottom-[9px] -rotate-45"
                )}
              />
            </div>
          </button>
        </nav>
      </header>
    </>
  );
}
