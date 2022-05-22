'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "608fc0412c9639adb10b2009f11be38e",
"index.html": "e8fdf8f7914d622a96d4064886a7cdb6",
"/": "e8fdf8f7914d622a96d4064886a7cdb6",
"main.dart.js": "4b8f9ed338871fd40beb37415a113dad",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon-16x16.png": "4760b1e432c8a06c565ad6a1f5c4cbb1",
"icons/favicon.ico": "d1ba41eaa22dcf140f9bb3cc21d9e71d",
"icons/apple-icon.png": "9cb8cfc372e2467c8eb2ae6a67da6a7e",
"icons/apple-icon-144x144.png": "b29c3d9b3aebce4908dcc0cdd27b1ab4",
"icons/android-icon-192x192.png": "a5d5ee38b090a9854d535afcadfc0b8b",
"icons/apple-icon-precomposed.png": "9cb8cfc372e2467c8eb2ae6a67da6a7e",
"icons/apple-icon-114x114.png": "b17f56bd7b48758cbc7e124ae79d8147",
"icons/ms-icon-310x310.png": "950a5e44872ee64ba40e66d349370a46",
"icons/ms-icon-144x144.png": "b29c3d9b3aebce4908dcc0cdd27b1ab4",
"icons/apple-icon-57x57.png": "3987268565bfa55ab117f966c4b1115b",
"icons/apple-icon-152x152.png": "f0c4817eb361f6dfbcf2a4a8f57a64a4",
"icons/ms-icon-150x150.png": "0c1793b6053764623e166da5210d873c",
"icons/android-icon-72x72.png": "952e66f4a61a256abb7d562a1b1a8bdc",
"icons/android-icon-96x96.png": "ddb7eadd4469548233f3ed766f2f37d4",
"icons/android-icon-36x36.png": "7d4c938024ea085002f51dbbb5bd9a09",
"icons/apple-icon-180x180.png": "6395200a875160a8837ff0b7469f6b04",
"icons/favicon-96x96.png": "ddb7eadd4469548233f3ed766f2f37d4",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-48x48.png": "bffca107a5703396d47b39f6cb65c2ef",
"icons/apple-icon-76x76.png": "f442b97b200a220d3ae05423872b9ae9",
"icons/apple-icon-60x60.png": "a44be6d3c37472a7909056929134fce4",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "b29c3d9b3aebce4908dcc0cdd27b1ab4",
"icons/apple-icon-72x72.png": "952e66f4a61a256abb7d562a1b1a8bdc",
"icons/apple-icon-120x120.png": "1b3bce21d7c6667f2d9766fe0b5e383c",
"icons/favicon-32x32.png": "e0408068418128852a8879ce968815b6",
"icons/ms-icon-70x70.png": "8735c584272f6ab0b30be6558cf07815",
"manifest.json": "7a3905559684be5c9ab340191a3dd478",
"assets/AssetManifest.json": "97915cd98a321d3e4216f31caff2cae9",
"assets/NOTICES": "1b43815255893e3ad414b90920a64cc7",
"assets/FontManifest.json": "1b85449b84571f2ec356a50d9b28e47d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/contents/2-1.jpeg": "7d5c19283588bdd976f41550e0b38754",
"assets/assets/images/contents/4-0.jpeg": "dfdc721f267fa73e341a8799c615b488",
"assets/assets/images/contents/2-3.webp": "84bcbd43ca5ba26358d7e62fefba4462",
"assets/assets/images/contents/6-1.jpeg": "c00d46b73eab2e72680b4dae190b1346",
"assets/assets/images/contents/2-0.jpg": "3f731be7378abfc133363c103be8b730",
"assets/assets/images/contents/2-2.jpg": "958d50407d744de74d45d61407d9401d",
"assets/assets/images/contents/4-1.jpg": "272ac1420b54a7d2c066de6b3b169693",
"assets/assets/images/contents/6-0.png": "0fa21f7b4d6c50185a0858bf0a79c7c8",
"assets/assets/images/contents/7-0.jpeg": "93b1fef59f6f3420356becfaffef27a9",
"assets/assets/images/contents/3-0.jpg": "60a2c93d3e0d48824620862843f550d2",
"assets/assets/images/contents/5-0.jpeg": "324a40d15558c28e5cd87a48122b7eb7",
"assets/assets/images/contents/0.jpg": "c015ecf5e9a9b3dc6e4b22d456c2700d",
"assets/assets/images/icon.svg": "6a7be268434e1d517455493d07fc45e7",
"assets/assets/images/placeholder.png": "d5f92b134ca045a60e0103f08001a07b",
"assets/assets/images/texture.png": "093a834bf5d65e945c62df35ff49a1ec",
"assets/assets/images/logo.svg": "461f18c0a721674e089e34ef32d6d825",
"assets/assets/fonts/ContactsIcons.ttf": "11d62b47d4b06f91c26b32de9c3e0871"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
