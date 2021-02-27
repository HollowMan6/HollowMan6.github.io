// const CACHE_NAME = "Hollow-Man-APP";

self.addEventListener("install", function (event) {
  self.skipWaiting();
  // event.waitUntil(
  //   caches.open(CACHE_NAME).then(function (cache) {
  //     return cache.add("/favicon.ico");
  //   })
  // );
});

self.addEventListener("activate", event => {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", function (event) {
  // if (/\.ico$/.test(event.request.url)) {
  //   event.respondWith(
  //     caches.match("/favicon.ico").then(function (response) {
  //       if (response) {
  //         return response;
  //       }
  //       return fetch(event.request);
  //     })
  //   );
  // }
  return null;
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