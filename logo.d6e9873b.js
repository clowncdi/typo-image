parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ozGS":[function(require,module,exports) {
"use strict";var e=["Alfa Slab One","Arima","Arizonia","Black Han Sans","Black Ops One","Blaka Hollow","Bodoni Moda","Bungee","Bungee Shade","Carter One","Cinzel Decorative","Creepster","DM Serif Display","DM Serif Text","EB Garamond","Fredericka the Great","Graduate","Gruppo","Hammersmith One","Italianno","Kelly Slab","Kodchasan","Libre Baskerville","Limelight","Lobster Two","Monoton","Montserrat","Montserrat Alternates","Montserrat Subrayada","Nixie One","Oleo Script","Oranienbaum","Oswald","Pacifico","Padyakke Expanded One","Pirata One","Poiret One","Press Start 2P","Quicksand","Rampart One","Roboto","Rubik Gemstones","Rubik Vinyl","Sen","Stalemate","Tenor Sans","Tilt Prism","Waterfall","Yesteryear"],t=document.getElementById("logoPlus"),n=document.getElementById("logoTypo"),i=document.getElementById("plus-font"),l=document.getElementById("typo-font"),r=document.querySelector(".gnb-logo"),a="plusTYPO",o=1e4,s=0,c=0,d=function(){var t=Math.floor(Math.random()*e.length);return e[t]},u=function(){v(),t.style.fontFamily=d(),n.style.fontFamily=d(),setTimeout(h,o-2e3)},v=function(){var e=setInterval(function(){if(t.innerText.length<4&&(t.innerHTML+=y(a[s]),s++),4===s){clearInterval(e);var r=setInterval(function(){n.innerText.length<4&&(n.innerHTML+=y(a[s]),s++),8===s&&(s=0,p(),i.innerHTML=t.style.fontFamily.replace(/\"/gi,""),l.innerHTML=n.style.fontFamily.replace(/\"/gi,""),setTimeout(I,o-2e3),clearInterval(r))},80)}},50)},y=function(e){return void 0!==e?e:""},h=function(){var e=setInterval(function(){if(n.innerHTML=n.innerHTML.slice(0,-1),0===n.innerHTML.length){clearInterval(e);var i=setInterval(function(){t.innerHTML=t.innerHTML.slice(0,-1),0===t.innerHTML.length&&clearInterval(i)},80)}},50)},g=document.createElement("span");g.innerHTML="|",g.style.fontFamily="Pretendard Variable",g.style.fontWeight="100",g.style.opacity="0",g.style.color="black",g.style.fontSize="3rem",g.style.marginTop="0.3rem",r.appendChild(g);var f=500,m=function(){g.style.opacity="0"===g.style.opacity?"1":"0"};setInterval(m,f);var p=function e(){c+=.1,i.style.opacity=String(c),l.style.opacity=String(c),c<1&&setTimeout(e,50)},I=function e(){c-=.1,i.style.opacity=String(c),l.style.opacity=String(c),c>0&&setTimeout(e,50)},b=function(){function e(){this.isVisible=this.scrollVisible(),this.intervalId=this.initIntervalId()}return e.prototype.scrollVisible=function(){return r.getBoundingClientRect().top>-100},e.prototype.initIntervalId=function(){return this.scrollVisible()?setInterval(u,o):0},e.prototype.getIntervalId=function(){return this.intervalId},e.prototype.setLogoState=function(e){this.isVisible="visible"===e},e.prototype.handleLogoEvent=function(){this.isVisible&&this.intervalId>0||(this.isVisible&&0===this.intervalId?this.intervalId=setInterval(u,o):this.isVisible||(clearInterval(this.intervalId),this.intervalId=0))},e.prototype.handleLogoChange=function(e){this.setLogoState(e),this.handleLogoEvent()},e}(),L=new b;document.addEventListener("visibilitychange",function(){if("visible"===document.visibilityState){var e=(L=void 0===L?new b:L).scrollVisible()?"visible":"hidden";L.handleLogoChange(e)}else 0!==L.getIntervalId()&&clearInterval(L.getIntervalId()),L.intervalId=0}),u(),L.handleLogoChange("visible"),document.addEventListener("scroll",function(){var e=L.scrollVisible()?"visible":"hidden";L.handleLogoChange(e)});
},{}]},{},["ozGS"], null)