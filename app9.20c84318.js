parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"l85W":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addWatermarkRightTop=exports.addWatermarkCenterBottom=exports.addWatermarkRightBottom=exports.setFormattingDate=exports.getLongImageStartPositionY=exports.isMobile=exports.checkValue=exports.inputNullCheck=exports.getToday=exports.addDownloadButton=exports.resetPosition=exports.makeDouble=exports.resizeImage=exports.handleChangeImage=exports.changeColor=exports.handleMoveText=exports.handleTargetMove=exports.handleMouseDragEvent=exports.changeFileBtn=exports.imageValueReset=exports.isEmpty=exports.clickEventGA=exports.MoveText=exports.TransEvent=exports.Img=exports.TYPOURL=exports.BGCOLOR=exports.PRIMARYCOLOR=void 0;var e=document.getElementById("year"),t=document.querySelectorAll("a[href^='#']"),n=document.querySelectorAll(".move"),o=document.querySelectorAll(".clearBtn"),r=document.querySelectorAll(".download");exports.PRIMARYCOLOR="#0F8EFF",exports.BGCOLOR="#19202c",exports.TYPOURL="typo.co.kr";var i=function(){function e(){this._width=0,this._height=0}return Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e},enumerable:!1,configurable:!0}),e.prototype.getLongImageStartPositionX=function(){return(this._height-this._width)/2},e.prototype.getLongImageStartPositionY=function(){return(this._width-this._height)/2},e.prototype.reset=function(){this._width=0,this._height=0},e}();exports.Img=i;var a=function(){function e(){this._startX=0,this._startY=0,this._moveX=0,this._moveY=0,this._scale=1,this._scaleMoveX=0,this._scaleMoveY=0,this._drag=!1}return Object.defineProperty(e.prototype,"startX",{get:function(){return this._startX},set:function(e){this._startX=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"startY",{get:function(){return this._startY},set:function(e){this._startY=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"moveX",{get:function(){return this._moveX},set:function(e){this._moveX=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"moveY",{get:function(){return this._moveY},set:function(e){this._moveY=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scale",{get:function(){return this._scale},set:function(e){this._scale=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scaleMoveX",{get:function(){return this._scaleMoveX},set:function(e){this._scaleMoveX=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scaleMoveY",{get:function(){return this._scaleMoveY},set:function(e){this._scaleMoveY=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"drag",{get:function(){return this._drag},set:function(e){this._drag=e},enumerable:!1,configurable:!0}),e.prototype.reset=function(){this._startX=0,this._startY=0,this._moveX=0,this._moveY=0,this._scale=1,this._scaleMoveX=0,this._scaleMoveY=0,this._drag=!1},e}();exports.TransEvent=a;var s=function(){function e(){this._isDrag=!1,this._startX=0,this._startY=0,this._newX=0,this._newY=0}return Object.defineProperty(e.prototype,"isDrag",{get:function(){return this._isDrag},set:function(e){this._isDrag=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"startX",{get:function(){return this._startX},set:function(e){this._startX=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"startY",{get:function(){return this._startY},set:function(e){this._startY=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"newX",{get:function(){return this._newX},set:function(e){this._newX=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"newY",{get:function(){return this._newY},set:function(e){this._newY=e},enumerable:!1,configurable:!0}),e.prototype.reset=function(){this._isDrag=!1,this._startX=0,this._startY=0,this._newX=0,this._newY=0},e}();exports.MoveText=s;var c=function(){window.gtag("config","G-0T4BVMKTXC")};function l(e,t){window.gtag("event",e,{app_name:t,event_date:(new Date).toLocaleString()})}function u(e,t){window.gtag("event","".concat(e,"_download"),{app_name:t,event_date:(new Date).toLocaleString()})}function p(e){if(e)return e;throw new Error("Element is null")}function d(e,t,n){t.reset(),n.reset(),t.width=500,e.getElementsByTagName("img").length>0?(e.removeChild(e.getElementsByTagName("img")[0]),e.getElementsByTagName("span")[0].innerText="X축: 0px, Y축: 0px"):e.insertAdjacentHTML("afterbegin",'<div class="grid"><i></i><i></i><i></i><i></i></div>'),e.style.backgroundColor=""}function g(e){var t=p(e),n=p(t.previousElementSibling);n.innerText="Change",n.style.position="absolute",n.style.left="0",n.style.bottom="-60px",p(t.parentElement).style.zIndex="0"}function h(e,t,n){var o=p(e),r=p(document.getElementById(n)),i=0,a=0,s=T()?"touchstart":"mousedown",c=T()?"touchmove":"mousemove",l=T()?"touchend":"mouseup",u=0,d=0,g=!1;o.addEventListener(s,function(e){t.drag=!0,t.startX=T()?e.touches[0].clientX:e.clientX,t.startY=T()?e.touches[0].clientY:e.clientY,o.style.cursor="grabbing",p(o.getElementsByClassName("grid")[0]).style.display="block"}),o.addEventListener(c,function(e){e.preventDefault(),u=T()?e.touches[0].clientX:e.clientX,d=T()?e.touches[0].clientY:e.clientY,t.drag&&(i=g?0:u-t.startX,a=d-t.startY,t.moveX+=i,t.moveY+=a,t.startX=u,t.startY=d,r.style.scale=String(t.scale),r.style.translate="".concat(t.moveX+t.scaleMoveX,"px ").concat(t.moveY+t.scaleMoveY,"px"),o.getElementsByTagName("span")[0].innerText="X축: ".concat(t.moveX,"px, Y축: ").concat(t.moveY,"px, 비율: ").concat((100*t.scale).toFixed(0),"%"),o.getElementsByTagName("span")[0].style.display="block",o.getElementsByTagName("span")[1].style.display="block")}),o.addEventListener(l,function(){t.drag=!1,o.style.cursor="grab",p(o.getElementsByClassName("grid")[0]).style.display="none"}),document.addEventListener("keydown",function(e){"Shift"!==e.key&&!0!==e.repeat||(g=!0)}),document.addEventListener("keyup",function(e){"Shift"===e.key&&(g=!1)})}function f(e){e.forEach(function(e){var t=0,n=0,o=0,r=0;function i(i){o+=i.clientX-t,r+=i.clientY-n,t=i.clientX,n=i.clientY,e.style.transform="translate(".concat(o,"px, ").concat(r,"px)"),e.style.zIndex="100"}function a(){document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",a)}e.addEventListener("mousedown",function(e){t=e.clientX,n=e.clientY,document.addEventListener("mousemove",i),document.addEventListener("mouseup",a)})})}function m(e,t){var n=!1;e.addEventListener("mousedown",function(e){t.isDrag=!0,t.startX=e.clientX,t.startY=e.clientY}),e.addEventListener("mousemove",function(o){if(o.preventDefault(),t.isDrag){var r=n?0:o.clientX-t.startX,i=o.clientY-t.startY;t.newX+=r,t.newY+=i,t.startX=o.clientX,t.startY=o.clientY,e.style.translate="".concat(t.newX,"px ").concat(t.newY,"px"),e.style.zIndex="10"}}),e.addEventListener("mouseup",function(){t.isDrag=!1}),document.addEventListener("keydown",function(e){"Shift"!==e.key&&!0!==e.repeat||(n=!0)}),document.addEventListener("keyup",function(e){"Shift"===e.key&&(n=!1)})}function v(e,t){var n=p(e),o=p(t);n.addEventListener("change",function(){o.style.color=n.value})}function y(e,t,n,o,r,i){p(e).addEventListener("change",function(e){var a=p(t),s=p(i);d(a,n,o);var c=p(e.target),l=null!=c.files&&c.files[0];if(l){var u=new FileReader;u.readAsDataURL(l),u.onload=function(){var t=new Image;t.src=u.result,a.style.backgroundColor=exports.BGCOLOR,t.onload=function(){n.height=n.width*t.height/t.width,o.startY=t.width>=t.height?0:n.getLongImageStartPositionY(),t.style.left="".concat(o.startX,"px"),t.style.top="".concat(o.startY,"px"),t.id=r,a.appendChild(t),h(a,o,r),x(a,n,o),g(e.target),s.style.marginRight="0"}}}})}function x(e,t,n){e.addEventListener("wheel",function(o){o.preventDefault();var r=o.deltaY>0?.1:-.1;(n.scale+=r,n.scale=Math.max(.1,Math.min(n.scale,3)),n.scale<=.1||n.scale>=3)||(n.scaleMoveX+=t.width*r/2,n.scaleMoveY+=t.height*r/2,n.moveX=0,n.moveY=0,p(e.getElementsByTagName("img")[0]).style.scale=String(n.scale),e.getElementsByTagName("img")[0].style.translate="".concat(n.scaleMoveX,"px ").concat(n.scaleMoveY,"px"),e.getElementsByTagName("span")[0].innerText="X축: ".concat(n.moveX,"px, Y축: ").concat(n.moveY,"px, 비율: ").concat((100*n.scale).toFixed(0),"%"),e.getElementsByTagName("span")[0].style.display="block",e.getElementsByTagName("span")[1].style.display="block")})}function b(e,t){return 0===e?t:t+2*e}function Y(e,t,n){t.reset();var o=p(document.getElementById(n));o.style.scale=String(t.scale);var r=o.height>o.width?(o.height-o.width)/-2:0;o.style.translate="0px ".concat(r,"px"),o.style.left="0",o.style.top="0",t.scaleMoveX=0,t.scaleMoveY=r,p(e.previousElementSibling).innerText="X축: ".concat(t.moveX,"px, Y축: ").concat(t.moveY,"px, 비율: ").concat(100*t.scale,"%")}function _(e,t){var n=document.createElement("a");n.href=e.toDataURL("image/jpeg"),n.download="".concat(E(),"_").concat(exports.TYPOURL,".jpg"),n.innerHTML="<p><span>File Name</span>".concat(E(),"_").concat(exports.TYPOURL,".jpg</p>");var o=document.createElement("button");o.innerText="Download",o.className="btn btn-dark",n.appendChild(o),t.appendChild(n)}function E(){var e=new Date,t=e.getFullYear(),n=e.getMonth()<9?"0"+(e.getMonth()+1):e.getMonth()+1,o=e.getDate()<10?"0"+e.getDate():e.getDate();return"".concat(t,"-").concat(n,"-").concat(o)}function w(e){p(e.previousElementSibling).value=""}function X(e,t){var n;0===(null===(n=t.files)||void 0===n?void 0:n.length)&&(t.previousElementSibling.style.backgroundColor="#ff3333",t.previousElementSibling.style.color="white"),e.forEach(function(e){return L(e)})}function L(e){""==e.value?(e.focus(),e.style.borderColor="red"):e.style.borderColor=exports.PRIMARYCOLOR}function T(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)}c(),exports.clickEventGA=l,r.forEach(function(e){e.addEventListener("click",function(){u(e.dataset.app,e.dataset.name)})}),exports.isEmpty=p,exports.imageValueReset=d,exports.changeFileBtn=g,exports.handleMouseDragEvent=h,exports.handleTargetMove=f,exports.handleMoveText=m,exports.changeColor=v,exports.handleChangeImage=y,exports.resizeImage=x,exports.makeDouble=b,exports.resetPosition=Y,exports.addDownloadButton=_,exports.getToday=E,exports.inputNullCheck=X,exports.checkValue=L,exports.isMobile=T;var M=document.querySelectorAll(".item-wrap");function O(e){return(e.width-e.height)/2}function k(e){var t=e.split("-");return t[1]=t[1].replace(/^0+/,""),t[2]=t[2].replace(/^0+/,""),"".concat(t[0],".").concat(t[1],".").concat(t[2])}function B(e,t){e.restore(),e.font="24px S-CoreDream-6Bold",e.letterSpacing="0px",e.textAlign="right",e.fillStyle=t,e.filter="opacity(0.5)",e.fillText("".concat(exports.TYPOURL),980,980)}function P(e,t){e.restore(),e.font="24px S-CoreDream-6Bold",e.letterSpacing="0px",e.textAlign="center",e.fillStyle=t,e.filter="opacity(0.5)",e.fillText("".concat(exports.TYPOURL),500,980)}function S(e,t){e.restore(),e.font="24px S-CoreDream-6Bold",e.letterSpacing="0px",e.textAlign="right",e.fillStyle=t,e.filter="opacity(0.5)",e.fillText("".concat(exports.TYPOURL),980,40)}document.addEventListener("DOMContentLoaded",function(){M.forEach(function(e){e.classList.add("loaded")}),f(n),e.innerText=(new Date).getFullYear().toString()}),o.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault(),w(e)})}),exports.getLongImageStartPositionY=O,exports.setFormattingDate=k,t.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();var n=p(document.querySelector(e.hash)).getBoundingClientRect().top;window.scrollBy({top:n-150,left:0,behavior:"smooth"})})}),exports.addWatermarkRightBottom=B,exports.addWatermarkCenterBottom=P,exports.addWatermarkRightTop=S;
},{}],"U2yN":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function l(e){try{u(o.next(e))}catch(t){i(t)}}function a(e){try{u(o.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(l,a)}u((o=o.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,o,r,i,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(l=0)),l;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,o=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(r=(r=l.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){l.label=a[1];break}if(6===a[0]&&l.label<r[1]){l.label=r[1],r=a;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(a);break}r[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(u){a=[6,u],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("./common"),o=new n.Img,r=new n.TransEvent,i=new n.MoveText,l=document.getElementById("chooseFileApp9"),a=document.getElementById("selectedImageApp9"),u=document.getElementById("submitBtnApp9"),c=document.getElementById("imageContainerApp9"),s=document.getElementById("app9TitleColor"),d=document.getElementById("app9Title"),p=document.querySelectorAll("#app9 input"),f=document.querySelectorAll("#app9 .move-edit"),m=document.querySelector("#app9 .selected-image-position-reset"),h="chooseImg9";function g(){return e(this,void 0,void 0,function(){var a,u,f,m,h=this;return t(this,function(g){return(0,n.clickEventGA)("app9_create_spring","Spring"),c.innerHTML="",(0,n.isEmpty)(c.nextElementSibling).innerHTML="",(0,n.inputNullCheck)(p,l),(a=(0,n.isEmpty)(l.files)[0])&&(c.parentElement.parentElement.style.display="block"),u=new FileReader,f=document.createElement("canvas"),m=f.getContext("2d"),u.readAsDataURL(a),u.onload=function(){var l=new Image;l.src=u.result,l.onload=function(){return e(h,void 0,void 0,function(){var e,a,u,p;return t(this,function(t){return f.width=1e3,f.height=1e3,m.fillStyle=n.BGCOLOR,m.fillRect(0,0,1e3,1e3),m.filter="brightness(103%)",e=1e3*r.scale,a=e*l.height/l.width,u=2*r.moveX,p=2*r.moveY+2*o.getLongImageStartPositionY(),m.drawImage(l,u,p,e,a),m.fillStyle=s.value,m.shadowColor="rgba(255, 110, 138, 0.5)",m.shadowBlur=10,m.shadowOffsetX=0,m.shadowOffsetY=0,m.textAlign="left",m.font="110px Stalemate",m.filter="opacity(0.95)",m.fillText(d.value,(0,n.makeDouble)(i.newX,150),(0,n.makeDouble)(i.newY,215)),(0,n.addWatermarkRightBottom)(m,"white"),c.appendChild(f),(0,n.addDownloadButton)(f,c.nextElementSibling),[2]})})}},[2]})})}(0,n.handleChangeImage)(l,a,o,r,h,u),(0,n.handleMoveText)(f[0],i),(0,n.changeColor)(s,d),m.addEventListener("click",function(e){return(0,n.resetPosition)(e.target,r,h)}),(0,n.isMobile)()&&u.addEventListener("touchstart",g),!(0,n.isMobile)()&&u.addEventListener("click",g);
},{"./common":"l85W"}]},{},["U2yN"], null)