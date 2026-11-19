# Release Checklist

Use this checklist for every update to keep deploys consistent and easy.

## 1) Update content

- [ ] Make your HTML/CSS/JS changes.
- [ ] If user-visible, bump the version badge in `index.html` and `404.html`.
- [ ] Update `README.md` changelog with date + summary.

## 2) Verify locally

- [ ] Open `index.html` in browser and test:
  - [ ] Menu toggle + outside-click close
  - [ ] Copy link button state (`Copied!` reset)
  - [ ] Theme toggle persistence
- [ ] Open `404.html` and verify layout and links.

## 3) SEO + metadata checks

- [ ] Confirm `robots.txt` has correct sitemap URL.
- [ ] Confirm `sitemap.xml` uses live Netlify domain:
  - `https://zippy-pony-6968b0.netlify.app/`
  - `https://zippy-pony-6968b0.netlify.app/404.html`

## 4) Commit + push

- [ ] Commit with clear message.
- [ ] Push to `main`.
- [ ] Confirm push succeeded to:
  - `https://github.com/Tendy24/facebook-recovery-helper.git`

## 5) Netlify deploy validation

- [ ] In Netlify, confirm latest deploy is **Published**.
- [ ] Verify live URLs:
  - [ ] `https://zippy-pony-6968b0.netlify.app/`
  - [ ] `https://zippy-pony-6968b0.netlify.app/404.html`
  - [ ] `https://zippy-pony-6968b0.netlify.app/robots.txt`
  - [ ] `https://zippy-pony-6968b0.netlify.app/sitemap.xml`

## 6) Optional post-release

- [ ] Submit/re-submit sitemap in Google Search Console.
- [ ] If domain/site name changes, update:
  - `README.md`
  - `robots.txt`
  - `sitemap.xml`
