// Service worker: saves the site on the phone so it also works without internet.
//
// - Pages, text and code: always try the internet first (so changes show up
//   straight away), and use the saved copy only when there is no connection.
// - Photos and fonts: use the saved copy first (they rarely change).
//
// When you add a new file to the site, add it to FILES below
// and raise the number in VERSION by one.

const VERSION = "to4e-v2";

const FILES = [
  "./",
  "index.html",
  "style.css",
  "sites.js",
  "app.js",
  "lang/ro.js",
  "lang/pt.js",
  "lang/es.js",
  "lang/tr.js",
  "images/acropolis.jpg",
  "images/agora.jpg",
  "images/marathon-tomb.jpg",
  "images/marathon-trophy.jpg",
  "images/brexiza.jpg",
  "images/marathon-race.jpg",
  "images/epidaurus-theatre.jpg",
  "images/asklepieion.jpg",
  "images/palamidi.jpg",
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(VERSION)
      .then(cache => cache.addAll(FILES.map(f => new Request(f, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const sameSite = url.origin === self.location.origin;

  if (sameSite && (req.mode === "navigate" || /\.(html|js|css)$/.test(url.pathname) || url.pathname.endsWith("/"))) {
    event.respondWith(networkFirst(req));
  } else {
    event.respondWith(savedFirst(req));
  }
});

// Internet first, saved copy as backup. Saved without the "?v=" part.
async function networkFirst(req) {
  const cache = await caches.open(VERSION);
  const key = req.mode === "navigate" ? "./" : stripSearch(req.url);
  try {
    const res = await fetch(req, { cache: "no-cache" });
    if (res.ok) cache.put(key, res.clone());
    return res;
  } catch (e) {
    const saved = await cache.match(key, { ignoreSearch: true });
    if (saved) return saved;
    throw e;
  }
}

// Saved copy first; otherwise download it and save it for next time.
async function savedFirst(req) {
  const cache = await caches.open(VERSION);
  const saved = await cache.match(req, { ignoreSearch: true });
  if (saved) return saved;
  const res = await fetch(req);
  if (res.ok || res.type === "opaque") cache.put(req, res.clone());
  return res;
}

function stripSearch(href) {
  const u = new URL(href);
  u.search = "";
  return u.href;
}
