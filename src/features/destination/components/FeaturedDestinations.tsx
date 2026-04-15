"use client";

import Image from "next/image";
import Link from "next/link";
import { useFeaturedDestinations } from "../hooks/useFeaturedDestinations";
import { DestinationCard } from "./DestinationCard";

const FALLBACK_DESTINATIONS = [
  {
    id: "1",
    name: "Ubud Traditional Village",
    slug: "ubud-traditional-village",
    description:
      "Immerse yourself in the cultural heart of Bali, where ancient rituals meet contemporary art in a lush jungle setting.",
    location: "Ubud, Bali",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBklOgZNAZZGM2-P7s2ZvFELBDS2oiK25t27HZj7rnBaFuQGltFfBXZFClosRMSuF4HVU_ttmEOoXlnWWBUgBjscMmrO9E6gssiw2uXiMzoTcLBttwk9nSpRxfBroN7WUMTtiOrolRkkGkgpBq4yhpTZ_SHK_dIe6BqIqTQegONoYqQisOANpxM_yQVFJn1FfXxwGtUoD7HVKL4La6yLWH_UEfywA6KNE0mowkrv-MUstKuXfmMpfkcOhReINC7rOLSO1oOHpy1gDE",
    category: ["Arts", "Culture"],
    rating: 4.9,
    reviewCount: 342,
    isFeatured: true,
  },
  {
    id: "2",
    name: "Sidemen Valley",
    slug: "sidemen-valley",
    description:
      "Pristine river valleys and traditional weaving workshops under the shadow of Mt. Agung.",
    location: "Sidemen, East Bali",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBo7gvxaWeZdwfAsfPK_Ss144ifBvTfcwud7NaFp3d1XAppcbYwfwgPop1nfLMCre749tDsG68kGyYG8aLlZOXQJcaTIncaiAUYEfLf7NF_P6RCCulF5Yj_KQ6JdbX2l6KUfkOviKQNXKyf9YO6hCNHykxHgM1IR4Vw1roug6j0l0PSqn8frlzBqOD4ik1KX4dccM803ajdO7hhKDHjQldAKMrILHPbk3tutbq5qrPssjZ4LRrMJ2Um_50SJY_Ir2FR6e2f_lC_XWw",
    category: ["Weaving", "Nature"],
    rating: 4.7,
    reviewCount: 198,
    isFeatured: true,
  },
  {
    id: "3",
    name: "Penglipuran Heritage",
    slug: "penglipuran-heritage",
    description:
      "Known as the world's cleanest village, a masterpiece of bamboo architecture and heritage.",
    location: "Bangli, Bali",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOH6W1Nsnlt4YyNNhxiVjhD-GJLFGl1j_LpOhPOnss3Awx0JG68y_1HCgqOCCRwnfjMmGj4arZ0etmgA022OcBwFO5v07BxRXRfZ3qsofFtC-vu1CyheJaOM3z6oUUr6600q6kJQv727NUDxF3sg3ftviQet-HvsPmPxvjWUOiRg3kxs2aO4Z2gcmBCoDwN-OUrNo9aRzkYVwVpJEEeZ76Dbt8xBKXPpzStZDtAO5jKXHGQpAC3Wa1Iw89TcY_SWaPJv_h6P95ZuY",
    category: ["Heritage", "Architecture"],
    rating: 4.8,
    reviewCount: 276,
    isFeatured: true,
  },
];

function SkeletonLarge() {
  return (
    <div className="animate-pulse rounded-xl bg-surface-container-lowest overflow-hidden">
      <div className="aspect-16/10 bg-surface-container-high" />
      <div className="p-8 space-y-4">
        <div className="h-6 bg-surface-container-high rounded w-3/4" />
        <div className="h-4 bg-surface-container-high rounded w-full" />
        <div className="h-4 bg-surface-container-high rounded w-2/3" />
      </div>
    </div>
  );
}

function SkeletonSmall() {
  return (
    <div className="animate-pulse flex gap-4 bg-surface-container-lowest p-4 rounded-xl">
      <div className="w-32 h-32 bg-surface-container-high rounded-lg shrink-0" />
      <div className="flex-1 space-y-3 py-2">
        <div className="h-4 bg-surface-container-high rounded w-3/4" />
        <div className="h-3 bg-surface-container-high rounded w-full" />
        <div className="h-3 bg-surface-container-high rounded w-2/3" />
      </div>
    </div>
  );
}

export function FeaturedDestinations() {
  const { data, isLoading } = useFeaturedDestinations();

  const destinations = data && data.length > 0 ? data : FALLBACK_DESTINATIONS;
  const [featured, ...rest] = destinations;

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl font-extrabold text-on-surface mb-4 font-headline">
              The Village Collection
            </h2>
            <p className="text-on-surface-variant max-w-md">
              Discover hand-picked destinations that offer deep cultural
              immersion and breathtaking landscapes.
            </p>
          </div>
          <Link
            href="/destinations"
            className="bg-surface-container-lowest text-on-surface px-8 py-3 rounded-full hover:bg-surface-bright transition-colors font-semibold self-start md:self-auto"
          >
            View All Villages
          </Link>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          {/* Large featured card */}
          <div className="md:col-span-7">
            {isLoading ? (
              <SkeletonLarge />
            ) : featured ? (
              <DestinationCard destination={featured} size="large" />
            ) : null}
          </div>

          {/* Small cards column */}
          <div className="md:col-span-5 grid gap-6">
            {isLoading ? (
              <>
                <SkeletonSmall />
                <SkeletonSmall />
              </>
            ) : (
              <>
                {rest.slice(0, 2).map((dest) => (
                  <DestinationCard
                    key={dest.id}
                    destination={dest}
                    size="small"
                  />
                ))}
                {/* Suggest a Village card */}
                <div className="group cursor-pointer flex gap-4 bg-surface-container-lowest p-4 rounded-xl shadow-[0_12px_40px_rgba(45,51,53,0.06)] hover:shadow-lg transition-all duration-300">
                  <div className="w-32 h-32 bg-primary/5 flex items-center justify-center rounded-lg border-2 border-dashed border-primary/20 group-hover:border-primary/40 transition-colors shrink-0">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-lg font-bold mb-1 font-headline">
                      Suggest a Village
                    </h4>
                    <p className="text-sm text-on-surface-variant line-clamp-2">
                      Know a hidden gem? Help us expand our sustainable tourism
                      network.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
