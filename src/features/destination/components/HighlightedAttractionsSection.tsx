import Image from "next/image";
import type { DestinationAttraction } from "../types";

interface HighlightedAttractionsSectionProps {
  attractions: DestinationAttraction[];
}

export function HighlightedAttractionsSection({
  attractions,
}: HighlightedAttractionsSectionProps) {
  if (attractions.length === 0) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-on-surface font-headline">
          Highlighted Attractions
        </h2>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {attractions.map((attraction) => (
          <article
            key={attraction.id}
            className="min-w-[300px] md:min-w-[360px] snap-start"
          >
            <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
              <Image
                src={attraction.image}
                alt={attraction.title}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute top-4 left-4 rounded-full bg-surface-container-lowest/90 px-3 py-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  {attraction.tag}
                </span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-on-surface font-headline">
              {attraction.title}
            </h3>
            <p className="text-sm text-on-surface-variant mt-1">
              {attraction.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
