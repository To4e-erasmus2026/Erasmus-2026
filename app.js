// Builds the pages from the content in sites.js (English) and lang/*.js (other languages).
// You normally don't need to edit this file.

const app = document.getElementById("app");
let savedOffline = false; // becomes true once sw.js has saved the site on this device

// ---- Languages ----
// English text lives in sites.js and in UI_EN below; each other language has a file in lang/.
const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ro", label: "Română" },
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" },
  { code: "tr", label: "Türkçe" },
];

// Words used by the app itself (buttons, labels). {x} is replaced by a number or name.
const UI_EN = {
  allSites: "← All sites",
  sitesVisited: "{done} of {total} sites visited",
  quizPoints: "★ Quiz points: <b>{points} of {max}</b>",
  quizHint: " — every site page ends with a short quiz",
  mapButton: "🗺 All sites on a map",
  savedOffline: "✓ Saved on this device — works without internet",
  visited: "Visited",
  cardQuiz: "★ Quiz {score} / {total}",
  stopOf: "Stop {n} of {total}",
  openInMaps: "Open in Maps",
  markVisited: "Mark as visited",
  isVisited: "✓ Visited",
  funFacts: "Fun facts",
  learnMore: "Learn more",
  previous: "← Previous",
  next: "Next →",
  photo: "Photo",
  viaCommons: "via Wikimedia Commons",
  quizTitle: "Quick quiz",
  quizIntro: "{n} questions about what you just read.",
  quizBest: "Your best: <b>{best} / {n}</b>",
  correct: "✓ Correct!",
  wrong: "✗ Not quite — the answer is <b>{answer}</b>.",
  perfect: "Perfect score! 🏆",
  wellDone: "Well done!",
  tryHarder: "Read the page again and have another go!",
  tryAgain: "Try again",
  mapTitle: "All sites on the map",
  mapIntro: "Tap a number to see the site's name and open its page.",
  mapLoading: "Loading the map…",
  mapOffline: "The map needs an internet connection. Everything else in this guide works offline — use the list below.",
  openPage: "Open page →",
  wholeTrip: "Whole trip",
  map: "Map",
  language: "Language",
  euFlag: "Flag of the European Union",
};

let lang = "en";
let ui = UI_EN;
let guide = GUIDE;
let sites = SITES;

function t(key, vars) {
  let text = ui[key] !== undefined ? ui[key] : UI_EN[key];
  if (vars) for (const k in vars) text = text.split(`{${k}}`).join(vars[k]);
  return text;
}

function pickStartLanguage() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved && LANGUAGES.some(l => l.code === saved)) return saved;
  } catch (e) {}
  const prefs = navigator.languages || [navigator.language || "en"];
  for (const p of prefs) {
    const code = String(p).slice(0, 2).toLowerCase();
    if (LANGUAGES.some(l => l.code === code)) return code;
  }
  return "en";
}

