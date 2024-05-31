/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/25/hello-world/index.html","aabb307ef919f6ee62ac0a5fed037559"],["/2023/06/28/blog1/index.html","96375eefda7e7aaa778a5a3b04f01618"],["/2023/07/04/blog2/index.html","c0749ffb31fc73f11c1bd4e626f7eb23"],["/2023/07/15/blog3/index.html","05b4f4082d2de720580e9117216ac25d"],["/2023/07/15/blog3/mabatis-plus-codegenerator.png","e04b365921aced02e612fa89fdbb0766"],["/2023/07/15/blog3/mabatisX.png","7895027d5aa33005ecf9dc77aefb498e"],["/2023/07/15/blog3/mybatis-plus-codegeneratorcode.png","3ac2282c3f38a279c1414e2144a2fb1f"],["/2023/07/15/blog3/mybatis-plus-self-sql1.png","b8ddef39c60bb6e0abd4b402f8a60978"],["/2023/07/15/blog3/mybatis-plus-self-sql2.png","0454e259454f563b6b43f40dea6728bb"],["/2023/07/15/blog3/wrapperUsing.png","4b65f8654de5ab6f1bff0204f390c036"],["/2023/07/31/blog4/ISC1.png","c8f96b95ff253cf8c3d0cf5701ab432d"],["/2023/07/31/blog4/ISC2.png","c8f96b95ff253cf8c3d0cf5701ab432d"],["/2023/07/31/blog4/index.html","806350888cede9637bb6fbfd6369f460"],["/2023/08/17/blog5/blog5leetcode1.png","0c2de2035c163b82a6f93b8dd8be06fb"],["/2023/08/17/blog5/blog5leetcode2.png","239c146a8e22a08ae9072e6c9360f77b"],["/2023/08/17/blog5/index.html","6ee1883fe492f2292bad784f9bbe7cbb"],["/2023/09/02/blog6/index.html","373e319636f42ec30297b069b988149d"],["/2023/10/16/blog7/index.html","574987b7b78e2c2bf5e89879d977fe2b"],["/2023/11/12/blog8/index.html","4ce2285f95ae2018d9a46f2f6af9015c"],["/2023/12/22/blog10/index.html","9ff66654cfe599650bdc689674dc49b6"],["/2023/12/22/blog11/index.html","9328d52d3b022902e04463fce44612af"],["/2023/12/22/blog12/index.html","1175e63ff1e1ee89d6697dbc7cf19480"],["/2023/12/22/blog12/jdk-include-jre.png","bea44e4c257b62851479a342fde32212"],["/2023/12/22/blog9/index.html","a60b24419a668d2c413fcf5d4c363c43"],["/2023/12/23/blog13/index.html","bcc1f871dc33b3e5b013e72e6d97fbd8"],["/2023/12/23/blog14/index.html","078da22c8d9d98fdc0f9f10cf1871686"],["/2023/12/23/blog15/index.html","dd58717e8346078c57e23910d73aaa91"],["/2023/12/23/blog15/mb_tableId.png","ce76fc2e9a3a43f7375690724c47fb62"],["/2023/12/23/blog16/aria2_web.png","cadd38d733878e9178a15c69d05f1e9e"],["/2023/12/23/blog16/index.html","173fa53b9ef876727451e7a8bf33176f"],["/2023/12/23/blog16/jianshu_firefox.png","61ddc6d25a503e21abf58cb7f8227ebd"],["/2023/12/23/blog16/jianshu_firefox_config.png","e5c2b8225aea13c3791d800aa8ab87a4"],["/2023/12/23/blog17/index.html","0a47f0ac2e1ca4fdf07d5b00c4e91916"],["/2024/02/10/blog18/index.html","fa6202ed135074030243563af4377a7b"],["/2024/03/31/blog19/index.html","6446f5476e7f8e4d329b7bd99f494ba9"],["/2024/05/07/blog20/gpt_ask1.jpg","288f6e58115c3d2b4528cbcb4d9489aa"],["/2024/05/07/blog20/gpt_ask2.jpg","9a0209f4f35319c7a6b2ff11286aca8c"],["/2024/05/07/blog20/index.html","e8ea9a2bf1995b9b85852cde6ea656d4"],["/2024/05/31/blog21/index.html","7ba9a7471539e6dacd3da0e96e9c64aa"],["/404.html","51b36341ad78a1026081cf7eab121ea9"],["/about/index.html","a94809325a6e24b7a6ccf9e7959c50bd"],["/archives/2022/11/index.html","7d8fcb649b080458883bcc9dd8b78bca"],["/archives/2022/index.html","edcdafe11517d35524abaad830a61558"],["/archives/2023/06/index.html","48981614adc204a22f057c0a9b9199bb"],["/archives/2023/07/index.html","818d25dd2eb485c654397e3392108f15"],["/archives/2023/08/index.html","088177abc7ca5d27b6690db669c33de7"],["/archives/2023/09/index.html","f249f20fb3832090971f3f21588c24d1"],["/archives/2023/10/index.html","390a8e930a46fea8f5fb86a9a458c207"],["/archives/2023/11/index.html","e47e052a2d42ac308768bd99e0c824f4"],["/archives/2023/12/index.html","30ae767cf3f9724a0b9bae7649a4b830"],["/archives/2023/index.html","51c89c06fd2d558c32ef56b30e172ff7"],["/archives/2023/page/2/index.html","4fbf53451c54fbddbdf58cc0ae49a3d2"],["/archives/2024/02/index.html","c9bbbb45e0f36e3daac6c5d2b1d94cbd"],["/archives/2024/03/index.html","454fe9a8e321dd7b5b73e28364f9d6af"],["/archives/2024/05/index.html","0d516e3933baf287bb1c26b3986b5482"],["/archives/2024/index.html","d632b03d3d754ef2a7dae4fbe80a2d11"],["/archives/index.html","462c43d0da2bc1eb32ef2007b7992f76"],["/archives/page/2/index.html","9b5db27733dc3e909527ee423d0f90a6"],["/archives/page/3/index.html","c0bac32af6ffc7db8cd8e0e6e2f139a5"],["/categories/Arithmetic/index.html","11bdb3db542282068f35a3e1db50a774"],["/categories/Code/index.html","accf5b19421af84b2419f66ec72f3ea7"],["/categories/Docker/index.html","4f0f4eccfc63a0327461380a3b1a73a6"],["/categories/Frontend/index.html","871f95fe8d282688fff7ca3902991eeb"],["/categories/Java/index.html","35803bf24787f56077d172c70f2be2e8"],["/categories/Life/index.html","21421e60f1243e0b41774c7e0092bc48"],["/categories/Linux/index.html","7911b91dd55ed410839e7b4fe29b0428"],["/categories/Project/index.html","513c00a078b70ace8d98597569877d07"],["/categories/SQL/index.html","b21a839b470f75752c7c0c3fbe5a0f5f"],["/categories/SpringBoot/index.html","5d8115c7b5753fc9e52ccd816739f1e5"],["/categories/Test/index.html","fcb86a506614a6f2e2dea59676051ebe"],["/categories/index.html","100beb36fba2fe7d6791ee023781c0ca"],["/contact/index.html","08feef5b3e2e3857fe188d0076152808"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","5279514e64187c0ab0772338b94e08e9"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/css/style.css","1860c93d81d5ae3be661773a188fff34"],["/friends/index.html","c8f18bbee745ad374d1f2ab6a56695f4"],["/index.html","1f243a1d6cb752ddb0a48aaab8582c08"],["/js/app.js","7a2c825eba3f2495f5c0f48cbe70482e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/page/2/index.html","dd564817c3722929194cfffa34a2503f"],["/sw-register.js","4de7636d0e23ebf80f8afe8c04ba3367"],["/tags/index.html","dac9f9ce78d40050336227ccc906caa5"],["/tags/想法/index.html","374d61fcee3aa3cecfa068d64e9d064f"],["/tags/技术/index.html","12071d456331597d148296a28e0c7760"],["/tags/技术/page/2/index.html","d521e7365d56dac4f0932401c83eb7c6"],["/tags/测试/index.html","bfdedb95731aab596bfae1e00fb2a2c0"],["/tags/算法/index.html","aaa7d4eab009c4d9645ce71bff40ea49"]];
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
