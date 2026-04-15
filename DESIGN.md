# Design System Strategy: The Digital Pastoral

## 1. Overview & Creative North Star
The Creative North Star for this system is **"The Curated Sanctuary."** 

Unlike high-density travel platforms that overwhelm the user with "deals" and "noise," this design system treats village tourism as an editorial experience. We are moving away from the "catalog" aesthetic of Klook and Traveloka and moving toward a "luxury travel journal" feel. 

We achieve this through **Organic Asymmetry** and **Tonal Depth**. Instead of rigid grids, we use breathing room as a functional element. We break the "template" look by layering elements (e.g., an image slightly overlapping a card) and using a typographic scale that values negative space as much as the content itself.

---

## 2. Colors & Atmospheric Layering
The palette is rooted in the earth, using high-chroma greens only for critical actions.

*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning or containment. Boundaries must be defined through background color shifts. For example, a card using `surface_container_lowest` should sit on a `surface_container_low` section. The contrast is felt, not seen.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of physical layers.
    *   **Level 0 (Base):** `surface` (#f8f9fa) for the main page background.
    *   **Level 1 (Sections):** `surface_container_low` (#f1f4f5) for large content blocks or sidebars.
    *   **Level 2 (Interactive):** `surface_container_lowest` (#ffffff) for primary cards and input fields.
*   **The "Glass & Gradient" Rule:** To provide "soul," use subtle gradients for main CTAs (e.g., `primary` to `primary_dim`). For floating navigation bars or overlays, use Glassmorphism: `surface` at 80% opacity with a `24px` backdrop-blur.
*   **Signature Textures:** Use `on_surface_variant` (#5a6062) for captions and secondary text to soften the visual weight compared to the heavy `on_surface` (#2d3335).

---

## 3. Typography: The Editorial Voice
We use a dual-font pairing to balance modernity with readability.

*   **Display & Headlines (Plus Jakarta Sans):** This is our "Editorial" voice. Use `display-lg` (3.5rem) with tighter letter-spacing (-0.02em) for hero village names. It should feel authoritative yet welcoming.
*   **Body & Titles (Manrope):** Our "Functional" voice. Manrope provides excellent legibility at smaller scales. 
*   **Hierarchy as Identity:** Use `headline-sm` (1.5rem) for section headers, but ensure they are followed by generous vertical white space (at least 32px-48px) before the content begins. This reinforces the "Airy" requirement.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering**, not structural lines.

*   **The Layering Principle:** Place `surface_container_lowest` cards on a `surface_container_low` background. This creates a natural "lift" that mimics fine paper resting on a stone surface.
*   **Ambient Shadows:** When a card needs to float (e.g., a "Book Now" sticky bar), use an extra-diffused shadow: `box-shadow: 0 12px 40px rgba(45, 51, 53, 0.06)`. The shadow color is a 6% tint of `on_surface`, creating a natural ambient light effect.
*   **The "Ghost Border" Fallback:** If a container is on a white background and needs definition, use a "Ghost Border": `outline_variant` (#adb3b5) at **15% opacity**.
*   **Roundedness:** Stick strictly to the `xl` (1.5rem / 24px) for large image containers and `lg` (1rem / 16px) for standard cards to maintain a soft, approachable village aesthetic.

---

## 5. Component Logic

### Buttons
*   **Primary:** Background `primary` (#2d6a4f), text `on_primary` (#e6ffee). Use a subtle 4px vertical gradient to `primary_dim` for a tactile feel. Shape: `full` (pill-shaped) or `lg`.
*   **Secondary:** Background `secondary_container`, text `on_secondary_container`. No border.
*   **Tertiary:** Ghost style. `on_surface` text with no container. Use `primary` for the hover state text.

### Cards (Village & Experience Cards)
*   **Constraint:** Forbid divider lines. Use 24px padding and `surface_container_lowest` background. 
*   **Image Handling:** Images must use the `xl` (24px) corner radius. Use a subtle inner glow (1px white overlay at 10% opacity) to make images feel premium.

### Input Fields
*   **State:** Default state is `surface_container_high` with no border. On focus, transition to `primary` Ghost Border (20% opacity) and a 1px `primary` bottom weight.

### Chips (Filters)
*   Use `secondary_container` (#dae8be) for active states. Text should be `on_secondary_container`. Use `sm` (4px) or `md` (12px) roundedness to differentiate from buttons.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. If the left margin is 80px, try a 120px right margin for hero sections to create an editorial feel.
*   **Do** use "Low-Chroma" imagery. Photos of villages should be color-graded to match the `secondary` and `tertiary` earthy tones.
*   **Do** use `surface_bright` for full-screen transitions to keep the experience feeling "airy."

### Don’t:
*   **Don’t** use 100% black (#000000) for text. Always use `on_surface` (#2d3335) to keep the contrast soft and "pastoral."
*   **Don’t** use standard "drop shadows." If the shadow is visible as a "dark smudge," it is too heavy.
*   **Don’t** use dividers or lines to separate list items. Use 16px of vertical space or a subtle `surface_container_low` background on every second item (zebra striping without the stripes).