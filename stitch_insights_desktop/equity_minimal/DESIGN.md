```markdown
# Design System Specification: The Quiet Authority

This design system is built for high-stakes financial environments where clarity is a prerequisite and sophistication is the differentiator. Moving away from the "template" aesthetic, this system utilizes a high-end editorial approach—relying on tonal layering, precise typography, and intentional whitespace to create a sense of calm, professional "Quiet Authority."

---

### 1. Overview & Creative North Star: "The Digital Curator"
The Creative North Star for this system is **"The Digital Curator."** 

Unlike standard dashboards that clutter the screen with data "widgets," this system treats financial data as a curated exhibition. We break the "generic" grid by using **intentional asymmetry** and **tonal depth**. By utilizing extreme whitespace and a strict hierarchy of surfaces, we guide the user’s eye through complex data sets with the ease of an editorial spread in a premium journal.

---

### 2. Colors: Tonal Depth & Meaningful Accents
Our palette is a sophisticated blend of soft neutrals and high-performance financial accents.

*   **Primary (`#003d9b`):** Use for high-intent actions and brand presence.
*   **Secondary (`#006e2f`):** Reserved exclusively for positive financial growth and "success" states.
*   **Surface Logic:** Our neutrals are not just "grays"; they are a hierarchy of depth.

#### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off areas. Traditional borders create visual "noise" that traps data. Instead:
- Define boundaries through **background color shifts**. A `surface-container-low` (`#f2f4f6`) section sitting on a `surface` (`#f7f9fb`) background is enough to signify a new zone.
- Use **surface hierarchy** to nest elements. For example, a `surface-container-lowest` (`#ffffff`) card should sit on a `surface-container` (`#eceef0`) background to create a natural, "floating" separation.

#### The "Glass & Gradient" Rule
To elevate the UI beyond a standard flat design:
- **Glassmorphism:** Use for floating elements (like dropdowns or hovering menus). Combine a semi-transparent `surface` color with a `backdrop-blur` (20px+) to allow the underlying dashboard colors to bleed through.
- **Signature Textures:** For main Call-to-Actions, use a subtle linear gradient from `primary` (`#003d9b`) to `primary_container` (`#0052cc`). This provides a tactile "soul" to the component that flat hex codes lack.

---

### 3. Typography: Editorial Authority
We utilize a dual-typeface strategy to balance readability with high-end character.

*   **Display & Headlines (Manrope):** This is our "Editorial" voice. Manrope’s geometric yet warm proportions give headers a custom, architectural feel. Use `display-lg` (`3.5rem`) for hero metrics to command attention.
*   **Body & Labels (Inter):** Inter provides the "Functional" voice. It is highly legible at small sizes, perfect for dense financial tables and metadata.

**The Hierarchy Goal:** Use dramatic scale shifts. A `display-md` metric paired with a `label-sm` subtitle creates an authoritative, "Wall Street" aesthetic that feels intentional, not accidental.

---

### 4. Elevation & Depth: Tonal Layering
We do not use shadows to create "pop"; we use layers to create "presence."

*   **The Layering Principle:** Stacking is the primary way to show hierarchy. 
    *   *Level 0:* `background` (`#f7f9fb`)
    *   *Level 1:* `surface_container_low` (`#f2f4f6`) for sidebar backgrounds.
    *   *Level 2:* `surface_container_lowest` (`#ffffff`) for the primary data cards.
*   **Ambient Shadows:** If an element must float (e.g., a modal or a primary card), use a shadow with a 32px-48px blur at 6% opacity. The shadow color should be a tinted version of `on_surface` (`#191c1e`) to mimic natural light.
*   **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use the `outline_variant` (`#c3c6d6`) at **15% opacity**. Never use a 100% opaque border.

---

### 5. Components: Minimalist Refinement

#### Cards & Layouts
*   **Constraint:** Forbid divider lines within cards. 
*   **Implementation:** Use the **Spacing Scale** (e.g., `spacing-5` or `1.7rem`) to create "gutters" of air between content blocks. If separation is needed, use a subtle shift to `surface_container_high`.
*   **Rounding:** All cards must use `rounded-lg` (`1rem`) for a soft, premium feel.

#### Buttons
*   **Primary:** Gradient of `primary` to `primary_container`, `rounded-full` for high contrast against rectangular cards.
*   **Tertiary:** No background, no border. Use `on_surface_variant` with an icon. High-end design is often about what you *don't* show.

#### Input Fields
*   **Style:** `surface_container_lowest` background with a `ghost border`. 
*   **States:** On focus, transition the border to `surface_tint` and add a 4px soft glow. Labels must use `label-md` for precision.

#### Minimalist Sidebar
*   The sidebar should be `surface_container_low`. Do not use a vertical line to separate it from the main content; use the tonal shift and a generous `spacing-10` padding to define the edge.

---

### 6. Do’s and Don’ts

#### Do:
*   **Do** use `tertiary` (`#35445a`) for secondary text to create a softer, more sophisticated contrast than pure black.
*   **Do** lean into `surface_bright` for interactive "hover" states to create a subtle "lighting up" effect.
*   **Do** use asymmetrical layouts (e.g., a large card on the left, two smaller ones stacked on the right) to avoid a "bootstrap" look.

#### Don’t:
*   **Don't** use 1px dividers. If you feel you need a line, use 24px of whitespace instead.
*   **Don't** use standard "drop shadows" (0, 4, 10, 0). Use wide, expansive ambient blurs.
*   **Don't** cram data. If a card feels full, increase the card size or move data to a secondary view. In this system, **Air is Luxury.**

---

### 7. Implementation Note for Junior Designers
When building with this system, always ask: *"Is this element separated by a line or by light?"* Our goal is always to use light (color shifts) over lines. This ensures the dashboard feels like a high-end application rather than a spreadsheet.