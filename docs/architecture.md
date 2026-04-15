# Architecture.md

## Overview

This project follows a **feature-based modular architecture** inspired by Bulletproof React, adapted for **Next.js App Router**.

Goals:

- Scalability
- Maintainability
- Clear separation of concerns
- SEO optimization (SSR/SSG)

---

## High-Level Architecture

```
[ UI (Next.js + shadcn) ]
        ↓
[ Feature Layer (Business Logic) ]
        ↓
[ State Layer (Zustand) ]
        ↓
[ API Layer (fetch wrapper) ]
        ↓
[ Data Source (API / JSON Dummy) ]
```

---

## Folder Structure

```
src/
  app/                    # Next.js App Router
    (public)/
    (auth)/
    admin/

  features/               # Feature-based modules
    destination/
      components/
      hooks/
      api/
      store/
      types/

    booking/
    auth/
    itinerary/

  components/             # Shared UI components
  lib/                    # Core utilities (fetch, config)
  hooks/                  # Global hooks
  stores/                 # Global Zustand stores
  types/                  # Global types
  utils/                  # Helpers
  data/                   # Dummy JSON data
```

---

## Layer Responsibilities

### State Management Strategy

We separate **server state** and **client/global state** clearly:

- **TanStack Query (React Query)** → for server state (API data, caching, async)
- **Zustand** → for client/global state shared across multiple pages/components (>2)

---

### 1. App Layer (Next.js)

- Routing (App Router)
- Layouts
- SEO (metadata, OpenGraph)
- Server Components (default)

### 2. Feature Layer

Each feature is **self-contained**:

```
features/destination/
  components/
  api/
  hooks/
  store/
  types/
```

Responsibilities:

- Business logic
- UI specific to feature
- API calls
- Local state

---

### 3. Server State (TanStack Query)

Used for:

- Fetching API data
- Caching
- Background refetching
- Pagination / infinite scroll

Example:

```
features/destination/hooks/useDestinations.ts
```

```ts
import { useQuery } from "@tanstack/react-query";
import { getDestinations } from "../api/getDestinations";

export const useDestinations = () => {
  return useQuery({
    queryKey: ["destinations"],
    queryFn: getDestinations,
  });
};
```

Rules:

- No API call directly in components
- Always go through hooks
- Use query keys consistently

---

### 4. Client / Global State (Zustand)

Used ONLY when:

- State is shared across **more than 2 pages/components**
- Not suitable for server caching

Examples:

- Auth state (user, token)
- Booking draft
- UI state (global modal, theme)

#### Global Store

```
stores/useAuthStore.ts
```

#### Feature Store

```
features/booking/store/useBookingStore.ts
```

---

### 5. API Layer

### 1. App Layer (Next.js)

- Routing (App Router)
- Layouts
- SEO (metadata, OpenGraph)
- Server Components (default)

### 2. Feature Layer

Each feature is **self-contained**:

```
features/destination/
  components/
  api/
  hooks/
  store/
  types/
```

Responsibilities:

- Business logic
- UI specific to feature
- API calls
- Local state

---

### 3. State Management (Zustand)

Two types of state:

#### Global Store

```
stores/useAuthStore.ts
```

- user
- token

#### Feature Store

```
features/booking/store/useBookingStore.ts
```

- booking data

---

### 4. API Layer

Centralized fetch wrapper:

```ts
export const fetcher = async (url: string, options?: RequestInit) => {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error("API Error");
  return res.json();
};
```

Feature API example:

```
features/destination/api/getDestinations.ts
```

---

### 5. UI Layer (shadcn)

- Shared UI in `/components`
- Feature UI in `/features/*/components`

Principles:

- Reusable
- Stateless when possible
- Composition over inheritance

---

## Rendering Strategy (SEO)

### SSG (Static)

Used for:

- Home
- Destination list

```
export const revalidate = 60;
```

### SSR (Dynamic)

Used for:

- Destination detail
- Booking

### CSR (Client)

Used for:

- Forms
- Interactive UI

---

## State Flow

```
UI → Hook → Zustand Store → API → Store Update → UI
```

---

## Form Handling

Using React Hook Form + Zod

```
Form → Zod Validation → Submit → API → Response
```

---

## Authentication Flow

```
Login → API → Token → Zustand → Protected Routes
```

Middleware:

```
middleware.ts
```

- Protect `/admin`

---

## Data Strategy

### Development

- Use `/data/*.json`

### Production

- Replace with real API

---

## Naming Conventions

- Components: PascalCase
- Hooks: useX
- Stores: useXStore
- API: verb + entity

---

## Key Principles

- Feature isolation
- Minimal global state
- Server-first (Next.js)
- Co-location of logic
- Type safety

---

## Future Improvements

- Add caching layer (React Query / SWR)
- Add error boundary
- Add logging system
- Add role-based access middleware

---

## Summary

This architecture ensures:

- Clean separation of concerns
- Easy scalability
- SEO-friendly rendering
- Maintainable codebase aligned with modern React standards
