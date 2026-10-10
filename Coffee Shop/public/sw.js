const CACHE_NAME = 'brewlab-cache-v1';

const PRECACHE_ASSETS = [
  '/',
  '/manifest.json',
  '/images/benefits-cup.avif',
  '/images/flavor-1-poster.avif',
  '/images/flavor-2-poster.avif',
  '/images/flavor-3-poster.avif',
  '/images/gallery-1.avif',
  '/images/gallery-2.avif',
  '/images/gallery-3.avif',
  '/images/gallery-4.avif',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Network-first strategy for navigation and API
  // Cache-first for images and media
  if (event.request.destination === 'image' || event.request.destination === 'video') {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  } else {
    // Network first for HTML/JS
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  }
});
