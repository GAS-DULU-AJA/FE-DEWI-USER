import Image from "next/image";
import Link from "next/link";
import type { Destination } from "../types";

interface DestinationCardProps {
  destination: Destination;
  size?: "large" | "small" | "grid";
}

export function DestinationCard({
  destination,
  size = "small",
}: DestinationCardProps) {
  if (size === "grid") {
    return (
      <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(45,51,53,0.06)] group">
        <div className="relative overflow-hidden">
          <Image
            loading="eager"
            src={destination.image}
            alt={destination.name}
            width={640}
            height={760}
            className="w-full aspect-4/5 object-cover group-hover:scale-105 transition-transform duration-700"
            unoptimized
          />

          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1">
            <svg
              className="w-4 h-4 text-yellow-500 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-sm font-bold text-on-surface">
              {destination.rating.toFixed(1)}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 bg-primary/85 backdrop-blur-md rounded-full px-3 py-1">
            <span className="text-xs font-semibold text-on-primary">
              {destination.category[0] ?? "Village"}
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-on-surface font-headline mb-2 line-clamp-1">
            {destination.name}
          </h3>
          <p className="text-sm text-on-surface-variant mb-4 line-clamp-1">
            {destination.location}
          </p>
          <Link
            href={`/destinations/${destination.slug}`}
            className="w-full rounded-full bg-primary text-on-primary font-semibold py-2.5 px-4 inline-flex justify-center hover:opacity-90 transition-opacity"
          >
            View Details
          </Link>
        </div>
      </div>
    );
  }

  if (size === "large") {
    return (
      <div className="group cursor-pointer relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_12px_40px_rgba(45,51,53,0.06)] hover:shadow-xl transition-all duration-500">
        <div className="aspect-16/10 overflow-hidden">
          <Image
            loading="eager"
            src={destination.image}
            alt={destination.name}
            width={800}
            height={500}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            unoptimized
          />
        </div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold font-headline">
              {destination.name}
            </h3>
            <div className="flex items-center gap-1 bg-secondary-container/50 px-3 py-1 rounded-full">
              <svg
                className="w-4 h-4 text-yellow-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm font-bold">{destination.rating}</span>
            </div>
          </div>
          <p className="text-on-surface-variant mb-6 line-clamp-2">
            {destination.description}
          </p>
          <div className="flex gap-3">
            {destination.category.map((cat) => (
              <span
                key={cat}
                className="text-xs font-bold uppercase tracking-widest text-primary bg-primary-container/20 px-3 py-1 rounded"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group cursor-pointer flex gap-4 bg-surface-container-lowest p-4 rounded-xl shadow-[0_12px_40px_rgba(45,51,53,0.06)] hover:shadow-lg transition-all duration-300">
      <Image
        loading="eager"
        src={destination.image}
        alt={destination.name}
        width={128}
        height={128}
        className="w-32 h-32 object-cover rounded-lg shrink-0"
        unoptimized
      />
      <div className="flex flex-col justify-center">
        <h4 className="text-lg font-bold mb-1 font-headline">
          {destination.name}
        </h4>
        <p className="text-sm text-on-surface-variant line-clamp-2">
          {destination.description}
        </p>
      </div>
    </div>
  );
}
