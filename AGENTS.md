## Core Stack Rules

- Framework: Next.js (App Router)
- UI: shadcn/ui
- Styling: Tailwind CSS
- Server State: TanStack Query
- Client State: Zustand (ONLY if shared across >2 pages/components)
- Forms: React Hook Form + Zod
- Networking: fetch (via centralized fetcher)

---

## Architecture Rules

### 1. Follow Feature-Based Structure

```
features/<feature>/
  components/
  hooks/
  api/
  store/
  types/
```

❌ DO NOT:

- Put business logic in components
- Call API directly inside components

✅ DO:

- Use hooks for logic
- Use api layer for network calls

---

### 2. Server State (TanStack Query)

Use for:

- API data
- Caching
- Async state

Rules:

- Always use `useQuery` / `useMutation`
- Use consistent query keys
- Never fetch directly in component

Example:

```ts
export const useDestinations = () => {
  return useQuery({
    queryKey: ["destinations"],
    queryFn: getDestinations,
  });
};
```

---

### 3. Client State (Zustand)

Use ONLY if:

- Shared across >2 pages/components

Examples:

- Auth state
- Booking draft

❌ DO NOT use Zustand for:

- API data
- Temporary local UI state

---

### 4. Component Rules

- Use shadcn components as base
- Keep components small and reusable
- Separate container vs presentational

Example:

- `DestinationCard.tsx` → UI only
- `useDestinations.ts` → logic

---

### 5. Styling Rules

- Use Tailwind ONLY
- Avoid custom CSS unless necessary
- Follow consistent spacing (p-4, gap-4, etc)

---

### 6. Form Rules

- Use React Hook Form
- Validate with Zod

Example:

```ts
const schema = z.object({
  email: z.string().email(),
});
```

---

### 7. API Rules

Use centralized fetcher:

```ts
export const fetcher = async (url: string, options?: RequestInit) => {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error("Error");
  return res.json();
};
```

---

## Page Development Rules

Each page MUST follow its spec:

- PAGE-001 → Home
- PAGE-002 → Destinations
- etc.

### Workflow

1. Read spec.md (PAGE-XXX)
2. Read design (code.html)
3. Break into components
4. Implement feature structure
5. Connect TanStack Query

---

## HTML → React Conversion Rules

When using design HTML:

- DO NOT copy directly
- Break into reusable components
- Replace elements:
  - `<button>` → `Button`
  - `<input>` → `Input`

---

## SEO Rules (Next.js)

- Use `generateMetadata()` for pages
- Ensure SSR/SSG used correctly

---

## Anti-Patterns (STRICTLY FORBIDDEN)

❌ Fetch inside component
❌ Global state for everything
❌ Large monolithic components
❌ Mixing business logic with UI
❌ Copy-paste HTML without refactor

---

## Output Expectation for AI Agent

When generating code, MUST:

- Follow folder structure
- Use TypeScript
- Use TanStack Query for API
- Use Zustand only when needed
- Use shadcn components
- Keep code modular and clean

---

## Example Task Instruction

"Implement PAGE-002"

Agent should:

1. Create feature: `features/destination`
2. Add API layer
3. Add hook (TanStack Query)
4. Build components
5. Connect to page route

---

## Summary

This agent guideline ensures:

- Clean architecture
- Scalable system
- Consistent code generation
- Production-ready output
