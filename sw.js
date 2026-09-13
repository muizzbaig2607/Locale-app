// Minimal service worker — just enough for Chrome's PWA installability
// checks (manifest + registered SW with a fetch handler). Not doing any
// offline caching here, so it simply lets requests pass through.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
