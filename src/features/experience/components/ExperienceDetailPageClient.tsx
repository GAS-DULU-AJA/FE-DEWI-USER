"use client";

import Link from "next/link";
import {
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronDown,
  Coffee,
  Leaf,
  MapPin,
  Route,
  Toilet,
  UserRoundCheck,
  Users,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useExperienceDetail } from "../hooks/useExperienceDetail";
import type { Experience } from "../types";

interface ExperienceDetailPageClientProps {
  slug: string;
  initialExperience: Experience;
}

const iconMap = {
  camera: Camera,
  "calendar-x": XCircle,
  coffee: Coffee,
  guide: Route,
  restroom: Toilet,
  verified: CheckCircle2,
} as const;

function formatCompactPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    maximumFractionDigits: 0,
  }).format(price);
}

function getIcon(icon: string) {
  return iconMap[icon as keyof typeof iconMap] ?? CheckCircle2;
}

function getOpenStreetMapEmbedUrl(map: Experience["map"]) {
  if (!map) {
    return null;
  }

  const delta = 0.025;
  const left = map.lng - delta;
  const right = map.lng + delta;
  const top = map.lat + delta;
  const bottom = map.lat - delta;

  return `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${map.lat}%2C${map.lng}`;
}

function getOpenStreetMapMarkerUrl(map: Experience["map"]) {
  if (!map) {
    return null;
  }

  return `https://www.openstreetmap.org/?mlat=${map.lat}&mlon=${map.lng}#map=${map.zoom}/${map.lat}/${map.lng}`;
}

