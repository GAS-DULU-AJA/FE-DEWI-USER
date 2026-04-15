import Image from "next/image";
import type { Package } from "../types";
import { formatCurrency } from "@/utils";

interface PackageCardProps {
  pkg: Package;
}

const BADGE_COLOR: Record<string, string> = {
  ritual: "bg-primary",
  event: "bg-tertiary",
  adventure: "bg-secondary",
  stay: "bg-primary",
};

export function PackageCard({ pkg }: PackageCardProps) {
  if (pkg.type === "stay") {
    return (
      <div className="bg-surface-container-lowest rounded-xl shadow-[0_12px_40px_rgba(45,51,53,0.06)] overflow-hidden group">
        <div className="h-64 relative overflow-hidden">
          <Image
            src={pkg.image}
            alt={pkg.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            unoptimized
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            SUPERHOST
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-xl font-bold font-headline">{pkg.name}</h4>
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-yellow-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm font-bold">{pkg.rating}</span>
            </div>
          </div>
          <p className="text-on-surface-variant text-sm mb-6">{pkg.location}</p>
          {pkg.amenities && (
            <div className="flex items-center gap-4 text-on-surface-variant mb-6 pb-6 border-b border-outline-variant/10">
              {pkg.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-1.5">
                  <span className="text-xs font-medium">{amenity}</span>
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-primary font-headline">
                {formatCurrency(pkg.price)}
              </span>
              <span className="text-xs text-on-surface-variant"> / night</span>
            </div>
            <button className="bg-primary/10 text-primary hover:bg-primary hover:text-on-primary px-6 py-2 rounded-full font-bold transition-all">
              Book Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Ritual / event / adventure card (tall image with gradient overlay)
  return (
    <div className="snap-start min-w-[320px] md:min-w-100 relative rounded-xl overflow-hidden group">
      <Image
        src={pkg.image}
        alt={pkg.name}
        width={400}
        height={500}
        className="w-full h-125 object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
        unoptimized
      />
      <div className="absolute inset-0 bg-linear-to-t from-on-surface/90 via-on-surface/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <div
          className={`${BADGE_COLOR[pkg.type] ?? "bg-primary"} px-3 py-1 rounded-md text-xs font-bold mb-4 inline-block text-on-primary`}
        >
          {pkg.badge ?? pkg.type.toUpperCase()}
        </div>
        <h4 className="text-2xl font-bold mb-2 font-headline">{pkg.name}</h4>
        <p className="text-white/80 text-sm mb-4">{pkg.description}</p>
        <span className="text-sm font-semibold border-b border-white/40 group-hover:border-white transition-all cursor-pointer">
          {pkg.type === "ritual"
            ? "Join Experience"
            : pkg.type === "adventure"
              ? "Explore Trail"
              : "Book Spot"}
        </span>
      </div>
    </div>
  );
}
