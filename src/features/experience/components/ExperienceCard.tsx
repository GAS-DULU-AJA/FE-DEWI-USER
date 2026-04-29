"use client";

import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import type { Experience } from "../types";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    maximumFractionDigits: 0,
  }).format(experience.price);

  return (
    <article className="group overflow-hidden rounded-[28px] bg-surface-container-lowest shadow-[0_18px_48px_rgba(45,51,53,0.06)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-[28px]">
        <img
          src={experience.image}
          alt={experience.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-surface-container-lowest/95 px-3 py-2 shadow-[0_10px_24px_rgba(45,51,53,0.12)]">
          <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-bold text-on-surface">
            {experience.rating.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="space-y-6 p-7">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <div className="space-y-2">
            <h2 className="font-headline text-[2rem] leading-[1.05] font-bold tracking-[-0.03em] text-on-surface transition-colors group-hover:text-primary">
              {experience.name}
            </h2>
            <p className="flex items-center gap-2 text-base text-on-surface-variant">
              <MapPin className="size-4 fill-current" />
              <span>{experience.location}</span>
            </p>
          </div>

          <div className="min-w-[116px] text-right">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-on-surface-variant">
              Per Person
            </p>
            <div className="mt-2 space-y-0.5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                IDR
              </p>
              <p className="text-xl font-extrabold leading-none tracking-[-0.03em] text-primary md:text-2xl">
                {formattedPrice}
              </p>
            </div>
          </div>
        </div>

        <Link
          href={`/experiences/${experience.slug}`}
          className="inline-flex h-14 w-full items-center justify-center rounded-full bg-linear-to-b from-primary to-primary-dim text-base font-bold text-on-primary transition-all duration-300 hover:shadow-[0_12px_30px_rgba(45,106,79,0.2)]"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
