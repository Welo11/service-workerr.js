self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('store-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/collections',
        '/products',
        '/cart',
        '/assets/theme.css',
        '/assets/theme.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
