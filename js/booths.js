/* ============================================================
   CONFIG - EDIT HERE
   ============================================================ */
const CONFIG = {
  whatsappNumber: '61423939210',
  instagramHandle: 'moretolife.au',

  /* Per-booth pricing.
     - To mark a booth as SOLD, add `sold: true` to its entry.
     - Keep sold booths in the list so the live map can cross them out.
     - Prices show as-is (include the currency symbol, e.g. '$850 AUD').
     - Use '' (empty string) if a specific booth's price is TBC.
  */
  events: {
    'Welcome Party (12 Aug)': [
      { name: 'VIP Bottle Service', capacity: '12 people', booths: [
        { code: '200', price: '$TBC' },
        { code: '201', price: '$TBC' }
      ]},
      { name: 'Dance Floor Tables', capacity: '6–8 people', booths: [
        { code: '40', price: '$TBC' },
        { code: '50', price: '$TBC' },
        { code: '600', price: '$TBC' },
        { code: '700', price: '$TBC' },
        { code: '500', price: '$TBC' }
      ]},
      { name: 'Lounge Booths', capacity: '4–6 people', booths: [
        { code: '100', price: '$TBC' },
        { code: '101', price: '$TBC' },
        { code: '300', price: '$TBC' },
        { code: '301', price: '$TBC' },
        { code: '302', price: '$TBC' },
        { code: '303', price: '$TBC' }
      ]},
      { name: 'Shisha Lounge', capacity: '4 people', booths: [
        { code: '11', price: '$TBC' }, { code: '12', price: '$TBC' },
        { code: '13', price: '$TBC' }, { code: '14', price: '$TBC' },
        { code: '15', price: '$TBC' }, { code: '16', price: '$TBC' },
        { code: '21', price: '$TBC' }, { code: '22', price: '$TBC' },
        { code: '23', price: '$TBC' }, { code: '24', price: '$TBC' },
        { code: '25', price: '$TBC' }, { code: '26', price: '$TBC' }
      ]},
      { name: 'Dining Tables', capacity: '2 people', booths: [
        { code: '01', price: '$TBC' }, { code: '02', price: '$TBC' },
        { code: '03', price: '$TBC' }, { code: '04', price: '$TBC' },
        { code: '05', price: '$TBC' }, { code: '06', price: '$TBC' }
      ]}
    ],

    'No Signal (13 Aug)': [
      { name: 'VVIP Lounges', groups: [
        { name: 'XL', capacity: '12 people', booths: [
          { code: 'VVIP XL', label: 'XL', price: '$TBC' }
        ]},
        { name: 'Large (L)', capacity: '10 people', booths: [
          { code: 'VVIP L1', label: 'L1', price: '$TBC' },
          { code: 'VVIP L2', label: 'L2', price: '$TBC' }
        ]},
        { name: 'Medium (M)', capacity: '8 people', booths: [
          { code: 'VVIP M1', label: 'M1', price: '$TBC' },
          { code: 'VVIP M2', label: 'M2', price: '$TBC' },
          { code: 'VVIP M3', label: 'M3', price: '$TBC' },
          { code: 'VVIP M4', label: 'M4', price: '$TBC' },
          { code: 'VVIP M5', label: 'M5', price: '$TBC' }
        ]}
      ]},
      { name: 'VIP Private Lounges (VIP PL)', capacity: '10 people', booths: [
        { code: 'VIP Private Lounge 1', label: '1', price: '$TBC' },
        { code: 'VIP Private Lounge 2', label: '2', price: '$TBC' },
        { code: 'VIP Private Lounge 3', label: '3', price: '$TBC' },
        { code: 'VIP Private Lounge 4', label: '4', price: '$TBC' },
        { code: 'VIP Private Lounge 5', label: '5', price: '$TBC' },
        { code: 'VIP Private Lounge 6', label: '6', price: '$TBC' }
      ]},
      { name: 'VIP Booths', capacity: '7 people', booths: [
        { code: 'VIP 1', label: '1', price: '$TBC' },
        { code: 'VIP 2', label: '2', price: '$TBC' },
        { code: 'VIP 3', label: '3', price: '$TBC' },
        { code: 'VIP 4', label: '4', price: '$TBC' },
        { code: 'VIP 5', label: '5', price: '$TBC' },
        { code: 'VIP 6', label: '6', price: '$TBC' }
      ]},
      { name: 'Standard Tables', capacity: '4 people', booths: [
        { code: 'STD Table 1', label: '1', price: '$TBC' },
        { code: 'STD Table 2', label: '2', price: '$TBC' },
        { code: 'STD Table 3', label: '3', price: '$TBC' },
        { code: 'STD Table 4', label: '4', price: '$TBC' }
      ]}
    ],

    'Nights in Bali (15 Aug)': [
      { name: 'Canopy Beds', capacity: 'Poolside', booths: [
        { code: 'CB1', price: '$TBC' }, { code: 'CB2', price: '$TBC' },
        { code: 'CB3', price: '$TBC' }, { code: 'CB5', price: '$TBC' },
        { code: 'CB6', price: '$TBC' }
      ]},
      { name: 'Cabanas', capacity: 'Private', booths: [
        { code: 'C1', price: '$TBC' }, { code: 'C2', price: '$TBC' },
        { code: 'C3', price: '$TBC' }, { code: 'C5', price: '$TBC' },
        { code: 'C6', price: '$TBC' }, { code: 'C7', price: '$TBC' }
      ]},
      { name: 'Daybed Sofas', capacity: 'Poolside', booths: [
        { code: 'D1', price: '$TBC' }, { code: 'D2', price: '$TBC' },
        { code: 'D3', price: '$TBC' }, { code: 'D5', price: '$TBC' },
        { code: 'D6', price: '$TBC' }, { code: 'D7', price: '$TBC' },
        { code: 'D8', price: '$TBC' }, { code: 'D9', price: '$TBC' },
        { code: 'D10', price: '$TBC' }
      ]},
      { name: 'DJ Sofas', capacity: 'Booth-side', booths: [
        { code: 'DJ1', price: '$TBC' },
        { code: 'DJ2', price: '$TBC' },
        { code: 'DJ3', price: '$TBC', sold: true }
      ]},
      { name: 'Backstage Sofas', capacity: 'Terrace', booths: [
        { code: 'BS1', price: '$TBC' },
        { code: 'BS2', price: '$TBC' }
      ]},
      { name: 'Backstage Tables', capacity: 'Terrace', booths: [
        { code: 'T1', price: '$TBC' }, { code: 'T2', price: '$TBC' },
        { code: 'T3', price: '$TBC' }, { code: 'T5', price: '$TBC' },
        { code: 'T6', price: '$TBC' }, { code: 'T7', price: '$TBC' },
        { code: 'T8', price: '$TBC' }, { code: 'T9', price: '$TBC' }
      ]},
      { name: 'Dance Floor Sofas', capacity: 'Front', booths: [
        { code: 'S1', price: '$TBC' }, { code: 'S2', price: '$TBC' },
        { code: 'S3', price: '$TBC' }, { code: 'S5', price: '$TBC' },
        { code: 'S6', price: '$TBC' }, { code: 'S7', price: '$TBC' },
        { code: 'S9', price: '$TBC' }
      ]}
    ],

    'The Send-Off (17 Aug)': [
      { name: 'VVIP Lounges', groups: [
        { name: 'XL', capacity: '12 people', booths: [
          { code: 'VVIP XL', label: 'XL', price: '$TBC' }
        ]},
        { name: 'Large (L)', capacity: '10 people', booths: [
          { code: 'VVIP L1', label: 'L1', price: '$TBC' },
          { code: 'VVIP L2', label: 'L2', price: '$TBC' }
        ]},
        { name: 'Medium (M)', capacity: '8 people', booths: [
          { code: 'VVIP M1', label: 'M1', price: '$TBC' },
          { code: 'VVIP M2', label: 'M2', price: '$TBC' },
          { code: 'VVIP M3', label: 'M3', price: '$TBC' },
          { code: 'VVIP M4', label: 'M4', price: '$TBC' },
          { code: 'VVIP M5', label: 'M5', price: '$TBC' }
        ]}
      ]},
      { name: 'VIP Private Lounges (VIP PL)', capacity: '10 people', booths: [
        { code: 'VIP Private Lounge 1', label: '1', price: '$TBC' },
        { code: 'VIP Private Lounge 2', label: '2', price: '$TBC' },
        { code: 'VIP Private Lounge 3', label: '3', price: '$TBC' },
        { code: 'VIP Private Lounge 4', label: '4', price: '$TBC' },
        { code: 'VIP Private Lounge 5', label: '5', price: '$TBC' },
        { code: 'VIP Private Lounge 6', label: '6', price: '$TBC' }
      ]},
      { name: 'VIP Booths', capacity: '7 people', booths: [
        { code: 'VIP 1', label: '1', price: '$TBC' },
        { code: 'VIP 2', label: '2', price: '$TBC' },
        { code: 'VIP 3', label: '3', price: '$TBC' },
        { code: 'VIP 4', label: '4', price: '$TBC' },
        { code: 'VIP 5', label: '5', price: '$TBC' },
        { code: 'VIP 6', label: '6', price: '$TBC' }
      ]},
      { name: 'High Tables', capacity: '4 people', booths: [
        { code: 'HIGH Table 1', label: '1', price: '$TBC' },
        { code: 'HIGH Table 2', label: '2', price: '$TBC' },
        { code: 'HIGH Table 3', label: '3', price: '$TBC' },
        { code: 'HIGH Table 4', label: '4', price: '$TBC' }
      ]}
    ]
  }
};

