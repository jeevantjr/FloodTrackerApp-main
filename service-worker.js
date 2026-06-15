const CACHE_NAME = 'fedwatch-cache-v1';
const OFFLINE_URL = 'index.html';

const PRECACHE_ASSETS = [
  'index.html',
  'flood-report.html',
  'health-report.html',
  'education-report.html',
  'dashboard.html',
  'manifest.json',
  'images/flood-icon.png',
  'styles.css',       // if used
  'scripts.js'        // if used
];

// Install event: Pre-cache static assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Install');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  self.skipWaiting(); // Activate immediately
});

// Activate event: Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activate');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event: Serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request).catch(() => caches.match(OFFLINE_URL))
      );
    })
  );
});