// Loads lang/xx.js once; it adds TRANSLATIONS.xx
function loadLanguageFile(code) {
  window.TRANSLATIONS = window.TRANSLATIONS || {};
  if (code === "en" || TRANSLATIONS[code]) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = `lang/${code}.js?v=${Date.now()}`;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

function applyLanguage(code) {
  const tr = code === "en" ? null : window.TRANSLATIONS[code];
  lang = tr ? code : "en";
  ui = tr ? { ...UI_EN, ...tr.ui } : UI_EN;
  guide = tr ? { ...GUIDE, ...tr.guide } : GUIDE;
  // translated text replaces the English text; photos, map positions, links stay the same
  sites = SITES.map(s => (tr && tr.sites[s.id] ? { ...s, ...tr.sites[s.id] } : s));
  document.documentElement.lang = lang;
}

function setLanguage(code) {
  try { localStorage.setItem("lang", code); } catch (e) {}
  loadLanguageFile(code)
    .then(() => applyLanguage(code))
    .catch(() => applyLanguage("en"))
    .then(() => { renderFrame(); render(); });
}

function languageSwitcher() {
  return `
    <nav class="langs" aria-label="${t("language")}">
      <span aria-hidden="true">🌐</span>
      ${LANGUAGES.map(l => `<button type="button" class="lang ${l.code === lang ? "on" : ""}" data-lang="${l.code}" lang="${l.code}" title="${l.label}" aria-pressed="${l.code === lang}">${l.code.toUpperCase()}</button>`).join("")}
    </nav>`;
}

document.addEventListener("click", e => {
  const btn = e.target.closest(".lang[data-lang]");
  if (btn && btn.dataset.lang !== lang) setLanguage(btn.dataset.lang);
});

// The EU flag: 12 gold stars in a circle on blue, 3:2 proportions
const EU_FLAG_STARS = (() => {
  const star = "M0,-30 L6.74,-9.27 L28.53,-9.27 L10.9,3.54 L17.63,24.27 L0,11.46 L-17.63,24.27 L-10.9,3.54 L-28.53,-9.27 L-6.74,-9.27Z";
  return Array.from({ length: 12 }, (_, i) => {
    const a = (i * 30 * Math.PI) / 180;
    return `<path d="${star}" transform="translate(${(405 + 180 * Math.sin(a)).toFixed(1)},${(270 - 180 * Math.cos(a)).toFixed(1)})"/>`;
  }).join("");
})();

// Top bar and footer (the parts that are the same on every page)
function renderFrame() {
  document.getElementById("brandName").textContent = guide.brand;
  document.getElementById("brandSchool").innerHTML = `${guide.school} <span>${guide.schoolTown}</span>`;
  document.getElementById("footer").innerHTML = `
    ${languageSwitcher()}
    <div class="eu">
      <svg class="eu-flag" viewBox="0 0 810 540" role="img" aria-label="${t("euFlag")}"><rect width="810" height="540" fill="#039"/><g fill="#fc0">${EU_FLAG_STARS}</g></svg>
      <span class="eu-label">${guide.fundingLabel}</span>
    </div>
    ${guide.footer.map(line => `<p>${line}</p>`).join("")}
    <p class="disclaimer">${guide.fundingDisclaimer}</p>`;
}

// ---- "visited" checklist, saved on each student's own phone ----
function loadVisited() {
  try { return JSON.parse(localStorage.getItem("visited") || "[]"); } catch (e) { return []; }
}
function saveVisited(list) {
  try { localStorage.setItem("visited", JSON.stringify(list)); } catch (e) {}
}
function toggleVisited(id) {
  const list = loadVisited();
  const i = list.indexOf(id);
  if (i === -1) list.push(id); else list.splice(i, 1);
  saveVisited(list);
  render();
}

// ---- quiz: best score per site, saved on each student's own phone ----
function loadScores() {
  try { return JSON.parse(localStorage.getItem("quizScores") || "{}"); } catch (e) { return {}; }
}
function saveScore(id, score) {
  const scores = loadScores();
  if (!(id in scores) || score > scores[id]) {
    scores[id] = score;
    try { localStorage.setItem("quizScores", JSON.stringify(scores)); } catch (e) {}
  }
}

function renderQuiz(s) {
  if (!s.quiz || !s.quiz.length) return "";
  const best = loadScores()[s.id];
  return `
    <section class="block quiz" id="quiz">
      <h2>${t("quizTitle")}</h2>
      <p class="quiz-intro">${t("quizIntro", { n: s.quiz.length })}${best !== undefined ? " " + t("quizBest", { best, n: s.quiz.length }) : ""}</p>
      ${s.quiz.map((item, qi) => `
        <fieldset class="question" data-q="${qi}">
          <legend><span class="qnum">${qi + 1}</span>${item.q}</legend>
          ${item.options.map((opt, oi) => `<button type="button" class="option" data-o="${oi}">${opt}</button>`).join("")}
          <p class="feedback" aria-live="polite"></p>
        </fieldset>`).join("")}
      <div class="quiz-result" hidden></div>
    </section>`;
}

function setUpQuiz(s) {
  const box = document.getElementById("quiz");
  if (!box) return;
  let answered = 0, correct = 0;
  box.querySelectorAll(".question").forEach(fs => {
    const item = s.quiz[+fs.dataset.q];
    fs.addEventListener("click", e => {
      const btn = e.target.closest(".option");
      if (!btn || fs.classList.contains("done")) return;
      fs.classList.add("done");
      const chosen = +btn.dataset.o;
      const right = chosen === item.answer;
      fs.querySelectorAll(".option").forEach((b, oi) => {
        b.disabled = true;
        if (oi === item.answer) b.classList.add("right");
      });
      if (!right) btn.classList.add("wrong");
      fs.querySelector(".feedback").innerHTML = right ? t("correct") : t("wrong", { answer: item.options[item.answer] });
      answered++;
      if (right) correct++;
      if (answered === s.quiz.length) showResult();
    });
  });

  function showResult() {
    saveScore(s.id, correct);
    const total = s.quiz.length;
    const msg = correct === total ? t("perfect") : correct >= total / 2 ? t("wellDone") : t("tryHarder");
    const result = box.querySelector(".quiz-result");
    result.innerHTML = `<p><b>${correct} / ${total}</b> — ${msg}</p><button type="button" class="btn btn-ghost" id="quizAgain">${t("tryAgain")}</button>`;
    result.hidden = false;
    document.getElementById("quizAgain").addEventListener("click", () => {
      renderSite(s.id);
      document.getElementById("quiz").scrollIntoView();
    });
  }
}

function mapUrl(site) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(site.map || site.name);
}

