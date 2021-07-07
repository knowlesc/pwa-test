self.addEventListener('fetch', () => {
  console.log('fetch');
});

self.addEventListener('push', event => {
  const payload = event.data ? event.data.text() : 'no payload';
  event.waitUntil(
    self.registration.showNotification('Hi', {
      body: payload,
    })
  );
});