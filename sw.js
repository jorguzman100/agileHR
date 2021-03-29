
const cacheName = 'pwa-conf-v1';
const staticAssets = [
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

/* self.addEventListener('install', async event => {
    console.log('install event')
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    console.log('fetch event')
    const req = event.request;

    if (/.*(json)$/.test(req.url)) {
        event.respondWith(networkFirst(req));
    } else {
        event.respondWith(cacheFirst(req));
    }
});

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(req);
    return cachedResponse || networkFirst(req);
}

async function networkFirst(req) {
    const cache = await caches.open(cacheName);
    try {
        const fresh = await fetch(req);
        cache.put(req, fresh.clone());
        return fresh;
    } catch (e) {
        const cachedResponse = await cache.match(req);
        return cachedResponse;
    }
}
 */
