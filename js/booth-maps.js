/* ============================================================
   MTL TABLE MAPS - behaviour
   Syncs the four live HTML maps with the existing booth picker.
   Load after js/booths.js.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  labelPrivateLoungeChips();
  fitMapsToContainers();
  applySoldStateToMaps();
  wireMapClicksToPane();
  wirePaneClicksToMaps();

  let resizeFrame;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(fitMapsToContainers);
  });
});

function labelPrivateLoungeChips() {
  document.querySelectorAll('.mtl-chip[data-code^="VIP Private Lounge"]').forEach(chip => {
    const loungeNumber = chip.dataset.code.split(' ').pop();
    chip.replaceChildren(
      document.createTextNode('VIP'),
      document.createElement('br'),
      document.createTextNode(`PL${loungeNumber}`)
    );
  });
}

function fitMapsToContainers() {
  document.querySelectorAll('.mtl-map-scale-wrap').forEach(wrapper => {
    const map = wrapper.querySelector('.mtl-map');
    if (!map) return;

    const naturalWidth = Number.parseFloat(map.style.width);
    if (!naturalWidth || !wrapper.clientWidth) return;

    const scale = Math.min(1, wrapper.clientWidth / naturalWidth);
    map.style.zoom = scale.toFixed(4);
  });
}

function getCategoryBooths(category) {
  if (category.groups) {
    return category.groups.flatMap(group => group.booths);
  }
  return category.booths || [];
}

function findMapChip(eventName, code) {
  return document.querySelector(
    `.mtl-chip[data-code="${cssEscape(code)}"][data-event="${cssEscape(eventName)}"]`
  );
}

function findPaneChip(eventName, code) {
  const panel = document.querySelector(
    `.panel[data-event="${cssEscape(eventName)}"]`
  );
  if (!panel) return null;
  return panel.querySelector(`.booth[data-code="${cssEscape(code)}"]`);
}

/* Keep sold booths on the map while booths.js filters them from the pane. */
function applySoldStateToMaps() {
  if (typeof CONFIG === 'undefined') {
    console.warn('booth-maps.js: CONFIG not found - load booths.js before booth-maps.js');
    return;
  }

  Object.entries(CONFIG.events).forEach(([eventName, categories]) => {
    categories.forEach(category => {
      getCategoryBooths(category).forEach(booth => {
        if (!booth.sold) return;
        const chip = findMapChip(eventName, booth.code);
        if (!chip) return;
        chip.classList.add('mtl-chip--sold');
        chip.setAttribute('aria-disabled', 'true');
      });
    });
  });
}

/* Map clicks reuse booths.js's existing selection and enquiry logic. */
function wireMapClicksToPane() {
  document.querySelectorAll('.mtl-chip[data-code]').forEach(mapChip => {
    if (mapChip.classList.contains('mtl-chip--fixed')) return;

    const eventName = mapChip.dataset.event;
    const code = mapChip.dataset.code;
    const isSold = mapChip.classList.contains('mtl-chip--sold');

    mapChip.setAttribute('role', 'button');
    mapChip.setAttribute('aria-label', `${code}, ${eventName}`);
    mapChip.setAttribute('aria-pressed', 'false');
    mapChip.tabIndex = isSold ? -1 : 0;

    mapChip.addEventListener('click', () => {
      if (mapChip.classList.contains('mtl-chip--sold')) return;

      const paneChip = findPaneChip(eventName, code);
      if (!paneChip) return;

      paneChip.click();
      paneChip.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    mapChip.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      mapChip.click();
    });
  });
}

/* Pane selections, including clear buttons, are mirrored back to the map. */
function wirePaneClicksToMaps() {
  document.querySelectorAll('.panel').forEach(panel => {
    const eventName = panel.dataset.event;

    panel.querySelectorAll('.booth[data-code]').forEach(paneChip => {
      paneChip.addEventListener('click', () => {
        const selectedCode = paneChip.classList.contains('selected')
          ? paneChip.dataset.code
          : '';
        syncMapSelectionVisual(eventName, selectedCode);
      });
    });

    const clearButton = panel.querySelector('.selected-pill button');
    if (clearButton) {
      clearButton.addEventListener('click', () => {
        syncMapSelectionVisual(eventName, '');
      });
    }
  });
}

function syncMapSelectionVisual(eventName, code) {
  document.querySelectorAll(
    `.mtl-chip[data-event="${cssEscape(eventName)}"]`
  ).forEach(chip => {
    chip.classList.remove('mtl-chip--selected');
    if (chip.hasAttribute('aria-pressed')) {
      chip.setAttribute('aria-pressed', 'false');
    }
  });

  if (!code) return;

  const chip = findMapChip(eventName, code);
  if (chip && !chip.classList.contains('mtl-chip--sold')) {
    chip.classList.add('mtl-chip--selected');
    chip.setAttribute('aria-pressed', 'true');
  }
}

/* Small fallback for browsers without CSS.escape. */
function cssEscape(value) {
  return window.CSS && CSS.escape
    ? CSS.escape(value)
    : value.replace(/["\\]/g, '\\$&');
}
