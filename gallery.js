/* ============================================================
   MTL 2026 PHOTO GALLERY — day-by-day bands
   To add a cover photo to a tile: put the image in images/gallery/
   and set its path in the `img` field, e.g. img:"images/gallery/atv.jpg".
   Leave img:"" to show the colour placeholder.
   ============================================================ */
const GALLERY_EVENTS = [
  {n:"Welcome Dinner",   d:"Wed 12 Aug", day:1, url:"https://photobook.live/photobook/aaf2ad2d-9a78-4731-aa6b-5caa3842ac22", img:"images/gallery/thumbs/welcome-dinner.webp", g:"linear-gradient(135deg,#d85a30,#7b2a10)"},
  {n:"Welcome Party",    d:"Wed 12 Aug", day:1, url:"https://photobook.live/photobook/b9bcaae0-025f-4d1b-a50a-6064b8cf101a", img:"images/gallery/thumbs/welcome-party.webp", g:"linear-gradient(135deg,#ea6a2a,#4a1a5c)"},
  {n:"Waterpark",        d:"Thu 13 Aug", day:2, url:"https://photobook.live/photobook/d3e27e69-06c1-4842-8c72-0f6a5f64809c", img:"images/gallery/thumbs/waterpark.webp", g:"linear-gradient(135deg,#2a8fd8,#0e3f66)"},
  {n:"No Signal",        d:"Thu 13 Aug", day:2, url:"https://photobook.live/photobook/8563b943-63da-43ed-8159-c7a6aebe54a3", img:"images/gallery/thumbs/no-signal.webp", g:"linear-gradient(135deg,#8747b8,#1b0b2e)"},
  {n:"Beachfront Padel", d:"Fri 14 Aug", day:3, url:"https://photobook.live/photobook/ecadf068-1de9-4a90-9378-ab0c38e35cf4", img:"images/gallery/thumbs/beachfront-padel.webp", g:"linear-gradient(135deg,#3db1c8,#1b6d7d)"},
  {n:"Lost In Atlas",    d:"Fri 14 Aug", day:3, url:"https://photobook.live/photobook/8d5e7ea7-a8a6-476b-8323-6d8c08a3fc49", img:"images/gallery/thumbs/lost-in-atlas.webp", g:"linear-gradient(135deg,#e8449a,#5a1040)"},
  {n:"ATV",              d:"Sat 15 Aug", day:4, url:"https://photobook.live/photobook/6b542383-4f9c-40c7-918c-c9c3b76ca533", img:"images/gallery/thumbs/atv.webp", g:"linear-gradient(135deg,#c1772d,#4b3016)"},
  {n:"Nights In Bali",   d:"Sat 15 Aug", day:4, url:"https://photobook.live/photobook/869d63b6-9285-4de7-8997-b450a54c1b46", img:"images/gallery/thumbs/nights-in-bali.webp", g:"linear-gradient(135deg,#3d9b4a,#0f3a1a)"},
  {n:"Riddim FC",        d:"Sun 16 Aug", day:5, url:"https://photobook.live/photobook/67660679-4bfd-449e-8317-b58f4f6104fd", img:"images/gallery/thumbs/riddim-fc.webp", g:"linear-gradient(135deg,#9bd23c,#2f5a10)"},
  {n:"The Takeover",     d:"Sun 16 Aug", day:5, url:"https://photobook.live/photobook/086d6869-f653-4655-94c2-0521d783bb9e", img:"images/gallery/thumbs/the-takeover.webp", g:"linear-gradient(135deg,#f0a640,#7a4a10)"},
  {n:"Breakfast",        d:"Mon 17 Aug", day:6, url:"https://photobook.live/photobook/dbdec9c3-c586-463e-bda6-e1942d63dfca", img:"images/gallery/thumbs/breakfast.webp", g:"linear-gradient(135deg,#ffcb47,#a86a00)"},
  {n:"The Send-Off",     d:"Mon 17 Aug", day:6, url:"https://photobook.live/photobook/ecd7e47a-345f-4a9b-a0a6-7dd430f092ef", img:"images/gallery/thumbs/the-send-off.webp", g:"linear-gradient(135deg,#f5a6c5,#7a2a55)"},
  {n:"Du Coeur",         d:"Mon 17 Aug", day:6, url:"https://photobook.live/photobook/e8022fea-8594-4b82-bd42-3734a278bfab", img:"images/gallery/thumbs/du-coeur.webp", g:"linear-gradient(135deg,#c94f8f,#4a1a3a)"},
];

const GALLERY_DAYS = [
  {day:1, label:"Day 1", date:"Wed 12 Aug", c:"#ea6a2a"},
  {day:2, label:"Day 2", date:"Thu 13 Aug", c:"#7b3fa6"},
  {day:3, label:"Day 3", date:"Fri 14 Aug", c:"#2e7d3e"},
  {day:4, label:"Day 4", date:"Sat 15 Aug", c:"#ea6a2a"},
  {day:5, label:"Day 5", date:"Sun 16 Aug", c:"#7b3fa6"},
  {day:6, label:"Day 6", date:"Mon 17 Aug", c:"#f5a6c5", darkText:true},
];

(function renderGallery(){
  const root = document.getElementById('gal-days');
  if (!root) return;

  root.innerHTML = GALLERY_DAYS.map(d => {
    const evs = GALLERY_EVENTS.filter(e => e.day === d.day);
    return `
      <div class="gal-band${d.darkText ? ' gal-band--dark' : ''}" style="background:${d.c}">
        <div class="gal-dayhead">
          <div class="gal-daylbl">${d.label}</div>
          <div class="gal-daydate">${d.date}</div>
        </div>
        <div class="gal-tiles">
          ${evs.map(e => e.soon
            ? `<div class="gal-tile gal-tile--soon" aria-disabled="true"><div class="gal-ph gal-ph--soon" style="--g:${e.g}"></div><div class="gal-shade"></div><span class="gal-chip">Soon</span><span class="gal-name">${e.n}</span></div>`
            : `<a class="gal-tile" href="${e.url}" target="_blank" rel="noopener" aria-label="${e.n} photos"><div class="gal-ph" data-event="${e.n}" style="--g:${e.g}"></div><div class="gal-shade"></div><span class="gal-chip">Photos</span><span class="gal-name">${e.n}</span></a>`
          ).join('')}
        </div>
      </div>`;
  }).join('');

  const loadCover = (tile, event) => {
    const test = new Image();
    test.decoding = 'async';
    test.onload = () => {
      tile.style.backgroundImage = `url('${event.img}')`;
      tile.style.backgroundSize = 'cover';
      tile.style.backgroundPosition = 'center';
      tile.classList.add('gal-ph--photo');
    };
    test.onerror = () => { /* Missing images keep their gradient placeholder. */ };
    test.src = event.img;
  };

  const covers = GALLERY_EVENTS.filter(event => event.img).map(event => ({
    event,
    tile: root.querySelector(`.gal-ph[data-event="${CSS.escape(event.n)}"]`)
  })).filter(cover => cover.tile);

  if (!('IntersectionObserver' in window)) {
    covers.forEach(({tile, event}) => loadCover(tile, event));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const cover = covers.find(item => item.tile === entry.target);
      if (cover) loadCover(cover.tile, cover.event);
      observer.unobserve(entry.target);
    });
  }, {rootMargin: '400px 0px'});

  covers.forEach(({tile}) => observer.observe(tile));
})();
