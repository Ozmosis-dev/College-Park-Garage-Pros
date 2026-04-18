# Design System Document

## 1. Overview & Creative North Star: "The Architectural Guard"
This design system is built to project a sense of immovable reliability and technical precision. Moving away from the "cluttered contractor" aesthetic, we embrace a **Creative North Star of "The Architectural Guard."** 

This vision balances the heavy, structural security of garage door engineering with an editorial-grade clarity. We break the standard service-template look by utilizing wide horizontal bands, intentional asymmetry in image placement, and a high-contrast typography scale that feels more like a premium architectural journal than a simple repair site. We use "breathing room" (generous white space) not just as a design choice, but as a psychological tool to lower the user's stress during a home repair emergency.

---

## 2. Colors: Depth Through Tonal Sophistication
Our palette is anchored by the deep authority of Navy and the urgent action of Vibrant Red. To achieve a high-end feel, we move beyond flat blocks of color.

*   **Primary (#00236f) & Primary-Container (#1e3a8a):** Used to establish the foundation of trust. Use the container variant for large-scale sections to create a "shelter" effect for content.
*   **Secondary (#bb0112) & Secondary-Container (#dc2626):** Reserved strictly for high-priority CTAs and critical status indicators.
*   **The "No-Line" Rule:** To maintain an editorial feel, **1px solid borders are prohibited** for defining sections. Instead, boundaries must be created through background shifts. For example, transition from a `surface` (#f7f9fb) section to a `surface-container-low` (#f2f4f6) section to denote a change in topic.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of physical layers. A `surface-container-lowest` (#ffffff) card should sit on a `surface-container` (#eceef0) background to create natural depth without visual noise.
*   **Signature Textures:** For Hero backgrounds and Primary CTAs, use a subtle linear gradient (from `primary` to `primary_container`). This prevents the design from feeling "hollow" and adds a metallic, professional sheen reminiscent of high-quality garage door panels.

---

## 3. Typography: The Authoritative Voice
We use a dual-font strategy to balance geometric precision with high-readability.

*   **Display & Headline (Manrope):** This is our "Architectural" face. Manrope’s geometric builds feel engineered and modern. Use `display-lg` for hero statements to command attention.
*   **Title & Body (Inter):** Inter provides a "Technical" clarity. It is neutral, highly legible, and authoritative.
*   **The Editorial Scale:** We use significant size contrast. Jumping from a `headline-lg` (2rem) title to a `body-md` (0.875rem) description creates an intentional hierarchy that guides the eye effortlessly through technical information.

---

## 4. Elevation & Depth: Tonal Layering
In this system, depth is a matter of light and material, not artificial shadows.

*   **The Layering Principle:** Stacking is the primary tool for hierarchy. Place "Action Cards" on `surface-container-lowest` to make them feel like they are rising toward the user against the `surface-dim` background.
*   **Ambient Shadows:** If a floating element (like a sticky "Emergency Call" button) requires a shadow, use a `12%` opacity of the `primary` color with a `32px` blur. This creates a natural, ambient glow rather than a muddy grey drop shadow.
*   **Glassmorphism & Depth:** For navigation bars or floating estimate forms, use semi-transparent `surface_container_lowest` with a `blur(12px)` backdrop filter. This allows the vibrant reds and deep blues of the content to bleed through, making the UI feel integrated and premium.
*   **Ghost Borders:** If a form field or container requires a boundary for accessibility, use the `outline_variant` token at **20% opacity**. This provides a "hint" of a container without breaking the editorial flow.

---

## 5. Components: Precision Primitives

### Buttons
*   **Primary (Secondary Token):** High-gloss `secondary` background with `on-secondary` text. Use `rounded-md` (0.375rem) to maintain a structural, slightly squared look.
*   **Secondary (Outline):** A `ghost border` using `primary` at 40% opacity. High-end and subtle for secondary actions like "View Gallery."

### Cards & Sections
*   **The "No-Divider" Rule:** Forbid the use of line dividers between list items or cards. Use `surface-container` shifts or vertical white space (32px - 64px) to separate content blocks.
*   **Feature Cards:** Use a `surface-container-lowest` background with a `secondary` accent top-border (3px) to signify "Premium" or "Emergency" services.

### Input Fields
*   **Style:** Minimalist. No heavy borders. Use `surface-container-high` as the fill color with a `ghost border` on focus. Helper text should be in `label-md` using the `outline` color.

### Interactive Components
*   **Before/After Sliders:** Essential for this context. Use a high-contrast `white` slider bar with a `primary` icon to showcase repair quality.
*   **Service Chips:** Use `surface-container-highest` with `on-surface-variant` text. These should feel like solid, tactile "tags."

---

## 6. Do's and Don'ts

### Do
*   **DO** use oversized imagery that bleeds off the edge of the grid to create a sense of scale.
*   **DO** use "Primary Container" navy for deep-footer backgrounds to "ground" the website.
*   **DO** utilize the `surface-bright` token for main content areas to keep the "trustworthy" white-space feel.
*   **DO** align text to a strict vertical rhythm to mimic the precision of a well-installed garage door.

### Don't
*   **DON'T** use pure black (#000000) for text. Use `on-surface` (#191c1e) to maintain a soft, premium feel.
*   **DON'T** use fully rounded (pill) buttons for primary actions; stay with `md` or `lg` corners to keep the "Engineered" look.
*   **DON'T** crowd the layout. If a section feels tight, double the padding. Reliability is communicated through calm, organized space.
*   **DON'T** use 1px solid borders to separate the "FAQ" or "Testimonial" sections; let the background color change do the work.