"use client";

import { useQuery } from "@tanstack/react-query";
import { getDestinationBySlug } from "../api";
import type { Destination } from "../types";

interface UseDestinationDetailParams {
  slug: string;
  initialData?: Destination;
}

export function useDestinationDetail({
  slug,
  initialData,
}: UseDestinationDetailParams) {
  return useQuery({
    queryKey: ["destinations", "detail", slug],
    queryFn: () => getDestinationBySlug(slug),
    initialData,
    enabled: Boolean(slug),
  });
}
