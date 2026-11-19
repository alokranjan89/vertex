# Implement the Vertex home page

## Goal
Replace the current root route with the responsive Vertex learning home page shown in `design/vertex-home.png`. Keep the existing design system available at `/design-system`.

## Skills and guidance read
- `ponytail`: smallest complete implementation, reuse existing code and dependencies.
- Project `AGENTS.md`: UI reference fidelity, approval before code, and workspace checks.
- Installed Next.js 16.4.6 App Router page convention guide at `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/page.md`.

## Existing code inspected
- `app/page.tsx` currently contains the entire Design System showcase.
- `app/design-system/page.tsx` imports and renders that default export.
- `app/globals.css` contains the design-system styling and responsive rules.
- `app/layout.tsx` has shared page metadata; `package.json` contains Next.js, React, Tailwind, TypeScript, and ESLint, with no UI or icon package.
- `design/vertex-home.png` is the supplied 1024px-wide home-page reference.

## Decisions and assumptions
- Move the existing showcase implementation into a reusable module under `app/` and have `/design-system` render it, so `/` can become the home page without losing that route.
- Build the home page as a static server component with semantic links and form markup. Search submits a query to `/search?q=...`; catalog links point to `/courses`. Those destinations are placeholders for future routes.
- Reuse the existing inline SVG brand mark and add only the small SVG icons needed for the reference. Use the supplied image as visual source of truth; do not add dependencies or remote assets.
- Keep existing design-system CSS in place and add scoped home-page styles and responsive behavior. Use CSS-drawn course marks and a decorative footer treatment if the reference artwork is not available as separate assets.

## Expected files
- `app/page.tsx`: implement the reference home page.
- `app/design-system/page.tsx`: point at the extracted design-system component.
- `app/design-system-showcase.tsx` (or equivalent local module): preserve the current design-system showcase for reuse.
- `app/globals.css`: add scoped home-page styling and responsive layout.
- `app/layout.tsx`: update global metadata to Vertex if needed.

## Requirements
- Match the reference header, centered search hero, CTA, search field, three course cards, and lower announcement/decorative section in layout, color, spacing, and typography.
- Make the composition responsive on narrow screens while preserving the desktop design.
- Keep all controls keyboard accessible, give icon-only controls accessible names, and provide a labeled search input.
- Do not add authentication, data fetching, analytics, search backend, or other pages/features.

## Security
- The page is static and must not introduce secrets, client-side tokens, network calls, or writes.
- Use ordinary same-site links and GET form submission only.

## Acceptance criteria
- `/` renders the supplied Vertex home design.
- `/design-system` continues to render the existing design-system showcase.
- Both routes remain responsive and have no horizontal overflow on mobile.
- TypeScript, ESLint, and production build succeed.

## Checks
- Run `npx tsc --noEmit`, `npm run lint`, and `npm run build` from the repository root.

## Manual test steps
1. Run `npm run dev` and open `/` at desktop width; compare the layout and details with `design/vertex-home.png`.
2. Resize to a narrow mobile viewport and verify content stacks without horizontal scrolling.
3. Submit text in the search field and confirm the URL is `/search?q=<query>`.
4. Open `/design-system` and confirm the existing showcase still renders.