// Credit line required by the photo's free licence
function photoCredit(p) {
  return `${t("photo")}: <a href="${p.source}" target="_blank" rel="noopener">${p.author}</a>, ` +
    `<a href="${p.licenseUrl}" target="_blank" rel="noopener">${p.license}</a>, ${t("viaCommons")}`;
}

// Optional "imageFocus" in sites.js picks which part of the photo stays visible when it is cropped
function focusStyle(s) {
  return s.imageFocus ? ` style="object-position:${s.imageFocus}"` : "";
}

// ---- Home page ----
function renderHome() {
  const visited = loadVisited();
  const done = sites.filter(s => visited.includes(s.id)).length;
  const scores = loadScores();
  const points = Object.values(scores).reduce((a, b) => a + b, 0);
  const maxPoints = sites.reduce((a, s) => a + (s.quiz ? s.quiz.length : 0), 0);

  const cards = sites.map((s, i) => `
    <li>
      <a class="card ${visited.includes(s.id) ? "is-visited" : ""}" href="#/site/${s.id}">
        ${s.image ? `<img class="card-img" src="${s.image}" alt="" loading="lazy"${focusStyle(s)}>` : ""}
        <span class="num">${i + 1}</span>
        <span class="card-body">
          <span class="card-meta">${s.area} · ${s.period}</span>
          <span class="card-title">${s.shortName}</span>
          <span class="card-line">${s.oneLine}</span>
          ${s.id in scores ? `<span class="card-quiz">${t("cardQuiz", { score: scores[s.id], total: s.quiz.length })}</span>` : ""}
        </span>
        ${visited.includes(s.id) ? `<span class="check" title="${t("visited")}">✓</span>` : ""}
      </a>
    </li>`).join("");

  app.innerHTML = `
    <section class="hero">
      ${languageSwitcher()}
      <div class="meander" aria-hidden="true"></div>
      <h1>${guide.title}<small>${guide.subtitle}</small></h1>
      <p>${guide.intro}</p>
      <div class="progress">
        <div class="progress-bar"><span style="width:${(done / sites.length) * 100}%"></span></div>
        <span>${t("sitesVisited", { done, total: sites.length })}</span>
      </div>
      ${maxPoints ? `<p class="quiz-total">${t("quizPoints", { points, max: maxPoints })}${points ? "" : t("quizHint")}</p>` : ""}
      <a class="btn map-btn" href="#/map">${t("mapButton")}</a>
      <p class="offline-note" ${savedOffline ? "" : "hidden"}>${t("savedOffline")}</p>
    </section>
    <ol class="cards">${cards}</ol>`;
  document.title = `${guide.title} — ${guide.subtitle}`;
}

