var remote_app_2;!function(){"use strict";var n={611:function(n,e,t){var r={"./App":function(){return Promise.all([t.e(416),t.e(878),t.e(189)]).then((function(){return function(){return t(189)}}))}},u=function(n,e){return t.R=e,e=t.o(r,n)?r[n]():Promise.resolve().then((function(){throw new Error('Module "'+n+'" does not exist in container.')})),t.R=void 0,e},o=function(n,e){if(t.S){var r="default",u=t.S[r];if(u&&u!==n)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[r]=n,t.I(r,e)}};t.d(e,{get:function(){return u},init:function(){return o}})}},e={};function t(r){var u=e[r];if(void 0!==u)return u.exports;var o=e[r]={exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.c=e,t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))},t.u=function(n){return"static/js/"+n+"."+{51:"f89cd55d",164:"ef1e659c",184:"3cf2bd18",189:"0fecb15e",192:"6c1fe200",225:"5dbe3ae9",361:"f6b141ad",377:"48988c87",390:"b221712d",416:"b6318d77",702:"7eef1f0a",787:"5de05407",791:"fc8a65a3",878:"8411cca9",912:"90074e60",938:"f4e1d137"}[n]+".chunk.js"},t.miniCssF=function(n){},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){var n={},e="remote_app_2:";t.l=function(r,u,o,i){if(n[r])n[r].push(u);else{var f,c;if(void 0!==o)for(var a=document.getElementsByTagName("script"),l=0;l<a.length;l++){var d=a[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+o){f=d;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,t.nc&&f.setAttribute("nonce",t.nc),f.setAttribute("data-webpack",e+o),f.src=r),n[r]=[u];var s=function(e,t){f.onerror=f.onload=null,clearTimeout(p);var u=n[r];if(delete n[r],f.parentNode&&f.parentNode.removeChild(f),u&&u.forEach((function(n){return n(t)})),e)return e(t)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=s.bind(null,f.onerror),f.onload=s.bind(null,f.onload),c&&document.head.appendChild(f)}}}(),t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},function(){t.S={};var n={},e={};t.I=function(r,u){u||(u=[]);var o=e[r];if(o||(o=e[r]={}),!(u.indexOf(o)>=0)){if(u.push(o),n[r])return n[r];t.o(t.S,r)||(t.S[r]={});var i=t.S[r],f="remote_app_2",c=function(n,e,t,r){var u=i[n]=i[n]||{},o=u[e];(!o||!o.loaded&&(!r!=!o.eager?r:f>o.from))&&(u[e]={get:t,from:f,eager:!!r})},a=[];if("default"===r)c("@emotion/react","11.11.0",(function(){return Promise.all([t.e(361),t.e(416),t.e(702)]).then((function(){return function(){return t(702)}}))})),c("@emotion/styled","11.11.0",(function(){return Promise.all([t.e(416),t.e(377),t.e(225)]).then((function(){return function(){return t(225)}}))})),c("@mui/material","5.12.3",(function(){return Promise.all([t.e(361),t.e(390),t.e(416),t.e(51),t.e(377),t.e(912),t.e(184)]).then((function(){return function(){return t(390)}}))})),c("react-dom","18.2.0",(function(){return Promise.all([t.e(164),t.e(416)]).then((function(){return function(){return t(164)}}))})),c("react","18.2.0",(function(){return t.e(791).then((function(){return function(){return t(791)}}))})),c("web-vitals","2.1.4",(function(){return t.e(787).then((function(){return function(){return t(787)}}))}));return a.length?n[r]=Promise.all(a).then((function(){return n[r]=1})):n[r]=1}}}(),t.p="/module-federation-example/remote-app-2/",function(){var n=function(n){var e=function(n){return n.split(".").map((function(n){return+n==n?+n:n}))},t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(n),r=t[1]?e(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,e(t[2]))),t[3]&&(r.push([]),r.push.apply(r,e(t[3]))),r},e=function(e,t){e=n(e),t=n(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var u=e[r],o=(typeof u)[0];if(r>=t.length)return"u"==o;var i=t[r],f=(typeof i)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&u!=i)return u<i;r++}},r=function(n){var e=n[0],t="";if(1===n.length)return"*";if(e+.5){t+=0==e?">=":-1==e?"<":1==e?"^":2==e?"~":e>0?"=":"!=";for(var u=1,o=1;o<n.length;o++)u--,t+="u"==(typeof(f=n[o]))[0]?"-":(u>0?".":"")+(u=2,f);return t}var i=[];for(o=1;o<n.length;o++){var f=n[o];i.push(0===f?"not("+c()+")":1===f?"("+c()+" || "+c()+")":2===f?i.pop()+" "+i.pop():r(f))}return c();function c(){return i.pop().replace(/^\((.+)\)$/,"$1")}},u=function(e,t){if(0 in e){t=n(t);var r=e[0],o=r<0;o&&(r=-r-1);for(var i=0,f=1,c=!0;;f++,i++){var a,l,d=f<e.length?(typeof e[f])[0]:"";if(i>=t.length||"o"==(l=(typeof(a=t[i]))[0]))return!c||("u"==d?f>r&&!o:""==d!=o);if("u"==l){if(!c||"u"!=d)return!1}else if(c)if(d==l)if(f<=r){if(a!=e[f])return!1}else{if(o?a>e[f]:a<e[f])return!1;a!=e[f]&&(c=!1)}else if("s"!=d&&"n"!=d){if(o||f<=r)return!1;c=!1,f--}else{if(f<=r||l<d!=o)return!1;c=!1}else"s"!=d&&"n"!=d&&(c=!1,f--)}}var s=[],p=s.pop.bind(s);for(i=1;i<e.length;i++){var h=e[i];s.push(1==h?p()|p():2==h?p()&p():h?u(h,t):!p())}return!!p()},o=function(n,t){var r=n[t];return Object.keys(r).reduce((function(n,t){return!n||!r[n].loaded&&e(n,t)?t:n}),0)},i=function(n,e,t,u){return"Unsatisfied version "+t+" from "+(t&&n[e][t].from)+" of shared singleton module "+e+" (required "+r(u)+")"},f=function(n,e,t,r){var f=o(n,t);return u(r,f)||a(i(n,t,f,r)),l(n[t][f])},c=function(n,t,r){var o=n[t];return(t=Object.keys(o).reduce((function(n,t){return u(r,t)&&(!n||e(n,t))?t:n}),0))&&o[t]},a=function(n){"undefined"!==typeof console&&console.warn&&console.warn(n)},l=function(n){return n.loaded=1,n.get()},d=function(n){return function(e,r,u,o){var i=t.I(e);return i&&i.then?i.then(n.bind(n,e,t.S[e],r,u,o)):n(e,t.S[e],r,u,o)}},s=d((function(n,e,r,u,o){return e&&t.o(e,r)?f(e,0,r,u):o()})),p=d((function(n,e,r,u,o){var i=e&&t.o(e,r)&&c(e,r,u);return i?l(i):o()})),h={},m={416:function(){return s("default","react",[1,18,2,0],(function(){return t.e(791).then((function(){return function(){return t(791)}}))}))},377:function(){return p("default","@emotion/react",[1,11,11,0],(function(){return Promise.all([t.e(361),t.e(192)]).then((function(){return function(){return t(702)}}))}))},51:function(){return s("default","react-dom",[1,18,2,0],(function(){return t.e(164).then((function(){return function(){return t(164)}}))}))},912:function(){return p("default","@emotion/styled",[1,11,11,0],(function(){return t.e(938).then((function(){return function(){return t(225)}}))}))},878:function(){return p("default","@mui/material",[1,5,12,3],(function(){return Promise.all([t.e(361),t.e(390),t.e(51),t.e(377),t.e(912)]).then((function(){return function(){return t(390)}}))}))}},v={51:[51],377:[377],416:[416],878:[878],912:[912]};t.f.consumes=function(n,e){t.o(v,n)&&v[n].forEach((function(n){if(t.o(h,n))return e.push(h[n]);var r=function(e){h[n]=0,t.m[n]=function(r){delete t.c[n],r.exports=e()}},u=function(e){delete h[n],t.m[n]=function(r){throw delete t.c[n],e}};try{var o=m[n]();o.then?e.push(h[n]=o.then(r).catch(u)):r(o)}catch(i){u(i)}}))}}(),function(){var n={290:0};t.f.j=function(e,r){var u=t.o(n,e)?n[e]:void 0;if(0!==u)if(u)r.push(u[2]);else if(/^(377|416|51|878|912)$/.test(e))n[e]=0;else{var o=new Promise((function(t,r){u=n[e]=[t,r]}));r.push(u[2]=o);var i=t.p+t.u(e),f=new Error;t.l(i,(function(r){if(t.o(n,e)&&(0!==(u=n[e])&&(n[e]=void 0),u)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",f.name="ChunkLoadError",f.type=o,f.request=i,u[1](f)}}),"chunk-"+e,e)}};var e=function(e,r){var u,o,i=r[0],f=r[1],c=r[2],a=0;if(i.some((function(e){return 0!==n[e]}))){for(u in f)t.o(f,u)&&(t.m[u]=f[u]);if(c)c(t)}for(e&&e(r);a<i.length;a++)o=i[a],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0},r=self.webpackChunkremote_app_2=self.webpackChunkremote_app_2||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t(611);remote_app_2=r}();
//# sourceMappingURL=remoteEntry.js.map