function buildEnquiryMessage(boothPlan) {
  return `Hi MTL! I'd like to enquire about booths for MTL 2026.

Full Name:

WhatsApp Number:

Email:

MTL Package: (All-Inclusive / Party Pass / Access Pass / Not booked yet):

Group size:

Booth Plan:
${boothPlan || '-'}

I'm ready to pay the 50% deposit today: (Yes / No)

Thanks!`;
}

function buildMessage(eventName, boothName) {
  const boothPlan = eventName
    ? `- ${eventName}${boothName ? `: ${boothName}` : ''}`
    : '-';
  return buildEnquiryMessage(boothPlan);
}

function buildCombinedMessage(selections) {
  const boothPlan = selections
    .map(selection => `- ${selection.eventName}: ${selection.boothName}`)
    .join('\n');
  return buildEnquiryMessage(boothPlan);
}

function getBoothButtonLabel(categoryName, boothCode) {
  const repeatedPrefix = `${categoryName} `;
  return boothCode.startsWith(repeatedPrefix)
    ? boothCode.slice(repeatedPrefix.length)
    : boothCode;
}

function getFullBoothName(categoryName, boothCode, selectionPrefix = '') {
  if (selectionPrefix) {
    return `${selectionPrefix} ${boothCode}`;
  }
  return boothCode === categoryName || boothCode.startsWith(`${categoryName} `)
    ? boothCode
    : `${categoryName} \u2014 ${boothCode}`;
}

