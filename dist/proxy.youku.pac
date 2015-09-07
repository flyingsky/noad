function FindProxyForURL(a,b){if(a=a.toLowerCase(),b=b.toLowerCase(),!isSupportedProtocol(GetProtocol(a)))return ALLOW;if(youku&&youku!==FindProxyForURL){var c=youku(a,b);if(c&&"direct"!==c.toLowerCase())return c}return isDenied(b,hostRegexps)||isDenied(a,urlRegexps)?DENY:ALLOW}function GetProtocol(a){if(a){var b=a.indexOf(":");if(b>=0)return a.substr(0,b)}return null}function isSupportedProtocol(a){return"http"===a||"https"===a}function isDenied(a,b){for(var c=0;c<b.length;c++)if(b[c].test(a))return!0;return!1}var ALLOW="DIRECT",DENY="PROXY baidu.com:80",hostRegexps=[/.*\.domob\.org/,/.*\.duomeng\.org/,/.*\.duomeng\.net/,/.*\.duomeng\.cn/,/.*\.domob\.com\.cn/,/iadsdk\.apple\.com/,/apiconfig\.adwo\.com/,/\.mopub\.com/,/\.googlesyndication\.com/,/\.doubleclick\.net/,/\.admob\.com/,/fbexternal-a\.akamaihd\.net/,/\.chartboost\.com/,/mobads\.baidu\.com/,/hm\.baidu\.com/,/\.applovin\.com/,/\.qwapi\.com/],urlRegexps=[/.*\.domob\.cn\/a/,/.*guomob\.com\/data\/ads/,/.*\.adwo\.com\/adweb7/,/.*\.adsmogo\.mobi\/ad\/.*/,/.*\.adsmogo\.org\/ad\/.*/,/.*\.adsmogo\.org\/cf\/.*/,/.*\.adsmogo\.com\/nimp\/.*/,/.*\.adsmogo\.net\/ad\/.*/,/.*\.adsmogo\.com\/ad\/.*/,/ek\.my1000g\.com\/ads\/ini\.aspx/,/i\.w\.inmobi\.com\/showad\.asm/,/mobi\.adsage\.com\/sdk_j\/default\.js/,/mws\.adsage\.com\/mobisage\/sdk\/st\/.*/,/mi\.gdt\.qq\.com\/gdt_mview\.fcg/,/news\.l\.qq\.com\/app/,/graph\.facebook\.com\/network_ads/,/cpro\.baidustatic\.com\/cpro\/ui\//,/cpro2\.baidustatic\.com\/cpro\/ui\//,/cbjs\.baidu\.com\/js\/o\.js/,/wn\.pos\.baidu\.com\/adx\.php/,/.*presselite\.com\/iphone\/pushnotification\/interstitiel\/interstitiel\.xml/,/soma\.smaato\.net\/oapi\/reqad\.jsp/,/w\.m\.taobao\.com\/api\/q/,/\/ads\/adswrapper\.js/,/m\.variflight\.com\/.*\/admob_request\.asp/,/wbapp\.mobile\.sina\.cn\/interface\/f\/ttt\/v3\/wbpullad\.php/,/wbapp\.mobile\.sina\.cn\/interface\/win\/winad\.php/,/sdkapp\.mobile\.sina\.cn\/interface\/sdk\/sdkad\.php/],youku=function(){function a(a,b){var c;for(c=0;c<a.length;c++)if(a[c].test(b))return!0;return!1}function b(b,c,d,e){return b.hasOwnProperty(c)&&a(b[c],d.slice(e+c.length))?!0:a(b.any,d.slice(e))?!0:!1}function c(a,c,d,e){return b(a.white,c,d,e)?"DIRECT":b(a.proxy,c,d,e)?g:"DIRECT"}function d(a,b){var d=a.slice(0,6);return"http:/"===d?c(e,b,a,7):"https:"===d?c(f,b,a,8):"DIRECT"}var e={white:{any:[/^[^/]*\/ipad\?file=\//i]},proxy:{any:[/^[^/]*\.dpool\.sina\.com\.cn\/iplookup/i,/^[^/]*\/vrs_flash\.action/i],"v.youku.com":[/^\/player\//i],"api.youku.com":[/^\/player\//i],"play.youku.com":[/^\/play\/get\.json/i],"v2.tudou.com":[/^\//i],"www.tudou.com":[/^\/a\//i,/^\/v\//i,/^\/outplay\/goto\/getTvcCode/i,/^\/tvp\/alist\.action/i],"s.plcloud.music.qq.com":[/^\/fcgi\-bin\/p\.fcg/i],"i.y.qq.com":[/^\/s\.plcloud\/fcgi\-bin\/p\.fcg/i],"hot.vrs.sohu.com":[/^\//i],"live.tv.sohu.com":[/^\/live\/player/i],"pad.tv.sohu.com":[/^\/playinfo/i],"my.tv.sohu.com":[/^\/play\/m3u8version\.do/i],"hot.vrs.letv.com":[/^\//i],"data.video.qiyi.com":[/^\/v\./i,/^\/videos\//i,/^\/.*\/videos\//i],"cache.video.qiyi.com":[/^\/vms\?/i,/^\/vp\/.*\/.*\/\?src=/i,/^\/vps\?/i,/^\/liven\//i],"cache.vip.qiyi.com":[/^\/vms\?/i],"v.api.hunantv.com":[/^\/player\/video/i],"vv.video.qq.com":[/^\//i,/^\/getvinfo/i,/^\/getinfo/i,/^\/geturl/i],"tt.video.qq.com":[/^\/getvinfo/i],"ice.video.qq.com":[/^\/getvinfo/i],"tjsa.video.qq.com":[/^\/getvinfo/i],"a10.video.qq.com":[/^\/getvinfo/i],"xyy.video.qq.com":[/^\/getvinfo/i],"vcq.video.qq.com":[/^\/getvinfo/i],"vsh.video.qq.com":[/^\/getvinfo/i],"vbj.video.qq.com":[/^\/getvinfo/i],"bobo.video.qq.com":[/^\/getvinfo/i],"flvs.video.qq.com":[/^\/getvinfo/i],"bkvv.video.qq.com":[/^\/getvinfo/i],"info.zb.qq.com":[/^\/\?/i],"geo.js.kankan.xunlei.com":[/^\//i],"web-play.pptv.com":[/^\//i],"web-play.pplive.cn":[/^\//i],"dyn.ugc.pps.tv":[/^\//i],"v.pps.tv":[/^\/ugc\/ajax\/aj_html5_url\.php/i],"inner.kandian.com":[/^\//i],"ipservice.163.com":[/^\//i],"so.open.163.com":[/^\/open\/info\.htm/i],"zb.s.qq.com":[/^\//i],"ip.kankan.xunlei.com":[/^\//i],"vxml.56.com":[/^\/json\//i],"music.sina.com.cn":[/^\/yueku\/intro\//i,/^\/radio\/port\/webFeatureRadioLimitList\.php/i],"play.baidu.com":[/^\/data\/music\/songlink/i],"v.iask.com":[/^\/v_play\.php/i,/^\/v_play_ipad\.cx\.php/i],"tv.weibo.com":[/^\/player\//i],"wtv.v.iask.com":[/^\/.*\.m3u8/i,/^\/mcdn\.php$/i,/^\/player\/ovs1_idc_list\.php/i],"video.sina.com.cn":[/^\/interface\/l\/u\/getFocusStatus\.php/i],"www.yinyuetai.com":[/^\/insite\//i,/^\/main\/get\-/i],"api.letv.com":[/^\/streamblock/i,/^\/mms\/out\/video\/play/i,/^\/mms\/out\/common\/geturl/i,/^\/geturl/i,/^\/api\/geturl/i,/^\/getipgeo$/i],"st.live.letv.com":[/^\/live\//i],"live.gslb.letv.com":[/^\/gslb\?/i],"static.itv.letv.com":[/^\/api/i],"ip.apps.cntv.cn":[/^\/js\/player\.do/i],"vdn.apps.cntv.cn":[/^\/api\/get/i,/^\/api\/getLiveUrlCommonApi\.do\?pa:\/\/cctv_p2p_hdcctv5/i,/^\/api\/getLiveUrlCommonApi\.do\?pa:\/\/cctv_p2p_hdcctv6/i,/^\/api\/getLiveUrlCommonApi\.do\?pa:\/\/cctv_p2p_hdcctv8/i,/^\/api\/getLiveUrlCommonApi\.do\?pa:\/\/cctv_p2p_hdbtv6/i],"vdn.live.cntv.cn":[/^\/api2\/liveHtml5\.do\?channel=pa:\/\/cctv_p2p_hdcctv5/i,/^\/api2\/liveHtml5\.do\?channel=pa:\/\/cctv_p2p_hdcctv6/i,/^\/api2\/liveHtml5\.do\?channel=pa:\/\/cctv_p2p_hdcctv8/i,/^\/api2\/liveHtml5\.do\?channel=pa:\/\/cctv_p2p_hdbtv6/i,/^\/api2\/live\.do\?channel=pa:\/\/cctv_p2p_hdcctv5/i,/^\/api2\/live\.do\?channel=pa:\/\/cctv_p2p_hdcctv6/i,/^\/api2\/live\.do\?channel=pa:\/\/cctv_p2p_hdcctv8/i,/^\/api2\/live\.do\?channel=pa:\/\/cctv_p2p_hdbtv6/i],"vip.sports.cntv.cn":[/^\/check\.do/i,/^\/play\.do/i,/^\/servlets\/encryptvideopath\.do/i],"211.151.157.15":[/^\//i],"a.play.api.3g.youku.com":[/^\/common\/v3\/play\?/i],"i.play.api.3g.youku.com":[/^\/common\/v3\/play\?/i,/^\/common\/v3\/hasadv\/play\?/i],"api.3g.youku.com":[/^\/layout/i,/^\/v3\/play\/address/i,/^\/openapi\-wireless\/videos\/.*\/download/i,/^\/videos\/.*\/download/i,/^\/common\/v3\/play/i],"tv.api.3g.youku.com":[/^\/openapi\-wireless\/v3\/play\/address/i,/^\/common\/v3\/hasadv\/play/i,/^\/common\/v3\/play/i],"play.api.3g.youku.com":[/^\/common\/v3\/hasadv\/play/i,/^\/common\/v3\/play/i,/^\/v3\/play\/address/i],"play.api.3g.tudou.com":[/^\/v/i],"tv.api.3g.tudou.com":[/^\/tv\/play\?/i],"api.3g.tudou.com":[/^\//i],"api.tv.sohu.com":[/^\/mobile_user\/device\/clientconf\.json\?/i],"access.tv.sohu.com":[/^\//i],"iface.iqiyi.com":[/^\/api\/searchIface\?/i],"iface2.iqiyi.com":[/^\/php\/xyz\/iface\//i,/^\/php\/xyz\/entry\/galaxy\.php\?/i,/^\/php\/xyz\/entry\/nebula\.php\?/i],"cache.m.iqiyi.com":[/^\/jp\/tmts\//i],"dynamic.app.m.letv.com":[/^\/.*\/dynamic\.php\?.*ctl=videofile/i],"dynamic.meizi.app.m.letv.com":[/^\/.*\/dynamic\.php\?.*ctl=videofile/i],"dynamic.search.app.m.letv.com":[/^\/.*\/dynamic\.php\?.*ctl=videofile/i],"dynamic.live.app.m.letv.com":[/^\/.*\/dynamic\.php\?.*act=canplay/i],"listso.m.areainfo.ppstream.com":[/^\/ip\/q\.php/i],"epg.api.pptv.com":[/^\/detail\.api\?/i],"play.api.pptv.com":[/^\/boxplay\.api\?/i],"m.letv.com":[/^\/api\/geturl\?/i],"interface.bilibili.com":[/^\/playurl\?/i],"3g.music.qq.com":[/^\//i],"mqqplayer.3g.qq.com":[/^\//i],"proxy.music.qq.com":[/^\//i],"proxymc.qq.com":[/^\//i],"ip2.kugou.com":[/^\/check\/isCn\//i],"ip.kugou.com":[/^\/check\/isCn\//i],"client.api.ttpod.com":[/^\/global/i],"mobi.kuwo.cn":[/^\//i],"mobilefeedback.kugou.com":[/^\//i],"tingapi.ting.baidu.com":[/^\/v1\/restserver\/ting\?.*method=baidu\.ting\.song/i],"music.baidu.com":[/^\/data\/music\/links\?/i],"serviceinfo.sdk.duomi.com":[/^\/api\/serviceinfo\/getserverlist/i],"music.163.com":[/^\/api\/copyright\/restrict\/\?/i,/^\/api\/batch$/i],"www.xiami.com":[/^\/web\/spark/i,/^\/web\/.*\?.*xiamitoken=/i],"spark.api.xiami.com":[/^\/api\?.*method=AuthIp/i,/^\/api\?.*method=Start\.init/i,/^\/api\?.*method=Songs\.getTrackDetail/i,/^\/api\?.*method=Songs\.detail/i],"iplocation.geo.qiyi.com":[/^\/cityjson$/i],"sns.video.qq.com":[/^\/tunnel\/fcgi\-bin\/tunnel/i],"v5.pc.duomi.com":[/^\/single\-ajaxsingle\-isban/i],"tms.is.ysten.com":[/^:8080\/yst\-tms\/login\.action\?/i],"chrome.2345.com":[/^\/dianhua\/mobileApi\/check\.php$/i],"internal.check.duokanbox.com":[/^\/check\.json/i],"180.153.225.136":[/^\//i],"118.244.244.124":[/^\//i],"210.129.145.150":[/^\//i],"182.16.230.98":[/^\//i]}},f={white:{any:[]},proxy:{any:[],"openapi.youku.com":[/^\//i],"61.135.196.99":[/^\//i],"220.181.185.150":[/^\//i],"111.13.127.46":[/^\//i],"211.151.50.10":[/^\//i],"123.126.99.57":[/^\//i],"123.126.99.39":[/^\//i],"220.181.154.137":[/^\//i],"httpbin.org":[/^\//i]}},g="PROXY proxy.uku.im:993; DIRECT;";return d}();