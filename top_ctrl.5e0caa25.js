parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Yynl":[function(require,module,exports) {
var e,t=document.querySelector(".sideTab"),i=document.querySelector(".btnTopArea"),n=document.querySelector(".footer_mid_left"),c=document.querySelector(".btn_sideTab"),r=c.querySelector("i"),o=document.querySelector(".recent_view"),l=document.querySelectorAll(".recent_item"),d=0,s=0,u=0;s=innerWidth;var a=document.querySelector("body"),h=a.clientHeight;function m(e,t){i.style.visibility=e,i.style.opacity=t}function f(e){t.style.top=e}function v(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}d=h-(u=.8*h),window.addEventListener("resize",function(){s=innerWidth,h=a.clientHeight,d=h-(u=.9*h)}),window.addEventListener("scroll",function(){window.scrollY>=d?m("visible",1):m("hidden",0),v(n)?f("9%"):f("50%")}),r.addEventListener("click",function(){r.classList.contains("fa-chevron-circle-right")?(r.classList.add("fa-chevron-circle-left"),r.classList.remove("fa-chevron-circle-right"),o.style.right="-86px"):(r.classList.add("fa-chevron-circle-right"),r.classList.remove("fa-chevron-circle-left"),o.style.right="0")});
},{}]},{},["Yynl"], null)
//# sourceMappingURL=top_ctrl.5e0caa25.js.map