(()=>{"use strict";var r,n,e,t,o,a,i,c,s,A,p,u,d,l,f={144:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(537),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]),i.push([r.id,'*{box-sizing:border-box}body{background-color:#2fa8cc;font-family:"Roboto",sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;overflow:hidden;margin:0;padding:20px}.container{background-color:#f4f4f4;border-radius:10px;box-shadow:0 10px 20px rgba(0,0,0,.1),0 6px 6px rgba(0,0,0,.1);padding:50px 20px;text-align:center;max-width:100%;width:800px}h3{margin:0;opacity:.5;letter-spacing:2px}img{width:100px;margin-bottom:20px}.joke{font-size:30px;letter-spacing:1px;line-height:40px;margin:50px auto;max-width:600px}.btn{background-color:#2fa8cc;color:#f4f4f4;border:0;border-radius:10px;box-shadow:0 5px 15px rgba(0,0,0,.1),0 6px 6px rgba(0,0,0,.1);padding:14px 40px;font-size:16px;cursor:pointer}.btn:active{transform:scale(0.98)}.btn:focus{outline:0}',"",{version:3,sources:["webpack://./src/styles/main.scss"],names:[],mappings:"AAMA,EACE,qBAAA,CAGF,KACE,wBATc,CAUd,+BAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA,CACA,YAAA,CACA,eAAA,CACA,QAAA,CACA,YAAA,CAGF,WACE,wBArBgB,CAsBhB,kBAAA,CACA,8DAtBW,CAuBX,iBAAA,CACA,iBAAA,CACA,cAAA,CACA,WAAA,CAGF,GACE,QAAA,CACA,UAAA,CACA,kBAAA,CAGF,IACE,WAAA,CACA,kBAAA,CAGF,MACE,cAAA,CACA,kBAAA,CACA,gBAAA,CACA,gBAAA,CACA,eAAA,CAGF,KACE,wBAnDc,CAoDd,aAnDgB,CAoDhB,QAAA,CACA,kBAAA,CACA,6DAAA,CACA,iBAAA,CACA,cAAA,CACA,cAAA,CAEA,YACE,qBAAA,CAGF,WACE,SAAA",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\r\n\r\n$primary-color: #2fa8cc;\r\n$secondary-color: #f4f4f4;\r\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: $primary-color;\r\n  font-family: 'Roboto', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  padding: 20px;\r\n}\r\n\r\n.container {\r\n  background-color: $secondary-color;\r\n  border-radius: 10px;\r\n  box-shadow: $box-shadow;\r\n  padding: 50px 20px;\r\n  text-align: center;\r\n  max-width: 100%;\r\n  width: 800px;\r\n}\r\n\r\nh3 {\r\n  margin: 0;\r\n  opacity: 0.5;\r\n  letter-spacing: 2px;\r\n}\r\n\r\nimg {\r\n  width: 100px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.joke {\r\n  font-size: 30px;\r\n  letter-spacing: 1px;\r\n  line-height: 40px;\r\n  margin: 50px auto;\r\n  max-width: 600px;\r\n}\r\n\r\n.btn {\r\n  background-color: $primary-color;\r\n  color: $secondary-color;\r\n  border: 0;\r\n  border-radius: 10px;\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\r\n  padding: 14px 40px;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n\r\n  &:active {\r\n    transform: scale(0.98);\r\n  }\r\n\r\n  &:focus {\r\n    outline: 0;\r\n  }\r\n}"],sourceRoot:""}]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var A=0;A<r.length;A++){var p=[].concat(r[A]);t&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],A=t.base?s[0]+t.base:s[0],p=a[A]||0,u="".concat(A," ").concat(p);a[A]=p+1;var d=e(u),l={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(l);else{var f=o(l,t);t.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),A=0;A<a.length;A++){var p=e(a[A]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},g={};function x(r){var n=g[r];if(void 0!==n)return n.exports;var e=g[r]={id:r,exports:{}};return f[r](e,e.exports,x),e.exports}x.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return x.d(n,{a:n}),n},x.d=(r,n)=>{for(var e in n)x.o(n,e)&&!x.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},x.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),x.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;x.g.importScripts&&(r=x.g.location+"");var n=x.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var e=n.getElementsByTagName("script");if(e.length)for(var t=e.length-1;t>-1&&!r;)r=e[t--].src}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),x.p=r})(),x.nc=void 0,r=x(379),n=x.n(r),e=x(795),t=x.n(e),o=x(569),a=x.n(o),i=x(565),c=x.n(i),s=x(216),A=x.n(s),p=x(589),u=x.n(p),d=x(144),(l={}).styleTagTransform=u(),l.setAttributes=c(),l.insert=a().bind(null,"head"),l.domAPI=t(),l.insertStyleElement=A(),n()(d.Z,l),d.Z&&d.Z.locals&&d.Z.locals,x.p,console.log("I don't trust stairs. They're always up to something")})();
//# sourceMappingURL=bundle.89c0729e4c79d709e278.js.map