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

http://deanhume.com/Home/BlogPost/getting-started-with-the-service-worker-toolbox/10134

https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API