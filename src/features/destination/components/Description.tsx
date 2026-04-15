import type { Destination } from "../types";

interface DescriptionProps {
  destination: Destination;
}

export function Description({ destination }: DescriptionProps) {
  return (
    <section className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-on-surface mb-4 font-headline">
          Deskripsi
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-on-surface-variant">
          {destination.longDescription ?? destination.description}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-tight text-on-surface mb-4 font-headline">
          Sejarah
        </h2>
        <div className="bg-surface-container-low rounded-[24px] p-6 md:p-8 relative overflow-hidden">
          <span className="material-symbols-outlined absolute -right-2 -bottom-2 text-8xl text-surface-container-high opacity-60">
            history
          </span>
          <p className="relative z-10 text-base md:text-lg leading-relaxed text-on-surface-variant">
            {destination.history ?? destination.description}
          </p>
        </div>
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
