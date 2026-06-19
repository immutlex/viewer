// Minimal service worker for PWA installability. Network passthrough only —
// no precaching of the app shell. A thin viewer that always talks to a live
// localhost daemon must never serve a stale JS bundle, so this worker
// deliberately does not intercept fetches with a cache. Offline read caching
// is handled separately and opt-in via IndexedDB.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// No 'fetch' handler: requests go straight to the network. This keeps the
// worker installable without taking ownership of caching.
