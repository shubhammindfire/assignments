let CACHE_NAME = "spotify-clone-app";
self.addEventListener("install", function (event) {});

self.addEventListener("fetch", function (event) {
    if (!/^https?:$/i.test(new URL(event.request.url).protocol)) return;
    if (event.request.method === "GET") {
        event.respondWith(
            fetch(event.request)
                .then((res) => {
                    const resClone = res.clone();

                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, resClone);
                    });
                    return res;
                })
                .catch((err) => caches.match(event.request).then((res) => res))
        );
    }
});
