parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"l85W":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addWatermarkRightTop=exports.addWatermarkCenterBottom=exports.addWatermarkRightBottom=exports.setFormattingDate=exports.getLongImageStartPositionY=exports.isMobile=exports.checkValue=exports.inputNullCheck=exports.clearInput=exports.getToday=exports.addDownloadButton=exports.resetPosition=exports.makeDouble=exports.resizeImage=exports.handleChangeImage=exports.changeColor=exports.handleMoveText=exports.handleTargetMove=exports.handleMouseDragEvent=exports.changeFileBtn=exports.imageValueReset=exports.isEmpty=exports.downloadCountGA=exports.clickEvent=exports.MoveText=exports.TransEvent=exports.Img=exports.TYPOURL=exports.BGCOLOR=exports.PRIMARYCOLOR=void 0;var e=document.getElementById("year"),t=document.querySelectorAll("a[href^='#']"),n=document.querySelectorAll(".move");exports.PRIMARYCOLOR="#0F8EFF",exports.BGCOLOR="#19202c",exports.TYPOURL="typo.co.kr";var o=function(){function e(){this._width=0,this._height=0}return Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e},enumerable:!1,configurable:!0}),e.prototype.getLongImageStartPositionX=function(){return(this._height-this._width)/2},e.prototype.getLongImageStartPositionY=function(){return(this._width-this._height)/2},e.prototype.reset=function(){this._width=0,this._height=0},e}();exports.Img=o;var r=function(){function e(){this._startX=0,this._startY=0,this._moveX=0,this._moveY=0,this._scale=1,this._scaleMoveX=0,this._scaleMoveY=0,this._drag=!1}return Object.defineProperty(e.prototype,"startX",{get:function(){return this._startX},set:function(e){this._startX=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"startY",{get:function(){return this._startY},set:function(e){this._startY=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"moveX",{get:function(){return this._moveX},set:function(e){this._moveX=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"moveY",{get:function(){return this._moveY},set:function(e){this._moveY=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scale",{get:function(){return this._scale},set:function(e){this._scale=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scaleMoveX",{get:function(){return this._scaleMoveX},set:function(e){this._scaleMoveX=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scaleMoveY",{get:function(){return this._scaleMoveY},set:function(e){this._scaleMoveY=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"drag",{get:function(){return this._drag},set:function(e){this._drag=e},enumerable:!1,configurable:!0}),e.prototype.reset=function(){this._startX=0,this._startY=0,this._moveX=0,this._moveY=0,this._scale=1,this._scaleMoveX=0,this._scaleMoveY=0,this._drag=!1},e}();exports.TransEvent=r;var a=function(){function e(){this._isDrag=!1,this._startX=0,this._startY=0,this._newX=0,this._newY=0}return Object.defineProperty(e.prototype,"isDrag",{get:function(){return this._isDrag},set:function(e){this._isDrag=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"startX",{get:function(){return this._startX},set:function(e){this._startX=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"startY",{get:function(){return this._startY},set:function(e){this._startY=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"newX",{get:function(){return this._newX},set:function(e){this._newX=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"newY",{get:function(){return this._newY},set:function(e){this._newY=e},enumerable:!1,configurable:!0}),e.prototype.reset=function(){this._isDrag=!1,this._startX=0,this._startY=0,this._newX=0,this._newY=0},e}();function i(){gtag("js",new Date),gtag("config","G-0T4BVMKTXC")}function s(e,t){gtag("event",e,{app_name:t,event_date:(new Date).toLocaleString()})}function c(e,t){gtag("event","".concat(e,"_download"),{app_name:t,event_date:(new Date).toLocaleString()})}function l(e){if(e)return e;throw new Error("Element is null")}function u(e,t,n){t.reset(),n.reset(),t.width=500,e.getElementsByTagName("img").length>0?(e.removeChild(e.getElementsByTagName("img")[0]),e.getElementsByTagName("span")[0].innerText="X축: 0px, Y축: 0px"):e.insertAdjacentHTML("afterbegin",'<div class="grid"><i></i><i></i><i></i><i></i></div>'),e.style.backgroundColor=""}function p(e){var t=l(e),n=l(t.previousElementSibling);n.innerText="Change",n.style.position="absolute",n.style.left="0",n.style.bottom="-60px",l(t.parentElement).style.zIndex="0"}function d(e,t,n){var o=l(e),r=l(document.getElementById(n)),a=0,i=0,s=w()?"touchstart":"mousedown",c=w()?"touchmove":"mousemove",u=w()?"touchend":"mouseup",p=0,d=0,g=!1;o.addEventListener(s,function(e){t.drag=!0,t.startX=w()?e.touches[0].clientX:e.clientX,t.startY=w()?e.touches[0].clientY:e.clientY,o.style.cursor="grabbing",l(o.getElementsByClassName("grid")[0]).style.display="block"}),o.addEventListener(c,function(e){e.preventDefault(),p=w()?e.touches[0].clientX:e.clientX,d=w()?e.touches[0].clientY:e.clientY,t.drag&&(a=g?0:p-t.startX,i=d-t.startY,t.moveX+=a,t.moveY+=i,t.startX=p,t.startY=d,r.style.scale=String(t.scale),r.style.translate="".concat(t.moveX+t.scaleMoveX,"px ").concat(t.moveY+t.scaleMoveY,"px"),o.getElementsByTagName("span")[0].innerText="X축: ".concat(t.moveX,"px, Y축: ").concat(t.moveY,"px, 비율: ").concat((100*t.scale).toFixed(0),"%"),o.getElementsByTagName("span")[0].style.display="block",o.getElementsByTagName("span")[1].style.display="block")}),o.addEventListener(u,function(){t.drag=!1,o.style.cursor="grab",l(o.getElementsByClassName("grid")[0]).style.display="none"}),document.addEventListener("keydown",function(e){"Shift"!==e.key&&!0!==e.repeat||(g=!0)}),document.addEventListener("keyup",function(e){"Shift"===e.key&&(g=!1)})}function g(e){e.forEach(function(e){var t=0,n=0,o=0,r=0;function a(a){o+=a.clientX-t,r+=a.clientY-n,t=a.clientX,n=a.clientY,e.style.transform="translate(".concat(o,"px, ").concat(r,"px)"),e.style.zIndex="100"}function i(){document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",i)}e.addEventListener("mousedown",function(e){t=e.clientX,n=e.clientY,document.addEventListener("mousemove",a),document.addEventListener("mouseup",i)})})}function h(e,t){var n=!1;e.addEventListener("mousedown",function(e){t.isDrag=!0,t.startX=e.clientX,t.startY=e.clientY}),e.addEventListener("mousemove",function(o){if(o.preventDefault(),t.isDrag){var r=n?0:o.clientX-t.startX,a=o.clientY-t.startY;t.newX+=r,t.newY+=a,t.startX=o.clientX,t.startY=o.clientY,e.style.translate="".concat(t.newX,"px ").concat(t.newY,"px"),e.style.zIndex="10"}}),e.addEventListener("mouseup",function(){t.isDrag=!1}),document.addEventListener("keydown",function(e){"Shift"!==e.key&&!0!==e.repeat||(n=!0)}),document.addEventListener("keyup",function(e){"Shift"===e.key&&(n=!1)})}function m(e,t){var n=l(e),o=l(t);n.addEventListener("change",function(){o.style.color=n.value})}function f(e,t,n,o,r,a){l(e).addEventListener("change",function(e){var i=l(t),s=l(a);u(i,n,o);var c=l(e.target),g=null!=c.files&&c.files[0];if(g){var h=new FileReader;h.readAsDataURL(g),h.onload=function(){var t=new Image;t.src=h.result,i.style.backgroundColor=exports.BGCOLOR,t.onload=function(){n.height=n.width*t.height/t.width,o.startY=t.width>=t.height?0:n.getLongImageStartPositionY(),t.style.left="".concat(o.startX,"px"),t.style.top="".concat(o.startY,"px"),t.id=r,i.appendChild(t),d(i,o,r),v(i,n,o),p(e.target),s.style.marginRight="0"}}}})}function v(e,t,n){e.addEventListener("wheel",function(o){o.preventDefault();var r=o.deltaY>0?.1:-.1;(n.scale+=r,n.scale=Math.max(.1,Math.min(n.scale,3)),n.scale<=.1||n.scale>=3)||(n.scaleMoveX+=t.width*r/2,n.scaleMoveY+=t.height*r/2,n.moveX=0,n.moveY=0,l(e.getElementsByTagName("img")[0]).style.scale=String(n.scale),e.getElementsByTagName("img")[0].style.translate="".concat(n.scaleMoveX,"px ").concat(n.scaleMoveY,"px"),e.getElementsByTagName("span")[0].innerText="X축: ".concat(n.moveX,"px, Y축: ").concat(n.moveY,"px, 비율: ").concat((100*n.scale).toFixed(0),"%"),e.getElementsByTagName("span")[0].style.display="block",e.getElementsByTagName("span")[1].style.display="block")})}function x(e,t){return 0===e?t:t+2*e}function y(e,t,n){t.reset();var o=l(document.getElementById(n));o.style.scale=String(t.scale);var r=o.height>o.width?(o.height-o.width)/-2:0;o.style.translate="0px ".concat(r,"px"),o.style.left="0",o.style.top="0",t.scaleMoveX=0,t.scaleMoveY=r,l(e.previousElementSibling).innerText="X축: ".concat(t.moveX,"px, Y축: ").concat(t.moveY,"px, 비율: ").concat(100*t.scale,"%")}function b(e,t){var n=document.createElement("a");n.href=e.toDataURL("image/jpeg"),n.download="".concat(Y(),"_").concat(exports.TYPOURL,".jpg"),n.innerHTML="<p><span>File Name</span>".concat(Y(),"_").concat(exports.TYPOURL,".jpg</p>");var o=document.createElement("button");o.innerText="Download",o.className="btn btn-dark",n.appendChild(o),t.appendChild(n)}function Y(){var e=new Date,t=e.getFullYear(),n=e.getMonth()<9?"0"+(e.getMonth()+1):e.getMonth()+1,o=e.getDate()<10?"0"+e.getDate():e.getDate();return"".concat(t,"-").concat(n,"-").concat(o)}function _(e){l(e.previousElementSibling).value=""}function E(e,t){t.files||(l(t.previousElementSibling).style.backgroundColor="red",l(t.previousElementSibling).style.color="white"),e.forEach(function(e){return X(e)})}function X(e){""==e.value?(e.focus(),e.style.borderColor="red"):e.style.borderColor=exports.PRIMARYCOLOR}function w(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)}exports.MoveText=a,exports.clickEvent=s,exports.downloadCountGA=c,exports.isEmpty=l,exports.imageValueReset=u,exports.changeFileBtn=p,exports.handleMouseDragEvent=d,exports.handleTargetMove=g,exports.handleMoveText=h,exports.changeColor=m,exports.handleChangeImage=f,exports.resizeImage=v,exports.makeDouble=x,exports.resetPosition=y,exports.addDownloadButton=b,exports.getToday=Y,exports.clearInput=_,exports.inputNullCheck=E,exports.checkValue=X,exports.isMobile=w;var L=document.querySelectorAll(".item-wrap");function T(e){return(e.width-e.height)/2}function M(e){var t=e.split("-");return t[1]=t[1].replace(/^0+/,""),t[2]=t[2].replace(/^0+/,""),"".concat(t[0],".").concat(t[1],".").concat(t[2])}function O(e,t){e.restore(),e.font="24px S-CoreDream-6Bold",e.letterSpacing="0px",e.textAlign="right",e.fillStyle=t,e.filter="opacity(0.5)",e.fillText("".concat(exports.TYPOURL),980,980)}function P(e,t){e.restore(),e.font="24px S-CoreDream-6Bold",e.letterSpacing="0px",e.textAlign="center",e.fillStyle=t,e.filter="opacity(0.5)",e.fillText("".concat(exports.TYPOURL),500,980)}function B(e,t){e.restore(),e.font="24px S-CoreDream-6Bold",e.letterSpacing="0px",e.textAlign="right",e.fillStyle=t,e.filter="opacity(0.5)",e.fillText("".concat(exports.TYPOURL),980,40)}document.addEventListener("DOMContentLoaded",function(){L.forEach(function(e){e.classList.add("loaded")}),g(n),e.innerText=(new Date).getFullYear().toString(),i()}),exports.getLongImageStartPositionY=T,exports.setFormattingDate=M,t.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();var n=l(document.querySelector(e.hash)).getBoundingClientRect().top;window.scrollBy({top:n-150,left:0,behavior:"smooth"})})}),exports.addWatermarkRightBottom=O,exports.addWatermarkCenterBottom=P,exports.addWatermarkRightTop=B;
},{}],"aJG6":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,l){function a(e){try{u(o.next(e))}catch(t){l(t)}}function i(e){try{u(o.throw(e))}catch(t){l(t)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,i)}u((o=o.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,o,r,l,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l&&(l=0,i[0]&&(a=0)),a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(u){i=[6,u],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("./common"),o=new n.Img,r=new n.TransEvent,l=new n.MoveText,a=new n.MoveText,i=document.getElementById("chooseFileApp7"),u=document.getElementById("selectedImageApp7"),c=document.getElementById("submitBtnApp7"),d=document.getElementById("imageContainerApp7"),s=document.getElementById("app7TitleColor"),p=document.getElementById("app7Title"),m=document.getElementById("app7Date"),f=document.querySelectorAll("#app7 input"),h=document.querySelectorAll("#app7 .move-edit"),g=document.querySelector("#app7 .selected-image-position-reset"),v="chooseImg7";function y(){return e(this,void 0,void 0,function(){var u,c,h,g,v=this;return t(this,function(y){return(0,n.clickEvent)("app7_create_night","Night Duty"),d.innerHTML="",(0,n.isEmpty)(d.nextElementSibling).innerHTML="",(0,n.inputNullCheck)(f,i),(u=(0,n.isEmpty)(i.files)[0])&&(d.parentElement.parentElement.style.display="block"),c=new FileReader,h=document.createElement("canvas"),g=h.getContext("2d"),c.readAsDataURL(u),c.onload=function(){var i=new Image;i.src=c.result,i.onload=function(){return e(v,void 0,void 0,function(){var e,u,c,f;return t(this,function(t){return h.width=1e3,h.height=1e3,g.fillStyle=n.BGCOLOR,g.filter="contrast(110%)",g.fillRect(0,0,1e3,1e3),e=1e3*r.scale,u=e*i.height/i.width,c=2*r.moveX,f=2*r.moveY+2*o.getLongImageStartPositionY(),g.drawImage(i,c,f,e,u),g.font="76px Oswald",g.fillStyle=s.value,g.textAlign="left",g.letterSpacing="-1px",g.fillText(p.value.toUpperCase(),(0,n.makeDouble)(l.newX,146),(0,n.makeDouble)(l.newY,860)),g.font="44px Oswald",g.letterSpacing="12px",g.fillText(m.value.replaceAll("-",". "),(0,n.makeDouble)(a.newX,146),(0,n.makeDouble)(a.newY,775)),(0,n.addWatermarkRightTop)(g,"white"),d.appendChild(h),(0,n.addDownloadButton)(h,d.nextElementSibling),[2]})})}},[2]})})}(0,n.handleChangeImage)(i,u,o,r,v,c),(0,n.handleMoveText)(h[0],a),(0,n.handleMoveText)(h[1],l),(0,n.changeColor)(s,p),(0,n.changeColor)(s,m),g.addEventListener("click",function(e){return(0,n.resetPosition)(e.target,r,v)}),document.addEventListener("DOMContentLoaded",function(){m.value=(0,n.getToday)()}),(0,n.isMobile)()&&c.addEventListener("touchstart",y),!(0,n.isMobile)()&&c.addEventListener("click",y);
},{"./common":"l85W"}]},{},["aJG6"], null)