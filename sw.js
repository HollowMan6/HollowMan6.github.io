const cacheName = "Hollow-Man-APP-v1";
var contentToCache = [];

self.addEventListener("install", function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(contentToCache);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      clients.claim();
      return Promise.all(keyList.map((key) => {
        if (key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request)
    .then(function (response) {
      if (!response || response.status !== 200) {
        return caches.match(event.request)
      }
      caches.open(cacheName).then(function (cache) {
        return cache.delete(event.request)
          .then(function () {
            cache.put(event.request, response.clone());
          });
      });
      return response;
    })
    .catch(function () {
      return caches.match(event.request);
    })
  );
});

self.addEventListener('push', function (event) {
  var data = JSON.parse(event.data.text());
  var title = data["title"];
  delete data.title;
  var options = data;
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(clients.matchAll({
    includeUncontrolled: true,
    type: "window"
  }).then(function (clientList) {
    if (clients.openWindow && event.notification.data)
      return clients.openWindow(event.notification.data);
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if ('focus' in client)
        return client.focus();
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
});