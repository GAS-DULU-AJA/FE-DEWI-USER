import Image from "next/image";
import { formatCurrency } from "@/utils";
import type { DestinationHomestay } from "../types";

interface HomestaysSectionProps {
  homestays: DestinationHomestay[];
}

export function HomestaysSection({ homestays }: HomestaysSectionProps) {
  if (homestays.length === 0) {
    return null;
  }

  return (
    <section className="bg-surface-bright py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface font-headline">
            Authentic Village Stays
          </h2>
          <p className="text-on-surface-variant mt-2 max-w-2xl mx-auto">
            Stay with local families and experience village life beyond a day
            trip.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homestays.map((stay) => (
            <article
              key={stay.id}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden"
            >
              <div className="relative h-60">
                <Image
                  src={stay.image}
                  alt={stay.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-on-surface font-headline">
                    {stay.name}
                  </h3>
                  <span className="text-sm font-semibold text-on-surface-variant">
                    ★ {stay.rating.toFixed(1)}
                  </span>
                </div>

                <p className="text-sm text-on-surface-variant">
                  {stay.location}
                </p>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {stay.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {stay.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="rounded-full bg-secondary-container px-3 py-1 text-xs font-semibold text-on-secondary-container"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                <p className="text-lg font-bold text-primary font-headline pt-1">
                  {formatCurrency(stay.price)}
                  <span className="text-xs text-on-surface-variant font-medium">
                    {" "}
                    / night
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