function getAvailabilityLabel(count) {
  return `${count} ${count === 1 ? 'booth' : 'booths'} available`;
}

function appendBoothButton(boothsEl, panel, categoryName, booth, selectionPrefix = '') {
  const button = document.createElement('button');
  const priceDisplay = booth.price ? booth.price : 'Enquire';
  const buttonLabel = booth.label || getBoothButtonLabel(categoryName, booth.code);
  const fullBoothName = booth.selectionName
    || (booth.label ? booth.code : getFullBoothName(categoryName, booth.code, selectionPrefix));
  const priceForMessage = booth.price ? ` (${booth.price})` : '';

  button.className = 'booth';
  button.type = 'button';
  button.innerHTML = `<span class="code">${buttonLabel}</span><span class="price">${priceDisplay}</span>`;
  button.dataset.code = booth.code;
  button.dataset.booth = `${fullBoothName}${priceForMessage}`;
  button.setAttribute('aria-label', `${fullBoothName}, ${priceDisplay}`);
  button.setAttribute('aria-pressed', 'false');
  button.addEventListener('click', () => selectBooth(panel, button));
  boothsEl.appendChild(button);
}

document.querySelectorAll('.panel').forEach(panel => {
  const eventName = panel.dataset.event;
  const cats = CONFIG.events[eventName];
  const catsContainer = panel.querySelector('.cats');
  if (!cats) return;

  cats.forEach(cat => {
    const availableGroups = cat.groups
      ? cat.groups
        .map(group => ({
          ...group,
          booths: group.booths.filter(booth => !booth.sold)
        }))
        .filter(group => group.booths.length > 0)
      : null;
    const availableBooths = cat.booths
      ? cat.booths.filter(booth => !booth.sold)
      : [];
    const totalBooths = availableGroups
      ? availableGroups.reduce((total, group) => total + group.booths.length, 0)
      : availableBooths.length;
    if (totalBooths === 0) return;

    const catEl = document.createElement('div');
    const categoryMeta = cat.capacity
      ? `${cat.capacity} · ${getAvailabilityLabel(totalBooths)}`
      : getAvailabilityLabel(totalBooths);
    catEl.className = 'category';
    catEl.innerHTML = `
      <div class="cat-head">
        <span class="cat-name">${cat.name}</span>
        <span class="cat-meta">${categoryMeta}</span>
      </div>
    `;

    if (availableGroups) {
      const groupsEl = document.createElement('div');
      groupsEl.className = 'booth-subgroups';

      availableGroups.forEach(group => {
        const groupEl = document.createElement('div');
        groupEl.className = 'booth-subgroup';
        groupEl.innerHTML = `
          <div class="booth-subgroup-head">
            <span class="booth-subgroup-name">${group.name}</span>
            <span class="booth-subgroup-meta">${group.capacity} · ${getAvailabilityLabel(group.booths.length)}</span>
          </div>
          <div class="booths"></div>
        `;

        const groupBoothsEl = groupEl.querySelector('.booths');
        group.booths.forEach(booth => {
          appendBoothButton(groupBoothsEl, panel, cat.name, booth, group.selectionPrefix);
        });
        groupsEl.appendChild(groupEl);
      });

      catEl.appendChild(groupsEl);
    } else {
      const boothsEl = document.createElement('div');
      boothsEl.className = 'booths';
      availableBooths.forEach(booth => {
        appendBoothButton(boothsEl, panel, cat.name, booth, cat.selectionPrefix);
      });
      catEl.appendChild(boothsEl);
    }

    catsContainer.appendChild(catEl);
  });
});

