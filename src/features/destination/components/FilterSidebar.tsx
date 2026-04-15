"use client";

import type { DestinationFilters } from "../types";

interface FilterSidebarProps {
  filters: DestinationFilters;
  onChange: (next: DestinationFilters) => void;
  onApply: () => void;
  isLoading?: boolean;
}

const ATMOSPHERES = ["Cultural", "Nature", "Craft", "Culinary"];

export function FilterSidebar({
  filters,
  onChange,
  onApply,
  isLoading,
}: FilterSidebarProps) {
  const selectedAtmospheres = filters.atmosphere ?? [];
  const minPrice = filters.priceMin ?? 200000;
  const maxPrice = filters.priceMax ?? 2500000;

  function toggleAtmosphere(value: string) {
    const exists = selectedAtmospheres.includes(value);
    const next = exists
      ? selectedAtmospheres.filter((item) => item !== value)
      : [...selectedAtmospheres, value];

    onChange({ ...filters, atmosphere: next });
  }

  return (
    <aside className="w-full md:w-72 md:sticky md:top-24 h-fit bg-surface-container-lowest rounded-xl p-5 shadow-[0_12px_40px_rgba(45,51,53,0.06)]">
      <h2 className="text-lg font-bold text-on-surface font-headline mb-5">
        Filter Villages
      </h2>

      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold text-on-surface mb-2">
            Village Name
          </p>
          <input
            type="text"
            value={filters.name ?? ""}
            onChange={(e) => onChange({ ...filters, name: e.target.value })}
            placeholder="Search by name"
            className="w-full rounded-lg bg-surface-container-low px-3 py-2.5 text-sm text-on-surface outline-none ring-0 border-none"
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-on-surface mb-2">
            Quick Access
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() =>
                onChange({
                  ...filters,
                  name: "",
                  atmosphere: [],
                  ratingMin: undefined,
                  priceMin: 200000,
                  priceMax: 2500000,
                })
              }
              className="rounded-full px-3 py-1.5 text-xs font-semibold bg-primary text-on-primary"
            >
              All Villages
            </button>
            <button
              onClick={() => onChange({ ...filters, ratingMin: 4.5 })}
              className="rounded-full px-3 py-1.5 text-xs font-semibold bg-surface-container-low text-on-surface"
            >
              Top Rated
            </button>
            <button
              onClick={() => onChange({ ...filters, atmosphere: ["Cultural"] })}
              className="rounded-full px-3 py-1.5 text-xs font-semibold bg-surface-container-low text-on-surface"
            >
              Categories
            </button>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-on-surface mb-2">
            Price Range
          </p>
          <div className="space-y-3">
            <input
              type="range"
              min={200000}
              max={2500000}
              step={50000}
              value={minPrice}
              onChange={(e) =>
                onChange({
                  ...filters,
                  priceMin: Number(e.target.value),
                  priceMax: Math.max(Number(e.target.value), maxPrice),
                })
              }
              className="w-full accent-primary"
            />
            <input
              type="range"
              min={200000}
              max={2500000}
              step={50000}
              value={maxPrice}
              onChange={(e) =>
                onChange({
                  ...filters,
                  priceMax: Number(e.target.value),
                  priceMin: Math.min(minPrice, Number(e.target.value)),
                })
              }
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-xs text-on-surface-variant">
              <span>IDR {minPrice.toLocaleString("id-ID")}</span>
              <span>IDR {maxPrice.toLocaleString("id-ID")}</span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-on-surface mb-2">
            Atmosphere
          </p>
          <div className="flex flex-wrap gap-2">
            {ATMOSPHERES.map((item) => {
              const active = selectedAtmospheres.includes(item);
              return (
                <button
                  key={item}
                  onClick={() => toggleAtmosphere(item)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                    active
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container-low text-on-surface"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-on-surface mb-2">
            Minimum Rating
          </p>
          <div className="space-y-2 text-sm text-on-surface">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={filters.ratingMin === 4}
                onChange={() => onChange({ ...filters, ratingMin: 4 })}
                className="accent-primary"
              />
              4.0 and above
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={filters.ratingMin === 4.5}
                onChange={() => onChange({ ...filters, ratingMin: 4.5 })}
                className="accent-primary"
              />
              4.5 and above
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={filters.ratingMin === undefined}
                onChange={() => onChange({ ...filters, ratingMin: undefined })}
                className="accent-primary"
              />
              All ratings
            </label>
          </div>
        </div>

        <button
          onClick={onApply}
          disabled={isLoading}
          className="w-full rounded-full bg-primary text-on-primary px-4 py-2.5 font-semibold disabled:opacity-60"
        >
          {isLoading ? "Applying..." : "Apply Filters"}
        </button>
      </div>
    </aside>
  );
}
