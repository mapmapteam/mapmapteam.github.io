# MapMap Website

The official website for [MapMap](https://github.com/mapmapteam/mapmap), an open source video mapping software.

Built with [Astro](https://astro.build/) and deployed to GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:4321`.

## Build

```bash
npm run build
```

Static output goes to `./dist/`.

## Structure

- `src/data/en/` — English content (markdown)
- `src/data/fr/` — French content (markdown)
- `src/pages/` — Astro page routes
- `src/components/` — Reusable components
- `src/i18n/` — Translation utilities and UI strings
- `public/images/` — Documentation screenshots

## Adding Content

Edit the markdown files in `src/data/en/` and `src/data/fr/`. The site has 4 pages per language: home, download, docs, and support.

## Deployment

Pushes to `master` automatically deploy via GitHub Actions. Make sure GitHub Pages is configured to use "GitHub Actions" as the source in the repository settings.