function selectBooth(panel, button) {
  const isSelected = button.classList.contains('selected');
  clearPanelSelection(panel);
  const pill = panel.querySelector('.selected-pill');
  const pillValue = pill.querySelector('.value');
  const actions = panel.querySelectorAll('[data-enquire]');

  if (!isSelected) {
    button.classList.add('selected');
    button.setAttribute('aria-pressed', 'true');
    pill.classList.add('active');
    pillValue.textContent = button.dataset.booth;
    actions.forEach(action => {
      action.dataset.booth = button.dataset.booth;
    });
  }
  updateBoothPlan();
}

function clearPanelSelection(panel) {
  panel.querySelectorAll('.booth.selected').forEach(selected => {
    selected.classList.remove('selected');
    selected.setAttribute('aria-pressed', 'false');
  });
  panel.querySelector('.selected-pill').classList.remove('active');
  panel.querySelector('.selected-pill .value').textContent = '';
  panel.querySelectorAll('[data-enquire]').forEach(action => {
    action.dataset.booth = '';
  });
}

document.querySelectorAll('.selected-pill button').forEach(dismissButton => {
  dismissButton.addEventListener('click', () => {
    const panel = dismissButton.closest('.panel');
    clearPanelSelection(panel);
    updateBoothPlan();
  });
});

document.querySelectorAll('[data-enquire]').forEach(button => {
  button.addEventListener('click', async event => {
    event.preventDefault();
    const type = button.dataset.enquire;
    const eventName = button.dataset.event || '';
    const boothName = button.dataset.booth || '';
    const message = buildMessage(eventName, boothName);

    if (type === 'whatsapp') {
      const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    } else if (type === 'instagram') {
      const copied = await copyToClipboard(message);
      openInstagramHandoff(message, copied);
    }
  });
});

