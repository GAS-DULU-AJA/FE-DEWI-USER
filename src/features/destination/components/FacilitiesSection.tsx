import type { DestinationFacility } from "../types";

interface FacilitiesSectionProps {
  facilities: DestinationFacility[];
}

const ICON_FALLBACK = "place";

export function FacilitiesSection({ facilities }: FacilitiesSectionProps) {
  if (facilities.length === 0) {
    return null;
  }

  return (
    <section className="bg-surface-container-low py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-on-surface mb-12 text-center font-headline">
          Fasilitas Publik
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {facilities.map((facility) => (
            <article
              key={facility.id}
              className="bg-surface-container-lowest rounded-2xl p-6 text-center space-y-3"
            >
              <span className="material-symbols-outlined text-3xl text-primary">
                {facility.icon || ICON_FALLBACK}
              </span>
              <p className="text-xs md:text-sm font-semibold tracking-wider uppercase text-on-surface-variant">
                {facility.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
