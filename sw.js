/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/25/hello-world/index.html","202bfb064f3afee3e64748887e784e50"],["/2023/06/28/blog1/index.html","c342e37d58eed702aed58e2947ca6155"],["/2023/07/04/blog2/index.html","8efabdd247e14e450752d01ea40c0a9a"],["/2023/07/15/blog3/index.html","458c938438f5457e8937757846a78a17"],["/2023/07/15/blog3/mabatis-plus-codegenerator.png","e04b365921aced02e612fa89fdbb0766"],["/2023/07/15/blog3/mabatisX.png","7895027d5aa33005ecf9dc77aefb498e"],["/2023/07/15/blog3/mybatis-plus-codegeneratorcode.png","3ac2282c3f38a279c1414e2144a2fb1f"],["/2023/07/15/blog3/mybatis-plus-self-sql1.png","b8ddef39c60bb6e0abd4b402f8a60978"],["/2023/07/15/blog3/mybatis-plus-self-sql2.png","0454e259454f563b6b43f40dea6728bb"],["/2023/07/15/blog3/wrapperUsing.png","4b65f8654de5ab6f1bff0204f390c036"],["/2023/07/31/blog4/ISC1.png","c8f96b95ff253cf8c3d0cf5701ab432d"],["/2023/07/31/blog4/ISC2.png","c8f96b95ff253cf8c3d0cf5701ab432d"],["/2023/07/31/blog4/index.html","9270c4639c20f6527009cf015a08f765"],["/2023/08/17/blog5/blog5leetcode1.png","0c2de2035c163b82a6f93b8dd8be06fb"],["/2023/08/17/blog5/blog5leetcode2.png","239c146a8e22a08ae9072e6c9360f77b"],["/2023/08/17/blog5/index.html","f97a4e1f73aaa5a8af323e71bac87503"],["/2023/09/02/blog6/index.html","c25279b85390ffed11ee0077f8cac2b4"],["/2023/10/16/blog7/index.html","43b8a3692071ac906aef8b77ed722a3e"],["/2023/11/12/blog8/index.html","456d1586ddf15ccb29350749e53b6b2c"],["/2023/12/22/blog10/index.html","b5a0b76d528f59097f9124be4c6feef5"],["/2023/12/22/blog11/index.html","7a2ca2f87dce32903623bb0e1c99fe0f"],["/2023/12/22/blog12/index.html","b2ef52dfbf1f8ff316a351788ac3a4ee"],["/2023/12/22/blog12/jdk-include-jre.png","bea44e4c257b62851479a342fde32212"],["/2023/12/22/blog9/index.html","b2ed40d82b9753ed3a5eef82e1797b43"],["/2023/12/23/blog13/index.html","def18e18784857fa2b5dc9104a9c17f0"],["/2023/12/23/blog14/index.html","7450e521575b0c231840e05b501d4f08"],["/2023/12/23/blog15/index.html","96cca437123562e961ad8e1b6a8df5aa"],["/2023/12/23/blog15/mb_tableId.png","ce76fc2e9a3a43f7375690724c47fb62"],["/2023/12/23/blog16/aria2_web.png","cadd38d733878e9178a15c69d05f1e9e"],["/2023/12/23/blog16/index.html","70bc254c505cbbf962a3846ebd487715"],["/2023/12/23/blog16/jianshu_firefox.png","61ddc6d25a503e21abf58cb7f8227ebd"],["/2023/12/23/blog16/jianshu_firefox_config.png","e5c2b8225aea13c3791d800aa8ab87a4"],["/2023/12/23/blog17/index.html","2606ba99755abf5d7a017f2c5793a9b9"],["/2024/02/10/blog18/index.html","cea3871646285e73f8b2c696f3626eec"],["/404.html","1c33a7ae545b9bcf16b7411fa0ee0f82"],["/about/index.html","fe3d2e3042647629f1d2ca85ab3de354"],["/archives/2022/11/index.html","ba1fca156238a92abf241fb2da2abcfc"],["/archives/2022/index.html","804bf6911ddaede9e4eabf588b70e148"],["/archives/2023/06/index.html","947fa0125a199fe49bd70b6093998a9d"],["/archives/2023/07/index.html","32803253a47855a820d969ee63c509e7"],["/archives/2023/08/index.html","7192b44cd761ccf287aef249270f83b3"],["/archives/2023/09/index.html","317c70a166e0205acc8cde20b0ddfd09"],["/archives/2023/10/index.html","7a83685895014d77dad19e9e7997cde4"],["/archives/2023/11/index.html","fd306142adc107392552e71a90aa1567"],["/archives/2023/12/index.html","5da967cefb503f615ea8a776fcb4c33b"],["/archives/2023/index.html","8622c32005a233013ff8bb9c8fc1c1dd"],["/archives/2023/page/2/index.html","67a39a5a854d523123b31ed6b2595841"],["/archives/2024/02/index.html","aa431ae8283159699d9951d62d5553f0"],["/archives/2024/index.html","2d3913c00a0d7b8f42d7cb4976923923"],["/archives/index.html","5d1a0d103d5eef9a8e11cf7c84ecb678"],["/archives/page/2/index.html","444a13bf0b8ca495e9359b27d7bb6876"],["/categories/Arithmetic/index.html","30fcbe4ccf7f8a236d974cea72abbbc9"],["/categories/Code/index.html","08dcce362b71e51294a407adc57fe86e"],["/categories/Docker/index.html","09101dde51c982cb1c3d78f466beebb5"],["/categories/Frontend/index.html","8d21f0b2caace5e1a05a36f2d75ef5f5"],["/categories/Java/index.html","ebdbc0e6dd3769abc9e8b0f71d2cfc69"],["/categories/Life/index.html","308955974fb06900eafb81da0373f20b"],["/categories/Linux/index.html","89b064a3dc71cec90acf169569e36af9"],["/categories/SQL/index.html","ab1dbdcc8634572179e6f2c5a7b06929"],["/categories/SpringBoot/index.html","c8688d95cfb2a71db84fa11eeca3b988"],["/categories/Test/index.html","45ec5c8f7f42b827d05afb1c267aa954"],["/categories/index.html","1a9872fdc23fd27b0ea34901121bd63c"],["/contact/index.html","ed00e035198eaa856b733a55c026cb54"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","5279514e64187c0ab0772338b94e08e9"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/css/style.css","1860c93d81d5ae3be661773a188fff34"],["/friends/index.html","262e48561204c798e35c57636a018525"],["/index.html","530f6e859574158198d0dd6326ae5cdf"],["/js/app.js","7a2c825eba3f2495f5c0f48cbe70482e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/page/2/index.html","195474cd8effd3166418b9ddd356b26f"],["/sw-register.js","9a71e085331fa97e12a9305b5ff11ab5"],["/tags/index.html","e2de2fd8391f7c22e2ca6bc3eebbd533"],["/tags/想法/index.html","c22b74fb11a11f2e0ab10f85f748b648"],["/tags/技术/index.html","b64a94a5848e6f87eadb164fec73f2f5"],["/tags/技术/page/2/index.html","6c442faf2ec18ae232c43e8725b1f66d"],["/tags/测试/index.html","78827c63fa66a4f615d37773836b7788"],["/tags/算法/index.html","e0563091066f69eb58df7a8f1064510c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
