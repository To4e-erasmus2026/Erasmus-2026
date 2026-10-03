// Builds the pages from the content in sites.js.
// You normally don't need to edit this file.

const app = document.getElementById("app");
let savedOffline = false; // becomes true once sw.js has saved the site on this device

// The EU flag: 12 gold stars in a circle on blue, 3:2 proportions
const EU_FLAG = (() => {
  const star = "M0,-30 L6.74,-9.27 L28.53,-9.27 L10.9,3.54 L17.63,24.27 L0,11.46 L-17.63,24.27 L-10.9,3.54 L-28.53,-9.27 L-6.74,-9.27Z";
  const stars = Array.from({ length: 12 }, (_, i) => {
    const a = (i * 30 * Math.PI) / 180;
    return `<path d="${star}" transform="translate(${(405 + 180 * Math.sin(a)).toFixed(1)},${(270 - 180 * Math.cos(a)).toFixed(1)})"/>`;
  }).join("");
  return `<svg class="eu-flag" viewBox="0 0 810 540" role="img" aria-label="Flag of the European Union"><rect width="810" height="540" fill="#039"/><g fill="#fc0">${stars}</g></svg>`;
})();

// Top bar text comes from sites.js
document.getElementById("brandName").textContent = GUIDE.brand;
document.getElementById("brandSchool").innerHTML = `${GUIDE.school} <span>${GUIDE.schoolTown}</span>`;
document.getElementById("footer").innerHTML = `
  <div class="eu">
    ${EU_FLAG}
    <span class="eu-label">${GUIDE.fundingLabel}</span>
  </div>
  ${GUIDE.footer.map(line => `<p>${line}</p>`).join("")}
  <p class="disclaimer">${GUIDE.fundingDisclaimer}</p>`;

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
      <h2>Quick quiz</h2>
      <p class="quiz-intro">${s.quiz.length} questions about what you just read.${best !== undefined ? ` Your best: <b>${best} / ${s.quiz.length}</b>` : ""}</p>
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
      fs.querySelector(".feedback").innerHTML = right
        ? "✓ Correct!"
        : `✗ Not quite — the answer is <b>${item.options[item.answer]}</b>.`;
      answered++;
      if (right) correct++;
      if (answered === s.quiz.length) showResult();
    });
  });

  function showResult() {
    saveScore(s.id, correct);
    const total = s.quiz.length;
    const msg = correct === total ? "Perfect score! 🏆" : correct >= total / 2 ? "Well done!" : "Read the page again and have another go!";
    const result = box.querySelector(".quiz-result");
    result.innerHTML = `<p><b>${correct} / ${total}</b> — ${msg}</p><button type="button" class="btn btn-ghost" id="quizAgain">Try again</button>`;
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
  return `Photo: <a href="${p.source}" target="_blank" rel="noopener">${p.author}</a>, ` +
    `<a href="${p.licenseUrl}" target="_blank" rel="noopener">${p.license}</a>, via Wikimedia Commons`;
}

// Optional "imageFocus" in sites.js picks which part of the photo stays visible when it is cropped
function focusStyle(s) {
  return s.imageFocus ? ` style="object-position:${s.imageFocus}"` : "";
}

