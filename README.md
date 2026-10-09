# Eli “Ted” Hanover — cinematic documentary starter (v2)

Static website foundation for GitHub Pages. Four story threads: Eli, Baltimore, Boxing History, Family.

## Preview
Open `index.html` in a browser. No PHP, build step, npm, or database required.

## Publish to GitHub Pages
1. Create a repository and upload the **contents** of this directory to the repository root.
2. Settings → Pages → Deploy from branch → `main` / root.
3. Once verified, set a custom domain in Pages and configure DNS according to GitHub's current instructions. Enforce HTTPS after certificate provisioning.

## Content / assets
- `index.html` — documentary homepage.
- `assets/css/site.css` — shared styles and cinematic extension.
- `assets/js/site.js` — navigation and reading progress.
- Existing story chapter links are **planned destinations**, not included in this starter.
- The archival art is intentionally CSS-generated and labeled as placeholders; **no fabricated historical photos**. Replace artwork with licensed/owned archival scans after recovering media.
- UpdraftPlus uploads ZIP received with the project is corrupted/incomplete; **do not treat it as recovered media**.
- The existing homepage tribute quote is *not verified as an actual quotation by Eli*; keep its attribution clear.

## Next phases
1. Export individual page content from database to directory-aligned HTML files.
2. Recover media from a valid uploads backup, normalize links.
3. Rebuild formerly PHP-driven features; add sitemap and old-domain redirects.
4. Test accessibility, responsive layout, images, SEO metadata, and links prior to launch.
