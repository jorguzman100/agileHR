const FILES_TO_CACHE = [
    "/",
    "./index.html",
    "./manifest.json",
    "./sw.js",
    "./sitemap.xml",
    "./assets/css/style.css",
    "./assets/js/script.js",
    "./assets/img/logo/logo_dice-d20_150.png",
    "./assets/img/logo/logo_150.png",
    "./assets/img/logo/logo_192.png",
    "./assets/img/logo/logo_512.png",
    "./assets/img/logo/maskable_icon.png",
    "./assets/img/home_images/agileTeam.png",
    "./assets/img/home_images/city.jpg",
    "./assets/img/home_images/highImpactChart.jpg",
    "./assets/img/home_images/icon_emptyImage.png",
    "./assets/img/icons/Icon_Agile.png",
    "./assets/img/icons/Icon_AgileHR.png",
    "./assets/img/icons/Icon_Customer.png",
    "./assets/img/icons/Icon_diagnosis.png",
    "./assets/img/icons/icon_DigitalHRT.png",
    "./assets/img/icons/icon_HRSMEs.png",
    "./assets/img/icons/Icon_HRStrategic.png",
    "./assets/img/icons/icon_HRT.png",
    "./assets/img/icons/Icon_Move.png",
    "./assets/img/icons/Icon_ROI.png",
    "./assets/img/icons/Icon_Strategy.png",
    "./assets/img/icons/icon_Talent.png",
    "./assets/img/team/jorgeGuzman.jpeg",
    "./assets/img/team/vanessaBorgonio.jpeg",
    "./assets/img/team/manuelCordova.jpeg",
    "./assets/img/team/teamHR.jpg",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
    "https://unpkg.com/aos@next/dist/aos.css",
    "https://code.jivosite.com/widget/JGxdScOz7K",
    "https://code.jivosite.com/js/bundle_en_US.js?rand=1616408375",
    "https://www.googletagmanager.com/gtag/js?id=G-91HER4CMCH",
    "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
    "https://kit.fontawesome.com/e211982880.js",
    "https://unpkg.com/aos@next/dist/aos.js",
    "https://cdn.jsdelivr.net/npm/echarts@5.0.2/dist/echarts.min.js"
];

// install
self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open('static').then(cache => {
            console.log("Your files were pre-cached successfully!");
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});

// fetch
self.addEventListener("fetch", function (e) {
    console.log(`Intercepting fetch request for: ${e.request.url}`);
    // if the request is not for the API, serve static assets using "offline-first" approach.
    // see https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook#cache-falling-back-to-network
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});


/* const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

// install
self.addEventListener("install", function (evt) {z
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Your files were pre-cached successfully!");
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});

self.addEventListener("activate", function (evt) {
    evt.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                        console.log("Removing old cache data", key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );

    self.clients.claim();
});

// fetch
self.addEventListener("fetch", function (evt) {
    // cache successful requests to the API
    if (evt.request.url.includes("/api/")) {
        evt.respondWith(
            caches.open(DATA_CACHE_NAME).then(cache => {
                return fetch(evt.request)
                    .then(response => {
                        // If the response was good, clone it and store it in the cache.
                        if (response.status === 200) {
                            cache.put(evt.request.url, response.clone());
                        }

                        return response;
                    })
                    .catch(err => {
                        // Network request failed, try to get it from the cache.
                        return cache.match(evt.request);
                    });
            }).catch(err => console.log(err))
        );

        return;
    }

    // if the request is not for the API, serve static assets using "offline-first" approach.
    // see https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook#cache-falling-back-to-network
    evt.respondWith(
        caches.match(evt.request).then(function (response) {
            return response || fetch(evt.request);
        })
    );
}); */