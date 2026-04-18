# College Park Garage Pros

Marketing website for College Park Garage Pros, a garage door repair/installation business in College Park, GA.

## Tech Stack

- **Next.js** 16.2.3 with App Router
- **React** 18.3.1
- **CSS**: Single `globals.css` file (no Tailwind, no CSS modules)
- **Fonts**: Google Fonts — Manrope (headlines), Inter (body)

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build
npm run start    # production server
```

## Project Structure

```
app/
  page.js        # Entire homepage (~640 lines, single page)
  layout.js      # Root layout, metadata, font imports
  globals.css    # All styles (~940 lines)
public/
  screen.png     # Site screenshot
next.config.mjs  # Minimal config, reactStrictMode enabled
jsconfig.json    # Path aliasing (@/ → root)
```

## Architecture Notes

- Single-page site — all content lives in `app/page.js`
- Small inline components (Icon, NavLink, SectionEyebrow) defined in `page.js`; extract to `components/` if they grow
- Images hosted on Google Drive — no local image assets beyond `screen.png`
- No database, no API routes, no auth

## Business Context

- **Business**: College Park Garage Pros
- **Location**: College Park, GA
- **Service area**: College Park, Atlanta, East Point, Hapeville, South Fulton, Union City
- **Services**: Garage door installation, maintenance/repair, smart openers
- **Brand colors**: Navy `#00236f` (primary), Red `#bb0112` (accent)

## Style Guide

- All styling in `globals.css` — no inline styles, no CSS-in-JS
- Mobile-first responsive design with custom breakpoints
- Semantic HTML throughout for SEO