// ---- One site page ----
function renderSection(sec) {
  if (sec.type === "table") {
    const head = sec.columns.map(c => `<th scope="col">${c}</th>`).join("");
    const rows = sec.rows.map(r =>
      `<tr>${r.map((cell, i) => `<td data-label="${sec.columns[i]}">${cell}</td>`).join("")}</tr>`
    ).join("");
    return `
      <section class="block">
        <h2>${sec.title}</h2>
        <table class="table cols-${sec.columns.length}"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>
        ${sec.note ? `<p class="note">${sec.note}</p>` : ""}
      </section>`;
  }
  if (sec.type === "text") {
    return `
      <section class="block">
        <h2>${sec.title}</h2>
        ${sec.paragraphs.map(p => `<p>${p}</p>`).join("")}
      </section>`;
  }
  if (sec.type === "facts") {
    return `
      <section class="block facts">
        <h2>${sec.title || t("funFacts")}</h2>
        <ul>${sec.items.map(f => `<li>${f}</li>`).join("")}</ul>
      </section>`;
  }
  return "";
}

function renderSite(id) {
  const index = sites.findIndex(s => s.id === id);
  if (index === -1) { location.hash = "#/"; return; }
  const s = sites[index];
  const prev = sites[index - 1];
  const next = sites[index + 1];
  const isVisited = loadVisited().includes(s.id);

  app.innerHTML = `
    <article class="site">
      <a class="back" href="#/">${t("allSites")}</a>
      ${s.image ? `
        <figure class="site-photo">
          <img class="site-img" src="${s.image}" alt="${s.name}"${focusStyle(s)}>
          ${s.photo ? `<figcaption>${photoCredit(s.photo)}</figcaption>` : ""}
        </figure>` : ""}
      <header class="site-head">
        <span class="kicker">${t("stopOf", { n: index + 1, total: sites.length })}</span>
        <h1>${s.name}</h1>
        <div class="chips">
          <span class="chip">📍 ${s.area}</span>
          <span class="chip">🏛 ${s.period}</span>
        </div>
        <p class="lead">${s.intro}</p>
        <div class="actions">
          <a class="btn" href="${mapUrl(s)}" target="_blank" rel="noopener">${t("openInMaps")}</a>
          <button class="btn btn-ghost ${isVisited ? "on" : ""}" id="visitBtn" aria-pressed="${isVisited}">
            ${isVisited ? t("isVisited") : t("markVisited")}
          </button>
        </div>
      </header>

      ${s.sections.map(renderSection).join("")}

      ${renderQuiz(s)}

      ${s.sources && s.sources.length ? `
        <section class="block sources">
          <h2>${t("learnMore")}</h2>
          <ul>${s.sources.map(src => `<li><a href="${src.url}" target="_blank" rel="noopener">${src.label}</a></li>`).join("")}</ul>
        </section>` : ""}

      <nav class="pager">
        ${prev ? `<a href="#/site/${prev.id}"><small>${t("previous")}</small>${prev.shortName}</a>` : "<span></span>"}
        ${next ? `<a class="next" href="#/site/${next.id}"><small>${t("next")}</small>${next.shortName}</a>` : "<span></span>"}
      </nav>
    </article>`;

  document.getElementById("visitBtn").addEventListener("click", () => toggleVisited(s.id));
  setUpQuiz(s);
  document.title = `${s.shortName} — ${guide.title}`;
}

// ---- Map page: all sites on one map (Leaflet + OpenStreetMap, both free) ----
let leafletLoading = null;
function loadLeaflet() {
  if (window.L) return Promise.resolve();
  if (leafletLoading) return leafletLoading;
  const base = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/";
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = base + "leaflet.min.css";
  css.integrity = "sha512-h9FcoyWjHcOcmEVkxOfTLnmZFWIH0iZhZT1H2TbOq55xssQGEJHEaIm+PgoUaZbRvQTNTluNOEfb1ZRy6D3BOw==";
  css.crossOrigin = "anonymous";
  document.head.appendChild(css);
  leafletLoading = new Promise((resolve, reject) => {
    const js = document.createElement("script");
    js.src = base + "leaflet.min.js";
    js.integrity = "sha512-puJW3E/qXDqYp9IfhAI54BJEaWIfloJ7JWs7OeD5i6ruC9JZL1gERT1wjtwXFlh7CjE7ZJ+/vcRZRkIYIb6p4g==";
    js.crossOrigin = "anonymous";
    js.onload = resolve;
    js.onerror = () => { leafletLoading = null; js.remove(); reject(); };
    document.head.appendChild(js);
  });
  return leafletLoading;
}

