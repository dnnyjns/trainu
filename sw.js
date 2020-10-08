/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-2d76829af783422df5ac.js"
  },
  {
    "url": "framework-376edee25eb5f5cd8260.js"
  },
  {
    "url": "cb1608f2-ea90d77e82ca3025a756.js"
  },
  {
    "url": "app-7cba846ee51a16d07cde.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "572c45e5f0fa173379940e871cd0699d"
  },
  {
    "url": "google-fonts/s/poppins/v13/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2",
    "revision": "9ddc04912d6e8f88d9de4045b8b89c59"
  },
  {
    "url": "google-fonts/s/poppins/v13/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2",
    "revision": "087457026965f98466618a478c4b1b07"
  },
  {
    "url": "google-fonts/s/poppins/v13/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2",
    "revision": "84780596e268aa0cb2be48af2ed5c375"
  },
  {
    "url": "google-fonts/s/poppins/v13/pxiDyp8kv8JHgFVrJJLm21lVF9eO.woff2",
    "revision": "020e7a3762470c85aef405ce3351b026"
  },
  {
    "url": "google-fonts/s/poppins/v13/pxiDyp8kv8JHgFVrJJLmg1hVF9eO.woff2",
    "revision": "97ac1837f7e7dbb299cf005f13987ef9"
  },
  {
    "url": "google-fonts/s/poppins/v13/pxiDyp8kv8JHgFVrJJLmr19VF9eO.woff2",
    "revision": "83678295859259ae5dee89f6f1a97ed1"
  },
  {
    "url": "google-fonts/s/poppins/v13/pxiEyp8kv8JHgFVrJJfecg.woff2",
    "revision": "9ed361bba8488aeb2797b82befda20f1"
  },
  {
    "url": "google-fonts/s/poppins/v13/pxiGyp8kv8JHgFVrJJLucHtA.woff2",
    "revision": "c8844b2518e608504a044c16951c094e"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-e5cb9e0c77a823b86dc2.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "cacdf8a2d1108a1c497ea411a2b8e072"
  },
  {
    "url": "page-data/sq/d/3649515864.json",
    "revision": "60759a6677e2e23a013b295fa01af7ef"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "90b0d360ac4aed6bfc1debed96bea857"
  },
  {
    "url": "polyfill-0538dbf6ed89868033ac.js"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "50c34cebd5c3bbb7292cd76adf27ebe9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/trainu`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/trainu/app-7cba846ee51a16d07cde.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/trainu/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
