import type { DestinationMap } from "../types";

interface MapViewProps {
  map: DestinationMap;
}

export function MapView({ map }: MapViewProps) {
  const delta = 0.02;
  const bbox = [
    (map.lng - delta).toFixed(6),
    (map.lat - delta).toFixed(6),
    (map.lng + delta).toFixed(6),
    (map.lat + delta).toFixed(6),
  ].join("%2C");
  const marker = `${map.lat.toFixed(6)}%2C${map.lng.toFixed(6)}`;
  const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${marker}`;

  return (
    <section className="space-y-5">
      <h2 className="text-2xl md:text-3xl font-bold font-headline text-on-surface">
        Map View
      </h2>

      <div className="rounded-[24px] overflow-hidden bg-surface-container-low shadow-[0_12px_40px_rgba(45,51,53,0.06)]">
        <div className="relative">
          <iframe
            title={`Map of ${map.label}`}
            src={embedUrl}
            className="w-full h-[360px] md:h-[420px]"
            loading="lazy"
          />

          <div className="pointer-events-none absolute left-5 top-5 rounded-full bg-primary text-on-primary px-4 py-2.5 text-sm font-semibold shadow-[0_12px_40px_rgba(45,51,53,0.18)]">
            {map.label}
          </div>
        </div>
      </div>
    </section>
  );
}
