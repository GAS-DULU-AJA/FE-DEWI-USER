"use client";

import { Landmark, Leaf, Map, Paintbrush, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import type {
  ExperienceCategory,
  ExperienceFilters,
  ExperiencePriceRange,
} from "../types";

interface ExperienceFilterSidebarProps {
  filters: ExperienceFilters;
  onChange: (nextFilters: ExperienceFilters) => void;
  onApply: () => void;
  isLoading?: boolean;
}

const categoryOptions: Array<{
  value: ExperienceCategory;
  label: string;
  icon: typeof Map;
}> = [
  { value: "all", label: "All Attractions", icon: Map },
  { value: "craft-workshops", label: "Craft Workshops", icon: Paintbrush },
  { value: "eco-trails", label: "Eco Trails", icon: Leaf },
  { value: "local-dining", label: "Local Dining", icon: Utensils },
  { value: "heritage-sites", label: "Heritage Sites", icon: Landmark },
];

const priceRangeOptions: Array<{
  value: ExperiencePriceRange;
  label: string;
}> = [
  { value: "budget", label: "Rp0 - Rp500.000" },
  { value: "mid", label: "Rp500.000 - Rp1.500.000" },
  { value: "premium", label: "Rp1.500.000+" },
];

const ratingOptions = [4.5, 4.0] as const;

export function ExperienceFilterSidebar({
  filters,
  onChange,
  onApply,
  isLoading,
}: ExperienceFilterSidebarProps) {
  function togglePriceRange(value: ExperiencePriceRange) {
    const nextRanges = filters.priceRanges.includes(value)
      ? filters.priceRanges.filter((item) => item !== value)
      : [...filters.priceRanges, value];

    onChange({
      ...filters,
      priceRanges: nextRanges,
    });
  }

  return (
    <aside className="flex h-full min-h-[calc(100vh-8rem)] flex-col rounded-[32px] bg-surface-container-low p-7 lg:sticky lg:top-28">
      <div className="mb-8">
        <h2 className="font-headline text-[2rem] font-bold tracking-[-0.03em] text-on-surface">
          Filter Experiences
        </h2>
        <p className="mt-2 text-base text-on-surface-variant">
          Refine your sanctuary
        </p>
      </div>

      <div className="space-y-2">
        {categoryOptions.map(({ value, label, icon: Icon }) => {
          const isActive = filters.category === value;

          return (
            <button
              key={value}
              type="button"
              onClick={() => onChange({ ...filters, category: value })}
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-200 ${
                isActive
                  ? "bg-surface-container-lowest text-primary shadow-[0_10px_30px_rgba(45,51,53,0.06)]"
                  : "text-on-surface-variant hover:bg-surface-container-lowest/60 hover:text-on-surface"
              }`}
            >
              <Icon className="size-5" />
              <span className="font-headline text-lg font-semibold">{label}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 space-y-8 pt-8">
        <section>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-on-surface-variant">
            Price Range
          </h3>
          <div className="mt-5 space-y-4">
            {priceRangeOptions.map((option) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-center gap-3 text-lg text-on-surface"
              >
                <input
                  type="checkbox"
                  className="size-5 rounded-md border-outline-variant text-primary focus:ring-primary"
                  checked={filters.priceRanges.includes(option.value)}
                  onChange={() => togglePriceRange(option.value)}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-on-surface-variant">
            Guest Rating
          </h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {ratingOptions.map((rating) => {
              const isActive = filters.ratingMin === rating;

              return (
                <button
                  key={rating}
                  type="button"
                  onClick={() =>
                    onChange({
                      ...filters,
                      ratingMin: filters.ratingMin === rating ? undefined : rating,
                    })
                  }
                  className={`rounded-full px-4 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-secondary-container text-on-secondary-container"
                      : "bg-surface-container-lowest text-on-surface-variant hover:bg-secondary-container/70 hover:text-on-secondary-container"
                  }`}
                >
                  {rating.toFixed(1)}+
                </button>
              );
            })}
          </div>
        </section>
      </div>

      <Button
        type="button"
        onClick={onApply}
        disabled={isLoading}
        className="mt-auto h-14 rounded-full bg-linear-to-b from-primary to-primary-dim px-6 text-base font-bold text-on-primary shadow-none"
      >
        {isLoading ? "Applying..." : "Apply Filters"}
      </Button>
    </aside>
  );
}
