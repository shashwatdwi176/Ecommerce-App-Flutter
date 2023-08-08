'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6d46ea3da9588a101a4405a0a3c2304b",
"assets/AssetManifest.json": "0c88fa20653877f6b9e3193f90a664c6",
"assets/assets/fonts/sans_bold.ttf": "e2ebf780f846271f822b52d26d24af1d",
"assets/assets/fonts/sans_regular.ttf": "d2d3b740e46522981f945573253b0a1a",
"assets/assets/fonts/sans_semibold.ttf": "ae9703e4b4c70169e32fee2647ddf51e",
"assets/assets/icons/add.png": "ac37821b1be524a375b9d04f511c16f1",
"assets/assets/icons/apple_logo.png": "ea25af9fd9fdcadfa92a4e2a3155d491",
"assets/assets/icons/app_logo.png": "b0963f41dabedf3fde8b06a03207a5a7",
"assets/assets/icons/app_logo1.jpg": "008e2209021c538533c7ef81783ec9c4",
"assets/assets/icons/app_logo2.png": "1704b4ab539afe48dad151f1aa74dd40",
"assets/assets/icons/app_logo3.png": "46998b1e4231d64b544344351714f058",
"assets/assets/icons/arrow.png": "9e26b92eab0f00359ba8ac023dcfecd2",
"assets/assets/icons/bell.png": "1a1be341ea030918e6cbf996f5cf51a9",
"assets/assets/icons/bg.png": "13037d551d4b5dead90b84879e33cfcf",
"assets/assets/icons/blog.png": "74827b65be30da2731a5ade9f7241d6a",
"assets/assets/icons/brands.png": "d85019b02f84ae1577687fae4e1d843a",
"assets/assets/icons/campaigns.png": "8e63abb3cc43572e841bb23d14743362",
"assets/assets/icons/cart.png": "90b3e501aa1111ba852f6fd43ad64a55",
"assets/assets/icons/categories.png": "3ee9b41a7bddf1e8bc86548f97f73358",
"assets/assets/icons/changed_password.png": "25d6dfc9bf591a069c939baab1f48e8b",
"assets/assets/icons/chat.png": "e81525480b3e390aea3314342d209574",
"assets/assets/icons/clubpoint.png": "c320ea241a01682c5e0a4ee2f4afe4c6",
"assets/assets/icons/coupon.png": "3eee47933233d898ead37345a5234104",
"assets/assets/icons/download.png": "50dbf0c281bcbb8d65714c84764073fa",
"assets/assets/icons/edit.png": "145c3c063e8f174a4635ea3a59095e85",
"assets/assets/icons/facebook_logo.png": "33122dd8eb260b9331c75dd5096852fe",
"assets/assets/icons/favoriteseller.png": "d8b6fac18d053ec00873c66d150d8d96",
"assets/assets/icons/flash_deal.png": "bc0457f5e61c228f4fc43ba5bd3e11e2",
"assets/assets/icons/google_logo.png": "172e9ccfd77faf97892546b5192c398a",
"assets/assets/icons/headphone.png": "43015d0091d19bc188cd1da31021a5a9",
"assets/assets/icons/heart.png": "2ff2d5c3ea1b82f37a4d9d3f8c2794b0",
"assets/assets/icons/home.png": "82b15439ecb4d4a776836d6d16f87d8b",
"assets/assets/icons/login.png": "6c7893480109324093f545ff19097efe",
"assets/assets/icons/logout.png": "8c7b7b1ae8a3d6d6b43315e45840c5e6",
"assets/assets/icons/messages.png": "afa97de9ae5709842a30358c59ef2fba",
"assets/assets/icons/minus.png": "870a335bb675505e1f888f1147bb1d02",
"assets/assets/icons/more.png": "28cb68b300f86edd0e914a019d2adda6",
"assets/assets/icons/o-hamburger.png": "75540fbab9b867af5542e3173c23389a",
"assets/assets/icons/order.png": "4268c502251ef35d24afc32892de5ef9",
"assets/assets/icons/orders.png": "3639b858d6c5730b8e6705b62324772c",
"assets/assets/icons/placeholder.png": "4ee9d2e7f0e4ddc539dfb8c1b8ce5baf",
"assets/assets/icons/placeholder_rectangle.png": "a364b79d7d4ec9f2193789116a80819b",
"assets/assets/icons/plus.png": "042954477fb46729980bb2eca0ac2e9e",
"assets/assets/icons/points.png": "82988f05d354341ebce130b6cae90ec2",
"assets/assets/icons/profile.png": "531bb1c7a7dc201d1e77e8448358812b",
"assets/assets/icons/refund.png": "1d98ce7706455927116746d6009c4c20",
"assets/assets/icons/search.png": "c7cbc84f63ead800deb77cae175a1b8c",
"assets/assets/icons/shop.png": "170ac8257dcd4b2622ce8a8f37ea2921",
"assets/assets/icons/splash_login_registration_background_image.png": "7fd62d66f6ca61185880ff80b00f0eb5",
"assets/assets/icons/square_logo.png": "94138d75ae14373f4b5a6b7875b45f06",
"assets/assets/icons/todays_deal.png": "c798d81c6d67529ee284b9331c6a85e2",
"assets/assets/icons/top_categories.png": "f390e29b08742ec060e6e190ed200595",
"assets/assets/icons/top_sellers.png": "d1ba492409bd709c2a7784360a5a10f5",
"assets/assets/icons/trash.png": "22c33a5ddb5a72c989f04dfaf74d8191",
"assets/assets/icons/twitter_logo.png": "4523220a9a83756e427015f83663f009",
"assets/assets/icons/wallet.png": "f5ea00f3e66258407fd3de7e088c7fc9",
"assets/assets/icons/white_tick.png": "4fdeadb857ec534766eac21d7d3de881",
"assets/assets/icons/wholesale.png": "d0bb0f2ceea25aef2704516d6893a237",
"assets/assets/images/appliances.png": "91f603f38e29c84825b61043109509f5",
"assets/assets/images/b1.jpeg": "2a0b25e55d4d0cb49674b4b7e9ebdbc3",
"assets/assets/images/b10.jpeg": "27f706fbe426c4306fbe25bc2162655c",
"assets/assets/images/b2.jpeg": "9878bb4a7b9dfc970baeac28c5d1fce2",
"assets/assets/images/b3.jpeg": "998069a5d840f191f534bd2a1d7fd6e5",
"assets/assets/images/b4.jpeg": "a7eda1f31fa00893c7b71bc4d50408af",
"assets/assets/images/b5.jpeg": "736f9e14e2c0ffa10d6439ac7140a217",
"assets/assets/images/b6.jpeg": "5519048c28288b59c31b817d0fa31382",
"assets/assets/images/b7.jpeg": "d7698ebc4bb105b9477b6fba31472065",
"assets/assets/images/b8.jpeg": "a0fab189a8e05bd7fc2fbe68f7394160",
"assets/assets/images/b9.jpeg": "30bb0fc8eff3a957898f8cecc364d6cd",
"assets/assets/images/camper.jpg": "c4a7c973883ffc7162f88cf2d5d8316a",
"assets/assets/images/caserole.jpeg": "69b6fe554ff9fa132a8473f2f49e63b9",
"assets/assets/images/chakki.webp": "20c2194a62443a167983c1a39758f9ad",
"assets/assets/images/chimney.webp": "2a48a62b373768f7c49f0cad9169c6c0",
"assets/assets/images/cleaning.jpg": "17454813b67457f1a2865e6d03e7831e",
"assets/assets/images/cod.png": "3be9f519c35131870e88d48b98f01d12",
"assets/assets/images/cook.jpg": "22623a193ed44132a3206d11f93c052f",
"assets/assets/images/cook1.jpg": "d763a19c5e9df9209995d2eb65abbaa5",
"assets/assets/images/cooker.jpg": "b90589be447aa85e4945fa257839c94f",
"assets/assets/images/cooktop.webp": "62efddd6faa44e1d24e537a96faf124a",
"assets/assets/images/crockery.jpeg": "9232aec35a50a578be6da1870420e64f",
"assets/assets/images/essentials.jpg": "18fa45af92613680b680b8bf9c5519b1",
"assets/assets/images/fc1.jpeg": "f2acc722e23b48edec63342844db3fec",
"assets/assets/images/fc2.jpeg": "f631554b54ce01f9b1f6a4ea4ea648c6",
"assets/assets/images/fc3.jpeg": "0f1755f32625e27bf333a24c5d261ae4",
"assets/assets/images/fc4.jpeg": "55f2936ca8452dccdb337baa48133ae0",
"assets/assets/images/fc5.jpeg": "0b9cf5904cdc68441bcd8d86f72aba5e",
"assets/assets/images/fc6.jpeg": "77bfb850b4d34990987548076ffe4e30",
"assets/assets/images/fc7.jpeg": "a6cd0503536f738c55d7c07c8ccb18b9",
"assets/assets/images/fc8.jpeg": "bf40f81e8099034fa797bee582cf7b86",
"assets/assets/images/fc9.jpeg": "49efebdcc8a98b54f420891fe9640935",
"assets/assets/images/glassware.jpg": "1011b34a1d2c3c79b3f2b3dc1b91a158",
"assets/assets/images/glassware1.avif": "1011b34a1d2c3c79b3f2b3dc1b91a158",
"assets/assets/images/glen.jpeg": "71a44877a0cee8048458600d57a9457e",
"assets/assets/images/havelles.jpg": "1d9cf0a13582a05ecf63b251ed46a016",
"assets/assets/images/havelles_mixer.jpg": "20a29eed3f97703286b43bbe23ba76b2",
"assets/assets/images/hawkins.jpeg": "b832190cc76d2706a235196a3520b38f",
"assets/assets/images/instamojo.png": "7390800ab4ffe80b29aad0905057d2cc",
"assets/assets/images/iyzico.png": "d7cc3729091e2d76610ed11c295151a2",
"assets/assets/images/kent.webp": "9693a2cbb369d096d4eaea2f7b2cba49",
"assets/assets/images/kitchen%2520essentials.jpg": "8a09c1de3b0c4be5cc7568f79a5697a3",
"assets/assets/images/kkolar.jpeg": "ca8a7e427de5443772451629e0a36537",
"assets/assets/images/larah.jpg": "4b0f543750211907c943815c3b463fda",
"assets/assets/images/larah1.jpg": "a8421ad1adef5be00062b29c9fd81d05",
"assets/assets/images/lunchbox.webp": "4c7f1283cd201a8a8d3559e5bedc6d78",
"assets/assets/images/mpesa.png": "276dd37a2417282bbe709473b726f009",
"assets/assets/images/nayasa.webp": "dca8a3274d174dbba0f4042846189836",
"assets/assets/images/neelam.webp": "c02f5d0d3b89367161edfba8093899d8",
"assets/assets/images/neelam1.webp": "f1cdfa52885fa3380897b5e98efc91d2",
"assets/assets/images/ngenius.png": "ab7a1addc41692e396d7622cfccb9561",
"assets/assets/images/opil.jpg": "64011dd684d056b7ca017747e7b49fe3",
"assets/assets/images/p1.jpeg": "5e7b841ee9c0620b46d8846438746015",
"assets/assets/images/p2.jpeg": "1a7b05fcebe1760606af9e8ddb8db78d",
"assets/assets/images/p3.jpeg": "479ad49813354d66b91289cdc239ec56",
"assets/assets/images/p4.jpeg": "5cfdeb53e3a4bbaa23fc23ce75d3b6d6",
"assets/assets/images/p5.jpeg": "0ff9a98aa9ea502a0865481d78b302a4",
"assets/assets/images/p6.jpeg": "445de94c27f3acfa81595892895356e4",
"assets/assets/images/payfast.png": "0820d397863f660b43b0892d7e2e7aa2",
"assets/assets/images/payhere.png": "5b1d1c35242cf6490a2b0cd03bb15574",
"assets/assets/images/paypal.png": "0f00c201bc4f9e6e21ac2ea0607a9b46",
"assets/assets/images/paystack.png": "adcf537bb57baf0bd174a1ef6fc4a718",
"assets/assets/images/paytm.jpg": "1253980777fce12b34afb5191847b122",
"assets/assets/images/phillips_induction.jpg": "fe913099893c6e49d116c58758d4c69b",
"assets/assets/images/plastic.jpg": "ed650c98e8806c618fc428e5c9d45611",
"assets/assets/images/prestige.jpg": "bcf144357fd8572c56becd6c14b7feaa",
"assets/assets/images/prestige_cooker.webp": "ab70d53e1503100701d4e05ab5450146",
"assets/assets/images/profile_image.png": "6680ff70c1b77524a6727ef109fc073f",
"assets/assets/images/profile_image_joya_ahsan.jpg": "59385bb2686c9ff6b76a837459c89f8c",
"assets/assets/images/rave_payment.png": "8125ba7d026b8785295a818e2194f838",
"assets/assets/images/ro.jpeg": "bd60be9bc261caf1e502842743d89fb7",
"assets/assets/images/ro.jpg": "ff69bb3bd13656a0c5bd733b230d61a0",
"assets/assets/images/ro.webp": "a0ea5d0bdd4fd556a6e1db7bd57385c8",
"assets/assets/images/rozarpay.png": "e5a527dc341d45de0a0f257fa3dc89c9",
"assets/assets/images/s1.jpg": "ae5452171ae1cdd42d52df2209b22fa1",
"assets/assets/images/s10.jpg": "161cb77dc5ff53676435c447dc253749",
"assets/assets/images/s11.jpg": "3dcfa39aee749e877d686e13a7014646",
"assets/assets/images/s12.jpg": "956a8c2417341ce31b79f7b1fddc987a",
"assets/assets/images/s2.jpg": "349937ac2f943f9c3434904c2510baac",
"assets/assets/images/s3.jpg": "791552ef6230ffaf99ad161be627ea08",
"assets/assets/images/s4.jpg": "3a4c2dee89db7dcea19a6f1f79b134f1",
"assets/assets/images/s5.jpg": "58ca061c8211e5b2e1211737370debfb",
"assets/assets/images/s6.jpg": "4e7d7b950087a2c0a41dc4d933bd777d",
"assets/assets/images/s7.jpg": "0bbf062022b865ea6963a7cecf45207a",
"assets/assets/images/s8.jpg": "beb70b449800dcd5b9c19973435725b1",
"assets/assets/images/s9.jpg": "c19425625ca318cf1aa18f7294d7dc7b",
"assets/assets/images/save.png": "0873c46f35578b13f0cc26b2fb014c68",
"assets/assets/images/slider_1.png": "f83edf5411e1438c2b3e8b08fe78d664",
"assets/assets/images/slider_2.png": "27ded375b9e638d1179bc93d876c9e25",
"assets/assets/images/slider_3.png": "2022bc9a7eb3edf8fd0d140c40c7c821",
"assets/assets/images/slider_4.png": "4c9bebfd09a45586911837f6337e032f",
"assets/assets/images/ss1.jpg": "128cf1671aee84eddc2f85d59b638258",
"assets/assets/images/ss2.jpg": "262c87893c0dfa72a00280a40411d2a3",
"assets/assets/images/ss3.jpg": "4e368ccdb742e461aef56d619c86f2ec",
"assets/assets/images/ss4.jpg": "03661f6eb1c6af45d3b0e90d38c6eea1",
"assets/assets/images/sslcommerz.png": "b352c756ff64fd88919d7d862dd505b4",
"assets/assets/images/steel_utensils.jpg": "3a76a3cc5c36df0109f8521051d1b0a7",
"assets/assets/images/stripe.png": "1584ebfeb49e14480e8eaee14758be31",
"assets/assets/images/twocheckout.png": "6231758df8daa10d3ecfe8005cbca237",
"assets/assets/images/vogue.png": "c2d67eca49390c1b327362ec6e2f403b",
"assets/assets/images/wallet.png": "2fdf2d8ebb9ce7320200e8ca6c67a452",
"assets/FontManifest.json": "4f271a1478aaf73157d28a50c93fb67a",
"assets/fonts/MaterialIcons-Regular.otf": "ee7f7cb89415c4e17542ab6f88bf2dde",
"assets/NOTICES": "92e67fd6fb88f65d3f17fd0dbaa95f1a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1a50ab239a76cf22feebced8a7ac1969",
"/": "1a50ab239a76cf22feebced8a7ac1969",
"main.dart.js": "4830194ef8062e7ee68d58cd0c9d9339",
"manifest.json": "e953ce6edfed0a9c7234bcfd3d39fbbd",
"version.json": "f2776bb7204e9a0562dd988f37ad84b5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
