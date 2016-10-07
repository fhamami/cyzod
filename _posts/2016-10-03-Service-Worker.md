---
layout: post
category : Web
tagline: "Service Worker"
tags : [Web, PWA]
---

{% include JB/setup %}

What is a Service Worker?

A service worker is a script that is run by your browser in the background, separate from a web page, opening the door to features which don't need a web page or user interaction.

Things to note about a service worker:

It's a JavaScript Worker, so it can't access the DOM directly. Instead, a service worker can communicate with the pages it controls by responding to messages sent via the postMessage interface, and those pages can manipulate the DOM if needed.
Service worker is a programmable network proxy, allowing you to control how network requests from your page are handled.
It will be terminated when not in use, and restarted when it's next needed, so you cannot rely on global state within a service worker's onfetch and onmessage handlers. If there is information that you need to persist and reuse across restarts, service workers do have access to the IndexedDB API.
Service workers make extensive use of promises, so if you're new to promises, then you should stop reading this and check out Jake Archibald's article.

- - -

> Reference : <br>
> http://www.html5rocks.com/en/tutorials/service-worker/introduction/ <br>