function renderMap() {
  app.innerHTML = `
    <article class="site map-page">
      <a class="back" href="#/">${t("allSites")}</a>
      <h1>${t("mapTitle")}</h1>
      <p class="lead">${t("mapIntro")}</p>
      <div class="map-zoom" id="mapZoom"></div>
      <div id="map" class="map"><p class="map-msg">${t("mapLoading")}</p></div>
      <ol class="map-list">
        ${sites.map((s, i) => `<li><a href="#/site/${s.id}"><span class="num">${i + 1}</span>${s.shortName}<small>${s.area}</small></a></li>`).join("")}
      </ol>
    </article>`;
  document.title = `${t("map")} — ${guide.title}`;

  loadLeaflet().then(() => {
    const el = document.getElementById("map");
    if (!el) return; // the student already left the map page
    el.innerHTML = "";
    const map = L.map(el, { scrollWheelZoom: false });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
    }).addTo(map);
    const points = sites.filter(s => s.coords).map((s) => {
      const n = sites.indexOf(s) + 1;
      const icon = L.divIcon({ className: "map-pin", html: `<span>${n}</span>`, iconSize: [30, 30], iconAnchor: [15, 15] });
      L.marker(s.coords, { icon, title: s.shortName }).addTo(map)
        .bindPopup(`<b>${n}. ${s.shortName}</b><br>${s.area} · ${s.period}<br><a href="#/site/${s.id}">${t("openPage")}</a>`);
      return s.coords;
    });
    const showAll = () => map.fitBounds(points, { padding: [30, 30] });
    showAll();

    // Sites close together overlap when the whole trip is shown,
    // so add a button per area (sites within ~13 km of each other) to zoom in.
    const groups = [];
    sites.filter(s => s.coords).forEach(s => {
      const g = groups.find(g => g.some(o => Math.abs(o.coords[0] - s.coords[0]) < 0.12 && Math.abs(o.coords[1] - s.coords[1]) < 0.12));
      if (g) g.push(s); else groups.push([s]);
    });
    const bar = document.getElementById("mapZoom");
    bar.innerHTML = `<button type="button" class="chip on" data-g="all">${t("wholeTrip")}</button>` +
      groups.map((g, i) => `<button type="button" class="chip" data-g="${i}">${g[0].area}</button>`).join("");
    bar.addEventListener("click", e => {
      const btn = e.target.closest("button");
      if (!btn) return;
      bar.querySelectorAll("button").forEach(b => b.classList.toggle("on", b === btn));
      if (btn.dataset.g === "all") showAll();
      else map.fitBounds(groups[+btn.dataset.g].map(s => s.coords), { padding: [50, 50], maxZoom: 15 });
    });
  }).catch(() => {
    const el = document.getElementById("map");
    if (el) el.innerHTML = `<p class="map-msg">${t("mapOffline")}</p>`;
  });
}

// ---- Simple router: #/ = home, #/map = map, #/site/acropolis = a site ----
let lastHash = null;
function render() {
  const hash = location.hash || "#/";
  const m = hash.match(/^#\/site\/([\w-]+)/);
  if (m) renderSite(m[1]);
  else if (hash.startsWith("#/map")) renderMap();
  else renderHome();
  if (hash !== lastHash) window.scrollTo(0, 0);
  lastHash = hash;
}

window.addEventListener("hashchange", render);

// Start in the language chosen before (or the phone's language, if we have it)
const startLang = pickStartLanguage();
if (startLang === "en") { renderFrame(); render(); }
else setLanguage(startLang); // loads lang/xx.js first, falls back to English if it fails

// ---- Save the site on the device so it works offline (see sw.js) ----
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
  navigator.serviceWorker.ready.then(() => {
    savedOffline = true;
    const note = document.querySelector(".offline-note");
    if (note) note.hidden = false;
  });
}
