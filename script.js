!function(t){function e(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";var o=window.Slider||{};o=function(){function t(t,e){var n=this;n.defaults={counts:{desktop:{width:1024,count:3},tablet:{width:768,count:3},mobile:{width:400,count:1}},buttons:{next:{classname:"next"},prev:{classname:"prev"}}},n.slider=t,n.options=Object.assign({},n.defaults,e),n.init()}return t}(),o.prototype.init=function(){var t=this;t.buildDom(),t.buildBtn(),t.initEvent(),window.onresize=function(){t.buildDom(),t.initEvent()}},o.prototype.buildBtn=function(){var t=this;t.buttons={prevBtn:document.createElement("div"),nextBtn:document.createElement("div")},t.buttons.prevBtn.className=t.options.buttons.prev.classname,t.buttons.nextBtn.className=t.options.buttons.next.classname,t.slider.appendChild(t.buttons.prevBtn),t.slider.appendChild(t.buttons.nextBtn)},o.prototype.buildDom=function(){var t=this,e=t.slider.getElementsByClassName("slider-outer")[0],n=void 0;void 0!==e?n=t.slider.getElementsByClassName("slider-wrapper")[0]:(e=document.createElement("div"),e.className="slider-outer",t.slider.appendChild(e)),e.appendChild(t.getDomSliderElements()),n&&n.remove()},o.prototype.getDomSliderElements=function(){var t=this,e=t.slider.getElementsByClassName("slider-item"),n=t.slider.offsetWidth,o=n/t.getNeededCount(),s=document.createElement("div"),i=0;return t.elements=[],Array.from(e).forEach(function(e){var n=e.currentStyle||window.getComputedStyle(e),r=parseFloat(n.marginLeft)+parseFloat(n.marginRight),l=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),d=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),a=r+l+d,u=o-a/t.getNeededCount();e.style.width=u+"px",s.appendChild(e),i+=u,t.elements.push(e)}),s.className="slider-wrapper",s.style.width=i+"px",s},o.prototype.initEvent=function(){var t=this,e=0,n=t.slider.getElementsByClassName("slider-wrapper")[0],o=void 0,s=t.getNeededCount(),i=void 0;t.buttons.nextBtn.addEventListener("click",function(){for(o=s;o<s+t.getNeededCount()&&o<t.elements.length;o++)e-=+t.elements[o].style.width.replace("px","");i=o-t.getNeededCount(),s=o,o===t.elements.length?t.buttons.nextBtn.style.display="none":t.buttons.nextBtn.style.display="block",t.buttons.prevBtn.style.display="block",n.style.transform="translateX("+e+"px)"}),t.buttons.prevBtn.addEventListener("click",function(){for(o=i,i=o-t.getNeededCount();o>i&&o>0;--o)e+=+t.elements[o-1].style.width.replace("px","");s=o+t.getNeededCount(),t.buttons.prevBtn.style.display=i<0?"none":"block",t.buttons.nextBtn.style.display="block",n.style.transform="translateX("+e+"px)"}),t.buttons.nextBtn.style.display="block",t.buttons.prevBtn.style.display="none"},o.prototype.getNeededCount=function(){var t=this;return screen.width>t.options.counts.desktop.width?t.options.counts.desktop.count:screen.width>t.options.counts.tablet.width?t.options.counts.tablet.count:t.options.counts.mobile.count},function(){var t=document.getElementById("jsSlider");new o(t)}()}]);
//# sourceMappingURL=app.js.map