# Clerk setup implementation prompt

## Goal
Set up Clerk authentication in the existing Vertex Next.js App Router project using the Clerk CLI and the currently selected Clerk application `app_3MKlhFbmwWnIO7iHwM7ZIBOnQBH`. Add visible sign-in, sign-up, and signed-in account controls without changing the current homepage design.

## Skills and guidance read
- Clerk skill router at `.agents/skills/clerk/SKILL.md`; it detects Core 2 versus current SDK by package version and routes setup to Clerk CLI.
- Project `AGENTS.md`, including the rule to keep browsing public, expose only the Clerk publishable key, and use Next.js middleware/proxy for private route gates.
- Next.js 16.4.6 local guides: `node_modules/next/dist/docs/01-app/01-getting-started/16-proxy.md`, `05-server-and-client-components.md`, and `03-layouts-and-pages.md` (review the applicable sections before implementation).
- User supplied updated Clerk CLI setup instructions. The user approved the requested setup checklist. The previous selected application ID returned 404; the updated Dashboard-selected application is `app_3MKlhFbmwWnIO7iHwM7ZIBOnQBH`. Framework: Next.js.

## Code and config inspected
- `package.json`: Next.js `16.4.6`, React `19.3.0`; no Clerk SDK or scripts yet; npm lockfile present.
- `app/layout.tsx`: root layout with existing metadata, basic `<html>` and `<body>`.
- `app/page.tsx`: existing Vertex home with header navigation, notification button, and static profile avatar; no auth controls.
- `app/globals.css`: existing visual system and homepage styles.
- No existing middleware/proxy file, Clerk routes, or other auth provider were found. Environment files were not opened.

## Decisions and assumptions
- This is a new Clerk integration, so use `npx -y clerk@latest init --app app_3MKlhFbmwWnIO7iHwM7ZIBOnQBH --no-skills`, letting the CLI detect the existing framework and package manager. The local Clerk skill is already available, so skip global skill installation.
- Preserve the installed Clerk SDK generation and use its matching component names/API. Do not upgrade Next.js or add unrelated auth features.
- Keep the catalog and all current routes public. Add middleware/proxy integration as required by the CLI/installed Clerk generation, but do not gate routes until a feature requires it.
- Wire `ClerkProvider` in the root layout and replace the static profile avatar in the homepage header with Clerk's signed-out sign-in/sign-up controls and signed-in `UserButton`, keeping layout styling consistent with the existing header.
- Use the CLI-managed development keys and environment filename as instructed by its output. Never print or inspect environment file contents. Do not replace working keys or link to a different Clerk application.
- Starting the app means launch the local Next.js dev server after implementation and report its address/terminal session.

## Expected files to touch
- `package.json` and `package-lock.json` (CLI dependency/setup changes).
- `app/layout.tsx` and `app/page.tsx` (provider and visible controls).
- A Next.js proxy/middleware file and/or Clerk auth routes only if generated setup requires them.
- A local environment file may be created or updated by the Clerk CLI; keep it ignored and do not include secrets in the prompt or report.
- Any additional file changes made by the CLI must be limited to Clerk/Next setup and reviewed before acceptance.

## Requirements
- Follow the current Next.js 16 proxy conventions and the Clerk SDK version installed by the CLI.
- Provide working sign-in, sign-up, and account management controls in the current homepage header.
- Keep all secret keys server-only; only publishable values may be browser-visible.
- Keep existing page content, routes, metadata, and visual styling intact apart from replacing the placeholder avatar with auth-aware controls.
- Do not create a second Clerk application, list apps, run account login, pull production keys, or enable organizations.

## Security considerations
- Never read environment files into command output, commit them, or expose secret keys in browser code.
- Do not protect public browsing routes by default.
- Do not change or remove another auth provider (none was found).
- Use only the dashboard-selected application; never switch applications or overwrite working credentials.

## Acceptance criteria
- CLI setup completes for the selected Clerk application and the installed SDK version matches its generated integration.
- App layout includes Clerk provider and the homepage displays the appropriate signed-in/signed-out controls.
- Public pages continue to render without requiring authentication.
- Secret keys remain local/server-only and no secret values appear in source or command output.
- `npx tsc --noEmit`, `npm run lint`, and `npm run build` complete successfully.
- The development server starts and the manual checks below can be followed.

## Checks
- Type check: `npx tsc --noEmit`.
- Lint: `npm run lint`.
- Production build: `npm run build`.
- Start the local dev server with `npm run dev` and report the actual local URL and session status.

## Manual test steps
1. Open the local homepage while signed out; verify the page remains public and displays sign-in and sign-up actions in the account area.
2. Use the sign-up action to complete a development sign-up, then verify the Clerk user control appears.
3. Open the user control, sign out, and verify the signed-out actions return.
4. Reload the homepage and confirm the selected development Clerk application continues to authenticate the session.
