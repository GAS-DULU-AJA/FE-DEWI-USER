"use client";

import { Input } from "@/components/ui/input";

interface SearchBarProps {
  village: string;
  experience: string;
  date: string;
  onVillageChange: (value: string) => void;
  onExperienceChange: (value: string) => void;
  onDateChange: (value: string) => void;
  onSearch: () => void;
}

export function SearchBar({
  village,
  experience,
  date,
  onVillageChange,
  onExperienceChange,
  onDateChange,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="bg-white/90 backdrop-blur-lg p-3 md:p-4 rounded-xl md:rounded-full shadow-2xl flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mt-12 items-center">
      <div className="flex items-center gap-3 px-4 flex-1 border-b md:border-b-0 md:border-r border-outline-variant/30 w-full">
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
        <Input
          className="bg-transparent border-none shadow-none focus-visible:ring-0 text-on-surface w-full py-2 px-0"
          placeholder="Search village"
          value={village}
          onChange={(e) => onVillageChange(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-3 px-4 flex-1 border-b md:border-b-0 md:border-r border-outline-variant/30 w-full">
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
        <Input
          className="bg-transparent border-none shadow-none focus-visible:ring-0 text-on-surface w-full py-2 px-0"
          placeholder="Experience"
          value={experience}
          onChange={(e) => onExperienceChange(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-3 px-4 flex-1 w-full">
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
        <Input
          className="bg-transparent border-none shadow-none focus-visible:ring-0 text-on-surface w-full py-2 px-0"
          placeholder="Pick date"
          type="date"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
        />
      </div>

      <button
        onClick={onSearch}
        className="bg-primary text-on-primary w-full md:w-auto px-10 py-4 rounded-full font-bold hover:shadow-lg transition-all active:scale-95"
      >
        Search
      </button>
    </div>
  );
}
