/* ============================================================
   CONFIG - EDIT HERE
   ============================================================ */
const CONFIG = {
  whatsappNumber: '61423939210',

  /* Per-booth pricing.
     - To mark a booth as SOLD, add `sold: true` to its entry.
     - Keep sold booths in the list so the live map can cross them out.
     - Prices show as-is (include the currency symbol, e.g. '$850 AUD').
     - Use '' (empty string) if a specific booth's price is TBC.
  */
  events: {
    'Welcome Party (12 Aug)': [
      { name: 'VIP Bottle Service', capacity: '12 people', booths: [
        { code: '200', price: '$1,462', sold: true },
        { code: '201', price: '$1,462', sold: true }
      ]},
      { name: 'Dance Floor Tables', capacity: '6–8 people', booths: [
        { code: '40', price: '$854', sold: true },
        { code: '50', price: '$854', sold: true },
        { code: '600', price: '$854' },
        { code: '700', price: '$854', sold: true },
        { code: '500', price: '$854' }
      ]},
      { name: 'Lounge Booths', capacity: '4–6 people', booths: [
        { code: '100', price: '$1,220' },
        { code: '101', price: '$1,220' },
        { code: '300', price: '$1,220' },
        { code: '301', price: '$1,220' },
        { code: '302', price: '$1,220' },
        { code: '303', price: '$1,220' }
      ]},
      { name: 'Shisha Lounge', capacity: '4 people', booths: [
        { code: '11', price: '$488' }, { code: '12', price: '$488' },
        { code: '13', price: '$488' }, { code: '14', price: '$488' },
        { code: '15', price: '$488' }, { code: '16', price: '$488' },
        { code: '21', price: '$488' }, { code: '22', price: '$488' },
        { code: '23', price: '$488' }, { code: '24', price: '$488' },
        { code: '25', price: '$488' }, { code: '26', price: '$488' }
      ]},
      { name: 'Dining Tables', capacity: '2 people', booths: [
        { code: '01', price: '$244' }, { code: '02', price: '$244' },
        { code: '03', price: '$244' }, { code: '04', price: '$244' },
        { code: '05', price: '$244' }, { code: '06', price: '$244' }
      ]}
    ],

    'No Signal (13 Aug)': [
      { name: 'VVIP Lounges', groups: [
        { name: 'XL', capacity: '12 people', booths: [
          { code: 'VVIP XL', label: 'XL', price: '$854', sold: true }
        ]},
        { name: 'Large (L)', capacity: '10 people', booths: [
          { code: 'VVIP L1', label: 'L1', price: '$854', sold: true },
          { code: 'VVIP L2', label: 'L2', price: '$854', sold: true }
        ]},
        { name: 'Medium (M)', capacity: '8 people', booths: [
          { code: 'VVIP M1', label: 'M1', price: '$610', sold: true },
          { code: 'VVIP M2', label: 'M2', price: '$610', sold: true },
          { code: 'VVIP M3', label: 'M3', price: '$854', sold: true },
          { code: 'VVIP M4', label: 'M4', price: '$854', sold: true },
          { code: 'VVIP M5', label: 'M5', price: '$610', sold: true }
        ]}
      ]},
      { name: 'VIP Private Lounges (VIP PL)', capacity: '10 people', booths: [
        { code: 'VIP Private Lounge 1', label: '1', price: '$610' },
        { code: 'VIP Private Lounge 2', label: '2', price: '$610' },
        { code: 'VIP Private Lounge 3', label: '3', price: '$610' },
        { code: 'VIP Private Lounge 4', label: '4', price: '$610' },
        { code: 'VIP Private Lounge 5', label: '5', price: '$610' },
        { code: 'VIP Private Lounge 6', label: '6', price: '$610' }
      ]},
      { name: 'VIP Booths', capacity: '7 people', booths: [
        { code: 'VIP 1', label: '1', price: '$488' },
        { code: 'VIP 2', label: '2', price: '$488' },
        { code: 'VIP 3', label: '3', price: '$488' },
        { code: 'VIP 4', label: '4', price: '$488' },
        { code: 'VIP 5', label: '5', price: '$488' },
        { code: 'VIP 6', label: '6', price: '$488' }
      ]},
      { name: 'Standard Tables', capacity: '4 people', booths: [
        { code: 'STD Table 1', label: '1', price: '$305' },
        { code: 'STD Table 2', label: '2', price: '$305' },
        { code: 'STD Table 3', label: '3', price: '$305' },
        { code: 'STD Table 4', label: '4', price: '$305' }
      ]}
    ],

    'Nights in Bali (15 Aug)': [
      { name: 'Canopy Beds', capacity: '10 people', booths: [
        { code: 'CB1', price: '$1,220', sold: true }, { code: 'CB2', price: '$1,220' },
        { code: 'CB3', price: '$1,220' }, { code: 'CB5', price: '$1,220' },
        { code: 'CB6', price: '$1,220' }
      ]},
      { name: 'Cabanas', capacity: '15 people', booths: [
        { code: 'C1', price: '$3,050' }, { code: 'C2', price: '$3,050' },
        { code: 'C3', price: '$3,050' }, { code: 'C5', price: '$3,050' },
        { code: 'C6', price: '$3,050' }, { code: 'C7', price: '$3,050' }
      ]},
      { name: 'Daybed Sofas', capacity: '6 people', booths: [
        { code: 'D1', price: '$1,830' }, { code: 'D2', price: '$1,830' },
        { code: 'D3', price: '$1,830' }, { code: 'D5', price: '$1,830' },
        { code: 'D6', price: '$1,830' }, { code: 'D7', price: '$1,830' },
        { code: 'D8', price: '$1,830' }, { code: 'D9', price: '$1,830' },
        { code: 'D10', price: '$1,830' }
      ]},
      { name: 'DJ Sofas', capacity: '10 people', booths: [
        { code: 'DJ1', price: '$3,660' },
        { code: 'DJ2', price: '$3,660' },
        { code: 'DJ3', price: '$3,660', sold: true }
      ]},
      { name: 'Backstage Sofas', capacity: 'Terrace', booths: [
        { code: 'BS1', price: '$0', sold: true },
        { code: 'BS2', price: '$0', sold: true }
      ]},
      { name: 'Backstage Terrace', capacity: '10 people', booths: [
        { code: 'T1', price: '$1,830' }, { code: 'T2', price: '$1,830' },
        { code: 'T3', price: '$1,830' }, { code: 'T5', price: '$1,830' },
        { code: 'T6', price: '$1,830' }, { code: 'T7', price: '$1,830' },
        { code: 'T8', price: '$1,830' }, { code: 'T9', price: '$1,830' }
      ]},
      { name: 'Dance Floor Sofas', capacity: '8 people', booths: [
        { code: 'S1', price: '$2,440' }, { code: 'S2', price: '$2,440' },
        { code: 'S3', price: '$2,440' }, { code: 'S5', price: '$2,440' },
        { code: 'S6', price: '$2,440' }, { code: 'S7', price: '$2,440' },
        { code: 'S9', price: '$2,440' }
      ]}
    ],

    'The Send-Off (17 Aug)': [
      { name: 'VVIP Lounges', groups: [
        { name: 'XL', capacity: '12 people', booths: [
          { code: 'VVIP XL', label: 'XL', price: '$854', sold: true }
        ]},
        { name: 'Large (L)', capacity: '10 people', booths: [
          { code: 'VVIP L1', label: 'L1', price: '$854', sold: true },
          { code: 'VVIP L2', label: 'L2', price: '$854' }
        ]},
        { name: 'Medium (M)', capacity: '8 people', booths: [
          { code: 'VVIP M1', label: 'M1', price: '$610' },
          { code: 'VVIP M2', label: 'M2', price: '$610', sold: true },
          { code: 'VVIP M3', label: 'M3', price: '$854', sold: true },
          { code: 'VVIP M4', label: 'M4', price: '$854' },
          { code: 'VVIP M5', label: 'M5', price: '$610' }
        ]}
      ]},
      { name: 'VIP Private Lounges (VIP PL)', capacity: '10 people', booths: [
        { code: 'VIP Private Lounge 1', label: '1', price: '$610' },
        { code: 'VIP Private Lounge 2', label: '2', price: '$610' },
        { code: 'VIP Private Lounge 3', label: '3', price: '$610' },
        { code: 'VIP Private Lounge 4', label: '4', price: '$610' },
        { code: 'VIP Private Lounge 5', label: '5', price: '$610' },
        { code: 'VIP Private Lounge 6', label: '6', price: '$610' }
      ]},
      { name: 'VIP Booths', capacity: '7 people', booths: [
        { code: 'VIP 1', label: '1', price: '$488' },
        { code: 'VIP 2', label: '2', price: '$488' },
        { code: 'VIP 3', label: '3', price: '$488' },
        { code: 'VIP 4', label: '4', price: '$488', sold: true },
        { code: 'VIP 5', label: '5', price: '$488' },
        { code: 'VIP 6', label: '6', price: '$488' }
      ]},
      { name: 'High Tables', capacity: '4 people', booths: [
        { code: 'HIGH Table 1', label: '1', price: '$305' },
        { code: 'HIGH Table 2', label: '2', price: '$305' },
        { code: 'HIGH Table 3', label: '3', price: '$305' },
        { code: 'HIGH Table 4', label: '4', price: '$305' }
      ]}
    ]
  }
};

