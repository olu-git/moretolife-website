# Codex Brief — Ship `/booths` page for more2life.com.au

## Goal

Add a new page at `more2life.com.au/booths.html` (link it from the main nav as **BOOTHS**) that lets attendees pick a booth at each of the four MTL Bali 2026 nightlife events and enquire via WhatsApp or Instagram with a pre-filled message.

## What's in this folder

- `index.html` — a **standalone reference build** of the page. It's fully working (open it in a browser to see the design intent, the interactions, and the config format). It is NOT ready to drop into the live site — it has its own nav, its own font import, and its own footer. Use it as a **design and behaviour spec**, not as production code.
- `HANDOFF.md` — this file.
- `WELCOME_PARTY_-_Table_Map.png`, `NO_SIGNAL_-_Table_Map.png`, `NIGHTS_IN_BALI_-_Table_Map.png`, `THE_SEND-OFF_-_Table_Map.png` — the four venue maps, in date order. Move these into the live site's `images/` folder.

## What to preserve from the reference build (`index.html`)

**Content, structure, and behaviour** — treat these as the spec:

1. **Page structure, in order**: hero → 4-event programme strip → four event sections (each with a map on the left and a categorised booth list on the right, stacked on mobile) → footer CTA ("Not sure which table?").
2. **All copy** — hero lede, deposit line, event labels, category names, capacity strings, footer CTA copy.
3. **Booth data structure** — the `CONFIG.events` object at the bottom of the file. Each event has categories; each category has `name`, `capacity`, and a `booths` array of `{code, price}` objects. Individual prices per booth; delete a booth to mark it sold-out (the "N available" count and empty categories auto-hide).
4. **Interactive booth selection** — click a booth chip to select it. The chip highlights in the event's accent colour, a pinned pill appears at the top of the panel showing the selection, and the WhatsApp/Instagram enquiry buttons for that section update their `data-booth` attribute so the pre-filled message includes the booth code and price. Clicking a selected chip (or the `×` on the pill) clears the selection.
5. **Pre-fill message template** — the exact `buildMessage()` output:
   ```
   Hi MTL! I'd like to enquire about a booth for MTL Bali 2026 ✨

   Name:
   Event Name: {event}
   Booth Selection: {booth}
   MTL Pass/Package Type:
   Number of people:

   Thanks!
   ```
6. **WhatsApp handler** — `https://wa.me/61423939210?text={encoded message}` in a new tab.
7. **Instagram handler** — Instagram doesn't accept prefilled DM text via URL. So: copy the message to clipboard, open `https://ig.me/m/moretolife.au` in a new tab, show a toast "Message copied — paste it in the Instagram DM". Keep the clipboard fallback for browsers without `navigator.clipboard`.
8. **Event accent colours** — these are the MTL programme colours, do not change:
   - Welcome Party — `#EA6A2A`
   - No Signal — `#8747B8`
   - Nights in Bali — `#3D9B4A`
   - The Send-Off — `#F5A6C5` (Du Coeur pink)

   They're used as CSS variables scoped per section (`.event { --evt: ... }`) — this pattern works well, keep it.
9. **Booth chip visual** — code on top, price below, both in Barlow Condensed. When selected, the whole chip fills with the event accent and text goes dark.
10. **Body remains dark** — background `#050505`, elevated surfaces `#0e0e0e` / `#131313`, borders `#262626`. This is intentional — a nightclub-booking aesthetic that lets the venue maps read as the visual centrepiece.

## What to OVERRIDE — match the existing site

The reference build has a custom nav, footer, and font loader that Codex should replace with the site's real patterns from `styles.css`:

### Navigation

- **Delete** the reference build's `<nav class="nav">` block entirely.
- **Replace** with the site's real header pattern — same markup used on `all-inclusive.html`:
  ```html
  <header class="site-header">
    <div class="wrap">
      <div class="header-inner">
        <a class="logo-link" href="index.html">
          <img class="logo" src="images/more2life-logo-date.png" alt="MORE TO LIFE 2026">
        </a>
        <nav class="nav">
          <a href="index.html">HOME</a>
          <a href="#">PASSES</a>
          <a href="all-inclusive.html">ALL-INCLUSIVE</a>
          <a href="#">FLIGHTS</a>
          <a href="booths.html" class="active">BOOTHS</a>
        </nav>
        <div class="header-actions">
          <a class="btn-book-now header-book-now" href="#">BOOK NOW</a>
        </div>
      </div>
    </div>
  </header>
  ```
- Add **BOOTHS** to the nav across every other page's `<header>` too (`index.html`, `all-inclusive.html`, any flights page) so the site nav stays consistent.
- The site header is purple `#6e2ea2` with `#f7efff` links, `#ffcb47` yellow hover — that comes for free from `styles.css`, no custom CSS needed.

### Countdown banner (if present on other pages)

If `all-inclusive.html` uses the `.countdown-banner` block above the header, include the same block on `/booths.html` for consistency.

### Footer

- **Delete** the reference build's minimal `<footer class="footer">`.
- **Replace** with the site's real footer pattern — same `.site-footer` + `.footer-socials` structure used on other pages, with the same email / Instagram / TikTok / WhatsApp social links.

### Fonts

