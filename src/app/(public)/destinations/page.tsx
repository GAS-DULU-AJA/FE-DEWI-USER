"use client";

import { useMemo, useState } from "react";
import { DestinationCard } from "@/features/destination/components/DestinationCard";
import { FilterSidebar } from "@/features/destination/components/FilterSidebar";
import { Footer } from "@/features/destination/components/Footer";
import { Pagination } from "@/features/destination/components/Pagination";
import { useDestinations } from "@/features/destination/hooks/useDestinations";
import type {
  DestinationFilters,
  DestinationSort,
} from "@/features/destination/types";

const PAGE_SIZE = 9;

const DEFAULT_FILTERS: DestinationFilters = {
  name: "",
  atmosphere: [],
  ratingMin: undefined,
  priceMin: 200000,
  priceMax: 2500000,
  sortBy: "recommended",
};

function DestinationGridSkeleton() {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden animate-pulse">
      <div className="aspect-4/5 bg-surface-container-high" />
      <div className="p-5 space-y-3">
        <div className="h-5 rounded bg-surface-container-high w-2/3" />
        <div className="h-4 rounded bg-surface-container-high w-1/2" />
        <div className="h-10 rounded-full bg-surface-container-high w-full" />
      </div>
    </div>
  );
}

export default function DestinationsPage() {
  const [page, setPage] = useState(1);
  const [draftFilters, setDraftFilters] =
    useState<DestinationFilters>(DEFAULT_FILTERS);
  const [appliedFilters, setAppliedFilters] =
    useState<DestinationFilters>(DEFAULT_FILTERS);

  const { data, isLoading, isFetching } = useDestinations({
    page,
    limit: PAGE_SIZE,
    filters: appliedFilters,
  });

  const totalResults = data?.total ?? 0;
  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(totalResults / PAGE_SIZE)),
    [totalResults],
  );

  const destinations = data?.data ?? [];

  function handleApplyFilters() {
    setAppliedFilters(draftFilters);
    setPage(1);
  }

  function handleSortChange(value: DestinationSort) {
    setDraftFilters((prev) => ({ ...prev, sortBy: value }));
  }

  return (
    <>
      <main className="bg-surface min-h-screen pt-8 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-72 md:sticky md:top-24">
              <FilterSidebar
                filters={draftFilters}
                onChange={setDraftFilters}
                onApply={handleApplyFilters}
                isLoading={isFetching}
              />
            </div>

            <section className="flex-1 w-full">
              <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-3">
                Indonesia / Village Destinations
              </p>

              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface font-headline mb-3">
                    The Village Collection
                  </h1>
                  <p className="text-on-surface-variant max-w-2xl">
                    Browse curated village experiences across Indonesia with
                    filters for atmosphere, budget, and rating.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="text-sm text-on-surface-variant">
                    Showing {destinations.length} of {totalResults} villages
                  </span>
                  <select
                    className="bg-surface-container-low rounded-full px-4 py-2.5 text-sm text-on-surface outline-none"
                    value={
                      (draftFilters.sortBy ?? "recommended") as DestinationSort
                    }
                    onChange={(e) =>
                      handleSortChange(e.target.value as DestinationSort)
                    }
                  >
                    <option value="recommended">Recommended</option>
                    <option value="price_low">Price: Low to High</option>
                    <option value="price_high">Price: High to Low</option>
                    <option value="top_rated">Top Rated</option>
                  </select>
                </div>
              </div>

              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {Array.from({ length: PAGE_SIZE }).map((_, index) => (
                    <DestinationGridSkeleton key={index} />
                  ))}
                </div>
              ) : destinations.length === 0 ? (
                <div className="rounded-xl bg-surface-container-low p-8 text-center text-on-surface-variant">
                  No villages found for the selected filters.
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {destinations.map((destination) => (
                      <DestinationCard
                        key={destination.id}
                        destination={destination}
                        size="grid"
                      />
                    ))}
                  </div>

                  <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                    isLoading={isFetching}
                  />
                </>
              )}
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