function roundPriceUp(price) {
  const amount = Number(price.replace(/[^0-9.]/g, ''));
  if (!Number.isFinite(amount)) return price;

  const roundedAmount = Math.ceil(amount / 100) * 100;
  return `$${roundedAmount.toLocaleString('en-AU')}`;
}

Object.values(CONFIG.events).forEach(categories => {
  categories.forEach(category => {
    const groups = category.groups || [category];
    groups.forEach(group => {
      group.booths.forEach(booth => {
        booth.price = roundPriceUp(booth.price);
      });
    });
  });
});

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
  button.addEventListener('click', event => {
    event.preventDefault();
    const eventName = button.dataset.event || '';
    const boothName = button.dataset.booth || '';
    const message = buildMessage(eventName, boothName);
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    openBookingRules(url);
  });
});

const boothPlanBar = document.getElementById('booth-plan-bar');
const boothPlanBarCount = document.getElementById('booth-plan-bar-count');
const boothPlanBarBadge = document.getElementById('booth-plan-bar-badge');
const boothPlanReviewButton = document.getElementById('booth-plan-review');
const boothPlanDialog = document.getElementById('booth-plan-dialog');
const boothPlanList = document.getElementById('booth-plan-list');
const boothPlanCount = document.getElementById('booth-plan-count');
const boothPlanCloseButton = boothPlanDialog.querySelector('.booth-plan-close');
const boothPlanWhatsAppButton = document.getElementById('booth-plan-whatsapp');
const bookingRulesDialog = document.getElementById('booking-rules-dialog');
const bookingRulesCloseButton = bookingRulesDialog.querySelector('.booking-rules-close');
const bookingRulesBackButton = document.getElementById('booking-rules-back');
const bookingRulesContinueButton = document.getElementById('booking-rules-continue');
let boothPlanTrigger = null;
let bookingRulesTrigger = null;
let pendingWhatsAppUrl = '';

