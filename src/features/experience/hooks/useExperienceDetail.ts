"use client";

import { useQuery } from "@tanstack/react-query";
import { getExperienceBySlug } from "../api";
import type { Experience } from "../types";

interface UseExperienceDetailParams {
  slug: string;
  initialData?: Experience;
}

export function useExperienceDetail({
  slug,
  initialData,
}: UseExperienceDetailParams) {
  return useQuery({
    queryKey: ["experiences", "detail", slug],
    queryFn: () => getExperienceBySlug(slug),
    initialData,
    enabled: Boolean(slug),
  });
}
