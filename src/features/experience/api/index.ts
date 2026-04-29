import type {
  Experience,
  ExperienceFilters,
  ExperiencePriceRange,
  ExperiencesListResponse,
} from "../types";
import { MOCK_EXPERIENCES } from "./mockExperiences";

interface GetExperiencesParams {
  page: number;
  limit: number;
  filters: ExperienceFilters;
}

function matchesPriceRange(
  price: number,
  selectedRanges: ExperiencePriceRange[],
): boolean {
  if (selectedRanges.length === 0) {
    return true;
  }

  return selectedRanges.some((range) => {
    if (range === "budget") {
      return price <= 500000;
    }

    if (range === "mid") {
      return price > 500000 && price <= 1500000;
    }

    return price > 1500000;
  });
}

export async function getExperiences({
  page,
  limit,
  filters,
}: GetExperiencesParams): Promise<ExperiencesListResponse> {
  const filtered = MOCK_EXPERIENCES.filter((experience) => {
    const categoryMatch =
      filters.category === "all" || experience.category === filters.category;

    const priceMatch = matchesPriceRange(experience.price, filters.priceRanges);

    const ratingMatch = filters.ratingMin
      ? experience.rating >= filters.ratingMin
      : true;

    return categoryMatch && priceMatch && ratingMatch;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (b.rating !== a.rating) {
      return b.rating - a.rating;
    }

    return a.price - b.price;
  });

  const start = (page - 1) * limit;

  return {
    data: sorted.slice(start, start + limit),
    total: sorted.length,
    page,
    limit,
  };
}

export async function getExperienceBySlug(
  slug: string,
): Promise<Experience | null> {
  return MOCK_EXPERIENCES.find((experience) => experience.slug === slug) ?? null;
}
