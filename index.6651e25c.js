!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(0);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,c=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))})),console.log("HELLO 🚀");var l,i,s,a=document.querySelector(".info--js"),u=document.querySelector(".statistics--js"),d=document.querySelector(".settings--js"),f=document.querySelector(".glass__counter--js"),g=document.querySelector(".button--js"),y=document.querySelector(".button-remove--js"),v=document.querySelector(".x--js"),m=document.querySelector(".x--statistics"),S=document.querySelector(".x--settings"),p=document.querySelector(".info"),h=document.querySelector(".statistics"),b=document.querySelector(".settings"),L=document.querySelector(".alert--js"),j=(document.querySelector(".appalert"),document.querySelector(".content--js")),w=document.querySelector(".goal__button--js"),_=document.querySelector(".dailygoal--js"),O=document.querySelector(".statusPanel--stan"),q=document.querySelector(".stan--js"),I=(new Date).toISOString().slice(0,10),M=I.slice(0,2),k=I.slice(3,5),T=document.querySelectorAll(".percent-counter--js"),x=0,E=document.getElementById("dailygoal"),H=(E.options[E.selectedIndex].value,localStorage.getItem("select",dailygoal),E.selectedIndex,localStorage.getItem("select"));function A(){localStorage.getItem("select",H)}w.addEventListener("click",(function(){var e=_.value;console.log(e),localStorage.setItem("select",e),A(),console.log(H)}));var N=.25*H;console.log(N),O.innerHTML=N,a.addEventListener("click",(function(){p.classList.toggle("info--show")})),v.addEventListener("click",(function(){p.classList.toggle("info--show")})),u.addEventListener("click",(function(){h.classList.toggle("statistics--show")})),m.addEventListener("click",(function(){h.classList.toggle("statistics--show")})),d.addEventListener("click",(function(){b.classList.toggle("settings--show")})),S.addEventListener("click",(function(){b.classList.toggle("settings--show")}));var J,P=function(){i=x/H*100;for(var e=0;e<T.length;e++)T[e].innerHTML="".concat(Math.round(i),"%");i>=100?L.classList.add("appalert__alert--show"):i<100&&L.classList.remove("appalert__alert--show")},W=function(){if(x>=0){for(var e=0;e<f.length;e++)f[e].innerHTML=x;localStorage.setItem(I,JSON.stringify({day:M,month:k,value:x})),P(),Q()}else x=0},z=localStorage.getItem(I);if(z)if((J=JSON.parse(z)).day===M){for(var C=0;C<f.length;C++)f[C].innerHTML=J.value;P()}else localStorage.setItem(I,JSON.stringify({day:M,month:k,value:0}));else for(var D=0;D<f.length;D++)f[D].innerHTML=x,localStorage.setItem(I,JSON.stringify({day:M,month:k,value:x})),f[D].innerHTML=x;g.addEventListener("click",(function(){A(),x++,W(),f.innerHTML=x,console.log("select"),console.log(H),console.log(i)})),y.addEventListener("click",(function(){A(),x--,W(),f.innerHTML=x,console.log("select"),console.log(H),console.log(i)}));var B,F,U=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=o(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,c=function(){};return{s:c,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,l=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw l}}}}(Object.entries(localStorage).sort((function(e,t){return t[0].localeCompare(e[0])})));try{for(U.s();!(B=U.n()).done;){var $=r(B.value,2),G=$[0],K=$[1];"INFO"!==K&&"select"!==G&&(F=void 0,F=JSON.parse(K).value,l='<div class="statistics__element"><h2 class="statistics__title">'.concat(G.slice(5,10),'</h2><p class="statistics__text"> Szklanki: <span class="cups-count--js">').concat(F,'</span></p><p class="statistics__text">Dzienny cel: <span class="percentage--js">').concat((i=F/H*100,Math.round(i)),"%</span></p></div>"),j.insertAdjacentHTML("beforeend",l))}}catch(e){U.e(e)}finally{U.f()}z?(JSON.parse(z),x=J.value,P()):localStorage.setItem(I,JSON.stringify({day:M,month:k,value:0})),f.innerHTML=x;var Q=function(){s=.25*x,q.innerHTML=s};s=.25*x,q.innerHTML=s}]);