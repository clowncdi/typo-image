parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Usay":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pageView=void 0;var e=function(){window.gtag("js",new Date),window.gtag("config","G-0T4BVMKTXC")};exports.pageView=e;
},{}],"l85W":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&("get"in r?t.__esModule:!r.writable&&!r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var o={};if(null!=n)for(var r in n)"default"!==r&&Object.prototype.hasOwnProperty.call(n,r)&&e(o,n,r);return t(o,n),o};Object.defineProperty(exports,"__esModule",{value:!0}),exports.addWatermarkRightTop=exports.addWatermarkCenterBottom=exports.addWatermarkRightBottom=exports.setFormattingDate=exports.getLongImageStartPositionY=exports.isMobile=exports.checkValue=exports.inputNullCheck=exports.getToday=exports.addDownloadButton=exports.resetPosition=exports.makeDouble=exports.resizeImage=exports.handleChangeImage=exports.changeColor=exports.handleMoveText=exports.handleTargetMove=exports.handleMouseDragEvent=exports.changeFileBtn=exports.imageValueReset=exports.isEmpty=exports.clickEventGA=exports.MoveText=exports.TransEvent=exports.Img=exports.TYPOURL=exports.BGCOLOR=exports.PRIMARYCOLOR=void 0;var o=n(require("./gtag")),r=document.getElementById("year"),i=document.querySelectorAll("a[href^='#']"),a=document.querySelectorAll(".move"),s=document.querySelectorAll(".clearBtn"),c=document.querySelectorAll(".download");exports.PRIMARYCOLOR="#0F8EFF",exports.BGCOLOR="#19202c",exports.TYPOURL="typo.co.kr";var l=function(){function e(){this._width=0,this._height=0}return Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e},enumerable:!1,configurable:!0}),e.prototype.getLongImageStartPositionX=function(){return(this._height-this._width)/2},e.prototype.getLongImageStartPositionY=function(){return(this._width-this._height)/2},e.prototype.reset=function(){this._width=0,this._height=0},e}();exports.Img=l;var u=function(){function e(){this._startX=0,this._startY=0,this._moveX=0,this._moveY=0,this._scale=1,this._scaleMoveX=0,this._scaleMoveY=0,this._drag=!1}return Object.defineProperty(e.prototype,"startX",{get:function(){return this._startX},set:function(e){this._startX=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"startY",{get:function(){return this._startY},set:function(e){this._startY=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"moveX",{get:function(){return this._moveX},set:function(e){this._moveX=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"moveY",{get:function(){return this._moveY},set:function(e){this._moveY=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scale",{get:function(){return this._scale},set:function(e){this._scale=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scaleMoveX",{get:function(){return this._scaleMoveX},set:function(e){this._scaleMoveX=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scaleMoveY",{get:function(){return this._scaleMoveY},set:function(e){this._scaleMoveY=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"drag",{get:function(){return this._drag},set:function(e){this._drag=e},enumerable:!1,configurable:!0}),e.prototype.reset=function(){this._startX=0,this._startY=0,this._moveX=0,this._moveY=0,this._scale=1,this._scaleMoveX=0,this._scaleMoveY=0,this._drag=!1},e}();exports.TransEvent=u;var p=function(){function e(){this._isDrag=!1,this._startX=0,this._startY=0,this._newX=0,this._newY=0}return Object.defineProperty(e.prototype,"isDrag",{get:function(){return this._isDrag},set:function(e){this._isDrag=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"startX",{get:function(){return this._startX},set:function(e){this._startX=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"startY",{get:function(){return this._startY},set:function(e){this._startY=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"newX",{get:function(){return this._newX},set:function(e){this._newX=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"newY",{get:function(){return this._newY},set:function(e){this._newY=e},enumerable:!1,configurable:!0}),e.prototype.reset=function(){this._isDrag=!1,this._startX=0,this._startY=0,this._newX=0,this._newY=0},e}();function d(e,t){gtag("event",e,{app_name:t,event_date:(new Date).toLocaleString()})}function g(e,t){gtag("event","".concat(e,"_download"),{app_name:t,event_date:(new Date).toLocaleString()})}function f(e){if(e)return e;throw new Error("Element is null")}function h(e,t,n){t.reset(),n.reset(),t.width=500,e.getElementsByTagName("img").length>0?(e.removeChild(e.getElementsByTagName("img")[0]),e.getElementsByTagName("span")[0].innerText="X축: 0px, Y축: 0px"):e.insertAdjacentHTML("afterbegin",'<div class="grid"><i></i><i></i><i></i><i></i></div>'),e.style.backgroundColor=""}function m(e){var t=f(e),n=f(t.previousElementSibling);n.innerText="Change",n.style.position="absolute",n.style.left="0",n.style.bottom="-60px",f(t.parentElement).style.zIndex="0"}function v(e,t,n){var o=f(e),r=f(document.getElementById(n)),i=0,a=0,s=P()?"touchstart":"mousedown",c=P()?"touchmove":"mousemove",l=P()?"touchend":"mouseup",u=0,p=0,d=!1;o.addEventListener(s,function(e){t.drag=!0,t.startX=P()?e.touches[0].clientX:e.clientX,t.startY=P()?e.touches[0].clientY:e.clientY,o.style.cursor="grabbing",f(o.getElementsByClassName("grid")[0]).style.display="block"}),o.addEventListener(c,function(e){e.preventDefault(),u=P()?e.touches[0].clientX:e.clientX,p=P()?e.touches[0].clientY:e.clientY,t.drag&&(i=d?0:u-t.startX,a=p-t.startY,t.moveX+=i,t.moveY+=a,t.startX=u,t.startY=p,r.style.scale=String(t.scale),r.style.translate="".concat(t.moveX+t.scaleMoveX,"px ").concat(t.moveY+t.scaleMoveY,"px"),o.getElementsByTagName("span")[0].innerText="X축: ".concat(t.moveX,"px, Y축: ").concat(t.moveY,"px, 비율: ").concat((100*t.scale).toFixed(0),"%"),o.getElementsByTagName("span")[0].style.display="block",o.getElementsByTagName("span")[1].style.display="block")}),o.addEventListener(l,function(){t.drag=!1,o.style.cursor="grab",f(o.getElementsByClassName("grid")[0]).style.display="none"}),document.addEventListener("keydown",function(e){"Shift"!==e.key&&!0!==e.repeat||(d=!0)}),document.addEventListener("keyup",function(e){"Shift"===e.key&&(d=!1)})}function y(e){e.forEach(function(e){var t=0,n=0,o=0,r=0;function i(i){o+=i.clientX-t,r+=i.clientY-n,t=i.clientX,n=i.clientY,e.style.transform="translate(".concat(o,"px, ").concat(r,"px)"),e.style.zIndex="100"}function a(){document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",a)}e.addEventListener("mousedown",function(e){t=e.clientX,n=e.clientY,document.addEventListener("mousemove",i),document.addEventListener("mouseup",a)})})}function x(e,t){var n=!1;e.addEventListener("mousedown",function(e){t.isDrag=!0,t.startX=e.clientX,t.startY=e.clientY}),e.addEventListener("mousemove",function(o){if(o.preventDefault(),t.isDrag){var r=n?0:o.clientX-t.startX,i=o.clientY-t.startY;t.newX+=r,t.newY+=i,t.startX=o.clientX,t.startY=o.clientY,e.style.translate="".concat(t.newX,"px ").concat(t.newY,"px"),e.style.zIndex="10"}}),e.addEventListener("mouseup",function(){t.isDrag=!1}),document.addEventListener("keydown",function(e){"Shift"!==e.key&&!0!==e.repeat||(n=!0)}),document.addEventListener("keyup",function(e){"Shift"===e.key&&(n=!1)})}function b(e,t){var n=f(e),o=f(t);n.addEventListener("change",function(){o.style.color=n.value})}function _(e,t,n,o,r,i){f(e).addEventListener("change",function(e){var a=f(t),s=f(i);h(a,n,o);var c=f(e.target),l=null!=c.files&&c.files[0];if(l){var u=new FileReader;u.readAsDataURL(l),u.onload=function(){var t=new Image;t.src=u.result,a.style.backgroundColor=exports.BGCOLOR,t.onload=function(){n.height=n.width*t.height/t.width,o.startY=t.width>=t.height?0:n.getLongImageStartPositionY(),t.style.left="".concat(o.startX,"px"),t.style.top="".concat(o.startY,"px"),t.id=r,a.appendChild(t),v(a,o,r),Y(a,n,o),m(e.target),s.style.marginRight="0"}}}})}function Y(e,t,n){e.addEventListener("wheel",function(o){o.preventDefault();var r=o.deltaY>0?.1:-.1;(n.scale+=r,n.scale=Math.max(.1,Math.min(n.scale,3)),n.scale<=.1||n.scale>=3)||(n.scaleMoveX+=t.width*r/2,n.scaleMoveY+=t.height*r/2,n.moveX=0,n.moveY=0,f(e.getElementsByTagName("img")[0]).style.scale=String(n.scale),e.getElementsByTagName("img")[0].style.translate="".concat(n.scaleMoveX,"px ").concat(n.scaleMoveY,"px"),e.getElementsByTagName("span")[0].innerText="X축: ".concat(n.moveX,"px, Y축: ").concat(n.moveY,"px, 비율: ").concat((100*n.scale).toFixed(0),"%"),e.getElementsByTagName("span")[0].style.display="block",e.getElementsByTagName("span")[1].style.display="block")})}function E(e,t){return 0===e?t:t+2*e}function w(e,t,n){t.reset();var o=f(document.getElementById(n));o.style.scale=String(t.scale);var r=o.height>o.width?(o.height-o.width)/-2:0;o.style.translate="0px ".concat(r,"px"),o.style.left="0",o.style.top="0",t.scaleMoveX=0,t.scaleMoveY=r,f(e.previousElementSibling).innerText="X축: ".concat(t.moveX,"px, Y축: ").concat(t.moveY,"px, 비율: ").concat(100*t.scale,"%")}function X(e,t){var n=document.createElement("a");n.href=e.toDataURL("image/jpeg"),n.download="".concat(L(),"_").concat(exports.TYPOURL,".jpg"),n.innerHTML="<p><span>File Name</span>".concat(L(),"_").concat(exports.TYPOURL,".jpg</p>");var o=document.createElement("button");o.innerText="Download",o.className="btn btn-dark",n.appendChild(o),t.appendChild(n)}function L(){var e=new Date,t=e.getFullYear(),n=e.getMonth()<9?"0"+(e.getMonth()+1):e.getMonth()+1,o=e.getDate()<10?"0"+e.getDate():e.getDate();return"".concat(t,"-").concat(n,"-").concat(o)}function O(e){f(e.previousElementSibling).value=""}function M(e,t){var n;0===(null===(n=t.files)||void 0===n?void 0:n.length)&&(t.previousElementSibling.style.backgroundColor="#ff3333",t.previousElementSibling.style.color="white"),e.forEach(function(e){return T(e)})}function T(e){""==e.value?(e.focus(),e.style.borderColor="red"):e.style.borderColor=exports.PRIMARYCOLOR}function P(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)}exports.MoveText=p,o.pageView(),exports.clickEventGA=d,c.forEach(function(e){e.addEventListener("click",function(){g(e.dataset.app,e.dataset.name)})}),exports.isEmpty=f,exports.imageValueReset=h,exports.changeFileBtn=m,exports.handleMouseDragEvent=v,exports.handleTargetMove=y,exports.handleMoveText=x,exports.changeColor=b,exports.handleChangeImage=_,exports.resizeImage=Y,exports.makeDouble=E,exports.resetPosition=w,exports.addDownloadButton=X,exports.getToday=L,exports.inputNullCheck=M,exports.checkValue=T,exports.isMobile=P;var D=document.querySelectorAll(".item-wrap");function S(e){return(e.width-e.height)/2}function k(e){var t=e.split("-");return t[1]=t[1].replace(/^0+/,""),t[2]=t[2].replace(/^0+/,""),"".concat(t[0],".").concat(t[1],".").concat(t[2])}function B(e,t){e.restore(),e.font="24px S-CoreDream-6Bold",e.letterSpacing="0px",e.textAlign="right",e.fillStyle=t,e.filter="opacity(0.5)",e.fillText("".concat(exports.TYPOURL),980,980)}function C(e,t){e.restore(),e.font="24px S-CoreDream-6Bold",e.letterSpacing="0px",e.textAlign="center",e.fillStyle=t,e.filter="opacity(0.5)",e.fillText("".concat(exports.TYPOURL),500,980)}function R(e,t){e.restore(),e.font="24px S-CoreDream-6Bold",e.letterSpacing="0px",e.textAlign="right",e.fillStyle=t,e.filter="opacity(0.5)",e.fillText("".concat(exports.TYPOURL),980,40)}document.addEventListener("DOMContentLoaded",function(){D.forEach(function(e){e.classList.add("loaded")}),y(a),r.innerText=(new Date).getFullYear().toString()}),s.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault(),O(e)})}),exports.getLongImageStartPositionY=S,exports.setFormattingDate=k,i.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();var n=f(document.querySelector(e.hash)).getBoundingClientRect().top;window.scrollBy({top:n-150,left:0,behavior:"smooth"})})}),exports.addWatermarkRightBottom=B,exports.addWatermarkCenterBottom=C,exports.addWatermarkRightTop=R;
},{"./gtag":"Usay"}],"aJG6":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,l){function a(e){try{u(o.next(e))}catch(t){l(t)}}function i(e){try{u(o.throw(e))}catch(t){l(t)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}u((o=o.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,o,r,l,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l&&(l=0,i[0]&&(a=0)),a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(u){i=[6,u],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("./common"),o=new n.Img,r=new n.TransEvent,l=new n.MoveText,a=new n.MoveText,i=document.getElementById("chooseFileApp7"),u=document.getElementById("selectedImageApp7"),c=document.getElementById("submitBtnApp7"),d=document.getElementById("imageContainerApp7"),s=document.getElementById("app7TitleColor"),p=document.getElementById("app7Title"),m=document.getElementById("app7Date"),f=document.querySelectorAll("#app7 input"),h=document.querySelectorAll("#app7 .move-edit"),g=document.querySelector("#app7 .selected-image-position-reset"),v="chooseImg7";function y(){return e(this,void 0,void 0,function(){var u,c,h,g,v=this;return t(this,function(y){return(0,n.clickEventGA)("app7_create_night","Night Duty"),d.innerHTML="",(0,n.isEmpty)(d.nextElementSibling).innerHTML="",(0,n.inputNullCheck)(f,i),(u=(0,n.isEmpty)(i.files)[0])&&(d.parentElement.parentElement.style.display="block"),c=new FileReader,h=document.createElement("canvas"),g=h.getContext("2d"),c.readAsDataURL(u),c.onload=function(){var i=new Image;i.src=c.result,i.onload=function(){return e(v,void 0,void 0,function(){var e,u,c,f;return t(this,function(t){return h.width=1e3,h.height=1e3,g.fillStyle=n.BGCOLOR,g.filter="contrast(110%)",g.fillRect(0,0,1e3,1e3),e=1e3*r.scale,u=e*i.height/i.width,c=2*r.moveX,f=2*r.moveY+2*o.getLongImageStartPositionY(),g.drawImage(i,c,f,e,u),g.font="76px Oswald",g.fillStyle=s.value,g.textAlign="left",g.letterSpacing="-1px",g.fillText(p.value.toUpperCase(),(0,n.makeDouble)(l.newX,146),(0,n.makeDouble)(l.newY,860)),g.font="44px Oswald",g.letterSpacing="12px",g.fillText(m.value.replaceAll("-",". "),(0,n.makeDouble)(a.newX,146),(0,n.makeDouble)(a.newY,775)),(0,n.addWatermarkRightTop)(g,"white"),d.appendChild(h),(0,n.addDownloadButton)(h,d.nextElementSibling),[2]})})}},[2]})})}(0,n.handleChangeImage)(i,u,o,r,v,c),(0,n.handleMoveText)(h[0],a),(0,n.handleMoveText)(h[1],l),(0,n.changeColor)(s,p),(0,n.changeColor)(s,m),g.addEventListener("click",function(e){return(0,n.resetPosition)(e.target,r,v)}),document.addEventListener("DOMContentLoaded",function(){m.value=(0,n.getToday)()}),(0,n.isMobile)()&&c.addEventListener("touchstart",y),!(0,n.isMobile)()&&c.addEventListener("click",y);
},{"./common":"l85W"}]},{},["aJG6"], null)