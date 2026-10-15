Eli “Ted” Hanover — Website Rebuild Checklist
Project: rbcommoncents/eli-ted-hanover
Target: GitHub Pages (static HTML/CSS/JavaScript)
Design direction: Cinematic documentary
Narrative themes: Eli Ted Hanover · Baltimore · Boxing History · Family
Source of truth: Current index.html landing-page markup, WordPress page inventory, and recovered media/database backups.
Status key: [x] = present in the supplied landing-page markup (not necessarily tested); [ ] = needs work or verification. Do not mark a link “complete” until its destination exists and renders properly. This checklist is a roadmap, not a live deployment audit.

Milestone 0 — Protect the source and establish workflow
- [ ] Confirm a clean local clone of https://github.com/rbcommoncents/eli-ted-hanover.git in VS Code (git status, git remote -v).
- [ ] Confirm main is the release branch; use a feature branch and pull requests for rebuild changes.
- [ ] Verify the WordPress database backup can be decompressed and parsed.
- [ ] Obtain and verify a complete uploads backup; the earlier downloaded ZIP was suspected incomplete.
- [ ] Preserve the source backups unchanged, with checksums, outside the public Git repository.
- [ ] Obtain themes, plugins, and others UpdraftPlus components (reference for features and CSS).
- [ ] Make a baseline screenshot of current desktop and mobile landing pages.
- [ ] Record the old WordPress sitemap and page-path mapping for migration.
Milestone 1 — Landing page: cinematic documentary (/index.html)
Existing structural elements
- [x] Document title and basic description / Open Graph title and description.
- [x] Shared stylesheet reference: assets/css/site.css.
- [x] Shared script reference: assets/js/site.js.
- [x] Header/wordmark, four-theme anchor navigation, and archive link.
- [x] Skip-to-story link and reading-progress markup.
- [x] Opening hero and narrative prologue.
- [x] Four-thread chapter introduction / jump navigation.
- [x] Four documentary sections: #eli, #baltimore, #boxing, #family.
- [x] Introductory timeline (1921–1975).
- [x] Quote/tribute section with non-verified attribution caveat.
- [x] Archive call-to-action and footer sitemap markup.
Remaining visual and content work
- [ ] Replace hero graphic treatment with an approved archival image, or deliberately retain typography-only treatment.
- [ ] Replace Eli portrait slot (.story-art-portrait) with a verified image and caption.
- [ ] Replace Baltimore / The Block illustration (.story-art-city) with licensed or archival city imagery.
- [ ] Replace boxing fight-night illustration (.story-art-boxing) with an approved fight poster, venue, or boxing image.
- [ ] Replace family photo stack (.story-art-family) with authorized family photos.
- [ ] Add descriptive alt text, captions, approximate dates, sources, and usage status for every published image.
- [ ] Review each section’s historical statements against the source documents; distinguish recollection from documented fact.
- [ ] Decide whether to retain the tribute sentiment or substitute a documented quotation.
- [ ] Check that navigation, mobile menu, scrolling progress, and animation work in the actual deployment.
- [ ] Add social-sharing image (og:image) after final hero artwork is selected.
Milestone 2 — Build all linked destination pages
Rule: Maintain WordPress slugs initially, including existing misspellings, to preserve incoming links. Slug changes require an explicit redirect plan.
Life story
- [ ] /life-story/index.html — Life Story hub, chapter navigation.
- [ ] /life-story/chapter-1-early-years/index.html — Chapter 1: Early Years.
- [ ] /life-story/chapter-2-carlton-park-the-early-ring-years/index.html — Chapter 2: Carlton Park / Early Ring Years.
- [ ] /life-story/chapter-3-merhant-marine-years/index.html — Chapter 3: Merchant Marine Years (retain original merhant slug for now).
- [ ] /life-story/chapter-4-the-promoter/index.html — Chapter 4: The Promoter; preserve award and article carousels.
- [ ] /life-story/chapter-5-baltimore/index.html — Chapter 5: Baltimore, The Block, and Changing City Streets; preserve boxer carousel and historical source links.
Boxing history
- [ ] /boxing/index.html — Boxing history hub.
- [ ] /boxing/boxer-profile/index.html — Boxer profiles; determine whether profiles require client-side search/filtering.
- [ ] Inventory WordPress custom boxing timeline functionality and replace with static HTML/JS as needed.
Family
- [ ] /family/index.html — Family hub.
- [ ] /family/family-photos/index.html — Family photo archive / galleries.
- [ ] /family/later-years/index.html — Later Years.
- [ ] /family/obituaries/index.html — Obituaries and tributes.
- [ ] /family/interests/index.html — Interests.
- [ ] /family/shared-song/index.html — Shared Song; decide on audio rights and static player approach.
Other pages and participation
- [ ] /religion/index.html — Religion.
- [ ] /accredation-acknowledgements/index.html — Accreditation & Acknowledgements (retain original accredation slug for now).
- [ ] /accredation-acknowledgements/posts/index.html — Add Your Voice; choose a secure external submission service or clearly display contact instructions (PHP forms will not run on GitHub Pages).
- [ ] Confirm whether WordPress contains any additional published pages, posts, or redirects not listed above.
Milestone 3 — Media recovery and inventory
- [ ] Verify every uploads ZIP and extract it safely into an offline originals archive.
- [ ] Preserve original file paths and names (for example wp-content/uploads/2021/08/...).
- [ ] Extract WordPress attachment metadata from wp_posts/wp_postmeta: file paths, titles, captions, descriptions, and alt text where present.
- [ ] Generate data/media-inventory.csv with media_id, original_path, original_url, sha256, mime_type, bytes, width, height, caption, source, usage_rights, theme, page_refs, published_path, and status.
- [ ] Flag missing original files, duplicate hashes, WordPress resized variants, and broken links.
- [ ] Identify which photographs belong to the four narrative themes; assign multiple themes where relevant without duplicating originals.
- [ ] Select hero/section images from the verified archive; avoid unrelated stock images presented as historic documents.
- [ ] Generate optimized web versions (prefer WebP/AVIF where supported; keep compatibility fallbacks if needed).
- [ ] Store full-resolution private originals in Proton Drive and a second independent backup; do not depend on Proton sharing links for <img> assets.
- [ ] Copy only approved web-ready images and public documents to the site repository.
- [ ] Record a replacement path for every old http:///https://www.elihanover.com/wp-content/uploads/ reference.
- [ ] Confirm GitHub Pages storage limits before committing large images, audio, videos, or PDFs.
Milestone 4 — Shared design system and components
- [ ] Use one sitewide assets/css/site.css stylesheet with documented tokens for cream #f9f5ec, parchment #fffdf7, border #e3dac5, ink #34302a, gold #b89450–#e1c88a.
- [ ] Define reusable header, navigation, footer, breadcrumbs, documentary hero, content cards, figures, citations, buttons, and responsive grids.
- [ ] Keep chapter typography and spacing consistent with the cinematic homepage.
- [ ] Implement native CSS/JS carousels without WordPress-specific dependencies; include visible Prev/Next buttons and keyboard controls.
- [ ] Keep navigation and page URLs relative to site root (or consistently root-relative for a custom domain), not old WordPress absolute URLs.
- [ ] Add focused reading layouts for long quotations, newspaper clippings, citations, and embedded video.
- [ ] Keep JavaScript progressive: core content and navigation remain usable without scripts where practical.
Milestone 5 — Function-by-function WordPress replacement
- [ ] Check whether the boxing timeline uses custom plugin data or PHP templates; export its content into JSON/HTML where feasible.
- [ ] Replace shared songs plugin with static player/assets if the files and publishing rights permit.
- [ ] Replace “Share Your Story” form with a managed form service or an intentionally non-interactive contact page; define anti-spam and privacy handling.
- [ ] Identify galleries, sliders, embeds, shortcodes, and dynamic widgets in the source pages; rebuild or document their replacements.
- [ ] Remove unsupported PHP endpoints, login links, admin-only links, and [shortcode] remnants from public pages.
- [ ] Confirm that any YouTube embeds, PDF documents, and external research citations still resolve.
Milestone 6 — Link audit: landing-page destinations
- [ ] #eli, #baltimore, #boxing, #family, #stories, #main, #top anchor links scroll correctly.
- [ ] Header Explore the archive → /life-story/.
- [ ] Hero Open the life archive → /life-story/.
- [ ] Eli section Follow Eli’s life story → /life-story/.
- [ ] Baltimore section Walk Baltimore’s changing streets → /life-story/chapter-5-baltimore/.
- [ ] Boxing section Discover the boxing archive → /boxing/.
- [ ] Family section Explore the family collection → /family/.
- [ ] Archive CTA Browse life chapters → /life-story/.
- [ ] Archive CTA Family & photographs → /family/.
- [ ] Footer Discover → /life-story/, /life-story/chapter-5-baltimore/, /boxing/.
- [ ] Footer Remember → /family/, /family/family-photos/, /family/obituaries/.
- [ ] Footer About → /accredation-acknowledgements/, /accredation-acknowledgements/posts/.
- [ ] Footer contact link opens correct email compose action.
- [ ] Audit all local <a href>, <img src>, <source srcset>, CSS URLs, and downloadable files for missing targets.
Milestone 7 — Quality, accessibility, and discoverability
- [ ] Validate generated HTML and check browser console for CSS/JS errors.
- [ ] Test at desktop, tablet, and mobile widths; no horizontal overflow.
- [ ] Test keyboard navigation, focus visibility, skip link, and carousel controls.
- [ ] Verify accessible headings, image alt text, sufficient contrast, and reduced-motion behavior.
- [ ] Add lazy loading and meaningful dimensions to images; optimize load speed and avoid layout shifts.
- [ ] Add per-page <title>, meta description, canonical URL, Open Graph tags, and share image.
- [ ] Create/update sitemap.xml and robots.txt after destination pages exist.
- [ ] Add citation/source credits for historical claims and third-party media; track rights and permissions.
- [ ] Test 404 handling, outbound links, and the site's contact method.
- [ ] Run a static link checker before each release.
Milestone 8 — GitHub Pages release and domain move
- [ ] Confirm GitHub Pages deployment source and build workflow.
- [ ] Verify the site at its GitHub Pages preview URL before switching DNS.
- [ ] Configure the chosen domain in GitHub Pages and set CNAME correctly.
- [ ] Enable and test HTTPS for both apex and www hostnames as applicable.
- [ ] Plan how the old WordPress domain/URLs will redirect to their new equivalents (GitHub Pages itself cannot issue arbitrary server-side 301 redirects).
- [ ] Keep the old WordPress site and its backups until the new site's media, pages, URLs, and SSL are verified.
- [ ] Run full navigation, image, and sitemap validation on production.
- [ ] Tag a first stable release and document restoration/rollback steps.
Suggested build sequence
1. First: Recover assets and build the media inventory, without changing current site content.
2. Next: Finish the landing-page images and verify all links to the destination pages.
3. Then: Publish the Life Story hub and Chapter 1–5 pages.
4. Then: Publish Boxing History, Family, Religion, and Acknowledgements pages.
5. Finally: Validate, enable HTTPS, and perform the domain transition.