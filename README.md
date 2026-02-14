# More To Life — Villas (static preview)

This is a minimal static website to list villas. It includes two sample villas and placeholder images.

Preview locally:

```powershell
# from the project folder
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Files:
- `index.html` — main page
- `css/styles.css` — styling
- `js/lightbox.js` — simple image viewer
- `images/` — placeholder SVG images

Deploy options:
- GitHub Pages: push this repo to GitHub, add `CNAME` with your domain, enable Pages from the repository settings (branch `main` or `gh-pages`).
- Netlify: drag-and-drop the folder to Netlify or connect the GitHub repo and set domain in Netlify settings.

Domain DNS notes (for `more2life.com.au`):
- For GitHub Pages: add a `CNAME` record pointing your domain to `your-github-username.github.io` or use A records GitHub provides.
- For Netlify: add the Netlify-provided A/CNAME records in your registrar.

Next steps I can help with:
- Replace placeholder SVGs with your real villa photos.
- Add pages, contact form, booking links, or a CMS.
- Walk through DNS record changes for `more2life.com.au`.