function FindProxyForURL(a,b){return a=a.toLowerCase(),b=b.toLowerCase(),isSupportedProtocol(GetProtocol(a))&&(isDenied(b,hostRegexps)||isDenied(a,urlRegexps))?DENY:ALLOW}function GetProtocol(a){if(a){var b=a.indexOf(":");if(b>=0)return a.substr(0,b)}return null}function isSupportedProtocol(a){return"http"===a||"https"===a}function isDenied(a,b){for(var c=0;c<b.length;c++)if(b[c].test(a))return!0;return!1}var ALLOW="DIRECT",DENY="PROXY baidu.com:80",hostRegexps=[/.*\.domob\.org/,/.*\.duomeng\.org/,/.*\.duomeng\.net/,/.*\.duomeng\.cn/,/.*\.domob\.com\.cn/,/iadsdk\.apple\.com/,/apiconfig\.adwo\.com/,/\.mopub\.com/,/\.googlesyndication\.com/,/\.doubleclick\.net/,/\.admob\.com/,/fbexternal-a\.akamaihd\.net/,/\.chartboost\.com/,/mobads\.baidu\.com/,/hm\.baidu\.com/,/pos\.baidu\.com/,/\.applovin\.com/,/\.qwapi\.com/],urlRegexps=[/.*\.domob\.cn\/a/,/.*guomob\.com\/data\/ads/,/.*\.adwo\.com\/adweb7/,/.*\.adsmogo\.mobi\/ad\/.*/,/.*\.adsmogo\.org\/ad\/.*/,/.*\.adsmogo\.org\/cf\/.*/,/.*\.adsmogo\.com\/nimp\/.*/,/.*\.adsmogo\.net\/ad\/.*/,/.*\.adsmogo\.com\/ad\/.*/,/ek\.my1000g\.com\/ads\/ini\.aspx/,/i\.w\.inmobi\.com\/showad\.asm/,/mobi\.adsage\.com\/sdk_j\/default\.js/,/mws\.adsage\.com\/mobisage\/sdk\/st\/.*/,/mi\.gdt\.qq\.com\/gdt_mview\.fcg/,/news\.l\.qq\.com\/app/,/graph\.facebook\.com\/network_ads/,/cpro\.baidustatic\.com\/cpro\/ui\//,/cpro2\.baidustatic\.com\/cpro\/ui\//,/cbjs\.baidu\.com\/js\/o\.js/,/wn\.pos\.baidu\.com\/adx\.php/,/.*presselite\.com\/iphone\/pushnotification\/interstitiel\/interstitiel\.xml/,/soma\.smaato\.net\/oapi\/reqad\.jsp/,/w\.m\.taobao\.com\/api\/q/,/\/ads\/adswrapper\.js/,/m\.variflight\.com\/.*\/admob_request\.asp/,/wbapp\.mobile\.sina\.cn\/interface\/f\/ttt\/v3\/wbpullad\.php/,/wbapp\.mobile\.sina\.cn\/interface\/win\/winad\.php/,/sdkapp\.mobile\.sina\.cn\/interface\/sdk\/sdkad\.php/];