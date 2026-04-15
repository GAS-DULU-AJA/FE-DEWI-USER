"use client";

import { useQuery } from "@tanstack/react-query";
import { getFeaturedDestinations } from "../api";

export function useFeaturedDestinations() {
  return useQuery({
    queryKey: ["destinations", "featured"],
    queryFn: getFeaturedDestinations,
    placeholderData: [],
  });
}
