// Offline support: caches the app and the levels already opened.
// Bump the version below after every update.
const CACHE = "kanji-v16";
const SHELL = ["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png", "data/n5.json", "data/v-n5.json", "data/g-n5.json", "data/g-n4.json", "data/g-n3.json", "data/g-n2.json", "data/g-n1.json", "data/reading.json", "data/s-n5-0.json", "data/s-n5-1.json"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  const isFont = url.host === "fonts.googleapis.com" || url.host === "fonts.gstatic.com";
  if (url.origin !== location.origin && !isFont) return;
  if (req.mode === "navigate" || url.pathname.endsWith("firebase-config.js")) {
    if (req.mode !== "navigate") { e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r; }).catch(() => caches.match(req))); return; }
    e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put("index.html", cp)); return r; }).catch(() => caches.match("index.html")));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { if (r.ok || r.type === "opaque") { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); } return r; })));
});
