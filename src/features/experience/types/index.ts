export type ExperienceCategory =
  | "all"
  | "craft-workshops"
  | "eco-trails"
  | "local-dining"
  | "heritage-sites";

export type ExperiencePriceRange = "budget" | "mid" | "premium";

export interface Experience {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription?: string[];
  location: string;
  address?: string;
  image: string;
  heroImage?: string;
  map?: ExperienceMap;
  rating: number;
  price: number;
  category: Exclude<ExperienceCategory, "all">;
  facilities?: ExperienceFacility[];
  bookingHighlights?: ExperienceBookingHighlight[];
  sustainabilityNote?: ExperienceSustainabilityNote;
  contributionNote?: string;
}

export interface ExperienceMap {
  lat: number;
  lng: number;
  zoom: number;
}

export interface ExperienceFacility {
  id: string;
  icon: string;
  label: string;
}

export interface ExperienceBookingHighlight {
  id: string;
  icon: string;
  label: string;
}

export interface ExperienceSustainabilityNote {
  title: string;
  description: string;
}

export interface ExperienceFilters {
  category: ExperienceCategory;
  priceRanges: ExperiencePriceRange[];
  ratingMin?: number;
}

export interface ExperiencesListResponse {
  data: Experience[];
  total: number;
  page: number;
  limit: number;
}
