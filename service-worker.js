"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/NoServerProject/index.html","3d77d4dcc86b798a341449ce3e7b1dd9"],["/NoServerProject/static/css/main.87518634.css","347a8bd5848278402e61e9a22a851a3c"],["/NoServerProject/static/js/main.831aa835.js","bd7cf277e6f0b685df6ffed8f21ea705"],["/NoServerProject/static/media/4 austria.8b7985ac.png","8b7985ac0d07e98b2768a4ff832d0ab0"],["/NoServerProject/static/media/4 belgium.ed8bbe85.png","ed8bbe85500b7e00850fbf6286644f62"],["/NoServerProject/static/media/4 luxembourg .bb305088.png","bb30508862e67684bb6bcc2e1eb3c135"],["/NoServerProject/static/media/4 netherlands.0709bca0.png","0709bca0e93c3df09e5a3420b3063cf3"],["/NoServerProject/static/media/4 portugal.d0858031.png","d08580319677c4d99873b7cc2b0de07b"],["/NoServerProject/static/media/4 switzerland.cca7757a.png","cca7757ae57e6cf76a0f1d504e10357e"],["/NoServerProject/static/media/5 canada.21a48691.png","21a48691ab0c9a4fc5021cdb7ae932d2"],["/NoServerProject/static/media/5 ireland.134a1d69.png","134a1d69da20c1276d9c62eaca6563c4"],["/NoServerProject/static/media/5 malaysia.205323b9.png","205323b94b1ff80d81388e0e8ce7bae4"],["/NoServerProject/static/media/6 australia.7a26513b.png","7a26513b26da98f19eaaeba1798df9ad"],["/NoServerProject/static/media/6 greece.7385dbdb.png","7385dbdb973f86637de7d21ec810c40b"],["/NoServerProject/static/media/6 newzealand.71ec9d0c.png","71ec9d0c19f0c5bccfb867d953752025"],["/NoServerProject/static/media/Denmark 3.b33f1e9d.png","b33f1e9daba260b5965897af82ef8722"],["/NoServerProject/static/media/Finland 3.8ce94b52.png","8ce94b5289cd2bb714ab70f397bec5cf"],["/NoServerProject/static/media/France 3.a5a875a7.png","a5a875a731cac72b27574bce4d6f4d49"],["/NoServerProject/static/media/Germany 1.e41b6408.png","e41b6408047acf745c12d26c54f65be8"],["/NoServerProject/static/media/Italy 3.72a34c2b.png","72a34c2b64bbe1381a279e2ac64c479a"],["/NoServerProject/static/media/Japan 3.19ce336f.png","19ce336fdcda5494b05f2f12b3afa72c"],["/NoServerProject/static/media/Norway 3.38fab46d.png","38fab46d6662b4de4c8a06564c3a79c2"],["/NoServerProject/static/media/Singapore 1.08005185.png","08005185602281b2f96c24c80f9eeb13"],["/NoServerProject/static/media/South Korea 2.edad13a5.png","edad13a5aef2ef42433d0d8f80a5298c"],["/NoServerProject/static/media/Spain 3.abd37319.png","abd373192450b7e234c148b669d71717"],["/NoServerProject/static/media/Sweden 2.c767f997.png","c767f9973303f801abe838e82fec3b57"],["/NoServerProject/static/media/USA 3.9b997b9f.png","9b997b9f25e25856aa24ace9485ba3da"],["/NoServerProject/static/media/UnitedKingdom 3.8888c50b.png","8888c50b9569c9f5ec0d317686dd5627"],["/NoServerProject/static/media/asia.a942b43b.jpg","a942b43bb6d6c14f6a3ef045d42f0f71"],["/NoServerProject/static/media/at.8b7985ac.png","8b7985ac0d07e98b2768a4ff832d0ab0"],["/NoServerProject/static/media/be.ed8bbe85.png","ed8bbe85500b7e00850fbf6286644f62"],["/NoServerProject/static/media/de.e41b6408.png","e41b6408047acf745c12d26c54f65be8"],["/NoServerProject/static/media/fr.a5a875a7.png","a5a875a731cac72b27574bce4d6f4d49"],["/NoServerProject/static/media/h1.42d50d5c.png","42d50d5cbe30e90098e1647ca1298482"],["/NoServerProject/static/media/img1.50c624f9.jpg","50c624f9469dc2f68ca0f24bfb1e3ea2"],["/NoServerProject/static/media/img5.4d90cc56.jpg","4d90cc56e3437d754bdfd35351175c34"],["/NoServerProject/static/media/ireland.134a1d69.png","134a1d69da20c1276d9c62eaca6563c4"],["/NoServerProject/static/media/netherlands.0709bca0.png","0709bca0e93c3df09e5a3420b3063cf3"],["/NoServerProject/static/media/passportbg.d9125b64.jpg","d9125b646d1d97d6b07dd3f26742a4d7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),c=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/NoServerProject/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});