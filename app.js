// Builds the pages from the content in sites.js.
// You normally don't need to edit this file.

const app = document.getElementById("app");

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

function mapUrl(site) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(site.map || site.name);
}

// ---- Home page ----
function renderHome() {
  const visited = loadVisited();
  const done = SITES.filter(s => visited.includes(s.id)).length;

  const cards = SITES.map((s, i) => `
    <li>
      <a class="card ${visited.includes(s.id) ? "is-visited" : ""}" href="#/site/${s.id}">
        ${s.image ? `<img class="card-img" src="${s.image}" alt="" loading="lazy">` : ""}
        <span class="num">${i + 1}</span>
        <span class="card-body">
          <span class="card-meta">${s.area} · ${s.period}</span>
          <span class="card-title">${s.shortName}</span>
          <span class="card-line">${s.oneLine}</span>
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
      ${s.image ? `<img class="site-img" src="${s.image}" alt="${s.name}">` : ""}
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
  document.title = `${s.shortName} — ${GUIDE.title}`;
}

// ---- Simple router: #/ = home, #/site/acropolis = a site ----
let lastHash = null;
function render() {
  const hash = location.hash || "#/";
  const m = hash.match(/^#\/site\/([\w-]+)/);
  if (m) renderSite(m[1]); else renderHome();
  if (hash !== lastHash) window.scrollTo(0, 0);
  lastHash = hash;
}

window.addEventListener("hashchange", render);
render();
