# bsg-website

Starter app built with Next.js App Router, React, TypeScript, Tailwind CSS, and
shadcn/ui.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

- `npm run dev` - start the development server
- `npm run build` - create a production build
- `npm run start` - serve the static production export in `out`
- `npm run lint` - run ESLint

## shadcn/ui

Add components with the shadcn CLI:

```bash
npx shadcn@latest add <component>
```

For example: `npx shadcn@latest add dialog`.

Components are added to `src/components/ui`, and shared utilities are in
`src/lib`.

## GitHub Pages

The GitHub Actions workflow builds the app as a static site and deploys it to
GitHub Pages when changes are pushed to `main`. In the repository settings,
set **Pages → Build and deployment → Source** to **GitHub Actions**.

The repository base path is applied automatically in GitHub Actions builds.
Because this is a static export, server-only Next.js features such as API
routes and server actions are not available.
