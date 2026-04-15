"use client";

import Link from "next/link";
import { useState } from "react";
import { BookingCTA } from "./BookingCTA";
import { Description } from "./Description";
import { FacilitiesSection } from "./FacilitiesSection";
import { GalleryTab } from "./GalleryTab";
import { HighlightedAttractionsSection } from "./HighlightedAttractionsSection";
import { HomestaysSection } from "./HomestaysSection";
import { ImageGallery } from "./ImageGallery";
import { ItineraryPreview } from "./ItineraryPreview";
import { LocalUmkmSection } from "./LocalUmkmSection";
import { MapView } from "./MapView";
import { UpcomingEventsSection } from "./UpcomingEventsSection";
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
  const [activeTab, setActiveTab] = useState<"about" | "gallery">("about");

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
            location={destination.location}
            badge={destination.badge}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-8 space-y-8">
              <div className="flex border-b border-outline-variant/30 gap-7">
                <button
                  type="button"
                  onClick={() => setActiveTab("about")}
                  className={`pb-3 text-lg font-bold transition-colors border-b-2 ${
                    activeTab === "about"
                      ? "text-primary border-primary"
                      : "text-on-surface-variant border-transparent"
                  }`}
                >
                  About
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("gallery")}
                  className={`pb-3 text-lg font-bold transition-colors border-b-2 ${
                    activeTab === "gallery"
                      ? "text-primary border-primary"
                      : "text-on-surface-variant border-transparent"
                  }`}
                >
                  Gallery
                </button>
              </div>

              {activeTab === "about" ? (
                <>
                  <Description destination={destination} />

                  {destination.itinerary && destination.itinerary.length > 0 ? (
                    <ItineraryPreview itinerary={destination.itinerary} />
                  ) : null}
                </>
              ) : (
                <GalleryTab
                  images={destination.gallery ?? [destination.image]}
                  title={destination.name}
                />
              )}
            </div>

            <div className="lg:col-span-4">
              <BookingCTA destination={destination} />
            </div>
          </div>

          {destination.map ? <MapView map={destination.map} /> : null}
        </div>
      </section>

      <FacilitiesSection facilities={destination.facilities ?? []} />

      <HighlightedAttractionsSection
        attractions={destination.highlightedAttractions ?? []}
      />

      <UpcomingEventsSection events={destination.upcomingEvents ?? []} />

      <LocalUmkmSection products={destination.localProducts ?? []} />

      <HomestaysSection homestays={destination.homestays ?? []} />
    </main>
  );
}
