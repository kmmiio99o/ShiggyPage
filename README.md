# ShiggyCord Website

A website written for ShiggyCord Discord mobile client, made with Typescript + React, Material UI, and mocha color palletes.

---

## Table of Contents

- [Project structure](#project-structure)
- [Quick start / Development](#quick-start--development)
- [Build & CI](#build--ci)
- [Contributing](#contributing)
- [License](#license)

---

## Project structure

Important files and folders:

- `index.html` — SPA entry with global meta tags (open-graph, twitter card, etc.).  
- `src/` — React app source:
  - `src/main.tsx` — application bootstrap.
  - `src/App.tsx` — router + top-level app.
  - `src/pages/` — page components (Home, FAQ, Install, etc.).
  - `src/components/` — UI components.
  - `src/images/` — image assets used by the site.
- `package.json` — scripts and dependencies.

---

## Quick start / Development

Prerequisites:
- [Node.js](https://nodejs.org/en) (recommended LTS) or [Bun](https://bun.sh/). Either package manager works with slight command differences.
- Git (to clone the repo)

Install dependencies

- npm:
  - `npm install`
- bun:
  - `bun install`

Run the dev server

- npm:
  - `npm run dev`
- bun:
  - `bun run dev`

Open `http://localhost:5173` (Vite's default) and develop.

Notes:
- The project uses `vite` with React; hot module reload is available.
- TypeScript is enabled, but the `build` script has been adjusted to allow Vite to run even when `tsc` reports type errors (see [Build & CI](#build--ci)).

---

## Build & CI

Scripts in `package.json`:

- `dev` — start the local dev server (`vite --host`).
- `build` — produce a production build with Vite (`vite build`). This does NOT run `tsc` by default to avoid blocking the build on type errors.
- `typecheck` — run `tsc --noEmit` to check types.
- `ci-build` — runs typecheck first then `vite build` (recommended for CI).

Example:

- Local prod build (no typecheck):
  - `npm run build` or `bun run build`
- Strict CI build (recommended):
  - `npm run ci-build` or `bun run ci-build`

Why split `tsc` and `vite build`?
- Running `tsc` before `vite build` will fail the build if any TypeScript errors exist. During active development you may prefer `vite build` to succeed even with transient typing issues; `ci-build` preserves stricter checks for CI.

---

## Contributing

- Open issues for bugs or feature requests.
- Create PRs against `main`. Keep changes focused and provide a short description of the problem and fix.
- Run `npm run typecheck` before creating a PR to help reviewers.

---

## License

This repository does not include a license file by default. Add a `LICENSE` if you intend to pick a license.
