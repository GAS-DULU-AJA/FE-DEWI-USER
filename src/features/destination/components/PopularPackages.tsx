"use client";

import { usePopularPackages } from "../hooks/usePopularPackages";
import { PackageCard } from "./PackageCard";
import type { Package } from "../types";

const FALLBACK_EVENTS: Package[] = [
  {
    id: "e1",
    name: "Kecak Fire Performance",
    description:
      "A mesmerizing rhythmic dance telling the story of Ramayana by firelight.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPEOUAKmRtazbva241lVLoRBpOYzMNpecbm44-LUfHiNeNAlWw43aNTogmFZ4y8_TxIiGkm03PPWjKiXg86gyb2Qw9P7SBH5SQubuAJ9V2R3zHFkT4GlkvhpJlOGcBT8TsHLbnmx1XJyTmOOIgGcpSIiqczPNYv1reum_GnCDthBdY__vA4Mnq2KvmxZdMcgZCCVTu3bb-N2eLE3T60-BffKRZFx06wjmS1QRNDYzPVPddgGKe68lUlAj9WLHwrrZmovDHsUIz8F0",
    price: 0,
    duration: "2 hours",
    type: "ritual",
    location: "Ubud, Bali",
    rating: 4.9,
    badge: "WEEKLY",
  },
  {
    id: "e2",
    name: "Artisan Pottery Masterclass",
    description:
      "Learn the ancient art of clay from masters who have practiced for generations.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBlb1BDLRLhyhzz5ton0ck6yfrXgIIUUOa4X5OERAFPopHf-uqz_If6iXIXtdHjijm9q1_HKCZ4RWamrLzagUniIFnBUMDNzyu3zfPqa-yS0OUaH7xsAbxptmh2G-aNLwO0qm5I33CIJc5UvWF_43I3o81LZJaS_VvAnPplu_8vDNZuGrbHclnw1S5FHzlYzhZGYRuuBts2ds8zB5PZFkOq5mSuJzNgXZzEHTBEyhV3Z3eWA9krDqc_oBZvLpyw389uNs59VO5U1RE",
    price: 0,
    duration: "3 hours",
    type: "event",
    location: "Ubud, Bali",
    rating: 4.7,
    badge: "WORKSHOP",
  },
  {
    id: "e3",
    name: "Campuhan Ridge Trek",
    description:
      "Sunrise trek through breathtaking ridge views and vibrant tropical flora.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAovueq7w0wRCIK3TItOD5uJlz9SQRhBcvI4qoeycW4LG1vaT2_L6Z8Mwx1S1YCYM5XdImX_9JwIy_rcUTfEBE-hn1NlJ_4j1QFvYF2AtobYiwBZPLbntohAx3-sAu_UUKjVcD0nT2rMd945UIyLrmEu3ndYqG696sKKtamz3aVBIGrQY8EfGwemtySDoqFR6CyKCnXmXGBSUFMj7BvqOyeJbSTTB9NaIehHunmEoYhEJeKKTQjF4OIgGamO4Nu04sjdL6IPBQ6qN0",
    price: 0,
    duration: "2.5 hours",
    type: "adventure",
    location: "Ubud, Bali",
    rating: 4.8,
    badge: "ADVENTURE",
  },
];

