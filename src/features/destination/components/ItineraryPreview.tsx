import type { DestinationItineraryItem } from "../types";

interface ItineraryPreviewProps {
  itinerary: DestinationItineraryItem[];
}

export function ItineraryPreview({ itinerary }: ItineraryPreviewProps) {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl md:text-3xl font-bold font-headline text-on-surface">
        Itinerary Preview
      </h2>

      <div className="bg-surface-container-low rounded-[24px] p-6 md:p-8 space-y-4">
        {itinerary.map((item) => (
          <article
            key={item.id}
            className="bg-surface-container-lowest rounded-2xl p-5 md:p-6"
          >
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                {item.time}
              </span>
              <h3 className="font-semibold text-lg text-on-surface">
                {item.title}
              </h3>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
