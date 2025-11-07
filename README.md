# OpenTemporal

OpenTemporal is a calm, research-oriented knowledge hub focused on time-series concepts, methods, applications, and tooling. All content emphasises public knowledge: structured docs cover representations, domain applications, learning paths, and curated reading lists without sharing unpublished research or proprietary detail.

## Prerequisites

- Node.js 20+ (the project was scaffolded with Node 24 LTS)
- npm (preferred package manager)

## Installation

```
npm install
```

## Local development

Use either command below depending on whether you want the browser to auto-open:

```
npm run dev   # docusaurus start --no-open
npm start     # docusaurus start
```

The site serves from http://localhost:3000 by default; pass `--port` if you need a different port.

## Build and preview static output

```
npm run build   # generates the static site in ./build
npm run serve   # serves the production build locally
```

## Deploying to GitHub Pages

1. Replace every `YOUR_GITHUB_USERNAME` placeholder in `docusaurus.config.js`, `.github/workflows/deploy.yml`, and this README with your actual GitHub username.
2. Commit the project to a repository named `opentemporal` under your GitHub account.
3. Enable GitHub Pages in the repository settings and choose GitHub Actions as the source (recommended) or the `gh-pages` branch if you prefer manual deployment.
4. Run `npm run deploy` locally when you want to publish on demand. The script uses Docusaurus' built-in GitHub Pages workflow and pushes to the `gh-pages` branch defined in the config.

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically installs dependencies, builds the site, and deploys to `gh-pages` whenever you push to `main`. No additional secrets are required because it relies on the default `GITHUB_TOKEN`.

## Project structure highlights

- `docs/` - Knowledge Base, Methods & Concepts, Applications, Learning Paths, Tools & Starter Kits, and Reading Room content.
- `src/pages/index.js` - Custom home page with calls to action and a "What's inside" overview.
- `src/pages/collaboration.md` - Dedicated collaboration page with focus areas and contact placeholder.
- `blog/` - Reframed as "Notes"; currently contains the philosophy post "What OpenTemporal is (and is not)".
- `src/css/custom.css` - Palette and typography overrides that enforce the calm, research-focused aesthetic.

## Additional notes

- Keep all future contributions in clear English and avoid uploading unpublished personal research.
- Update navigation or sidebars via `docusaurus.config.js` and `sidebars.js`, both of which have inline comments that point to the relevant sections.
- Before launching publicly, swap placeholder links (GitHub username, social profiles, contact email) with the real destinations.
