"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Footer } from "@/features/destination/components/Footer";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceFilterSidebar } from "./ExperienceFilterSidebar";
import { useExperiences } from "../hooks/useExperiences";
import type { ExperienceFilters } from "../types";

const PAGE_SIZE = 6;

const DEFAULT_FILTERS: ExperienceFilters = {
  category: "all",
  priceRanges: [],
  ratingMin: 4.5,
};

function ExperienceGridSkeleton() {
  return (
    <div className="overflow-hidden rounded-[28px] bg-surface-container-lowest shadow-[0_18px_48px_rgba(45,51,53,0.04)]">
      <div className="aspect-[4/3] animate-pulse bg-surface-container-high" />
      <div className="space-y-4 p-7">
        <div className="h-8 w-2/3 animate-pulse rounded-xl bg-surface-container-high" />
        <div className="h-5 w-1/2 animate-pulse rounded-xl bg-surface-container-high" />
        <div className="h-14 w-full animate-pulse rounded-full bg-surface-container-high" />
      </div>
    </div>
  );
}

interface ExperiencePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}

function ExperiencePagination({
  currentPage,
  totalPages,
  onPageChange,
  isLoading,
}: ExperiencePaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-16 flex items-center justify-center gap-3">
      <button
        type="button"
        aria-label="Previous page"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || isLoading}
        className="inline-flex size-11 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-surface-container-low disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft className="size-5" />
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          disabled={isLoading}
          className={`inline-flex size-14 items-center justify-center rounded-full text-lg font-semibold transition-colors ${
            currentPage === page
              ? "bg-primary text-on-primary"
              : "text-on-surface hover:bg-surface-container-low"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        aria-label="Next page"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isLoading}
        className="inline-flex size-11 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-surface-container-low disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}

export function ExperienceListingPage() {
  const [page, setPage] = useState(1);
  const [draftFilters, setDraftFilters] =
    useState<ExperienceFilters>(DEFAULT_FILTERS);
  const [appliedFilters, setAppliedFilters] =
    useState<ExperienceFilters>(DEFAULT_FILTERS);

  const { data, isLoading, isFetching } = useExperiences({
    page,
    limit: PAGE_SIZE,
    filters: appliedFilters,
  });

  const experiences = data?.data ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  function handleApplyFilters() {
    setAppliedFilters(draftFilters);
    setPage(1);
  }

  return (
    <>
      <main className="min-h-screen bg-surface px-4 pb-24 pt-8 md:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1920px] gap-8 xl:grid-cols-[320px_minmax(0,1fr)]">
          <ExperienceFilterSidebar
            filters={draftFilters}
            onChange={setDraftFilters}
            onApply={handleApplyFilters}
            isLoading={isFetching}
          />

          <section className="rounded-[36px] bg-surface px-3 py-4 md:px-6 xl:px-8">
            <header className="mb-12 max-w-5xl">
              <h1 className="font-headline text-5xl font-extrabold tracking-[-0.04em] text-on-surface md:text-6xl">
                All Attractions
              </h1>
              <p className="mt-5 max-w-3xl text-xl leading-relaxed text-on-surface-variant md:text-2xl">
                Discover the hidden rhythms of rural life through our curated
                collection of sanctuary experiences.
              </p>
            </header>

            {isLoading ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-3">
                {Array.from({ length: PAGE_SIZE }).map((_, index) => (
                  <ExperienceGridSkeleton key={index} />
                ))}
              </div>
            ) : experiences.length === 0 ? (
              <div className="rounded-[28px] bg-surface-container-low p-10 text-center text-lg text-on-surface-variant">
                No experiences match the selected filters.
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-3">
                  {experiences.map((experience) => (
                    <ExperienceCard key={experience.id} experience={experience} />
                  ))}
                </div>

                <ExperiencePagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={setPage}
                  isLoading={isFetching}
                />
              </>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
