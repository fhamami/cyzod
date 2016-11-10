---
layout: post
category : Web
tagline: "Service Worker"
tags : [Web, PWA]
---

{% include JB/setup %}

"Offline" is a big topic these days, especially as many web apps look to also function as mobile apps.  The original offline helper API, the Application Cache API (also known as "appcache"), has a host of problems, many of which can be found in Jake Archibald's [Application Cache is a Douchebag post](http://alistapart.com/article/application-cache-is-a-douchebag).  Problems with appcache include:

- Files are served from cache even when the user is online.
- There's no dynamism: the appcache file is simply a list of files to cache.
- One is able to [cache the .appcache file itself](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache#Gotchas) and that leads to update problems.
- [Other gotchas](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache#Gotchas).

Today there's a new API available to developers to ensure their web apps work properly:  [the Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API). The Service Worker API allows developers to manage what does and doesn't go into cache for offline use with JavaScript.

### What is a Service Worker?

A service worker is a script that is run by your browser in the background, separate from a web page, opening the door to features which don't need a web page or user interaction.

Service worker adalah script yang berjalan di belakang browser pengguna. Service worker tidak membutuhkan sebuah halaman ataupun interaksi dari pengguna untuk menjalankan tugasnya, dengan begitu service worker akan terus berjalan walaupun halaman webnya tidak terbuka.

Service Worker adalah layer antara client dan server, dengan service worker client tidak langsung melakukan request kepada server melainkan kepada service worker terlebih dahulu barulah dari service worker diteruskan ke server.

install service workert async in the background

![](sw-load.png)

seperti pada gambar diatas, ketika user pertama kali membuka halaman web maka user akan meminta konten ke web server, dan web server akan mengirimkan seluruh konten yang diminta. disinilah peran service worker dimulai, sw akan mengintall dan membuat cache untuk setiap halaman yang telah dibuka. Ketika user membuka lagi homepage user tidak akan meminta ke web server namun service worker dan service worker akan memberitau bahwa konten yang lama masih tersedia dan sudah ada konten yang baru dan bisa mengganti dengan konten yang lama.

### Untungnya apa menggunakan service worker ?

Kita dapat membuat website kita dapat diakses dalam keadaan offline ataupun koneksi yang sangat lambat karena Service Worker juga dapat melakukan sebuah caching.

Teknik ini disebut "Offline First" dimana service worker dapat kita atur agar memprioritaskan Cache sebelum Net, dan ketika semua cache telah di load service worker akan mengUpdate Cache pada background process.



### Things to note about a service worker:

- It's a JavaScript Worker, so it can't access the DOM directly. Instead, a service worker can communicate with the pages it controls by responding to messages sent via the postMessage interface, and those pages can manipulate the DOM if needed.
- Service worker is a programmable network proxy, allowing you to control how network requests from your page are handled.
- It will be terminated when not in use, and restarted when it's next needed, so you cannot rely on global state within a service worker's onfetch and onmessage handlers. If there is information that you need to persist and reuse across restarts, service workers do have access to the IndexedDB API.
- Service workers make extensive use of promises, so if you're new to promises, then you should stop reading this and check out Jake Archibald's article.

### Beberapa hal yang harus diperhatikan agar service worker bisa dijalankan:

Pastikan website di jalankan di protokol HTTPS. Jika teman - teman ingin mencoba, Github atau Gitlab pages adalah alternatif terbaik untuk bereksperimen, selama keduanya menyajikan halaman melalui HTTPS.

Patikan lokasi file pada service worker ditulis dengan benar, ditulis secara relatif pada origin bukan pada root aplikasi. Pada contoh disini worker berada di https://rmsubekti.github.io/ngitung/sw.js, dan aplikasi root https://rmsubekti.github.io/ngitung/, maka harus di tulis /ngitung/sw.js, bukan /sw.js kecuali jika ingin menginstall service worker pada root website.

Service worker tidak dapat ditujukan ke origin yang berbeda. Jika service worker berada di https://rmsubekti.github.io/ngitung/ maka tidak dapat ditujukan ke aplikasi yang berada di path origin https://rmsubekti.github.io/ngilang/ atau bahkan ke origin website yang berbeda.

LocalStorage tidak di izinkan untuk digunakan di service worker, Walaupun LocalStorage gunanya sama dengan cache pada service worker, tapi LocalStorage hanya dapat digunakan secara syncronous sehingga tidak diperbolehkan.










### What Is A Service Worker Anyway? 

A service worker is a script that stands between your website and the network, giving you, among other things, the ability to intercept network requests and respond to them in different ways.

Offline pages, push notifications and flexible caching are just a few of the great features of service worker.

Using these built-in features allows us to build faster, more resilient websites, and many more.

from [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API), Service workers essentially act as proxy servers that sit between web applications, and the browser and network (when available). They are intended to (amongst other things) enable the creation of effective offline experiences, intercepting network requests and taking appropriate action based on whether the network is available and updated assets reside on the server. They will also allow access to push notifications and background sync APIs.

A service worker is run in a worker context: it therefore has no DOM access, and runs on a different thread to the main JavaScript that powers your app, so it is not blocking. It is designed to be fully async; as a consequence, APIs such as synchronous XHR and localStorage can't be used inside a service worker.

Service workers only run over HTTPS, for security reasons. Having modified network requests wide open to man in the middle attacks would be really bad. In Firefox, Service Worker APIs are also hidden and cannot be used when the user is in private browsing mode.

### GETTING STARTED WITH THE SERVICE WORKER TOOLBOX

* * *

Reference :

http://www.html5rocks.com/en/tutorials/service-worker/introduction/

http://arsipfb.com/post/125918327491451_970473583035917/javascript-indonesia/tanya-mau-nanya-ada-ayng-udah-pake-serviceworker-pengen-nany

http://deanhume.com/Home/BlogPost/getting-started-with-the-service-worker-toolbox/10134

https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API