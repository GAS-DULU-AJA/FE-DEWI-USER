"use client";

import { useQuery } from "@tanstack/react-query";
import { getPopularPackages } from "../api";

export function usePopularPackages() {
  return useQuery({
    queryKey: ["packages", "popular"],
    queryFn: getPopularPackages,
    placeholderData: [],
  });
}
