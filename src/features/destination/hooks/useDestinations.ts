"use client";

import { useQuery } from "@tanstack/react-query";
import { getDestinations } from "../api";
import type { DestinationFilters } from "../types";

interface UseDestinationsParams {
  page: number;
  limit: number;
  filters: DestinationFilters;
}

export function useDestinations({
  page,
  limit,
  filters,
}: UseDestinationsParams) {
  return useQuery({
    queryKey: ["destinations", page, limit, filters],
    queryFn: () => getDestinations({ page, limit, filters }),
    placeholderData: (previousData) => previousData,
  });
}
