!function(){function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,u=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw u}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.5ea4f22b.js"],(function(t){"use strict";var n,r,o,i,u,a,l,f;return{setters:[function(e){n=e.Y,r=e.o,o=e.W,i=e.r,u=e.w,a=e.$,l=e.a0,f=e.u}],execute:function(){var c;t({b:function(e){if(a())return l(e),!0;return!1},t:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];n()?r(e):t?e():o(e)},u:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return s(d(t,n),e)},w:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n,o=r.eventFilter,i=E(r,["eventFilter"]),u=p(o),a=u.eventFilter,l=u.pause,f=u.resume,c=u.isActive,v=w(e,t,I(T({},i),{eventFilter:a}));return{stop:v,pause:l,resume:f,isActive:c}}});var v=t("i","undefined"!=typeof window);t("a",(function(e){return"string"==typeof e})),t("n",(function(){}));function s(e,t){return function(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];e((function(){return t.apply(n,o)}),{fn:t,thisArg:this,args:o})}}v&&(null==(c=null==window?void 0:window.navigator)?void 0:c.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);var y=function(e){return e()};function d(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=function(o){var i=f(e),u=f(r.maxWait);if(t&&clearTimeout(t),i<=0||void 0!==u&&u<=0)return n&&(clearTimeout(n),n=null),o();u&&!n&&(n=setTimeout((function(){t&&clearTimeout(t),n=null,o()}),u)),t=setTimeout((function(){n&&clearTimeout(n),n=null,o()}),i)};return o}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=i(!0);function n(){t.value=!1}function r(){t.value=!0}var o=function(){t.value&&e.apply(void 0,arguments)};return{isActive:t,pause:n,resume:r,eventFilter:o}}var b=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=function(t,n){var r={};for(var o in t)g.call(t,o)&&n.indexOf(o)<0&&(r[o]=t[o]);if(null!=t&&b){var i,u=e(b(t));try{for(u.s();!(i=u.n()).done;){o=i.value;n.indexOf(o)<0&&m.call(t,o)&&(r[o]=t[o])}}catch(a){u.e(a)}finally{u.f()}}return r};function w(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n,o=r.eventFilter,i=void 0===o?y:o,a=h(r,["eventFilter"]);return u(e,s(i,t),a)}var O=Object.defineProperty,j=Object.defineProperties,A=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,F=function(e,t,n){return t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},T=function(t,n){for(var r in n||(n={}))P.call(n,r)&&F(t,r,n[r]);if(x){var o,i=e(x(n));try{for(i.s();!(o=i.n()).done;){r=o.value;S.call(n,r)&&F(t,r,n[r])}}catch(u){i.e(u)}finally{i.f()}}return t},I=function(e,t){return j(e,A(t))},E=function(t,n){var r={};for(var o in t)P.call(t,o)&&n.indexOf(o)<0&&(r[o]=t[o]);if(null!=t&&x){var i,u=e(x(t));try{for(u.s();!(i=u.n()).done;){o=i.value;n.indexOf(o)<0&&S.call(t,o)&&(r[o]=t[o])}}catch(a){u.e(a)}finally{u.f()}}return r}}}}))}();
