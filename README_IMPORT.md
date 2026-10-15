# Eli Hanover — Site Page Framework v1

Non-destructive overlay for the existing GitHub Pages project. Adds 24 interior `index.html` files, one shared CSS file and a page tree document. It DOES NOT replace the existing homepage, JavaScript, or CSS, nor copy media or inventories.

All scaffold pages include `noindex,follow` until their historical material is reviewed. Relative navigation works with GitHub Pages on a custom domain or project path. The currently established homepage path spelling `accredation-acknowledgements/` is preserved to avoid broken links, even though its spelling could be revisited with redirects later.

## Import
From repository root:

```bash
unzip -l ~/Downloads/eli-hanover-pages-framework-v1.zip
unzip -n ~/Downloads/eli-hanover-pages-framework-v1.zip -d .
python3 -m http.server 8000
```

Visit `http://localhost:8000/life-story/` and inspect links. `unzip -n` avoids overwriting same-named files. These pages are placeholders, not completed historical articles. The `noindex` meta tag should be removed on individual pages once content is publication ready. Do not publish sensitive family photos or unlicensed scans automatically.

## Git

```bash
git status --short
git add life-story/ boxing/ baltimore/ family/ archive/ accredation-acknowledgements/ assets/css/page-framework.css SITE_PAGES_TREE.txt README_IMPORT.md
git diff --cached --stat
git commit -m "Scaffold Eli Hanover site sections and chapter pages"
git push origin develop/cinematic-site
```

If using a separate downloads folder, move the ZIP there or substitute the correct path. Confirm with `git status` before commit.