function openBookingRules(url) {
  pendingWhatsAppUrl = url;
  bookingRulesTrigger = document.activeElement;
  bookingRulesDialog.hidden = false;
  document.body.classList.add('booking-rules-dialog-open');
  bookingRulesContinueButton.focus();
}

function closeBookingRules({ restoreFocus = true } = {}) {
  bookingRulesDialog.hidden = true;
  document.body.classList.remove('booking-rules-dialog-open');
  pendingWhatsAppUrl = '';
  if (restoreFocus && bookingRulesTrigger instanceof HTMLElement) {
    bookingRulesTrigger.focus();
  }
  bookingRulesTrigger = null;
}

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
  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  closeBoothPlan();
  openBookingRules(url);
});

bookingRulesCloseButton.addEventListener('click', closeBookingRules);
bookingRulesBackButton.addEventListener('click', closeBookingRules);

bookingRulesDialog.addEventListener('click', event => {
  if (event.target === bookingRulesDialog) {
    closeBookingRules();
  }
});

bookingRulesContinueButton.addEventListener('click', () => {
  const url = pendingWhatsAppUrl;
  closeBookingRules({ restoreFocus: false });
  if (url) {
    window.open(url, '_blank');
  }
});

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (!bookingRulesDialog.hidden) {
    closeBookingRules();
  } else if (!boothPlanDialog.hidden) {
    closeBoothPlan();
  }
});

updateBoothPlan();
