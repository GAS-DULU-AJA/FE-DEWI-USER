"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";

const experienceOptions = [
  { label: "Cultural tour", value: "cultural-tour" },
  { label: "Homestay retreat", value: "homestay-retreat" },
  { label: "Village culinary class", value: "culinary-class" },
  { label: "Nature trekking", value: "nature-trekking" },
  { label: "Craft workshop", value: "craft-workshop" },
];

interface SearchBarProps {
  village: string;
  experience: string;
  startDate: string;
  endDate: string;
  onVillageChange: (value: string) => void;
  onExperienceChange: (value: string) => void;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
  onSearch: () => void;
}

export function SearchBar({
  village,
  experience,
  startDate,
  endDate,
  onVillageChange,
  onExperienceChange,
  onStartDateChange,
  onEndDateChange,
  onSearch,
}: SearchBarProps) {
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);

  const selectedExperienceLabel = useMemo(() => {
    return (
      experienceOptions.find((option) => option.value === experience)?.label ??
      "Choose experience"
    );
  }, [experience]);

  return (
    <div className="mx-auto mt-12 max-w-5xl rounded-[32px] bg-white/86 p-3 shadow-[0_12px_40px_rgba(45,51,53,0.06)] backdrop-blur-2xl md:p-4">
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.95fr)_minmax(0,1.2fr)_auto] lg:items-center">
        <div className="flex min-h-[84px] items-center gap-3 rounded-[24px] bg-surface-container-low px-5 py-4">
        <svg
          className="w-5 h-5 text-primary shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
          <div className="flex-1 text-left">
            <div className="text-xs uppercase tracking-[0.12em] text-on-surface-variant">
              Village
            </div>
            <Input
              className="h-auto w-full border-none bg-transparent px-0 pt-1 text-on-surface shadow-none focus-visible:ring-0"
              placeholder="Search village"
              value={village}
              onChange={(e) => onVillageChange(e.target.value)}
            />
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsExperienceOpen((open) => !open)}
            className="flex min-h-[84px] w-full items-center gap-3 rounded-[24px] bg-surface-container-low px-5 py-4 text-left text-on-surface transition-colors hover:bg-surface-container"
          >
            <svg
              className="w-5 h-5 text-primary shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-[0.12em] text-on-surface-variant">
                Experience
              </div>
              <div className="pt-1 font-medium">{selectedExperienceLabel}</div>
            </div>
            <svg
              className={`size-4 text-on-surface-variant transition-transform ${
                isExperienceOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isExperienceOpen ? (
            <div className="absolute left-0 right-0 top-[calc(100%+12px)] z-20 rounded-[24px] bg-surface-container-lowest p-3 shadow-[0_12px_40px_rgba(45,51,53,0.08)]">
              <div className="grid gap-2">
                {experienceOptions.map((option) => {
                  const isSelected = option.value === experience;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        onExperienceChange(option.value);
                        setIsExperienceOpen(false);
                      }}
                      className={`rounded-2xl px-4 py-3 text-left transition-colors ${
                        isSelected
                          ? "bg-secondary-container text-on-secondary-container"
                          : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>

        <div className="rounded-[24px] bg-surface-container-low p-2.5">
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="flex min-h-[68px] items-center gap-3 rounded-[20px] bg-surface-container-lowest px-4 py-3">
              <svg
                className="w-5 h-5 text-primary shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div className="min-w-0 flex-1 text-left">
                <div className="text-xs uppercase tracking-[0.12em] text-on-surface-variant">
                  Start date
                </div>
                <Input
                  className="h-auto w-full border-none bg-transparent px-0 pt-1 text-on-surface shadow-none focus-visible:ring-0"
                  type="date"
                  value={startDate}
                  onChange={(e) => onStartDateChange(e.target.value)}
                />
              </div>
            </div>

            <div className="flex min-h-[68px] items-center gap-3 rounded-[20px] bg-surface-container-lowest px-4 py-3">
              <svg
                className="w-5 h-5 text-primary shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div className="min-w-0 flex-1 text-left">
                <div className="text-xs uppercase tracking-[0.12em] text-on-surface-variant">
                  End date
                </div>
                <Input
                  className="h-auto w-full border-none bg-transparent px-0 pt-1 text-on-surface shadow-none focus-visible:ring-0"
                  type="date"
                  value={endDate}
                  onChange={(e) => onEndDateChange(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onSearch}
          className="min-h-[84px] w-full rounded-full bg-[linear-gradient(180deg,#2d6a4f_0%,#1f5e44_100%)] px-8 py-4 font-bold text-on-primary shadow-[0_12px_30px_rgba(45,106,79,0.16)] transition-all hover:opacity-95 active:scale-95 lg:w-auto"
        >
          Search
        </button>
      </div>
    </div>
  );
}
