const CACHE = 'tienda-v4-lock-ok';
const FILES = ['./', './index.html', './manifest.json', './icono.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
