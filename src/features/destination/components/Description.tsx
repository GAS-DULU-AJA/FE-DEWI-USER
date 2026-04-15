import type { Destination } from "../types";

interface DescriptionProps {
  destination: Destination;
}

export function Description({ destination }: DescriptionProps) {
  return (
    <section className="bg-surface-container-low rounded-[24px] p-8 md:p-10 space-y-8">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">
          Overview
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline text-on-surface">
          {destination.name}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-on-surface-variant">
          <span className="rounded-full bg-surface-container-lowest px-3 py-1.5">
            {destination.location}
          </span>
          <span className="rounded-full bg-secondary-container px-3 py-1.5 text-on-secondary-container font-semibold">
            {destination.rating.toFixed(1)} / 5
          </span>
          <span className="rounded-full bg-surface-container-lowest px-3 py-1.5">
            {destination.reviewCount} reviews
          </span>
        </div>
      </div>

      <div className="space-y-5 text-on-surface-variant leading-relaxed text-base md:text-lg">
        <p>{destination.longDescription ?? destination.description}</p>
        <p>{destination.history ?? destination.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {destination.category.map((item) => (
          <span
            key={item}
            className="rounded-full bg-primary/10 text-primary px-3 py-1.5 text-sm font-semibold"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
