# Facebook Recovery Helper (Safe Redirect UI)

A static, dependency-free helper page that guides users to the official Facebook recovery flow and provides safety tips.

## Features

- Official recovery CTA (`https://www.facebook.com/recover/initiate/`)
- Copy-official-link helper with user feedback
- Suspicious-page reporting guidance
- Responsive navigation menu
- Menu auto-close on nav item click and outside click
- Theme toggle (dark/light) with localStorage persistence
- Version badge and last-updated indicator

## Project Structure

- `index.html` — semantic page structure
- `styles.css` — visual styling and responsive behavior
- `script.js` — nav interactions, clipboard, and theme toggle
- `assets/` — optional static assets folder

## Run Locally

Open `index.html` in a browser.

## Release Process

Use `RELEASE_CHECKLIST.md` for the step-by-step publish workflow (content updates, QA, Git push, and Netlify verification).

## Deploy

This project is static and can be deployed directly to GitHub Pages, Netlify, or Vercel.

### Netlify (recommended quick path)

1. Go to Netlify and choose **Add new site**.
2. Choose one method:
	- **Deploy manually**: drag and drop this project folder.
	- **Import from Git**: connect your Git repository.
3. Build settings:
	- Build command: *(leave empty)*
	- Publish directory: `.`
4. Deploy.

Live deployment URL:

- `https://2-4-m.netlify.app/`

Last deployment verification: **2026-11-20**

- `https://2-4-m.netlify.app/`
- `https://2-4-m.netlify.app/404.html`
- `https://2-4-m.netlify.app/robots.txt`
- `https://2-4-m.netlify.app/sitemap.xml`

Already updated to this URL:

- `sitemap.xml`
- `robots.txt`

## Security Note

This UI does **not** collect credentials or tokens. It only links users to official Facebook recovery endpoints.

## Links

- Live site: https://2-4-m.netlify.app/
- Official Facebook recovery: https://www.facebook.com/recover/initiate/
- Mobile quick-note (PNG): https://2-4-m.netlify.app/assets/facebook-recovery-note-compat.png
- Copy-ready social post: [SOCIAL_POST.md](SOCIAL_POST.md)
- GitHub repository: https://github.com/Tendy24/facebook-recovery-helper

## Changelog

### v1.0.5 - 2026-11-20

- Switched official recovery links from `/recover/` to `/recover/initiate/` to avoid unavailable-page errors.
- Added mobile-compatible quick-note PNG and linked it from the homepage.
- Removed Search Console verification artifacts for Netlify-only operation.

### v1.0.4 - 2026-11-20

- Deployment verification release.
- Confirmed live endpoints (`/`, `/404.html`, `/robots.txt`, `/sitemap.xml`) are current.

### v1.0.3 - 2026-11-19

- Bumped visible UI version badges in `index.html` and `404.html`.
- Verification commit to confirm Netlify auto-deploy from `main`.

### v1.0.2 - 2026-11-19

- Removed placeholder support `mailto:` links from footers.
- Kept non-affiliation disclaimer text with contact channel marked as pending configuration.

### v1.0.1 - 2026-11-19

- Added non-affiliation disclaimer in footers.
- Added report-issue `mailto:` link in `index.html` and `404.html`.

### v1.0.0 - 2026-11-19

- Initial safe recovery-helper release.
- Responsive menu, theme toggle, copy-link helper, report guidance.
- Netlify deployment config, `robots.txt`, `sitemap.xml`, and custom `404.html`.
