self.addEventListener('push', function (event) {
  const title = event.data.text().slice(0, 2) + ': 兰州大学疫情期间自动定时健康打卡工作流';
  const options = {
    requireInteraction: true,
    vibrate: [200, 100, 200],
    icon: "https://avatars.githubusercontent.com/oa/1472343?s=64&v=4",
    data: event.data.text().slice(2),
    body: "点击通知查看打卡记录工作流!"
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  if (event.notification.data) {
    window.open(event.notification.data, '',
      'width=900,height=680,top=80,scrollbars=yes');
  } else {
    event.waitUntil(clients.matchAll({
      type: "window"
    }).then(function (clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url == '/' && 'focus' in client)
          return client.focus();
      }
      if (clients.openWindow)
        return clients.openWindow('/');
    }));
  }
});