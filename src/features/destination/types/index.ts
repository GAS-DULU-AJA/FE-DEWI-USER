export interface Destination {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  history?: string;
  badge?: string;
  location: string;
  address?: string;
  image: string;
  gallery?: string[];
  map?: DestinationMap;
  itinerary?: DestinationItineraryItem[];
  booking?: DestinationBookingInfo;
  practicalInfo?: DestinationPracticalInfo;
  facilities?: DestinationFacility[];
  highlightedAttractions?: DestinationAttraction[];
  upcomingEvents?: DestinationEvent[];
  localProducts?: DestinationLocalProduct[];
  homestays?: DestinationHomestay[];
  category: string[];
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  price?: number;
}

export interface DestinationMap {
  lat: number;
  lng: number;
  label: string;
}

export interface DestinationItineraryItem {
  id: string;
  time: string;
  title: string;
  description: string;
}

export interface DestinationBookingInfo {
  duration: string;
  groupSize: string;
  includes: string[];
}

export interface DestinationPracticalInfo {
  address: string;
  phone: string;
  socials: DestinationSocialLink[];
}

export interface DestinationSocialLink {
  label: string;
  href: string;
}

export interface DestinationFacility {
  id: string;
  icon: string;
  label: string;
}

export interface DestinationAttraction {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface DestinationEvent {
  id: string;
  day: string;
  month: string;
  title: string;
  description: string;
}

export interface DestinationLocalProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface DestinationHomestay {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  price: number;
  rating: number;
  amenities: string[];
}

export type DestinationSort =
  | "recommended"
  | "price_low"
  | "price_high"
  | "top_rated";

export interface DestinationFilters {
  name?: string;
  atmosphere?: string[];
  ratingMin?: number;
  priceMin?: number;
  priceMax?: number;
  sortBy?: DestinationSort;
}

export interface DestinationsListResponse {
  data: Destination[];
  total: number;
  page: number;
  limit: number;
}

export type PackageType = "ritual" | "event" | "adventure" | "stay";

export interface Package {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  type: PackageType;
  location: string;
  rating: number;
  amenities?: string[];
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}
