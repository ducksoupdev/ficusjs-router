if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise((async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},i=(i,s)=>{Promise.all(i.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(i)};self.define=(i,r,a)=>{s[i]||(s[i]=Promise.resolve().then((()=>{let s={};const d={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return s;case"module":return d;default:return e(i)}}))).then((e=>{const i=a(...e);return s.default||(s.default=i),s}))})))}}define("./sw.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"db8fb6bb5a7d20034100ba1931c71869"},{url:"assets/img/android-chrome-192x192.png",revision:"5fa932c70edfb28a70264dce1a842fa9"},{url:"assets/img/android-chrome-384x384.png",revision:"1bf9a5b559dc7ec4db478d99844f9e6a"},{url:"assets/img/apple-touch-icon.png",revision:"852742b2d3b94d4d75a9cd66f7ff76d2"},{url:"assets/img/favicon-16x16.png",revision:"d044aff1f55cb0938155d501ae63dbe2"},{url:"assets/img/favicon-32x32.png",revision:"407645a6bcf8698917f0daed1aa4a678"},{url:"assets/img/favicon.ico",revision:"634ec555cd23e3496499c186bd774974"},{url:"assets/img/ficus-components-logo-white.svg",revision:"f0f5737b09e51536cd402c7e49959276"},{url:"assets/img/ficus-components-logo.svg",revision:"2801e2b4261c954b32d4e447ed282282"},{url:"assets/img/ficus-logo-white.svg",revision:"9c645bb95deaf0547f70af606fdc1a1d"},{url:"assets/img/ficus-logo.svg",revision:"3f4ee9a3cc8a0285fab04596049d0d7f"},{url:"assets/img/ficus-router-logo-white.svg",revision:"514405a9a2911340a2e40444d440ed5b"},{url:"assets/img/ficus-router-logo.svg",revision:"3930b75ea5c76983e7d74dccc83e3741"},{url:"assets/img/ficus-script-logo-white.svg",revision:"fa25d469f4a72bf369b6653834fe0b61"},{url:"assets/img/ficus-script-logo.svg",revision:"cdf8372e36321adbf4fd785958ad45fb"},{url:"assets/img/ficus-styles-logo-white.svg",revision:"046449261d69f8bc016ba759728ad141"},{url:"assets/img/ficus-styles-logo.svg",revision:"566ea7d1cc115f5941c1d43ec8054240"},{url:"assets/img/logo.png",revision:"d1af81e7e9f5ade1f1c10784926b13dc"},{url:"browser-support/index.html",revision:"06bed0f30307ea2db0e2c6d63eea580f"},{url:"favicon.ico",revision:"26ef20ace859bbae981ebaa977e3f48a"},{url:"features/async-routes/index.html",revision:"34ad449bb62bec9b8b380a4a7f562302"},{url:"features/context/index.html",revision:"f0197ea4e03216a3fbbc6c0c2e726e65"},{url:"features/create-router/index.html",revision:"a0fc9d457d0c283f7c851e7df7c56ad6"},{url:"features/example/index.html",revision:"38bad05a7a7604e79a0d61b49889a451"},{url:"features/get-router/index.html",revision:"6b9613224291182b118daa94df1b27f5"},{url:"features/index.html",revision:"2245a77f1a1a796aa095a833abbdc61f"},{url:"features/lazy-load-views/index.html",revision:"6cc5294d1dd545d13bf011d150b03c35"},{url:"features/location/index.html",revision:"a466c93c47fc04cdf7be2626c8d3c7ac"},{url:"features/modes/index.html",revision:"5d01bc4803d1d824c0214e95420c9819"},{url:"features/navigation/index.html",revision:"91c84ba1420710e2adf4a8faeb718d9a"},{url:"features/options/index.html",revision:"52b43ab8f0fe064d295e556cab2be347"},{url:"features/outlets/index.html",revision:"b5af70537f1d92c2b773a67ee53fc9c3"},{url:"features/redirects/index.html",revision:"35d0f0d0c41d379a5b442b0ac6040bf0"},{url:"features/routes/index.html",revision:"e3a1c838ce837ad10f25b2b551b52b95"},{url:"features/server-side-routing/index.html",revision:"e38fb564212e6634a015d10736c0af7f"},{url:"features/starting-programmatically/index.html",revision:"9be63aeca336e699ed5898a4b53be7e0"},{url:"features/url-parameters/index.html",revision:"091b976eaf1c7b5f605ec44221d04ad9"},{url:"ficusjs/index.html",revision:"ddd192e8be2d7c2aaa4691845ac7e8e3"},{url:"getting-started/index.html",revision:"5be0c76f6dc12c0745aef77761bca8f7"},{url:"going-build-less/index.html",revision:"221403363a43b7840ba8b9dafe832868"},{url:"img/angle_up.svg",revision:"374066f276653a657f519a665abc08a4"},{url:"img/checkmark.svg",revision:"c21feaddd1021e077125a5ab772f22cf"},{url:"img/icon-192x192.png",revision:"f0253382b205261b04a4c53f5814d3f2"},{url:"img/icon-512x512.png",revision:"72b4804f9936b26f85aa633636832a35"},{url:"img/logo.svg",revision:"e5232ea1022c4c208c829002570e13b3"},{url:"index.html",revision:"c61b5c8648135560284dc2e0ec47ad90"},{url:"installation/index.html",revision:"04c5c3b671718a88d3473d5d4bf6679a"},{url:"router/index.html",revision:"0d49499bf0dc99b84337d9fcaf7139e7"},{url:"script/index.html",revision:"981d9dc68fcd1dacde854af61dbdb1ad"}],{})}));
//# sourceMappingURL=sw.js.map
