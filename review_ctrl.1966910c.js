parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"lKcR":[function(require,module,exports) {
var e=document.querySelector(".review_list"),t=document.querySelectorAll(".review_detail"),r=document.querySelector(".review_write_box"),n=document.querySelector(".btn_writeReview"),a=document.querySelector(".btn_reviewOk"),l=document.querySelector(".btn_reviewCancel"),c=document.querySelector("#review_name_id"),i=document.querySelector("#review_text_id"),o=document.querySelector(".review_counter"),d=document.querySelectorAll(".stars"),s=1;function u(e){var t="";if(e.length>=6){for(var r=e.slice(0,6),n=e.slice(0,2),a=0;a<r.length;a++)a>=2&&(n+="*");t=n}else{for(var l=e.slice(0,2),c=0;c<e.length;c++)c>=2&&(l+="*");t=l}return t}function v(e,t){t>5&&(t=5),0==t&&(t=1),console.log("rating_num:",t);for(var r=1;r<6;r++){var n=document.createElement("i");r<=t?n.setAttribute("class","fas fa-star"):n.setAttribute("class","far fa-star"),e.appendChild(n)}}o.innerHTML=t.length,n.addEventListener("click",function(){r.style.display="block"}),d.forEach(function(e,t){e.addEventListener("click",function(){s=t+1,console.log(s);for(var e=0;e<d.length;e++)d[e].classList.add("far"),d[e].classList.remove("fas");for(var r=0;r<t+1;r++)d[r].classList.remove("far"),d[r].classList.add("fas")})}),a.addEventListener("click",function(){var t=c.value,n=i.value,a=u(t);console.log("rating:",s);var l=new Date,m=l.getFullYear()+"-"+(l.getMonth()+1)+"-"+l.getDate();console.log(a);var f=document.createElement("li");f.setAttribute("class","review_detail");var p=document.createElement("p");p.setAttribute("class","review_txt");var h=document.createTextNode(n);p.appendChild(h);var g=document.createElement("p");g.setAttribute("class","reivew_rating"),v(g,s);var w=document.createElement("p");w.setAttribute("class","review_date");var _=document.createTextNode(m);w.appendChild(_);var b=document.createElement("p");b.setAttribute("class","review_id");var y=document.createTextNode(a);b.appendChild(y);var E=document.createElement("p");E.setAttribute("class","btnReviewDelete"),E.innerHTML='<i class="fas fa-backspace"></i>',E.addEventListener("click",function(){var t=E.parentNode,r=t.getAttribute("id");console.log(t,r),e.removeChild(document.getElementById(r))}),f.appendChild(p),f.appendChild(g),f.appendChild(w),f.appendChild(b),f.appendChild(E),e.appendChild(f);var L=e.children.length;o.innerHTML=L;var A="newrdID"+L;f.setAttribute("id",A),r.style.display="none",c.value="",i.value="",d.forEach(function(){for(var e=0;e<d.length;e++)d[e].classList.add("far"),d[e].classList.remove("fas")})}),l.addEventListener("click",function(){r.style.display="none"});
},{}]},{},["lKcR"], null)
//# sourceMappingURL=review_ctrl.1966910c.js.map