// Service Worker for Hearts and Plates Restaurant
const CACHE_NAME = 'hearts-and-plates-v1';
const urlsToCache = [
  '/',
  '/pages/menu.html',
  '/pages/birthday.html',
  '/assets/css/main.css',
  '/assets/css/components.css',
  '/assets/css/responsive.css',
  '/assets/js/main.js',
  '/assets/js/navigation.js',
  '/assets/js/menu.js',
  '/config/site-config.js',
  '/config/menu-data.js'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});