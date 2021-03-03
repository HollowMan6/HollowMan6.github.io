const cacheName = "Hollow-Man-APP-v1";
var contentToCache = [];

self.addEventListener("install", function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(contentToCache);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keyList) {
      clients.claim();
      notified = false;
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then((r) => {
      return fetch(event.request).then((response) => {
        var resBody = response.clone();
        return caches.open(cacheName).then((cache) => {
          if (r) {
            cache.delete(event.request).then(function () {
              cache.put(event.request, resBody);
            });
          } else {
            cache.put(event.request, resBody);
          }
          return response;
        });
      }).catch(function () {
        if (r && /\.html$/.test(event.request.url)) {
          event.waitUntil(self.registration.showNotification("You are in offline mode! \n正在脱机模式下使用!"));
        }
        return r;
      });
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