const FALLBACK_STAYS: Package[] = [
  {
    id: "s1",
    name: "Bamboo Haven Homestay",
    description:
      "Cozy traditional Balinese bungalow with carved wood beds and garden view.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9_WSyeaTbrx4y5DrCTyOKZ0gRhdXKMSymNKlm16jNhHoCChERrebk-c11pV9_iY9aIY3vDPjIe1YYkVm5ifUG2Y2APqXRTBu_7_NJXsnNa_8slIrpxHjTshA0vLSrZgeDDyS0_dREkmuceSpb50EUAJ_jsk_kZ-NOM5G786mkDpjZiSzOACB_lEB0t0ytSXnlpqCDPRn5O6_H4IjRlUy1dzvHNyknOWj2UtUfwyrS8iJiYiyBKaniHb6YMENvHl116BHenl81fz8",
    price: 450000,
    duration: "per night",
    type: "stay",
    location: "Sidemen, East Bali",
    rating: 4.92,
    amenities: ["Free WiFi", "Breakfast", "River View"],
  },
  {
    id: "s2",
    name: "The Elder's Residence",
    description:
      "Traditional open-air living area with rattan furniture and tropical garden view.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxtQadeGFNlat3eoRfnZYjggMH77L5u5crF6eGT6ew982CtuXK4NHhf9ScMDWsPDHN6m8Jly7Fj5EHQJ5cSKUoT4mfm-yKhy_cBdq1tmthCu6xTrwkphxdy7H4okHYOeaqabfvSz_uFz25m1_CK9I5hBzUGsgZmC27btXaoVTxPijFqvZYynbtkX7zY0GxchQYB62c2_Gf4USxqSKsguxT-t5O48KUuXAWbR0KYqy0G6bxprW2p4Z3gNhWUgVHAGwJHjyc6wW8Lwo",
    price: 380000,
    duration: "per night",
    type: "stay",
    location: "Penglipuran Village",
    rating: 4.85,
    amenities: ["AC", "Dinner Inc.", "Free Bike"],
  },
  {
    id: "s3",
    name: "Ubud Eco Sanctuary",
    description:
      "Modern eco-resort villa with a private pool overlooking emerald green rice terraces.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGccTvGrosRWPorB8XSqI8ZGWviJmVDHcZdPPtasxNp3fvo0SP10_8GMnV8p5C-7rwxJFYIs4rPGeraQCgmLYrQya_pOJjgugwtc0KYYmiIjq7YVd1KxXQLW2piQgdEVwC3BGlLM-9jIfA57mqJ5EpL3DC7DX1jKaBnZ1lhIKLUobi5WpxcMr59KPyeOvyN82Kh_VD1pJIse8l2eYCda7PeTHHR2XRyyf0qwTmmi4VPdw2JyI_rccwXs-sfsjkdq5ikvzdgdQYvVg",
    price: 820000,
    duration: "per night",
    type: "stay",
    location: "Tegalalang, Ubud",
    rating: 5.0,
    amenities: ["Pool", "Organic Garden", "Spa Services"],
  },
];

function SkeletonEvent() {
  return (
    <div className="animate-pulse snap-start min-w-[320px] md:min-w-100 rounded-xl bg-surface-container-high h-125" />
  );
}

function SkeletonStay() {
  return (
    <div className="animate-pulse rounded-xl bg-surface-container-lowest overflow-hidden">
      <div className="h-64 bg-surface-container-high" />
      <div className="p-6 space-y-4">
        <div className="h-5 bg-surface-container-high rounded w-3/4" />
        <div className="h-4 bg-surface-container-high rounded w-1/2" />
        <div className="h-4 bg-surface-container-high rounded w-full" />
      </div>
    </div>
  );
}

export function PopularPackages() {
  const { data, isLoading } = usePopularPackages();

  const events =
    data && data.filter((p) => p.type !== "stay").length > 0
      ? data.filter((p) => p.type !== "stay")
      : FALLBACK_EVENTS;

  const stays =
    data && data.filter((p) => p.type === "stay").length > 0
      ? data.filter((p) => p.type === "stay")
      : FALLBACK_STAYS;

  return (
    <>
      {/* Village Rituals & Events */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-extrabold text-on-surface font-headline">
            Village Rituals &amp; Events
          </h2>
          <button className="group flex items-center gap-2 font-bold text-primary">
            See All
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => <SkeletonEvent key={i} />)
            : events.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
        </div>
      </section>

      {/* Authentic Village Stays */}
      <section className="py-24 bg-surface-bright">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-on-surface mb-4 font-headline">
              Authentic Village Stays
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Skip the hotels and stay with the soul of the community. Every
              stay directly supports local families.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <SkeletonStay key={i} />
                ))
              : stays.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
        </div>
      </section>
    </>
  );
}
