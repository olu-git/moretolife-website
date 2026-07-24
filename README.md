# More To Life Website

Static website for MORE TO LIFE Bali 2026.

## Project Structure

- Root HTML files: public pages deployed by GitHub Pages
- `css/`: shared and page-specific styles
- `js/`: shared and page-specific browser scripts
- `data/`: structured site content, including villa availability
- `images/` and `video/`: public media assets
- `admin/`: ignored local operational files that must not be published

## Local Preview

```powershell
cd C:\Users\olumi\Downloads\mtl_site
py -m http.server 8080
```

Open `http://127.0.0.1:8080/`.

## Common Updates

- Villa availability and unit counts: edit `data/villas.json`.
- Booth prices and availability: edit `js/booths.js`.
- Mark a booth sold by keeping its entry and adding `sold: true`.
- Live booth maps and booking panels are rendered by `booths.html`, `css/booth-maps.css`, and `js/booth-maps.js`.

## Deployment

The public site is served from the repository's `main` branch using the domain in `CNAME`.
