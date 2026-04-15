// Global shared types
// Add project-wide types here as needed

export type ID = string;

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
