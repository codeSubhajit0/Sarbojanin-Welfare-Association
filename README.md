# Sarbojonin Welfare Association — Website

A multi-page NGO/charitable-trust website built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **react-icons**, based on the provided design screenshots.

## Pages & Routing

Routing uses the Next.js App Router — every folder in `app/` is a route, linked via `next/link` in `components/Navbar.tsx` and `components/Footer.tsx`.

| Route          | File                        | Description                                    |
|----------------|------------------------------|-------------------------------------------------|
| `/`            | `app/page.tsx`               | Home — hero, focus areas, events, initiatives, "why join", testimonials |
| `/about`       | `app/about/page.tsx`         | About Us — mission, "why join us" grid, stats |
| `/programs`    | `app/programs/page.tsx`      | Our Programs — the 4 program pillars (also linked from the Navbar dropdown with hash anchors) |
| `/initiatives` | `app/initiatives/page.tsx`   | Initiatives — the 6 initiative categories & impact stats |
| `/gallery`     | `app/gallery/page.tsx`       | Photo gallery |
| `/trust-deed`  | `app/trust-deed/page.tsx`    | Trust Deed — legal objects of the trust |
| `/contact`     | `app/contact/page.tsx`       | Contact Us — contact details, form, map |

Shared UI: `components/Navbar.tsx` (with mobile menu + dropdown), `components/Footer.tsx`, `components/StatBar.tsx`.

## Admin Portal

A separate internal dashboard, using its own sidebar shell (`components/AdminSidebar.tsx` + `app/admin/layout.tsx`) instead of the public Navbar/Footer:

| Route               | File                              | Description                                             |
|----------------------|------------------------------------|-----------------------------------------------------------|
| `/admin`             | `app/admin/page.tsx`               | Dashboard — stat cards, tabbed table of recent blog posts / activities, search, pagination |
| `/admin/blog`        | `app/admin/blog/page.tsx`          | Create New Blog — core details, rich-text-style toolbar, media gallery, publish settings, tags |
| `/admin/activities`  | `app/admin/activities/page.tsx`    | Create Ongoing Activity — activity details, media gallery, video feature, active-status toggle, activity lead |

A "Staff Login" link in the public site's footer routes to `/admin`. This dashboard is UI only (no backend/auth wired up) — forms don't persist data yet, so hook up an API route or CMS before using it in production.

## Branding

The real Sarbojonin logo (`public/images/logo.png`) is used in the public Navbar, Footer, and the Admin sidebar.

## Icons

All icons use [`react-icons`](https://react-icons.github.io/react-icons/) (`react-icons/fa` — Font Awesome set) for education/healthcare/culture/social icons, nav icons, and social links.

## Images

Images live in `public/images/` (hero banner, event cards, avatars, etc.), sourced/cropped to match the layout from the provided design screenshots. Swap these out with your own official photography before going live — they're placeholders sized to fit the design.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — custom theme (`maroon`, `forest`, `gold`, `cream`, `ink`) matching the brand palette
- **react-icons**
- Google Fonts: Playfair Display (headings) + Inter (body)
