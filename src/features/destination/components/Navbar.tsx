"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Experiences", href: "/experiences" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const isDestinationDetailRoute = /^\/destinations\/[^/]+$/.test(pathname);
  const isExperienceDetailRoute = /^\/experiences\/[^/]+$/.test(pathname);

  if (isDestinationDetailRoute || isExperienceDetailRoute) {
    return null;
  }

  return (
    <nav className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-[0_12px_40px_rgba(45,51,53,0.06)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto font-headline tracking-tight">
        <Link href="/" className="text-2xl font-bold text-primary">
          Desa Wisata
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary pb-1 transition-all duration-300"
                    : "text-on-surface-variant hover:text-primary transition-colors hover:opacity-80"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full">
            <svg
              className="w-4 h-4 text-on-surface-variant"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm ml-2 text-on-surface-variant w-32"
              placeholder="Search..."
              type="text"
            />
          </div>

          <Button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-semibold hover:opacity-80 transition-all duration-300 active:scale-90">
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
}