- **Delete** the reference build's `<link>` to Google Fonts Barlow Condensed.
- The site's `styles.css` already imports Barlow Condensed at the top and applies `text-transform: uppercase` globally on `body`. When `/booths.html` imports `styles.css`, the whole page inherits it automatically.

### CSS placement

- Take the `<style>` block from the reference build's `<head>` and move it into a **new** file: `booths.css`.
- Link both stylesheets in the `<head>` in this order:
  ```html
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="booths.css">
  ```
- **Delete these rules from `booths.css`** — they conflict with or duplicate the site's global styles:
  - The `body { ... }` rule (site's `styles.css` already sets font, colour, uppercase)
  - The `.nav`, `.nav-inner`, `.brand`, `.btn-ghost`, `.btn-lg` rules used only by the reference nav
- **Keep** everything else — hero, programme strip, event sections, map wrapper, panel, booth chips, category cards, selected pill, footer CTA, toast, responsive breakpoints, and the `:root` custom-property block.
- **Add** a page-level `body` override at the top of `booths.css` if needed to force the dark background just on this page:
  ```css
  body { background: #050505; color: #f5f5f5; }
  ```
  (The site's default is `#fafafa` cream — this page needs black. Scope this to `body` on `booths.html` only; don't put it in `styles.css`.)

### JavaScript placement

- Take the `<script>` block from the reference build's bottom and move it into a **new** file: `booths.js`.
- Reference it before `</body>`:
  ```html
  <script src="booths.js" defer></script>
  ```
- No changes to the JS logic itself — the `CONFIG` object, `buildMessage`, category rendering, `selectBooth`, and the WhatsApp/Instagram handlers all stay as-is.

## Config values (already correct — don't change)

At the top of `booths.js`:
```js
const CONFIG = {
  whatsappNumber: '61423939210',    // +61 423 939 210
  instagramHandle: 'moretolife.au',  // @moretolife.au
  events: { ... }
};
```

Individual booth prices are currently all `$TBC` — leave as-is unless Olumide provides real prices. He'll edit them directly in `booths.js`.

## Image paths

The reference build references the four map images as relative filenames (e.g. `WELCOME_PARTY_-_Table_Map.png`) because the reference lives in the same folder. In production, move the four PNGs into the site's `images/` folder and update the four `<img src>` values in `booths.html` accordingly:

```html
<img src="images/WELCOME_PARTY_-_Table_Map.png" alt="Welcome Party table map">
<img src="images/NO_SIGNAL_-_Table_Map.png" alt="No Signal table map">
<img src="images/NIGHTS_IN_BALI_-_Table_Map.png" alt="Nights in Bali table map">
<img src="images/THE_SEND-OFF_-_Table_Map.png" alt="The Send-Off table map">
```

## Meta tags

Copy the site's standard meta block from `all-inclusive.html` into `booths.html` and adapt:

```html
<title>BOOTHS — MORE TO LIFE 2026 — BALI</title>
<meta name="description" content="Reserve your booth for MTL Bali 2026's four nights — Welcome Party, No Signal, Nights in Bali, The Send-Off.">
<meta property="og:title" content="BOOTHS — MORE TO LIFE 2026 — BALI">
<meta property="og:description" content="Reserve your booth for MTL Bali 2026's four nights.">
<meta property="og:url" content="https://more2life.com.au/booths.html">
<meta property="og:image" content="https://more2life.com.au/images/search-preview.jpg">
<meta property="og:type" content="website">
<meta name="viewport" content="width=device-width,initial-scale=1">
```

## Deliverables checklist

- [ ] `booths.html` in the site root — matches site nav/footer/font conventions, dark body background, all four event sections
- [ ] `booths.css` in the site root — page-specific styles only, no font import, no `body` font rule, no `.nav` rules
- [ ] `booths.js` in the site root — CONFIG, rendering, selection, WhatsApp/IG handlers
- [ ] `images/WELCOME_PARTY_-_Table_Map.png` + 3 other map PNGs moved
- [ ] `<a href="booths.html">BOOTHS</a>` added to nav on every other page (`index.html`, `all-inclusive.html`, etc.)
- [ ] Verified in browser: WhatsApp button opens `wa.me/61423939210` with pre-filled message; Instagram button copies message + opens `ig.me/m/moretolife.au`; clicking a booth updates the pill + injects code/price into the message

## Testing

Please verify:
1. Loading `/booths.html` shows the site's purple header with **BOOTHS** highlighted, and the dark body underneath.
2. Clicking a booth chip in any event section: chip fills with the event accent colour, pill appears at the top of the panel with correct booth code and price, "Enquire · WhatsApp" and "Enquire · Instagram" buttons at the bottom of that section include the booth in their prefilled message.
3. WhatsApp button opens a new tab with `wa.me/61423939210?text=...` containing the correct pre-filled message.
4. Instagram button copies the message to clipboard, opens `ig.me/m/moretolife.au`, and shows a "Message copied" toast for ~2.5s.
5. Mobile (≤900px): map stacks above booth list per event; nav uses site's mobile menu behaviour; buttons remain tappable.
6. All four event accent colours render correctly:
   - Welcome Party — orange `#EA6A2A`
   - No Signal — purple `#8747B8`
   - Nights in Bali — green `#3D9B4A`
   - The Send-Off — pink `#F5A6C5`