async function copyToClipboard(text) {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      return fallbackCopy(text);
    }
  }
  return fallbackCopy(text);
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch (error) {
    copied = false;
  }
  document.body.removeChild(textarea);
  return copied;
}

const instagramHandoff = document.getElementById('instagram-handoff');
const instagramMessagePreview = document.getElementById('instagram-message-preview');
const instagramCopyStatus = document.getElementById('instagram-copy-status');
const instagramOpenButton = document.getElementById('instagram-open');
const instagramCopyAgainButton = document.getElementById('instagram-copy-again');
const instagramCloseButton = instagramHandoff.querySelector('.instagram-handoff-close');
const boothPlanBar = document.getElementById('booth-plan-bar');
const boothPlanBarCount = document.getElementById('booth-plan-bar-count');
const boothPlanBarBadge = document.getElementById('booth-plan-bar-badge');
const boothPlanReviewButton = document.getElementById('booth-plan-review');
const boothPlanDialog = document.getElementById('booth-plan-dialog');
const boothPlanList = document.getElementById('booth-plan-list');
const boothPlanCount = document.getElementById('booth-plan-count');
const boothPlanCloseButton = boothPlanDialog.querySelector('.booth-plan-close');
const boothPlanWhatsAppButton = document.getElementById('booth-plan-whatsapp');
const boothPlanInstagramButton = document.getElementById('booth-plan-instagram');
let pendingInstagramMessage = '';
let instagramTrigger = null;
let boothPlanTrigger = null;