// ---- Home page ----
function renderHome() {
  const visited = loadVisited();
  const done = SITES.filter(s => visited.includes(s.id)).length;
  const scores = loadScores();
  const points = Object.values(scores).reduce((a, b) => a + b, 0);
  const maxPoints = SITES.reduce((a, s) => a + (s.quiz ? s.quiz.length : 0), 0);

  const cards = SITES.map((s, i) => `
    <li>
      <a class="card ${visited.includes(s.id) ? "is-visited" : ""}" href="#/site/${s.id}">
        ${s.image ? `<img class="card-img" src="${s.image}" alt="" loading="lazy"${focusStyle(s)}>` : ""}
        <span class="num">${i + 1}</span>
        <span class="card-body">
          <span class="card-meta">${s.area} · ${s.period}</span>
          <span class="card-title">${s.shortName}</span>
          <span class="card-line">${s.oneLine}</span>
          ${s.id in scores ? `<span class="card-quiz">★ Quiz ${scores[s.id]} / ${s.quiz.length}</span>` : ""}
        </span>
        ${visited.includes(s.id) ? `<span class="check" title="Visited">✓</span>` : ""}
      </a>
    </li>`).join("");

  app.innerHTML = `
    <section class="hero">
      <div class="meander" aria-hidden="true"></div>
      <h1>${GUIDE.title}<small>${GUIDE.subtitle}</small></h1>
      <p>${GUIDE.intro}</p>
      <div class="progress" aria-label="Sites visited">
        <div class="progress-bar"><span style="width:${(done / SITES.length) * 100}%"></span></div>
        <span>${done} of ${SITES.length} sites visited</span>
      </div>
      ${maxPoints ? `<p class="quiz-total">★ Quiz points: <b>${points} of ${maxPoints}</b>${points ? "" : " — every site page ends with a short quiz"}</p>` : ""}
      <a class="btn map-btn" href="#/map">🗺 All sites on a map</a>
      <p class="offline-note" ${savedOffline ? "" : "hidden"}>✓ Saved on this device — works without internet</p>
    </section>
    <ol class="cards">${cards}</ol>`;
  document.title = `${GUIDE.title} — ${GUIDE.subtitle}`;
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
        <h2>${sec.title || "Fun facts"}</h2>
        <ul>${sec.items.map(f => `<li>${f}</li>`).join("")}</ul>
      </section>`;
  }
  return "";
}

function renderSite(id) {
  const index = SITES.findIndex(s => s.id === id);
  if (index === -1) { location.hash = "#/"; return; }
  const s = SITES[index];
  const prev = SITES[index - 1];
  const next = SITES[index + 1];
  const isVisited = loadVisited().includes(s.id);

  app.innerHTML = `
    <article class="site">
      <a class="back" href="#/">← All sites</a>
      ${s.image ? `
        <figure class="site-photo">
          <img class="site-img" src="${s.image}" alt="${s.name}"${focusStyle(s)}>
          ${s.photo ? `<figcaption>${photoCredit(s.photo)}</figcaption>` : ""}
        </figure>` : ""}
      <header class="site-head">
        <span class="kicker">Stop ${index + 1} of ${SITES.length}</span>
        <h1>${s.name}</h1>
        <div class="chips">
          <span class="chip">📍 ${s.area}</span>
          <span class="chip">🏛 ${s.period}</span>
        </div>
        <p class="lead">${s.intro}</p>
        <div class="actions">
          <a class="btn" href="${mapUrl(s)}" target="_blank" rel="noopener">Open in Maps</a>
          <button class="btn btn-ghost ${isVisited ? "on" : ""}" id="visitBtn" aria-pressed="${isVisited}">
            ${isVisited ? "✓ Visited" : "Mark as visited"}
          </button>
        </div>
      </header>

      ${s.sections.map(renderSection).join("")}

      ${renderQuiz(s)}

      ${s.sources && s.sources.length ? `
        <section class="block sources">
          <h2>Learn more</h2>
          <ul>${s.sources.map(src => `<li><a href="${src.url}" target="_blank" rel="noopener">${src.label}</a></li>`).join("")}</ul>
        </section>` : ""}

      <nav class="pager">
        ${prev ? `<a href="#/site/${prev.id}"><small>← Previous</small>${prev.shortName}</a>` : "<span></span>"}
        ${next ? `<a class="next" href="#/site/${next.id}"><small>Next →</small>${next.shortName}</a>` : "<span></span>"}
      </nav>
    </article>`;

  document.getElementById("visitBtn").addEventListener("click", () => toggleVisited(s.id));
  setUpQuiz(s);
  document.title = `${s.shortName} — ${GUIDE.title}`;
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
      <a class="back" href="#/">← All sites</a>
      <h1>All sites on the map</h1>
      <p class="lead">Tap a number to see the site's name and open its page.</p>
      <div class="map-zoom" id="mapZoom"></div>
      <div id="map" class="map"><p class="map-msg">Loading the map…</p></div>
      <ol class="map-list">
        ${SITES.map((s, i) => `<li><a href="#/site/${s.id}"><span class="num">${i + 1}</span>${s.shortName}<small>${s.area}</small></a></li>`).join("")}
      </ol>
    </article>`;
  document.title = `Map — ${GUIDE.title}`;

  loadLeaflet().then(() => {
    const el = document.getElementById("map");
    if (!el) return; // the student already left the map page
    el.innerHTML = "";
    const map = L.map(el, { scrollWheelZoom: false });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
    }).addTo(map);
    const points = SITES.filter(s => s.coords).map((s) => {
      const n = SITES.indexOf(s) + 1;
      const icon = L.divIcon({ className: "map-pin", html: `<span>${n}</span>`, iconSize: [30, 30], iconAnchor: [15, 15] });
      L.marker(s.coords, { icon, title: s.shortName }).addTo(map)
        .bindPopup(`<b>${n}. ${s.shortName}</b><br>${s.area} · ${s.period}<br><a href="#/site/${s.id}">Open page →</a>`);
      return s.coords;
    });
    const showAll = () => map.fitBounds(points, { padding: [30, 30] });
    showAll();

    // Sites close together overlap when the whole trip is shown,
    // so add a button per area (sites within ~13 km of each other) to zoom in.
    const groups = [];
    SITES.filter(s => s.coords).forEach(s => {
      const g = groups.find(g => g.some(o => Math.abs(o.coords[0] - s.coords[0]) < 0.12 && Math.abs(o.coords[1] - s.coords[1]) < 0.12));
      if (g) g.push(s); else groups.push([s]);
    });
    const bar = document.getElementById("mapZoom");
    bar.innerHTML = `<button type="button" class="chip on" data-g="all">Whole trip</button>` +
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
    if (el) el.innerHTML = `<p class="map-msg">The map needs an internet connection. Everything else in this guide works offline — use the list below.</p>`;
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
render();

// ---- Save the site on the device so it works offline (see sw.js) ----
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
  navigator.serviceWorker.ready.then(() => {
    savedOffline = true;
    const note = document.querySelector(".offline-note");
    if (note) note.hidden = false;
  });
}
