# Apex European Motors

Production-quality demo website for a fictional premium European automotive service center specializing in BMW, Mercedes-Benz, Audi, Porsche, and other luxury marques.

**Tagline:** Precision Service. Exceptional Performance.

> Frontend-only portfolio demo. Not a real business.

## Live Demo

After GitHub Pages is enabled, the site will be available at:

`https://astridbonoan.github.io/Premium-European-Auto-Service/`

## Tech Stack

- React 19 (Vite)
- Tailwind CSS v4
- React Router
- Framer Motion
- React Icons
- ESLint + Prettier
- Vitest + React Testing Library

## Features

- Luxury multi-page marketing site (Home, About, Services, Brands, Packages, Planner, Gallery, Testimonials, Booking, Contact)
- Interactive maintenance planner and service cost estimator
- Appointment booking form with validation
- Gallery / service / brand filtering
- Animated statistics, page transitions, and scroll progress
- Dark mode toggle
- Client portal mockup (service history + digital inspection preview)
- Floating Book Service CTA
- GitHub Pages deployment via GitHub Actions (`gh-pages` branch)

## Project Structure

```text
src/
  assets/
  components/
    layout/
    home/
    services/
    vehicles/
    booking/
    common/
  pages/
  hooks/
  data/
  utils/
  styles/
  test/
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit the local URL printed by Vite (typically `http://localhost:5173/Premium-European-Auto-Service/`).

### Lint & Format

```bash
npm run lint
npm run format
```

### Testing

```bash
npm test
npm run test:watch
```

Covered areas:

- Navbar
- Maintenance planner
- Booking form validation
- Service filtering
- Gallery filtering
- FAQ accordion

### Production Build

```bash
npm run build
npm run preview
```

Build output is written to `dist/`.

## GitHub Pages Deployment

### Vite base path

`vite.config.js` sets:

```js
base: '/Premium-European-Auto-Service/'
```

This ensures assets resolve correctly under the repository subdirectory on GitHub Pages.

### Automatic deployment

The workflow at `.github/workflows/deploy.yml`:

1. Installs dependencies
2. Runs lint + tests
3. Builds the production bundle
4. Publishes `dist/` to the `gh-pages` branch

### Enable Pages in GitHub

1. Push to `main`
2. Open repository **Settings → Pages**
3. Set **Source** to **Deploy from a branch**
4. Select branch `gh-pages` and folder `/ (root)`
5. Save

The first successful Actions run creates the `gh-pages` branch automatically.

### Manual workflow dispatch

You can also run **Actions → Deploy to GitHub Pages → Run workflow**.

## Branding

| Token | Value |
| --- | --- |
| Primary | Matte Black `#111111` |
| Secondary | Carbon Gray `#2C2C2C` |
| Accent | Metallic Gold `#C8A951` |
| Supporting | Silver `#C4C7CC` |
| Background | Off White `#F7F7F5` |
| Text | Dark Gray `#252525` |
| Headings | Playfair Display |
| Body | Inter |

## Accessibility

- Semantic landmarks and headings
- Skip link to main content
- Keyboard-accessible navigation and forms
- ARIA labels on interactive controls
- Focus indicators
- Form validation with `role="alert"` / `aria-live`

## License

Demo project for portfolio use.
