(() => {
  const STORAGE_KEY = "fujiwhara-entries";
  const WATER_TARGET = 8;

  const NUTRIENTS = [
    { id: "omega3", label: "Omega-3", sources: "Salmon, sardines, walnuts, chia seeds, flaxseed, fish oil" },
    { id: "magnesium", label: "Magnesium", sources: "Pumpkin seeds, almonds, spinach, dark chocolate, magnesium supplement" },
    { id: "calcium", label: "Calcium", sources: "Dairy/yoghurt, fortified plant milk, leafy greens, tinned sardines, tofu" },
    { id: "vitaminD", label: "Vitamin D", sources: "Sunlight exposure, salmon, eggs, fortified milk, vitamin D supplement" },
    { id: "iron", label: "Iron", sources: "Red meat, lentils, spinach, tofu, fortified cereal" }
  ];

  const todayKey = (d = new Date()) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  const DATE_FORMAT = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

  // ---------- Storage helpers ----------
  function loadEntries() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  }

  function saveEntries(entries) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }

  function defaultEntry() {
    return {
      protein: "",
      fibre: "",
      strength: false,
      cardio: false,
      nutrients: { omega3: false, magnesium: false, calcium: false, vitaminD: false, iron: false },
      water: 0,
      note: ""
    };
  }

  function getEntry(key) {
    const entries = loadEntries();
    return entries[key] ? { ...defaultEntry(), ...entries[key], nutrients: { ...defaultEntry().nutrients, ...(entries[key].nutrients || {}) } } : defaultEntry();
  }

  function updateEntry(key, patch) {
    const entries = loadEntries();
    const current = entries[key] ? { ...defaultEntry(), ...entries[key], nutrients: { ...defaultEntry().nutrients, ...(entries[key].nutrients || {}) } } : defaultEntry();
    const updated = { ...current, ...patch };
    entries[key] = updated;
    saveEntries(entries);
    return updated;
  }

  function isEntryEmpty(entry) {
    if (!entry) return true;
    const nutrientsChecked = Object.values(entry.nutrients || {}).some(Boolean);
    return (
      !entry.protein &&
      !entry.fibre &&
      !entry.strength &&
      !entry.cardio &&
      !nutrientsChecked &&
      !entry.water &&
      !entry.note
    );
  }

  // ---------- Navigation ----------
  function initNav() {
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const view = btn.dataset.view;
        navButtons.forEach((b) => b.classList.toggle("active", b === btn));
        document.querySelectorAll(".view").forEach((v) => {
          v.classList.toggle("active", v.id === `view-${view}`);
        });
        if (view === "calendar") renderCalendar();
      });
    });
  }

  // ---------- Daily Tracker ----------
  const todayDateKey = todayKey();

  function initTracker() {
    document.getElementById("tracker-date").textContent =
      new Date().toLocaleDateString(undefined, DATE_FORMAT);

    const entry = getEntry(todayDateKey);

    const proteinInput = document.getElementById("protein-input");
    const fibreInput = document.getElementById("fibre-input");
    proteinInput.value = entry.protein || "";
    fibreInput.value = entry.fibre || "";

    proteinInput.addEventListener("input", () => {
      updateEntry(todayDateKey, { protein: proteinInput.value });
      flashSaveStatus();
    });
    fibreInput.addEventListener("input", () => {
      updateEntry(todayDateKey, { fibre: fibreInput.value });
      flashSaveStatus();
    });

    // Workout toggles
    document.querySelectorAll(".toggle-btn[data-toggle]").forEach((btn) => {
      const key = btn.dataset.toggle;
      btn.classList.toggle("checked", !!entry[key]);
      btn.addEventListener("click", () => {
        const updated = updateEntry(todayDateKey, { [key]: !getEntry(todayDateKey)[key] });
        btn.classList.toggle("checked", !!updated[key]);
        flashSaveStatus();
      });
    });

    // Nutrient checklist
    renderNutrientList(entry);

    // Water tracker
    renderWater(entry.water || 0);
    document.getElementById("water-plus").addEventListener("click", () => {
      const current = getEntry(todayDateKey);
      const newVal = Math.min(current.water + 1, 20);
      updateEntry(todayDateKey, { water: newVal });
      renderWater(newVal);
      flashSaveStatus();
    });
    document.getElementById("water-minus").addEventListener("click", () => {
      const current = getEntry(todayDateKey);
      const newVal = Math.max(current.water - 1, 0);
      updateEntry(todayDateKey, { water: newVal });
      renderWater(newVal);
      flashSaveStatus();
    });

    // Mood note
    const noteInput = document.getElementById("mood-note");
    noteInput.value = entry.note || "";
    noteInput.addEventListener("input", () => {
      updateEntry(todayDateKey, { note: noteInput.value });
      flashSaveStatus();
    });
  }

  function renderNutrientList(entry) {
    const list = document.getElementById("nutrient-list");
    list.innerHTML = "";
    NUTRIENTS.forEach((nutrient) => {
      const li = document.createElement("li");
      li.className = "nutrient-item";
      if (entry.nutrients[nutrient.id]) li.classList.add("checked");

      li.innerHTML = `
        <div class="nutrient-row">
          <button class="nutrient-check" aria-label="Toggle ${nutrient.label}">
            <span class="toggle-check">✓</span>
          </button>
          <button class="nutrient-label">
            ${nutrient.label}
            <span class="expand-arrow">▾</span>
          </button>
        </div>
        <div class="nutrient-sources">${nutrient.sources}</div>
      `;

      li.querySelector(".nutrient-check").addEventListener("click", () => {
        const current = getEntry(todayDateKey);
        const newVal = !current.nutrients[nutrient.id];
        const updated = updateEntry(todayDateKey, {
          nutrients: { ...current.nutrients, [nutrient.id]: newVal }
        });
        li.classList.toggle("checked", updated.nutrients[nutrient.id]);
        flashSaveStatus();
      });

      li.querySelector(".nutrient-label").addEventListener("click", () => {
        li.classList.toggle("expanded");
      });

      list.appendChild(li);
    });
  }

  function renderWater(count) {
    const container = document.getElementById("water-glasses");
    container.innerHTML = "";
    for (let i = 0; i < WATER_TARGET; i++) {
      const span = document.createElement("span");
      span.className = "water-glass" + (i < count ? " filled" : "");
      span.textContent = "💧";
      container.appendChild(span);
    }
    document.getElementById("water-count").textContent = count;
  }

  let saveStatusTimeout;
  function flashSaveStatus() {
    const status = document.getElementById("save-status");
    status.textContent = "Saved";
    clearTimeout(saveStatusTimeout);
    saveStatusTimeout = setTimeout(() => {
      status.textContent = "Saved automatically";
    }, 1200);
  }

  // ---------- Calendar / History ----------
  let calendarDate = new Date();
  calendarDate.setDate(1);

  function initCalendar() {
    document.getElementById("cal-prev").addEventListener("click", () => {
      calendarDate.setMonth(calendarDate.getMonth() - 1);
      renderCalendar();
    });
    document.getElementById("cal-next").addEventListener("click", () => {
      calendarDate.setMonth(calendarDate.getMonth() + 1);
      renderCalendar();
    });
    document.getElementById("modal-close").addEventListener("click", closeModal);
    document.getElementById("day-modal").addEventListener("click", (e) => {
      if (e.target.id === "day-modal") closeModal();
    });

    const weekdaysEl = document.getElementById("calendar-weekdays");
    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach((d) => {
      const div = document.createElement("div");
      div.className = "calendar-weekday";
      div.textContent = d;
      weekdaysEl.appendChild(div);
    });
  }

  function renderCalendar() {
    const label = document.getElementById("cal-month-label");
    label.textContent = calendarDate.toLocaleDateString(undefined, { month: "long", year: "numeric" });

    const daysEl = document.getElementById("calendar-days");
    daysEl.innerHTML = "";

    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const entries = loadEntries();
    const todayStr = todayKey();

    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement("div");
      empty.className = "calendar-day empty";
      daysEl.appendChild(empty);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateObj = new Date(year, month, day);
      const key = todayKey(dateObj);
      const hasEntry = !isEntryEmpty(entries[key]);

      const cell = document.createElement("div");
      cell.className = "calendar-day";
      if (hasEntry) cell.classList.add("has-entry");
      if (key === todayStr) cell.classList.add("today");
      cell.textContent = day;

      if (hasEntry) {
        const dot = document.createElement("span");
        dot.className = "entry-dot";
        cell.appendChild(dot);
        cell.addEventListener("click", () => openDayModal(key, dateObj));
      }

      daysEl.appendChild(cell);
    }
  }

  function openDayModal(key, dateObj) {
    const entry = getEntry(key);
    document.getElementById("modal-date").textContent =
      dateObj.toLocaleDateString(undefined, DATE_FORMAT);

    const checkedNutrients = NUTRIENTS.filter((n) => entry.nutrients[n.id]).map((n) => n.label);
    const workouts = [];
    if (entry.strength) workouts.push("Strength");
    if (entry.cardio) workouts.push("Cardio");

    const body = document.getElementById("modal-body");
    body.innerHTML = `
      <div class="summary-row"><span>Protein</span><span>${entry.protein ? entry.protein + " g" : "—"}</span></div>
      <div class="summary-row"><span>Fibre</span><span>${entry.fibre ? entry.fibre + " g" : "—"}</span></div>
      <div class="summary-row"><span>Workout</span><span>${workouts.length ? workouts.join(", ") : "—"}</span></div>
      <div class="summary-row"><span>Nutrients</span><span>${checkedNutrients.length ? checkedNutrients.join(", ") : "—"}</span></div>
      <div class="summary-row"><span>Water</span><span>${entry.water || 0} / ${WATER_TARGET} glasses</span></div>
      <div class="summary-row"><span>Note</span><span>${entry.note ? entry.note : "—"}</span></div>
    `;

    document.getElementById("day-modal").classList.add("open");
  }

  function closeModal() {
    document.getElementById("day-modal").classList.remove("open");
  }

  // ---------- Recipes ----------
  function initRecipes() {
    const tabs = document.querySelectorAll("#recipe-subtabs .subtab-btn");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.toggle("active", t === tab));
        renderRecipes(tab.dataset.recipeTab);
      });
    });
    renderRecipes("breakfast");
  }

  function renderRecipes(category) {
    const list = document.getElementById("recipe-list");
    list.innerHTML = "";
    const recipes = RECIPES[category] || [];

    recipes.forEach((recipe) => {
      const card = document.createElement("div");
      card.className = "recipe-card";

      const tagsHtml = (recipe.tags || [])
        .slice(0, 3)
        .map((tag) => `<span class="tag">${tag}</span>`)
        .join("");

      const ingredientsHtml = (recipe.ingredients || [])
        .map((ing) => `<li>${ing}</li>`)
        .join("");

      const methodHtml = (recipe.method || [])
        .map((step) => `<li>${step}</li>`)
        .join("");

      card.innerHTML = `
        <h3>${recipe.title}</h3>
        <p class="recipe-desc">${recipe.description || ""}</p>
        <div class="recipe-tags">${tagsHtml}</div>
        <h4>Ingredients</h4>
        <ul>${ingredientsHtml}</ul>
        <h4>Method</h4>
        <ol>${methodHtml}</ol>
        ${recipe.meta ? `<p class="recipe-meta">${recipe.meta}</p>` : ""}
      `;

      list.appendChild(card);
    });
  }

  // ---------- Library ----------
  function initLibrary() {
    const list = document.getElementById("topic-list");
    list.innerHTML = "";
    TOPICS.forEach((topic) => {
      const card = document.createElement("div");
      card.className = "topic-card";

      const itemsHtml = (topic.items || [])
        .map((item) => `
          <div class="topic-item">
            <h4>${item.title}</h4>
            <p>${item.text}</p>
          </div>
        `)
        .join("");

      card.innerHTML = `
        <h3>${topic.title}</h3>
        <p>${topic.summary}</p>
        ${itemsHtml}
        ${topic.note ? `<p class="topic-note">${topic.note}</p>` : ""}
        ${!topic.items ? `<span class="topic-placeholder-badge">More coming soon</span>` : ""}
      `;
      list.appendChild(card);
    });
  }

  // ---------- Init ----------
  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    initTracker();
    initCalendar();
    initRecipes();
    initLibrary();
  });
})();
