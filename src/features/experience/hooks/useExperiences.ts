"use client";

import { useQuery } from "@tanstack/react-query";
import { getExperiences } from "../api";
import type { ExperienceFilters } from "../types";

interface UseExperiencesParams {
  page: number;
  limit: number;
  filters: ExperienceFilters;
}

export function useExperiences({
  page,
  limit,
  filters,
}: UseExperiencesParams) {
  return useQuery({
    queryKey: ["experiences", page, limit, filters],
    queryFn: () => getExperiences({ page, limit, filters }),
    placeholderData: (previousData) => previousData,
  });
}
