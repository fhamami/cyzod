// if ('serviceWorker' in navigator) {   //Cek browser for Service Worker support
// 	// if browser support, function navigator.serviceWorker.register() will make registration service worker.
// 	// Parameter scope is used to locate subset contents, thus content will controlled by service worker,
// 	// for this instance we need service worker to controlling content in folder '.'.
// 	// promise function .then() is used to connecting promise stucture if sw.js registered.
//     // navigator.serviceWorker.register('sw.js',{scope:'.'}).then(function(reg){
//     navigator.serviceWorker.register('sw.js').then(function(reg){
//         // registered
//         console.log('Scope Registered ' + reg.scope)
//     }).catch(function(error){ // function .catch() will run if promise aborted.
//         // Failed
//         console.log('Register failed with :' + error)
//     });
// };


if ('serviceWorker' in navigator) {
	// navigator.serviceWorker.register('sw.js').then(function(reg) {
	navigator.serviceWorker.register('service-worker.js').then(function(reg) {
	    if (!reg.installing) return;
	    console.log("[*] ServiceWorker is installing...");

	    var worker = reg.installing;
	    worker.addEventListener('statechange', function() {
	        if (worker.state == 'redundant') {
	            console.log('[*] Install failed');
	        }
	        if (worker.state == 'installed') {
	            console.log('[*] Install successful!');
	        }
	    });
	});
}