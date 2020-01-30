(function () {
  'use strict';

  const VERSION = '1580392765035|0.2774420230744794';
  self.CACHE_BUSTER = VERSION;
  self.addEventListener('install', function installEventListenerCallback(event) {
    return self.skipWaiting();
  });
  self.addEventListener('activate', function installEventListenerCallback(event) {
    return self.clients.claim();
  });

  const FILES = ['assets/auto-import-fastboot.js', 'assets/images/icons-192.png', 'assets/images/icons-512.png', 'assets/pwasampleapp-fastboot.js', 'assets/pwasampleapp-fastboot.map', 'assets/pwasampleapp.css', 'assets/pwasampleapp.css.map', 'assets/pwasampleapp.js', 'assets/pwasampleapp.map', 'assets/test-support.css', 'assets/test-support.js', 'assets/test-support.map', 'assets/tests.js', 'assets/tests.map', 'assets/vendor.css', 'assets/vendor.js', 'assets/vendor.map'];
  const VERSION$1 = '1';
  const REQUEST_MODE = 'cors';

  /*
   * Deletes all caches that start with the `prefix`, except for the
   * cache defined by `currentCache`
   */
  var cleanupCaches = ((prefix, currentCache) => {
    return caches.keys().then(cacheNames => {
      cacheNames.forEach(cacheName => {
        let isOwnCache = cacheName.indexOf(prefix) === 0;
        let isNotCurrentCache = cacheName !== currentCache;

        if (isOwnCache && isNotCurrentCache) {
          caches.delete(cacheName);
        }
      });
    });
  });

  const CACHE_KEY_PREFIX = 'esw-asset-cache';
  const CACHE_NAME = `${CACHE_KEY_PREFIX}-${VERSION$1}`;
  const CACHE_URLS = FILES.map(file => {
    return new URL(file,  self.location).toString();
  });
  /*
   * Removes all cached requests from the cache that aren't in the `CACHE_URLS`
   * list.
   */

  const PRUNE_CURRENT_CACHE = () => {
    caches.open(CACHE_NAME).then(cache => {
      return cache.keys().then(keys => {
        keys.forEach(request => {
          if (CACHE_URLS.indexOf(request.url) === -1) {
            cache.delete(request);
          }
        });
      });
    });
  };

  self.addEventListener('install', event => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => {
      return Promise.all(CACHE_URLS.map(url => {
        let request = new Request(url, {
          mode: REQUEST_MODE
        });
        return fetch(request).then(response => {
          if (response.status >= 400) {
            let error = new Error(`Request for ${url} failed with status ${response.statusText}`);

            {
              throw error;
            }
          }

          return cache.put(url, response);
        }).catch(function (error) {
          console.error(`Not caching ${url} due to ${error}`);
        });
      }));
    }));
  });
  self.addEventListener('activate', event => {
    event.waitUntil(Promise.all([cleanupCaches(CACHE_KEY_PREFIX, CACHE_NAME), PRUNE_CURRENT_CACHE()]));
  });
  self.addEventListener('fetch', event => {
    let isGETRequest = event.request.method === 'GET';
    let shouldRespond = CACHE_URLS.indexOf(event.request.url) !== -1;

    if (isGETRequest && shouldRespond) {
      event.respondWith(caches.match(event.request, {
        cacheName: CACHE_NAME
      }).then(response => {
        if (response) {
          return response;
        }

        return fetch(event.request.url, {
          mode: REQUEST_MODE
        });
      }));
    }
  });

  const VERSION$2 = '1';
  const PATTERNS = ['/api/v1/(.+)'];

  /**
   * Create an absolute URL, allowing regex expressions to pass
   *
   * @param {string} url
   * @param {string|object} baseUrl
   * @public
   */
  function createNormalizedUrl(url, baseUrl = self.location) {
    return decodeURI(new URL(encodeURI(url), baseUrl).toString());
  }
  /**
   * Create an (absolute) URL Regex from a given string
   *
   * @param {string} url
   * @returns {RegExp}
   * @public
   */

  function createUrlRegEx(url) {
    let normalized = createNormalizedUrl(url);
    return new RegExp(`^${normalized}$`);
  }
  /**
   * Check if given URL matches any pattern
   *
   * @param {string} url
   * @param {array} patterns
   * @returns {boolean}
   * @public
   */

  function urlMatchesAnyPattern(url, patterns) {
    return !!patterns.find(pattern => pattern.test(decodeURI(url)));
  }

  const CACHE_KEY_PREFIX$1 = 'esw-cache-fallback';
  const CACHE_NAME$1 = `${CACHE_KEY_PREFIX$1}-${VERSION$2}`;
  const PATTERN_REGEX = PATTERNS.map(createUrlRegEx);
  self.addEventListener('fetch', event => {
    let request = event.request;

    if (request.method !== 'GET' || !/^https?/.test(request.url)) {
      return;
    }

    if (urlMatchesAnyPattern(request.url, PATTERN_REGEX)) {
      event.respondWith(caches.open(CACHE_NAME$1).then(cache => {
        return fetch(request).then(response => {
          cache.put(request, response.clone());
          return response;
        }).catch(() => caches.match(event.request));
      }));
    }
  });
  self.addEventListener('activate', event => {
    event.waitUntil(cleanupCaches(CACHE_KEY_PREFIX$1, CACHE_NAME$1));
  });

}());
