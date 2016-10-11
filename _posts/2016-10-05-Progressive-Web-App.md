---
layout: post
categories : WebDev
tagline: "Progressive Web Apps"
tags : [Web]
---

[Progressive Web Apps](https://developers.google.com/web/progressive-web-apps) when I hear this few mount ago, I try to seek every pople who talking about it, I just thing I litle bit late to collect information about it, but no problem, After that I follow google io 2016, there are lot of information about it. then I make note here.

Progressive Web Apps are experiences that combine the best of the web and the best of apps. They are useful to users from the very first visit in a browser tab, no install required. As the user progressively builds a relationship with the app over time, it becomes more and more powerful. It loads quickly, even on flaky networks, sends relevant push notifications, has an icon on the home screen, and loads as a top-level, full screen experience.

For this time Mobile App is very powerful almost every new startup begin with mobile app. But I thing PWA will make something different on few years later because it's more effective. Why I said it's more effective? because we build App for more large segment, for the people who likes mobile app we serving Web App with PWA who had almost same fungcional.

Let me drove you to in my imagination. When we try to adopt new tech or sys or app or whatever you put label on it, we need to download the content first before we can use those app. How many bites we should download it? sometime we "as end-user" doens't need and doesn't know all features on those app. Sometime we just need some feature not all.

For example I need app with time management feature just for my self, because I had different app from my company for manage time as worker, but the app do I use for my self have a lot of feature did I doesn't use. It make me lost lot storage.

Ok done, what if we use PWA we just downloaded what we feature of we need, and will removed when we doen't need again in some period. It make effective storage. That why I thing PWA will beat most of native app.

> A Progressive Web App uses modern web capabilities to deliver an app-like user experience. They evolve from pages in browser tabs to immersive, top-level apps, maintaining the web's low friction at every moment.

It's important to remember that Progressive Web Apps work everywhere but are supercharged in modern browsers. Progressive enhancement is a backbone of the model.

### What is a Progressive Web App?

A Progressive Web Apps is:

- **Progressive** - Works for every user, regardless of browser choice because it's built with progressive enhancement as a core tenet.
- **Responsive** - Fits any form factor: desktop, mobile, tablet, or whatever is next.
- **Connectivity independent** - Enhanced with [service workers](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) to work offline or on low-quality networks.
- **App-like-interactions** - Feels like an app to the user with app-style interactions and navigation because it's built on the app shell model.
- **Fresh** - Always up-to-date thanks to the service worker update process.
- **Safe** - Served via TLS (a Service Worker requirement) to prevent snooping and to ensure content hasn't been tampered with.
- **Discoverable** - Is identifiable as an "application" thanks to [W3C](https://w3c.github.io/manifest/) [manifest](https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android) and service worker registration scope, allowing search engines to find it.
- **Re-engageable** - Makes re-engagement easy through features like [push notifications](https://developers.google.com/web/updates/2015/03/push-notificatons-on-the-open-web).
- **[Installable](https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android?hl=en)** - Allows users to "keep" apps they find most useful on their home screen without the hassle of an app store.
- **Linkable** - meaning they’re zero-friction, zero-install, and easy to share. The social [power of URLs ](http://www.theatlantic.com/technology/archive/2012/10/dark-social-we-have-the-whole-history-of-the-web-wrong/263523/)matters.

This codelab will walk you through creating your own Progressive Web App, including the design considerations, as well as implementation details to ensure that your app meets the key principles of a Progressive Web App.

### What we should learn

1. How to design and construct an app using the "app shell" method?
2. How to make your app work offline?
4. How to store data for use offline later?

### What we need

- Chrome 47 or above
- Install [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb), or use your own web server of choice.
- The sample code
- A text editor
- Basic knowledge of HTML, CSS and JavaScript

### Architecture

#### App Shell

What is the app shell? The app's shell is the minimal HTML, CSS, and JavaScript that is required to power the user interface of a progressive web app and is one of the components that ensures reliably good performance. Its first load should be extremely quick and immediately cached. "Cached" means that the shell files are loaded once over the network and then saved to the local device. Every subsequent time that the user opens the app, the shell files are loaded from the local device's cache, which results in blazing-fast startup times.

App shell architecture separates the core application infrastructure and UI from the data. All of the UI and infrastructure is cached locally using a service worker so that on subsequent loads, the Progressive Web App only needs to retrieve the necessary data, instead of having to load everything.

#### Web App Manifest

> The Manifest for Web applications is a simple JSON file that gives you, the developer, the ability to control how your app appears to the user in the areas that they would expect to see apps (for example the device home screen), direct what the user can launch and more importantly how they can launch it

The manifest enables your web app to have a more native-like presence on the user's homescreen. It allows the app to be launched in full-screen mode (without a URL bar being present), provides control over the screen orientation and in recent versions of Chrome on Android supports defining a [Splash Screen](https://developers.google.com/web/updates/2015/10/splashscreen?hl=en) and [theme color](https://developers.google.com/web/updates/2014/11/Support-for-theme-color-in-Chrome-39-for-Android?hl=en) for the address bar. It is also used to define a set of icons by size and density used for the aforementioned Splash screen and homescreen icon.

![pwa general](https://cyzod.files.wordpress.com/2016/05/pwa-general-1-1x.jpg?w=840)

A sample manifest file can be found in [Web Starter Kit](https://github.com/google/web-starter-kit/blob/master/app/manifest.json) and over in the [Google Chrome samples](https://github.com/GoogleChrome/samples/tree/0768ee71e4548f779219798d8c83fdcc67b469e8/web-application-manifest). Bruce Lawson wrote a [Manifest Generator](http://brucelawson.github.io/manifest/) and Mounir Lamouri has also written a handy [Web Manifest validator](https://mounirlamouri.github.io/manifest-validator/) worth checking out.

For more details, read Installable Web Apps with the [WebApp Manifest in Chrome for Android](https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android?hl=en) on Web Fundamentals.

#### Add to Home Screen Banner

Chrome on Android has support adding in your site to the homescreen for a while now, but recent versions also support proactively suggesting sites be added using native [Web App install banners](https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android?hl=en).

![pwa general](https://cyzod.files.wordpress.com/2016/05/pwa-general-2-1x.jpg?w=840)

In order for the app install prompts to display your app must:

- Have a valid Web App manifest
- Be served over HTTPS (see [letsencrypt](https://letsencrypt.org/) for a free certificate)
- Have a valid service worker registered
- Be visited twice, with at least 5 minutes between visits

A number of [App Install banner samples](https://github.com/GoogleChrome/samples/tree/gh-pages/app-install-banner) are available, covering [basic banners](https://github.com/GoogleChrome/samples/tree/gh-pages/app-install-banner/basic-banner) through to more complex use-cases like displaying [related applications](https://github.com/GoogleChrome/samples/tree/gh-pages/app-install-banner/related-applications).

#### Service Worker for offline caching

A [service worker](http://www.w3.org/TR/service-workers/) is a script that runs in the background, separate from your web page. It responds to events, including network requests made from pages it serves. A service worker has an intentionally short lifetime.

It wakes up when it gets an event and runs only as long as it needs to process it. Service worker allows you to use the Cache API to cache resources and can be used to provide users with an offline experience.

Service workers are powerful for offline caching but they also offer significant performance wins in the form of instant loading for repeat visits to your site or web app. You can cache your application shell so it works offline and populate its content using JavaScript.

![pwa general](https://cyzod.files.wordpress.com/2016/05/pwa-general-3-1x.jpg?w=840)

A comprehensive set of [service worker samples](https://github.com/GoogleChrome/samples/tree/gh-pages/service-worker) are available over on Google Chrome samples. Jake Archibald's [offline cookbook](https://jakearchibald.com/2014/offline-cookbook/) is a must-read and I highly recommend trying out Paul Kinlan's [your first offline web app](https://developers.google.com/web/fundamentals/getting-started/your-first-offline-web-app/) walkthrough if new to service worker.

Our team also maintain a number of Service Worker helper utilities and build tools that we find useful for reducing the overhead in getting Service Worker setup. They're listed over on [Service Worker Libraries](https://developers.google.com/web/tools/service-worker-libraries/). The two main ones are:

- [sw-precache](https://github.com/GoogleChrome/sw-precache/): a build-time tool that generates a service worker script useful for precaching your web app shell
- [sw-toolbox](https://github.com/GoogleChrome/sw-toolbox): a library providing runtime caching for infrequently used resources

Jeff Posnick wrote a quick primer on sw-precache called [Offline-first, fast, with the sw-precache module](https://developers.google.com/web/updates/2015/02/offline-first-with-sw-precache?hl=en) and a [codelab](https://www.code-labs.io/codelabs/sw-precache/index.html) on the same tool that you might find useful.

Dean Hume also has a very well written post on [getting started with sw-toolbox](http://deanhume.com/Home/BlogPost/getting-started-with-the-service-worker-toolbox/10134) worth checking out.

Chrome, Opera and Firefox have all implemented support for Service Worker with Edge having positive public signals about interest in the feature. Safari briefly mentioned interest in it via one engineer's proposed [five year plan](https://trac.webkit.org/wiki/FiveYearPlanFall2015).

#### Push Notifications for re-engagement

> Push notifications allow your users to opt-in to timely updates from sites they love and allow you to effectively re-engage them with customized, engaging content.

Effectively, you can build web apps that users can engage with outside of a tab. The browser can be closed and they don't even need to be actively using your web app to engage with your experience. The feature requires both service worker and a Web App manifest, building on some of the features summarised earlier.

The Push API is [implemented](https://www.chromestatus.com/features/5416033485586432) in Chrome, in development in Firefox and [under consideration](https://dev.windows.com/en-us/microsoft-edge/platform/status/pushapi) in Edge. There are no public signals from Safari about their intent to implement this feature just yet.

[Push Notifications on the Open Web](https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web?hl=en) is a comprehensive intro to getting Push setup by Matt Gaunt and a [Push Notifications codelab](https://developers.google.com/web/fundamentals/getting-started/push-notifications/?hl=en) is also available on Web Fundamentals.

#### Layering in advanced features

Remember, your user experience can have different levels of sweetness depending on the browser being used to view your web app. You're in control of the hard candy shell.

Additional features coming to the web platform such as [Background Syncronisation](https://github.com/WICG/BackgroundSync/blob/master/explainer.md) (for data sync with a server even when your web app is closed) and [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/) (for talking to Bluetooth devices from your web app) can also be layered into your Progressive Web App in this manner.

One-shot Background Sync has been [enabled](https://codereview.chromium.org/1514383002/) in Chrome and Jake Archibald has a [video](https://www.youtube.com/watch?v=wjUCXgM70c0) of his [Offline wikipedia app](https://github.com/jakearchibald/offline-wikipedia) and [article](https://developers.google.com/web/updates/2015/12/background-sync) demonstrating it in action. Francois Beaufort also has a number of [Web Bluetooth samples](https://googlechrome.github.io/samples/web-bluetooth/) available if interested in trying out that API.

#### Framework-friendly

There's really nothing stopping you from applying any of the above principles to an existing application or framework you're building with. A few other principles worth keeping in mind while building your Progressive Web App are the [RAIL](https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/rail?hl=en) user-centric performance model and [FLIP](https://aerotwist.com/blog/flip-your-animations/) based animations.

I'm hopeful that during 2016, we'll see an increasing number of boilerplates and seed projects organically baking in support for Progressive Web Apps as a first-class citizen. Until then, the barrier to adding these features to your own apps isn't very high and are imo, quite worth the effort.

### Further reading

#### Vanilla JS

- [Voice Memos](https://github.com/GoogleChrome/voice-memos) by Paul Lewis is built using a similar architecture to `app-shell` ([write-up](https://aerotwist.com/blog/voice-memos/))
- [Offline Wikipedia](https://github.com/jakearchibald/offline-wikipedia) by Jake Archibald ([video](https://www.youtube.com/watch?v=d5_6yHixpsQ))
- [Air Horner](https://developers.google.com/web/showcase/spotlight/airhorner?hl=en) by Paul Kinlan
- [Guitar Tuner](https://guitar-tuner.appspot.com/) by Paul Lewis ([write-up](https://aerotwist.com/blog/guitar-tuner/))

#### Polymer

- [Zuperkulblog](https://github.com/PolymerLabs/zuperkulblog-progressive) by Rob Dodson ([slides](https://speakerdeck.com/robdodson/building-progressive-web-apps-with-polymer))
- [Snapdrop](https://github.com/capira12/snapdrop) - an Apple Airdrop-like PWApp built with Polymer and Web RTC

#### React

- [iFixit](https://github.com/GoogleChrome/sw-precache/tree/master/app-shell-demo) by Jeff Posnick - uses `sw-precache` for application shell caching ([slides](https://speakerdeck.com/jeffposnick/instant-loading-with-service-workers-chrome-dev-summit-15))

#### Virtual-DOM

- [Pokedex](https://github.com/nolanlawson/pokedex.org) by Nolan Lawson - excellent progressive web app applying a "do everything in a web worker" approach to help with progressive rendering. ([write-up](http://www.pocketjavascript.com/blog/2015/11/23/introducing-pokedex-org))

#### Angular.js

- [Timey.in](https://github.com/auchenberg/timey) by Kenneth Auchenberg - also uses `sw-precache` for resource precaching
- The Angular team have also started an early [ng2-application-shell](https://github.com/robwormald/ng2-application-shell) project based on the app-shell architecture.

#### More

- [Progressive Web Apps: Escaping Tabs Without Losing Our Soul](https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/)
- [Why Progressive Web Apps Are The Future Of Web Development](http://arc.applause.com/2015/11/30/application-shell-architecture/)
- [Progressive Web Apps: ready for primetime](http://www.brucelawson.co.uk/2015/progressive-web-apps-ready-for-primetime/)
- [Making a Progressive App with ServiceWorker](https://ponyfoo.com/articles/progressive-app-serviceworker)
- [Progressive Web Apps Are the Future](https://dev.opera.com/blog/progressive-web-apps-future/)
- [Progressive Web App: A New Way to Experience Mobile](http://tech-blog.flipkart.net/2015/11/progressive-web-app/)
- [Web Fundamentals: Progressive Web Apps](https://developers.google.com/web/progressive-web-apps)
- [Introducing Pokedex.org: a progressive webapp for Pokémon fans](http://www.pocketjavascript.com/blog/2015/11/23/introducing-pokedex-org)
- [Chrome Developer Summit Recap: Progressive Web Apps](https://medium.com/@davideast/chrome-developer-summit-recap-1137b022b2dc#.nmj5drhvi)

* * *

Reference:

https://codelabs.developers.google.com/codelabs/your-first-pwapp/#0

https://addyosmani.com/blog/getting-started-with-progressive-web-apps/

https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/