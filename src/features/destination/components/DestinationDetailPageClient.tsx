"use client";

import Link from "next/link";
import { BookingCTA } from "./BookingCTA";
import { Description } from "./Description";
import { ImageGallery } from "./ImageGallery";
import { ItineraryPreview } from "./ItineraryPreview";
import { MapView } from "./MapView";
import { useDestinationDetail } from "../hooks/useDestinationDetail";
import type { Destination } from "../types";

interface DestinationDetailPageClientProps {
  slug: string;
  initialDestination: Destination;
}

export function DestinationDetailPageClient({
  slug,
  initialDestination,
}: DestinationDetailPageClientProps) {
  const { data: destination, isFetching } = useDestinationDetail({
    slug,
    initialData: initialDestination,
  });

  if (!destination) {
    return (
      <main className="bg-surface min-h-screen py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-on-surface mb-3">
            Destination not found
          </h1>
          <p className="text-on-surface-variant mb-6">
            This destination may have been moved or is no longer available.
          </p>
          <Link
            href="/destinations"
            className="inline-flex rounded-full px-5 py-2.5 bg-primary text-on-primary font-semibold"
          >
            Back to destinations
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-surface pb-24">
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-8 md:pt-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <Link
            href="/destinations"
            className="inline-flex text-sm font-semibold text-primary hover:opacity-80"
          >
            ← Back to destinations
          </Link>

          {isFetching ? (
            <span className="text-xs text-on-surface-variant uppercase tracking-wider">
              Syncing detail...
            </span>
          ) : null}
        </div>

        <div className="space-y-10 md:space-y-14">
          <ImageGallery
            images={destination.gallery ?? [destination.image]}
            title={destination.name}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-8 space-y-8">
              <Description destination={destination} />

              {destination.itinerary && destination.itinerary.length > 0 ? (
                <ItineraryPreview itinerary={destination.itinerary} />
              ) : null}

              {destination.map ? <MapView map={destination.map} /> : null}
            </div>

            <div className="lg:col-span-4">
              <BookingCTA destination={destination} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