function isMobileDevice() {
  return navigator.userAgentData?.mobile === true
    || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function openInstagram() {
  const handle = encodeURIComponent(CONFIG.instagramHandle);
  const webUrl = `https://ig.me/m/${handle}`;

  if (!isMobileDevice()) {
    window.open(webUrl, '_blank', 'noopener,noreferrer');
    return;
  }

  const appUrl = `instagram://direct/new?username=${handle}`;
  let fallbackTimer;

  const cancelFallback = () => {
    if (!document.hidden) return;
    window.clearTimeout(fallbackTimer);
    document.removeEventListener('visibilitychange', cancelFallback);
  };

  document.addEventListener('visibilitychange', cancelFallback);
  fallbackTimer = window.setTimeout(() => {
    document.removeEventListener('visibilitychange', cancelFallback);
    window.location.href = webUrl;
  }, 1800);

  window.location.href = appUrl;
}

function openInstagramHandoff(message, copied) {
  pendingInstagramMessage = message;
  instagramTrigger = document.activeElement;
  instagramMessagePreview.value = message;
  instagramOpenButton.textContent = isMobileDevice()
    ? 'OPEN INSTAGRAM APP'
    : 'OPEN INSTAGRAM';
  instagramCopyStatus.textContent = copied
    ? 'MESSAGE COPIED — READY TO PASTE.'
    : 'COPYING WAS BLOCKED — USE COPY MESSAGE AGAIN.';
  instagramHandoff.hidden = false;
  document.body.classList.add('instagram-handoff-open');
  instagramOpenButton.focus();
}

function closeInstagramHandoff() {
  instagramHandoff.hidden = true;
  document.body.classList.remove('instagram-handoff-open');
  pendingInstagramMessage = '';
  if (instagramTrigger instanceof HTMLElement) {
    instagramTrigger.focus();
  }
  instagramTrigger = null;
}

instagramOpenButton.addEventListener('click', () => {
  copyToClipboard(pendingInstagramMessage);
  openInstagram();
});

instagramCopyAgainButton.addEventListener('click', async () => {
  const copied = await copyToClipboard(pendingInstagramMessage);
  instagramCopyStatus.textContent = copied
    ? 'MESSAGE COPIED AGAIN — NOW OPEN INSTAGRAM AND PASTE.'
    : 'COPYING WAS BLOCKED — SELECT THE MESSAGE ABOVE AND COPY IT.';
});

instagramCloseButton.addEventListener('click', closeInstagramHandoff);

instagramHandoff.addEventListener('click', event => {
  if (event.target === instagramHandoff) {
    closeInstagramHandoff();
  }
});

function getBoothPlan() {
  return Array.from(document.querySelectorAll('.panel')).map((panel, index) => {
    const selected = panel.querySelector('.booth.selected');
    return {
      eventName: panel.dataset.event,
      boothName: selected ? selected.dataset.booth : '',
      panel,
      accent: `var(--event-${index + 1})`
    };
  });
}

function getSelectedBoothPlan() {
  return getBoothPlan().filter(selection => selection.boothName);
}

function renderBoothPlan() {
  const plan = getBoothPlan();
  const selectedCount = plan.filter(selection => selection.boothName).length;
  boothPlanList.innerHTML = '';

  plan.forEach(selection => {
    const item = document.createElement('div');
    item.className = `booth-plan-item${selection.boothName ? '' : ' unselected'}`;
    item.style.setProperty('--plan-accent', selection.accent);

    const details = document.createElement('div');
    const eventName = document.createElement('span');
    eventName.className = 'booth-plan-event';
    eventName.textContent = selection.eventName;
    const boothName = document.createElement('strong');
    boothName.className = 'booth-plan-selection';
    boothName.textContent = selection.boothName || 'NOT SELECTED';
    details.append(eventName, boothName);
    item.appendChild(details);

    if (selection.boothName) {
      const removeButton = document.createElement('button');
      removeButton.className = 'booth-plan-remove';
      removeButton.type = 'button';
      removeButton.textContent = 'REMOVE';
      removeButton.setAttribute('aria-label', `Remove ${selection.eventName} booth`);
      removeButton.addEventListener('click', () => {
        clearPanelSelection(selection.panel);
        updateBoothPlan();
      });
      item.appendChild(removeButton);
    }

    boothPlanList.appendChild(item);
  });

  boothPlanCount.textContent = `${selectedCount} OF ${plan.length} NIGHTS SELECTED`;
}

function updateBoothPlan() {
  const selectedCount = getSelectedBoothPlan().length;
  const totalNights = Object.keys(CONFIG.events).length;
  const countLabel = `${selectedCount} ${selectedCount === 1 ? 'NIGHT' : 'NIGHTS'} SELECTED`;

  boothPlanBar.hidden = selectedCount === 0;
  boothPlanBarCount.textContent = countLabel;
  boothPlanBarBadge.textContent = `${selectedCount}/${totalNights}`;
  document.body.classList.toggle('has-booth-plan', selectedCount > 0);

  if (!boothPlanDialog.hidden) {
    renderBoothPlan();
    if (selectedCount === 0) {
      closeBoothPlan();
    }
  }
}

function openBoothPlan() {
  if (getSelectedBoothPlan().length === 0) return;
  boothPlanTrigger = document.activeElement;
  renderBoothPlan();
  boothPlanDialog.hidden = false;
  document.body.classList.add('booth-plan-dialog-open');
  boothPlanWhatsAppButton.focus();
}

function closeBoothPlan() {
  boothPlanDialog.hidden = true;
  document.body.classList.remove('booth-plan-dialog-open');
  if (boothPlanTrigger instanceof HTMLElement) {
    boothPlanTrigger.focus();
  }
  boothPlanTrigger = null;
}

boothPlanReviewButton.addEventListener('click', openBoothPlan);
boothPlanCloseButton.addEventListener('click', closeBoothPlan);

boothPlanDialog.addEventListener('click', event => {
  if (event.target === boothPlanDialog) {
    closeBoothPlan();
  }
});

boothPlanWhatsAppButton.addEventListener('click', () => {
  const selections = getSelectedBoothPlan();
  if (selections.length === 0) return;
  const message = buildCombinedMessage(selections);
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
});

boothPlanInstagramButton.addEventListener('click', async () => {
  const selections = getSelectedBoothPlan();
  if (selections.length === 0) return;
  const message = buildCombinedMessage(selections);
  closeBoothPlan();
  const copied = await copyToClipboard(message);
  openInstagramHandoff(message, copied);
});

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (!instagramHandoff.hidden) {
    closeInstagramHandoff();
  } else if (!boothPlanDialog.hidden) {
    closeBoothPlan();
  }
});

updateBoothPlan();
