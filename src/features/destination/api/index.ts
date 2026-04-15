import api from "@/lib/api";
import type {
  Destination,
  DestinationFilters,
  DestinationsListResponse,
  Package,
} from "../types";
import {
  getMockDestinationBySlug,
  MOCK_DESTINATIONS,
} from "./mockDestinations";

export async function getFeaturedDestinations(): Promise<Destination[]> {
  return api.get<Destination[]>("/destinations/featured");
}

export async function getPopularPackages(): Promise<Package[]> {
  return api.get<Package[]>("/packages/popular");
}

interface GetDestinationsParams {
  page: number;
  limit: number;
  filters?: DestinationFilters;
}

export async function getDestinationBySlug(
  slug: string,
): Promise<Destination | null> {
  return getMockDestinationBySlug(slug);
}

export async function getDestinations(
  params: GetDestinationsParams,
): Promise<DestinationsListResponse> {
  const { page, limit, filters } = params;

  const filtered = MOCK_DESTINATIONS.filter((destination) => {
    const nameMatch = filters?.name
      ? destination.name.toLowerCase().includes(filters.name.toLowerCase())
      : true;

    const atmosphereMatch =
      filters?.atmosphere && filters.atmosphere.length > 0
        ? filters.atmosphere.some((item) => destination.category.includes(item))
        : true;

    const ratingMatch = filters?.ratingMin
      ? destination.rating >= filters.ratingMin
      : true;

    const priceValue = destination.price ?? 0;
    const priceMinMatch = filters?.priceMin
      ? priceValue >= filters.priceMin
      : true;
    const priceMaxMatch = filters?.priceMax
      ? priceValue <= filters.priceMax
      : true;

    return (
      nameMatch &&
      atmosphereMatch &&
      ratingMatch &&
      priceMinMatch &&
      priceMaxMatch
    );
  });

  const sorted = [...filtered].sort((a, b) => {
    const sortBy = filters?.sortBy ?? "recommended";
    if (sortBy === "price_low") return (a.price ?? 0) - (b.price ?? 0);
    if (sortBy === "price_high") return (b.price ?? 0) - (a.price ?? 0);
    if (sortBy === "top_rated") return b.rating - a.rating;
    return b.reviewCount - a.reviewCount;
  });

  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    data: sorted.slice(start, end),
    total: sorted.length,
    page,
    limit,
  };
}
