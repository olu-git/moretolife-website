(function () {
  const countdownRoot = document.getElementById("countdown");
  if (!countdownRoot) return;

  const targetDate = new Date(countdownRoot.dataset.targetDate).getTime();
  const fields = {
    days: countdownRoot.querySelector('[data-unit="days"]'),
    hours: countdownRoot.querySelector('[data-unit="hours"]'),
    minutes: countdownRoot.querySelector('[data-unit="minutes"]'),
    seconds: countdownRoot.querySelector('[data-unit="seconds"]')
  };

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function render() {
    const now = Date.now();
    const diff = Math.max(targetDate - now, 0);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    fields.days.textContent = pad(days);
    fields.hours.textContent = pad(hours);
    fields.minutes.textContent = pad(minutes);
    fields.seconds.textContent = pad(seconds);
  }

  render();
  setInterval(render, 1000);
})();

(async function () {
  const toggleBtn = document.getElementById("filters-toggle");
  const panel = document.getElementById("filters-panel");
  const showcase = document.getElementById("villas-showcase");
  if (!toggleBtn || !panel || !showcase) return;

  function closeFilters() {
    panel.setAttribute("hidden", "");
    toggleBtn.setAttribute("aria-expanded", "false");
  }

  function openFilters() {
    panel.removeAttribute("hidden");
    toggleBtn.setAttribute("aria-expanded", "true");
  }

  toggleBtn.addEventListener("click", function () {
    const isOpen = !panel.hasAttribute("hidden");
    if (isOpen) closeFilters();
    else openFilters();
  });

  document.addEventListener("click", function (event) {
    if (panel.hasAttribute("hidden")) return;
    if (panel.contains(event.target) || toggleBtn.contains(event.target)) return;
    closeFilters();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !panel.hasAttribute("hidden")) {
      closeFilters();
    }
  });

  const groups = ["bedrooms", "bathrooms"].map(function (groupName) {
    const inputs = Array.from(panel.querySelectorAll('input[name="' + groupName + '"]'));
    return {
      name: groupName,
      inputs: inputs,
      anyInput: inputs.find(function (input) { return input.value === "any"; })
    };
  });

  const groupMap = {};
  groups.forEach(function (group) {
    groupMap[group.name] = group;
  });

  const emptyState = document.getElementById("filters-empty");
  let villaCards = [];

  function renderVillas(villas) {
    showcase.innerHTML = villas.map(function (villa) {
      const priceMarkup = villa.priceFrom
        ? '<p class="villa-price"><span class="price-label">FROM</span> <span class="price-value">' + villa.priceFrom + '</span></p>'
        : "";
      return (
        '<a href="' + villa.href + '" class="villa-option" data-bedrooms="' + villa.bedrooms + '" data-bathrooms="' + villa.bathrooms + '">' +
          '<img src="' + villa.image + '" alt="' + villa.title + '">' +
          '<div class="villa-option-overlay">' +
            '<div class="villa-option-content">' +
              '<h2>' + villa.title + '</h2>' +
              '<p class="villa-desc">' + villa.description + '</p>' +
              priceMarkup +
              '<p class="villa-cta">EXPLORE &rarr;</p>' +
            '</div>' +
          '</div>' +
        '</a>'
      );
    }).join("");
    villaCards = Array.from(showcase.querySelectorAll(".villa-option"));
  }

  function getSelectedNumbers(group) {
    return group.inputs
      .filter(function (input) {
        return input.checked && input.value !== "any";
      })
      .map(function (input) {
        return Number(input.value);
      })
      .filter(function (value) {
        return !Number.isNaN(value);
      });
  }

  function cardMatches(cardValue, selectedValues) {
    if (!selectedValues.length) return true;
    return selectedValues.some(function (selectedValue) {
      return cardValue >= selectedValue && cardValue < selectedValue + 1;
    });
  }

  function applyFilters() {
    const bedroomsSelected = getSelectedNumbers(groupMap.bedrooms);
    const bathroomsSelected = getSelectedNumbers(groupMap.bathrooms);

    villaCards.forEach(function (card) {
      const bedroomsValue = Number(card.dataset.bedrooms || "0");
      const bathroomsValue = Number(card.dataset.bathrooms || "0");

      const matchesBedrooms = cardMatches(bedroomsValue, bedroomsSelected);
      const matchesBathrooms = cardMatches(bathroomsValue, bathroomsSelected);
      const visible = matchesBedrooms && matchesBathrooms;

      if (visible) card.removeAttribute("hidden");
      else card.setAttribute("hidden", "");
    });

    if (emptyState) {
      const hasVisibleCards = villaCards.some(function (card) {
        return !card.hasAttribute("hidden");
      });
      if (hasVisibleCards) emptyState.setAttribute("hidden", "");
      else emptyState.removeAttribute("hidden");
    }
  }

  groups.forEach(function (group) {
    group.inputs.forEach(function (input) {
      input.addEventListener("change", function () {
        if (input.value === "any" && input.checked) {
          group.inputs.forEach(function (otherInput) {
            if (otherInput !== input) otherInput.checked = false;
          });
          applyFilters();
          return;
        }

        if (input.value !== "any" && input.checked && group.anyInput) {
          group.anyInput.checked = false;
        }

        const hasNumberSelected = group.inputs.some(function (groupInput) {
          return groupInput.value !== "any" && groupInput.checked;
        });

        if (!hasNumberSelected && group.anyInput) {
          group.anyInput.checked = true;
        }

        applyFilters();
      });
    });
  });

  try {
    const response = await fetch("data/villas.json");
    if (!response.ok) throw new Error("Failed to load villa data");
    const villas = await response.json();
    if (!Array.isArray(villas)) throw new Error("Invalid villa data format");
    renderVillas(villas);
  } catch (error) {
    showcase.innerHTML = "";
    if (emptyState) {
      emptyState.textContent = "COULD NOT LOAD VILLAS DATA.";
      emptyState.removeAttribute("hidden");
    }
    return;
  }

  applyFilters();
})();