export function ExperienceDetailPageClient({
  slug,
  initialExperience,
}: ExperienceDetailPageClientProps) {
  const { data: experience } = useExperienceDetail({
    slug,
    initialData: initialExperience,
  });

  if (!experience) {
    return null;
  }

  const description = experience.longDescription ?? [experience.description];
  const heroImage = experience.heroImage ?? experience.image;
  const locationLabel = experience.address ?? experience.location;
  const openStreetMapEmbedUrl = getOpenStreetMapEmbedUrl(experience.map);
  const openStreetMapMarkerUrl = getOpenStreetMapMarkerUrl(experience.map);
  const facilities = experience.facilities ?? [
    { id: "guided-tour", icon: "guide", label: "Guided Tour" },
    { id: "photography", icon: "camera", label: "Photography" },
  ];
  const bookingHighlights = experience.bookingHighlights ?? [
    {
      id: "instant-confirmation",
      icon: "verified",
      label: "Instant confirmation",
    },
    { id: "local-guide", icon: "guide", label: "Local guide included" },
  ];

  return (
    <main className="min-h-screen bg-surface text-on-surface">
      <section className="relative h-[760px] w-full overflow-hidden md:h-[870px]">
        <img
          src={heroImage}
          alt={`${experience.name} in ${experience.location}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/65" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 text-white md:px-8 md:pb-24">
          <div className="mb-4 flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium uppercase tracking-wide backdrop-blur-md">
            <MapPin className="size-4" />
            <span>{experience.location}</span>
          </div>

          <h1 className="max-w-5xl font-headline text-5xl font-extrabold leading-[0.95] tracking-[-0.055em] md:text-8xl">
            {experience.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-stone-200 md:text-2xl">
            {experience.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="mb-8">
          <Link
            href="/experiences"
            className="inline-flex text-sm font-semibold text-primary hover:opacity-80"
          >
            ← Back to experiences
          </Link>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="w-full space-y-16 lg:w-2/3">
            <section className="space-y-6">
              <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-[0.28em] text-primary">
                <span className="h-px w-12 bg-primary/30" />
                The Journey
              </div>
              <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface">
                About the Experience
              </h2>
              <div className="space-y-6 text-lg font-light leading-relaxed text-on-surface-variant">
                {description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="space-y-8 pt-2">
              <h3 className="font-headline text-2xl font-bold text-on-surface">
                Experience Facilities
              </h3>
              <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
                {facilities.map((facility) => {
                  const Icon = getIcon(facility.icon);

                  return (
                    <div
                      key={facility.id}
                      className="group flex flex-col items-center gap-3 rounded-3xl bg-surface-container-low p-6 text-center transition-colors hover:bg-surface-container"
                    >
                      <Icon className="size-8 text-primary transition-transform group-hover:scale-110" />
                      <span className="text-sm font-semibold text-on-surface">
                        {facility.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="space-y-8 pt-2">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <h3 className="font-headline text-2xl font-bold text-on-surface">
                  Find Us
                </h3>
                <p className="text-sm text-on-surface-variant">
                  {locationLabel}
                </p>
              </div>

              <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-surface-container-high shadow-[0_12px_40px_rgba(45,51,53,0.06)]">
                {openStreetMapEmbedUrl ? (
                  <iframe
                    title={`OpenStreetMap location for ${experience.name}`}
                    src={openStreetMapEmbedUrl}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-surface-container-low p-8 text-center text-on-surface-variant">
                    Map coordinates are not available for this experience.
                  </div>
                )}

                <div className="pointer-events-none absolute inset-0 bg-primary/5" />

                {openStreetMapMarkerUrl ? (
                  <a
                    href={openStreetMapMarkerUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-surface-container-lowest/95 px-4 py-2 text-sm font-bold text-primary shadow-[0_12px_40px_rgba(45,51,53,0.14)] backdrop-blur-md transition-colors hover:text-primary-dim"
                  >
                    <MapPin className="size-4 fill-primary" />
                    Open in OpenStreetMap
                  </a>
                ) : null}
              </div>
            </section>
          </div>

          <aside className="w-full lg:w-1/3">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-3xl bg-surface-container-lowest p-7 shadow-[0_12px_40px_rgba(45,51,53,0.06)] md:p-8">
                <div className="mb-8 flex items-baseline justify-between gap-4">
                  <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-on-surface-variant">
                    Pricing
                  </h4>
                  <div className="text-right">
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-primary/80">
                      IDR
                    </span>
                    <span className="font-headline text-3xl font-bold text-on-surface">
                      {formatCompactPrice(experience.price)}
                    </span>
                    <span className="text-on-surface-variant"> / person</span>
                  </div>
                </div>

                <div className="mb-8 space-y-4">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-2xl bg-surface-container-low p-4 text-left transition-colors hover:bg-surface-container"
                  >
                    <span className="flex items-center gap-3">
                      <CalendarDays className="size-5 text-primary" />
                      <span>
                        <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
                          Date
                        </span>
                        <span className="text-sm font-semibold text-on-surface">
                          Select your date
                        </span>
                      </span>
                    </span>
                    <ChevronDown className="size-5 text-on-surface-variant" />
                  </button>

                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-2xl bg-surface-container-low p-4 text-left transition-colors hover:bg-surface-container"
                  >
                    <span className="flex items-center gap-3">
                      <Users className="size-5 text-primary" />
                      <span>
                        <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
                          Travelers
                        </span>
                        <span className="text-sm font-semibold text-on-surface">
                          2 Adults
                        </span>
                      </span>
                    </span>
                    <ChevronDown className="size-5 text-on-surface-variant" />
                  </button>
                </div>

                <div className="mb-10 space-y-4">
                  {bookingHighlights.map((highlight) => {
                    const Icon = getIcon(highlight.icon);

                    return (
                      <div
                        key={highlight.id}
                        className="flex items-center gap-3 text-sm text-on-surface-variant"
                      >
                        <Icon className="size-5 text-primary" />
                        {highlight.label}
                      </div>
                    );
                  })}
                </div>

                <Button className="h-16 w-full rounded-full bg-linear-to-b from-primary to-primary-dim text-lg font-bold text-on-primary shadow-lg shadow-primary/20 transition-all duration-300 hover:opacity-90 active:scale-[0.98]">
                  Book Your Experience
                </Button>

                <p className="mt-6 text-center text-xs leading-relaxed text-on-surface-variant">
                  {experience.contributionNote ??
                    "By booking, you directly support local village hosts."}
                </p>
              </div>

              {experience.sustainabilityNote ? (
                <div className="flex gap-4 rounded-3xl bg-secondary-container p-6 text-on-secondary-container">
                  <Leaf className="size-10 shrink-0" />
                  <div>
                    <h5 className="mb-1 font-bold">
                      {experience.sustainabilityNote.title}
                    </h5>
                    <p className="text-sm leading-relaxed text-on-secondary-container/80">
                      {experience.sustainabilityNote.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex gap-4 rounded-3xl bg-secondary-container p-6 text-on-secondary-container">
                  <UserRoundCheck className="size-10 shrink-0" />
                  <div>
                    <h5 className="mb-1 font-bold">Hosted by Locals</h5>
                    <p className="text-sm leading-relaxed text-on-secondary-container/80">
                      Every booking supports village guides and community-owned
                      tourism programs.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
