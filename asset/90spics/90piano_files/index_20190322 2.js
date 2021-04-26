!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.emonitor={})}(this,function(e){"use strict";var t=Object.prototype.toString,r=Object.prototype.hasOwnProperty,n=function(e){return"[object Object]"===t.call(e)},o=function(e,t){return r.call(e,t)},i=function(e){if(!e)return{};var t=document.createElement("a");return t.href=e,{host:t.host,path:t.pathname,hostname:t.hostname,protocol:t.protocol.slice(0,-1)}},a={duration:"delay",name:"resurl",type:"type"},s=["css","script","img","video","audio"],c=["cdn","cgi"],d=["s_path","s_uuid","s_traceid","s_guid","s_appid","s_vuserid","hc_pgv_pvid","s_omgid","err_desc"],u=(function(){function e(e){this.value=e}function t(t){var r,n;function o(r,n){try{var a=t[r](n),s=a.value;s instanceof e?Promise.resolve(s.value).then(function(e){o("next",e)},function(e){o("throw",e)}):i(a.done?"return":"normal",a.value)}catch(e){i("throw",e)}}function i(e,t){switch(e){case"return":r.resolve({value:t,done:!0});break;case"throw":r.reject(t);break;default:r.resolve({value:t,done:!1})}(r=r.next)?o(r.key,r.arg):n=null}this._invoke=function(e,t){return new Promise(function(i,a){var s={key:e,arg:t,resolve:i,reject:a,next:null};n?n=n.next=s:(r=n=s,o(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m=function(){},h=function(e){var t=e.name,r=e.url,n=void 0===r?window.location.href:r;t=t.replace(/[\[\]]/g,"\\$&");var o=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(n);return o&&o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):""},f=function(e){for(var t=encodeURIComponent(e)+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var o=r[n];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(t))return decodeURIComponent(o.substring(t.length,o.length))}return null},v=function(e){var t=[];for(var r in e)t.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t.join("&")},g=function(e){var t=e.baseUrl,r=e.data,n=e.method,o=void 0===n?"GET":n;if("GET"===o){var i=new Image;i.onload=i.onerror=function(){i=null},i.src=t+"&"+v(r)}else if("POST"===o)try{var a=null;(a=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")).open("POST",t,!0),a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.send(v(r))}catch(e){console.warn("xmlhttp error",e)}},y=function(e){var r,n=[];return r=e,"[object Array]"===t.call(r)&&e.forEach(function(e){var t={};for(var r in e)if(a[r]&&(t[a[r]]=e[r],"resurl"===a[r])){var o=i(e[r]),s=o.hostname,c=o.path;t.reshost=s,t.respath=c,t.httpcode=200}n.push(t)}),n},w=navigator.userAgent,_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t="unknown",r="unknown",n="unknown",o="unknown",i="unknown",a=e.toLowerCase();if(a.indexOf("windows")>-1?i="windows":a.indexOf("linux")>-1?i="linux":a.indexOf("mac")>-1&&(i="mac"),window.opera)o=r=window.opera.version(),n="opera";else if(/AppleWebKit\/(\S+)/.test(e))if(o=RegExp.$1,n="webkit",/Chrome\/(\S+)/.test(e))r=RegExp.$1,t="chrome";else if(/Version\/(\S+)/.test(e))r=RegExp.$1,t="safari";else{var s=parseFloat(o);r=s<100?1:s<312?1.2:s<412?1.3:2,t="safari"}else/KHTML\/(\S+)/.test(e)||/Konqueror\/([^;]+)/.test(e)?(o=r=RegExp.$1,n="khtml",t="konq"):/rv:([^\)]+)\) Gecko\/\d{8}/.test(e)?(o=RegExp.$1,n="gecko",/Firefox\/(\S+)/.test(e)&&(r=RegExp.$1,t="firefox")):/MSIE ([^;]+)/.test(e)&&(o=r=RegExp.$1,n="ie",t="ie");return{machine:"PC",name:t,version:r,engineVer:o,engine:n,machineSys:i}}(e),r=t.machineSys,n={mac:"mac"===r,version:t.engineVer,name:r},o={},i={iphone:e.match(/(iphone)\s(os\s)?([\d_]+)/i),ipad:e.match(/(ipad).*\s([\d_]+)/i),ipod:e.match(/(ipod).*\s([\d_]+)/i),android:e.match(/(android)\s([\d\.]+)/i),windows:e.match(/Windows(\s+\w+)?\s+?(\d+\.\d+)/)};i.ipod&&(n.ios=n.ipod=!0,n.version=i.ipod[2].replace(/_/g,"."),n.name="ipod"),i.ipad&&(n.ios=n.ipad=!0,n.version=i.ipad[2].replace(/_/g,"."),n.name="ipad"),i.iphone&&(n.iphone=n.ios=!0,n.version=i.iphone[3].replace(/_/g,"."),n.name="iphone"),i.android&&(n.android=!0,n.version=i.android[2],n.name="android"),i.windows&&(n.windows=!0,n.version=i.windows[2],n.name="windows");var a={IE:e.match(/; msie\b|; trident\b|\bedge\//i),WeChat:e.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/)||e.match(/MicroMessenger\/((\d+)\.(\d+))/),MQQClient:!e.match(/QQReader/)&&e.match(/QQ\/(\d+\.\d+)/i)||e.match(/V1_AND_SQ_([\d\.]+)/),MQQReader:e.match(/QQReader/i),QQvideo:!e.match(/TADChid/)&&e.match(/QQLiveBrowser\/([\d.]+)/),QQHDvideo:e.match(/QQLiveHDBrowser\/([\d.]+)/),TBSSDK:e.match(/MQQBrowser\/(\d+\.\d+)/i)&&e.match(/MSDK\/(\d+\.\d+)/),MQQBrowser:e.match(/MQQBrowser\/(\d+\.\d+)/i),UCBrowser:e.match(/ucbrowser\/(\d+\.\d+)/i),Qzone:e.match(/Qzone\/[\w\d\_]*(\d\.\d)[\.\w\d\_]*/i),Weibo:e.match(/Weibo/i),qqnews:e.match(/qqnews\/(\d+\.\d+\.\d+)/i),QQLiveBroadcast:e.match(/QQLiveBroadcast/i),kuserAgentibao:e.match(/qnreading\/(\d+\.\d+\.\d+)/i),liebao:e.match(/LieBaoFast\/(\d+\.\d+\.\d+)/i),baiduboxapp:e.match(/baiduboxapp\/(\d+\.\d+\.\d+)/i),IEMobile:e.match(/IEMobile(\/|\s+)(\d+\.\d+)/)||e.match(/WPDesktop/),douban:e.match(/com\.douban\.frodo\/(\d+\.\d+\.\d+)/i),MiuiBrowser:e.match(/MiuiBrowser\/(\d+\.\d+)/i),BingPreview:e.match(/BingPreview\/(\d+\.)/i),TADChid:e.match(/TADChid\/(\d+)/i),Chrome:n.ios?e.match(/CriOS\/(\d+\.\d+)/):e.match(/Chrome\/(\d+\.\d+)/),Safari:e.match(/Safari\/(\d+\.\d+)/),sukan:e.match(/synopsis/i)};if(a.MQQReader)o.MQQReader=!0,o.version=1,o.name="MQQReader";else if(a.IEMobile)o.IEMobile=!0,o.version=1,o.name="IEMobile";else for(var s in a)if(a[s]){o[s]=!0,o.version=a[s][1]||0,o.name=s;break}return{browser:o,os:n}},S=!1,b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,r=e.type;try{if(!window.performance&&!window.performance.getEntries)return console.warn("prerformance is not supported"),[];var n=performance.getEntries(),o=[];if(!n&&!n.length)return o;try{n.forEach(function(e){var t={name:e.name,time_redirect:e.redirectEnd-e.redirectStart,time_dns:e.domainLookupEnd-e.domainLookupStart,time_requestTime:e.responseEnd-e.requestStart,time_tcp:e.connectEnd-e.connectStart,type:e.initiatorType,starttime:Math.floor(e.startTime),entryType:e.entryType,duration:Math.floor(e.duration)||0,decodedBodySize:e.decodedBodySize||0,nextHopProtocol:e.nextHopProtocol,json_entries:JSON.stringify(e)};o.push(t)})}catch(e){console.error("get resourceTiming err::::",e)}return t?o.filter(function(e){return e.name===t})[0]:r?o.filter(function(e){return e.type===r}):o}catch(e){return console.warn("get performance happen error"),[]}},E={SCRIPT:"script",LINK:"link",IMG:"img",AUDIO:"audio",VIDEO:"video",FETCH:"fetch",AJAX:"ajax",PROMISE:"promise"},x=function(){var e=-1!==["o04IBALZLPIw2k0PgFTTQPajV8pI"].indexOf(h({name:"openid"})),t=-1!==["o0515569877","o1031127461","o0827574297","o0371078926"].indexOf(function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).isNumber,t=void 0!==e&&e,r=f("uin");if(!r)return null;if(t){var n=Number(r.replace(/^[o0]*/gi,""));return n||null}return r}());return e||t},k=function(){var e=(new Date).getTime();return window.performance&&window.performance.now&&(e=window.performance.now()),e},T=function(){function e(t){var r=t.options,n=void 0===r?{}:r,o=t.baseUrl,i=void 0===o?"":o,a=t.sampling,s=void 0===a?1:a,c=(t.data,t.delay),d=void 0===c?2e3:c,p=t.name,l=t.params,m=void 0===l?[]:l,h=t.cgi,f=void 0===h?{}:h,v=t.ptag,g=t.onBeforeSend;u(this,e),this.options=n,this.errorList=[],this.baseUrl=i,this.sampling=s,this.params=m,this.dealy=d,this.name=p,this.cgiOptions=f,this.ptag=v,this.onBeforeSend=g}return p(e,[{key:"init",value:function(){try{this.proxyAjax(),this.proxyError(),this.proxyConsole(),this.proxyFetch(),this.injectOptions()}catch(e){this.send({err_msg:"emonitor init happen error",err_stack:""+e,err_type:"jserror",err_function:"emonitor init func"})}}},{key:"injectOptions",value:function(){var e=this;e.params.forEach(function(t){e.options[t]=h({name:t})}),"string"==typeof e.options.qq&&e.options.qq.length>0&&(e.options.openid="")}},{key:"proxyConsole",value:function(){var e=this;if("undefined"!=typeof console&&"function"==typeof console.error){var t=console.error;console.error=function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];t.apply(window.console,n),e.send({err_msg:n.join(","),level:"error",err_type:"console"})}}}},{key:"reportCgi",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.cgiOptions||{},r=t.baseUrl,n=t.sampling,o=void 0===n?1:n;if(r){var a=e.cgiurl,s=i(a),c=s.host,d=s.path;Math.random()<=o&&this.send(l({cgipath:d,cgihost:c,bizcode_server:""},e),!1,r)}}},{key:"proxyAjax",value:function(){var e=Object.create(null),t=this,r=(new Date).getTime(),n=null,o=null,i=function(e){o=k();var i={},a=e&&e.currentTarget,s=this.emonitorAjaxURL,c=a?{currentStatus:a.status,cgiurl:s||a.responseURL}:{},d=c.currentStatus,u=void 0===d?"":d,p=c.cgiurl,m=void 0===p?"":p;try{t.reportCgi({cgiurl:m,delay:Math.round(Math.max(o-r,0)),httpcode:u,bizcode:"",bizmsg:"",starttime:n})}catch(e){console.warn(e)}200!==u&&(i={err_msg:"ajax请求错误",err_stack:"错误码:"+this.status,level:"error",err_type:E.AJAX,err_code:this.status,err_desc:JSON.stringify({fileName:m,category:"ajax",text:this.statusText,status:this.status})},t.errorList.push(i),t.send(l({},i)),i={})};e.send=XMLHttpRequest.prototype.send,e.open=XMLHttpRequest.prototype.open,XMLHttpRequest.prototype.open=function(t,r){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];e.open.apply(this,[t,r,n]),this.emonitorAjaxURL=r},XMLHttpRequest.prototype.send=function(t){n=(new Date).getTime(),r=k();var o=this.onreadystatechange;this.onreadystatechange=function(e){this.addEventListener?(this.addEventListener("error",i),this.addEventListener("load",i),this.addEventListener("abort",i),o&&o.apply(this,[e,t])):"4"===String(this.readyState)&&(i(e),this.status>=200&&this.status<300&&o&&o.apply(this,[e,t]))},e.send.apply(this,[t])}}},{key:"proxyFetch",value:function(){var e=this;if(window.fetch){var t=window.fetch;window.fetch=function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=(new Date).getTime(),a=k();return t.apply(null,n).then(function(t){var r=k();try{e.reportCgi({cgiurl:n[0],delay:Math.round(Math.max(r-a,0)),httpcode:t.status,bizcode:"",bizmsg:t.statusText,starttime:i})}catch(e){console.warn(e)}return t.ok||""===t.url||e.send({err_msg:"fetch not ok",err_type:E.FETCH,err_code:t.status,err_desc:JSON.stringify({type:"error",fileName:n[0],options:n[1],category:"fetch"})}),t}).catch(function(t){e.send({err_msg:"fetch not ok",err_stack:""+t,err_type:E.FETCH,err_desc:JSON.stringify({type:"error",fileName:n[0],options:n[1],category:"fetch"})})})}}}},{key:"proxyError",value:function(){var e=this;window.addEventListener("error",function(t){var r=t.target?t.target:t.srcElement;if(r!==window&&r.nodeName&&E[r.nodeName.toUpperCase()]){var n={err_msg:r.localName+" is load error",err_stack:"resource is not found",err_type:""+r.localName,err_desc:JSON.stringify({tagName:r.localName,type:t.type,fileName:r.currentSrc||r.src||r.href,category:"resource"}),timestamps:(new Date).getTime()};e.errorList.push(n),e.send(l({},n))}},!0),window.onerror=function(t,r,n,o,i){if("Script error."===t&&!r)return!1;var a={};return setTimeout(function(){(a=i&&i.stack?{err_msg:t,err_stack:i.stack,err_type:"jserror"}:{err_msg:t,err_stack:"",err_type:"jserror"}).err_desc=JSON.stringify({url:e.URL,fileName:r,category:"javascript",line:n,col:o}),e.errorList.push(l({},a)),e.send(l({},a))},0),!0},window.addEventListener("unhandledrejection",function(t){var r={err_msg:t.reason,err_type:E.PROMISE,err_desc:JSON.stringify({url:location.href,category:"promise"}),err_stack:"promise is error"};e.errorList.push(r),e.send(r),t.preventDefault()},!0)}},{key:"config",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t in e)-1!==["baseUrl","params","options","sampling","delay","name"].indexOf(String(t))&&(this[t]=e[t]);return this}},{key:"send",value:function(){var e,t,r,a,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length>1&&void 0!==arguments[1]&&arguments[1],p=arguments[2],m=(this.cgiOptions||{}).btrace,f=void 0!==m&&m,v=s.err_type,y=void 0===v?"console":v;if(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Math.random()<=e}(this.sampling)||x()){var w=this,S="jserror"===y?300:w.delay,b=(e=g,t=S,r=function(){w.errorList=[]},a=null,function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];var s=this;clearTimeout(a),a=setTimeout(function(){e.apply(s,o),!r||r()},t)}),E=i(location.href),k=E.host,T=E.path,M=E.protocol,L=_(navigator.userAgent),O=L.browser,j=L.os,Q=l({},this.options,s,{timestamps:(new Date).getTime(),_dc:Math.random(),dtime:(new Date).getTime(),hh_ua:navigator.userAgent,hh_uav:O.version,hh_ref:document.referrer,hc_pgv_pvid:function(){var e="";try{if(e=window.localStorage.getItem("emonitor.hc_pgv_pvid"))return e;var t=(new Date).getTime();return e="ek"+[t,Math.floor(t*Math.random()*Math.random()).toString().slice(-5)].join(""),window.localStorage.setItem("emonitor.hc_pgv_pvid",e),e}catch(t){return console.warn("emonitor.hc_pgv_pvid get error",t),e}}(),s_url:location.href,s_host:k,s_path:T,s_protocol:M,s_browser:O.name,s_os:j.name,s_qq:h({name:"qq"}),s_openid:h({name:"openid"}),s_app:w.name,s_ptag:w.ptag}),C=w.onBeforeSend;if(function(e){return"function"==typeof e}(C))try{var R=function(e){var t={type:"",url:"",code:"",isErr:!1,source:e};if(!n(e))return t;if(o(e,"err_type")){t.type=e.err_type;try{if(e.err_desc){var r=JSON.parse(e.err_desc);t.url=r.url||r.fileName||e.s_url}else t.url=e.s_url}catch(r){t.url=e.s_url,console.warn(r)}t.isErr=!0}else o(e,"cgiurl")?(t.type="cgi",t.url=e.cgiurl,t.code=e.httpcode):o(e,"resurl")?(t.type="cdn",t.url=e.resurl,t.code=e.httpcode):o(e,"time_domready")?(t.type="pagepf",t.url=e.s_url,t.code=200):o(e,"json_entries")&&(t.type="slowlog",t.url=e.s_url,t.code=200);return t}(Q),q=C(R);if("boolean"==typeof q&&!q)return;if(-1!==c.indexOf(R.type))if("btrace.qq.com"===i(R.url).hostname&&!f)return;n(q)&&(Q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={},o=[];if(n(t))for(var i in t)-1!==d.indexOf(String(i))?(r[i]=t[i],o.push(i)):console.warn(i,"could not be modify.");return l({},e,r)}(Q,q))}catch(e){console.warn(e)}b({baseUrl:p||w.baseUrl,data:Q,method:u?"POST":"GET"})}}}]),e}();e.create=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,r=void 0===t?{}:t,n=e.cgi,o=void 0===n?{sampling:1,baseUrl:""}:n,i=e.baseUrl,a=e.delay,s=void 0===a?2e3:a,c=e.sampling,d=void 0===c?1:c,u=e.name,p=void 0===u?"unknown":u,l=e.params,h=void 0===l?["qq","openid","tbkt","ft","pushid"]:l,f=e.ptag,v=void 0===f?"":f,g=e.onBeforeSend,y=new T({options:r,baseUrl:i,params:h,delay:s,name:p,sampling:d,cgi:o,ptag:v,onBeforeSend:void 0===g?m:g});return y.init(),y},e.getRcTiming=b,e.getPfTiming=function(){try{var e=window.performance||window.webkitPerformance||window.msPerformance||window.mozPerformance;if(void 0===e)return!1;var t=e.timing,r={};return r.time_response=t.responseStart-t.requestStart,r.time_firstpaint=t.responseEnd-t.responseStart,r.time_domready=t.domContentLoadedEventStart-t.responseEnd,r.time_readyStart=t.fetchStart-t.navigationStart,r.time_redirectTime=t.redirectEnd-t.redirectStart,r.time_appcacheTime=t.domainLookupStart-t.fetchStart,r.time_dns=t.domainLookupEnd-t.domainLookupStart,r.time_tcp=t.connectEnd-t.connectStart,r.time_requestTime=t.responseEnd-t.requestStart,r.time_initDomTreeTime=t.domInteractive-t.responseEnd,r.time_loadEventTime=t.loadEventEnd-t.loadEventStart,r.time6=t.domLoading-t.fetchStart,r.time_whiteScreen=t.domLoading-t.fetchStart,r.time7=t.loadEventEnd-t.fetchStart,r.time_firstScreenTime=t.loadEventEnd-t.fetchStart,r.time_parseDomTree=t.domComplete-t.domInteractive,r.time8="",r}catch(e){return console.warn("err",e),{}}},e.getCdnTiming=function(){var e={};return s.forEach(function(t){e[t]=y(b({type:t}))}),e},e.getSysInfo=_,e.getUrlParam=h,e.getCookie=f,e.injectVconsole=function(){try{var e=document.createElement("script"),t=function(){S||(S=new window.VConsole)};e.src="https://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/3.0.0/vconsole.min.js",e.async=!0,e.charset="utf-8",e.onload=t,e.onreadystatechange=function(){"complete"===this.readyState&&t()},document.getElementsByTagName("head")[0].appendChild(e)}catch(e){console.error("vConsole script load err")}},Object.defineProperty(e,"__esModule",{value:!0})});
/*  |xGv00|e4bfcc44acbc1a4329eda7ead256cf40 */