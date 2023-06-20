parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Fx0A":[function(require,module,exports) {
function t(t,r,n){t=t||{},this.handleQuery=n,this.options=t,this.locals=this.options.locals||{},this.globals=this.options.globals||{},this.rootContext=e(t.data,t.rootContext,t.context,t.source),this.parent=t.parent,this.override=t.override,this.filters=t.filters||{},this.params=r||t.params||[],this.context=e(t.currentItem,t.context,t.source),this.currentItem=e(this.context,t.rootContext,t.data),this.currentKey=null,this.currentReferences=[],this.currentParents=[]}function e(t){for(var e=0;e<arguments.length;e++)if(null!=arguments[e])return arguments[e]}function r(t){var e={};if(t)for(var r in t)r in t&&(e[r]=t[r]);return e}module.exports=t,t.prototype={setCurrent:function(t,e){(this.currentItem||this.currentKey||this.currentParents.length>0)&&this.currentParents.push({key:this.currentKey,value:this.currentItem}),this.currentItem=e,this.currentKey=t},resetCurrent:function(){this.currentItem=null,this.currentKey=null,this.currentParents=[]},force:function(t){var e=this.currentParents[this.currentParents.length-1];return!this.currentItem&&e&&null!=this.currentKey&&(this.currentItem=t||{},e.value[this.currentKey]=this.currentItem),!!this.currentItem},getLocal:function(t){if(~t.indexOf("/")){for(var e=null,r=t.split("/"),n=0;n<r.length;n++){var s=r[n];0==n?e=this.locals[s]:e&&e[s]&&(e=e[s])}return e}return this.locals[t]},getGlobal:function(t){if(~t.indexOf("/")){for(var e=null,r=t.split("/"),n=0;n<r.length;n++){var s=r[n];0==n?e=this.globals[s]:e&&e[s]&&(e=e[s])}return e}return this.globals[t]},getFilter:function(t){if(~t.indexOf("/")){for(var e=null,r=t.split("/"),n=0;n<r.length;n++){var s=r[n];0==n?e=this.filters[s]:e&&e[s]&&(e=e[s])}return e}return this.filters[t]},addReferences:function(t){t&&t.forEach(this.addReference,this)},addReference:function(t){t instanceof Object&&!~this.currentReferences.indexOf(t)&&this.currentReferences.push(t)},getValues:function(t,e){return t.map(this.getValue,this)},getValue:function(t){return this.getValueFrom(t,null)},getValueFrom:function(t,e){if(null!=t._param)return this.params[t._param];if(t._sub){var n=r(this.options);n.force=null,n.currentItem=e;var s=this.handleQuery(t._sub,n,this.params);return this.addReferences(s.references),s.value}return t},deepQuery:function(t,e,n,s){Object.keys(t);for(var i in t)if(i in t){(n=r(this.options)).currentItem=t[i];var u=this.handleQuery(e,n,this.params);if(u.value)return u}return null}};
},{}],"O7w1":[function(require,module,exports) {
function e(e,l,n){var h=n&&n.max||1/0,i=n&&n.includeDelimiters||!1,s=0,t=0,c=[],r=[];e.replace(/([\[\(\{])|([\]\)\}])/g,function(e,l,n,h){l?(0===s&&r.push([t,h]),s+=1):n&&0===(s-=1)&&(t=h+e.length)}),0===s&&t<e.length&&r.push([t,e.length]),t=0;for(var u=0;u<r.length&&h>0;u++)for(var g=r[u][0],p=l.exec(e.slice(g,r[u][1]));p&&h>1;g+=p.index+p[0].length,t=g,p=l.exec(e.slice(g,r[u][1])))c.push(e.slice(t,p.index+g)),i&&c.push(p[0]),h-=1;return t<e.length&&c.push(e.slice(t)),c}module.exports=e;
},{}],"N0kM":[function(require,module,exports) {
var e=require("./depth-split");function r(r){return","===r?[","]:e(r,/,/).map(function(e){return l(e.trim())})}function t(r){if("*"===r)return{values:!0};if("**"===r)return{values:!0,deep:!0};var t=!1;"*"===r.charAt(0)&&(t=!0,r=r.slice(1));var i=e(r,/&|\|/,{includeDelimiters:!0});if(i.length>1){for(var u=[n(i[0].trim())],o=1;o<i.length;o+=2){var a=n(i[o+1].trim());a&&(a.booleanOp=i[o],u.push(a))}return{multiple:t,boolean:!0,select:u}}return(u=n(r.trim()))?(t&&(u.multiple=!0),u):{get:l(r.trim())}}function n(r){var t=e(r,/(!)?(=|~|\:|<=|>=|<|>)/,{max:2,includeDelimiters:!0});if(3===t.length){var n="!"===t[1].charAt(0),i=l(t[0].trim()),u={negate:n,op:n?t[1].slice(1):t[1]};if(":"===u.op)u.select=[i,{_sub:module.exports(":"+t[2].trim())}];else if("~"===u.op){var o=l(t[2].trim());if("string"==typeof o){var a=t[2].trim().match(/^\/(.*)\/([a-z]?)$/);u.select=a?[i,new RegExp(a[1],a[2])]:[i,o]}else u.select=[i,o]}else u.select=[i,l(t[2].trim())];return u}}function i(e){return"{"===e.charAt(0)&&"}"===e.charAt(e.length-1)}function l(e){if(i(e)){var r=e.slice(1,-1);return{_sub:module.exports(r)}}return u(e)}function u(e){if("?"===e.charAt(0)){var r=parseInt(e.slice(1));return isNaN(r)?e:{_param:r}}return e}function o(e){var r=0;return e.replace(/\?/g,function(e){return e+r++})}function a(e){return e[e.length-1]}module.exports=function(e,n){if(!e)return[];var i,l=[],u=e.charAt(0),a=0,c=0,s=0,f=0,p=0,m="get",h=null;n&&(e=o(e));var v={".":{mode:"get"},":":{mode:"filter"},"|":{handle:"or"},"[":{open:"select"},"]":{close:"select"},"{":{open:"meta"},"}":{close:"meta"},"(":{open:"args"},")":{close:"args"}};function g(e){h?h.push(e):l.push(e)}var d={get:function(e){var r="string"==typeof e?e.trim():null;r&&g({get:r})},select:function(e){if(e)g(t(e));else{var r={deep:[]};l.push(r),h=r.deep}},filter:function(e){e&&g({filter:e.trim()})},or:function(){h=null,l.push({or:!0}),s=x+1},args:function(e){var t=r(e);l[l.length-1].args=t}};function A(){var r=e.slice(a,c);d[m]&&d[m](r),m="get",a=c+1}for(var x=0;x<e.length;x++){i,i=u,u=e.charAt(x+1),0===(f=x-s)&&":"!==i&&"."!==i&&l.push({root:!0}),0===f&&"."===i&&"."===u&&l.push({parent:!0});var b=v[i];b&&(0===p&&(b.mode||b.open)&&(A(),m=b.mode||b.open),0===p&&b.handle&&(A(),d[b.handle]()),b.open?p+=1:b.close&&(p-=1),0===p&&b.close&&A()),c=x+1}return A(),l};
},{"./depth-split":"O7w1"}],"FfqM":[function(require,module,exports) {
var e=require("./lib/state"),r=require("./lib/tokenize"),t={};function n(r,t,l){for(var o=new e(t,l,n),a=0;a<r.length&&!u(r[a],o);a++);if(u(null,o),o.currentItem instanceof Object)o.addReference(o.currentItem);else{var s=c(o.currentParents);s&&o.addReference(s)}return{value:o.currentItem,key:o.currentKey,references:o.currentReferences,parents:o.currentParents}}function u(e,r){if(null==e)!r.currentItem&&r.options.force&&r.force(r.options.force);else if(e.values)if(r.currentItem){var t=Object.keys(r.currentItem),n=[];t.forEach(function(t){e.deep&&Array.isArray(r.currentItem[t])?r.currentItem[t].forEach(function(e){n.push(e)}):n.push(r.currentItem[t])}),r.setCurrent(t,n)}else r.setCurrent(t,[]);else if(e.get){var u=r.getValue(e.get);if(a(r,u))r.setCurrent(u,r.override[u]);else if(r.currentItem||r.options.force&&r.force({}))if(s(r.currentItem,u)||e.multiple){n=r.currentItem.map(function(e){return e[u]}).filter(o);n=Array.prototype.concat.apply([],n),r.setCurrent(u,n)}else r.setCurrent(u,r.currentItem[u]);else r.setCurrent(u,null)}else if(e.select)if(Array.isArray(r.currentItem)||r.options.force&&r.force([])){var c=(e.boolean?e.select:[e]).map(function(e){if(":"===e.op){var t=r.getValue(e.select[0]);return{func:function(n){return t&&(n=n[t]),r.getValueFrom(e.select[1],n)},negate:e.negate,booleanOp:e.booleanOp}}var n=r.getValues(e.select);if(!r.options.allowRegexp&&"~"===e.op&&n[1]instanceof RegExp)throw new Error("options.allowRegexp is not enabled.");return{key:n[0],value:n[1],negate:e.negate,booleanOp:e.booleanOp,op:e.op}});if(e.multiple){t=[];var i=[];r.currentItem.forEach(function(e,r){l(e,c)&&(t.push(r),i.push(e))}),r.setCurrent(t,i)}else r.currentItem.some(function(e,t){if(l(e,c))return r.setCurrent(t,e),!0})||r.setCurrent(null,null)}else r.setCurrent(null,null);else if(e.root)r.resetCurrent(),e.args&&e.args.length?r.setCurrent(null,r.getValue(e.args[0])):r.setCurrent(null,r.rootContext);else if(e.parent)r.resetCurrent(),r.setCurrent(null,r.options.parent);else if(e.or){if(r.currentItem)return!0;r.resetCurrent(),r.setCurrent(null,r.context)}else if(e.filter){var f=r.getLocal(e.filter)||r.getGlobal(e.filter);if("function"==typeof f){n=r.getValues(e.args||[]);var p=f.apply(r.options,[r.currentItem].concat(n));r.setCurrent(null,p)}else{var v=r.getFilter(e.filter);if("function"==typeof v){n=r.getValues(e.args||[]),p=v.call(r.options,r.currentItem,{args:n,state:r,data:r.rootContext});r.setCurrent(null,p)}}}else if(e.deep)if(r.currentItem){if(0===e.deep.length)return;if(p=r.deepQuery(r.currentItem,e.deep,r.options)){r.setCurrent(p.key,p.value);for(var g=0;g<p.parents.length;g++)r.currentParents.push(p.parents[g])}else r.setCurrent(null,null)}else r.currentItem=null}function l(e,r){for(var t=!1,n=0;n<r.length;n++){var u=r[n],l=!1;u.func?l=u.func(e):"~"===u.op?l=u.value instanceof RegExp?e[u.key]&&!!e[u.key].match(u.value):e[u.key]&&!!~e[u.key].indexOf(u.value):"="===u.op?l=!0===e[u.key]&&"true"===u.value||!1===e[u.key]&&"false"===u.value||e[u.key]==u.value:">"===u.op?l=e[u.key]>u.value:"<"===u.op?l=e[u.key]<u.value:">="===u.op?l=e[u.key]>=u.value:"<="===u.op&&(l=e[u.key]<=u.value),u.negate&&(l=!l),t="&"===u.booleanOp?t&&l:"|"===u.booleanOp&&t||l}return t}function o(e){return void 0!==e}function a(e,r){return e.override&&e.currentItem===e.rootContext&&void 0!==e.override[r]}function s(e,r){return e instanceof Array&&parseInt(r)!=r}function c(e){for(var r=0;r<e.length;r++)if(!(e[r+1]&&e[r+1].value instanceof Object))return e[r].value}module.exports=function(e,u){var l=u&&u.params||null;return Array.isArray(e)&&(l=e.slice(1),e=e[0]),t[e]||(t[e]=r(e,!0)),n(t[e],u,l)},module.exports.lastParent=function(e){var r=e.parents[e.parents.length-1];return r?r.value:null};
},{"./lib/state":"Fx0A","./lib/tokenize":"N0kM"}],"l1Mo":[function(require,module,exports) {
function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(){"use strict";t=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},c="function"==typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(N){l=function(e,t,r){return e[t]=r}}function h(e,t,r,n){var o=t&&t.prototype instanceof p?t:p,c=Object.create(o.prototype),a=new C(n||[]);return i(c,"_invoke",{value:k(e,r,a)}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(N){return{type:"throw",arg:N}}}r.wrap=h;var f={};function p(){}function v(){}function m(){}var g={};l(g,a,function(){return this});var y=Object.getPrototypeOf,b=y&&y(y(S([])));b&&b!==n&&o.call(b,a)&&(g=b);var w=m.prototype=p.prototype=Object.create(g);function _(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(t,r){var n;i(this,"_invoke",{value:function(i,c){function a(){return new r(function(n,a){!function n(i,c,a,u){var s=d(t[i],t,c);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==e(h)&&o.call(h,"__await")?r.resolve(h.__await).then(function(e){n("next",e,a,u)},function(e){n("throw",e,a,u)}):r.resolve(h).then(function(e){l.value=e,a(l)},function(e){return n("throw",e,a,u)})}u(s.arg)}(i,c,n,a)})}return n=n?n.then(a,a):a()}})}function k(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=x(c,r);if(a){if(a===f)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=d(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=d(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:T}}function T(){return{value:void 0,done:!0}}return v.prototype=m,i(w,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,s,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},r.awrap=function(e){return{__await:e}},_(E.prototype),l(E.prototype,u,function(){return this}),r.AsyncIterator=E,r.async=function(e,t,n,o,i){void 0===i&&(i=Promise);var c=new E(h(e,t,n,o),i);return r.isGeneratorFunction(t)?c:c.next().then(function(e){return e.done?e.value:c.next()})},_(w),l(w,s,"Generator"),l(w,a,function(){return this}),l(w,"toString",function(){return"[object Generator]"}),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=S,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=e,c.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),A(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},r}function r(e,t,r,n,o,i,c){try{var a=e[i](c),u=a.value}catch(s){return void r(s)}a.done?t(u):Promise.resolve(u).then(n,o)}function n(e){return function(){var t=this,n=arguments;return new Promise(function(o,i){var c=e.apply(t,n);function a(e){r(c,o,i,a,u,"next",e)}function u(e){r(c,o,i,a,u,"throw",e)}a(void 0)})}}function o(e){return u(e)||a(e)||c(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function u(e){if(Array.isArray(e))return s(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l,h=require("json-query"),d=document.querySelector(".items_list"),f=document.querySelector(".pagination"),p=1,v=1,m=12,g=0,y=0,b=[],w=new Intl.NumberFormat("ko-KR",{style:"currency",currency:"KRW"}),_=new XMLHttpRequest;_.open("GET","./db.json"),_.send(),_.onreadystatechange=function(){if(4===_.readyState&&200===_.status){console.log("READY");var e=JSON.parse(_.responseText);l=e}};var E=document.querySelector(".subpage_left_filter"),k=document.getElementById("chk_price_1"),x=document.getElementById("chk_price_2"),L=document.getElementById("chk_price_3"),A=document.getElementById("chk_price_4"),C=document.getElementById("chk_price_5"),S=document.querySelectorAll(".checkbox_price"),T=document.querySelectorAll(".checkbox_color"),N="",j=[],O=0,I=[],q=0,G=[],P=0,B=[],F=0,R=!1,Y=!1,D=!1;function K(e,t,r){return e>t&&e<=r}function M(){if(j=[],!0===Y&&!0!==R)j=[].concat(G);else if(!0!==Y&&!0===R)j=[].concat(I);else if(!0===Y&&!0===R){j=I.concat(G);var e=(r=j).filter(function(e,t){return r.indexOf(e)!==t});j=[].concat(e)}else{j=I.concat(G);var t=o(new Set(j));j=[].concat(t)}var r;O=j.length,console.log(j),Z(j)}function W(e){console.log("additem ID: ",e);var t=h("shoppingList_Top[id="+e+"]",{data:l}).value;console.log("query result:",t);var r=document.createElement("div");r.setAttribute("class","item");var n=document.createElement("div");n.setAttribute("class","item_img");var o=document.createElement("a");o.setAttribute("class","item_url");var i="./item_detail.html?";i+="id=",i+=t.id,o.setAttribute("href",i),n.appendChild(o);var c=document.createElement("img");c.setAttribute("src",t.src[0]),n.appendChild(c);var a=document.createElement("img");a.setAttribute("class","img_hover"),a.setAttribute("src",t.src[1]),n.appendChild(a);var u=document.createElement("div");u.setAttribute("class","cart"),n.appendChild(u);var s=document.createElement("p");if(s.setAttribute("class","desc_top"),t.isBest){var f=document.createElement("span"),p=document.createTextNode("BEST");f.setAttribute("class","best"),f.appendChild(p),s.appendChild(f)}if(t.isNew){var v=document.createElement("span"),m=document.createTextNode("NEW");v.setAttribute("class","new"),v.appendChild(m),s.appendChild(v)}var g=document.createElement("div");g.setAttribute("class","desc");var y=document.createElement("p");y.setAttribute("class","desc_main");var b=document.createTextNode(t.name);y.appendChild(b);var _=document.createElement("p");_.setAttribute("class","desc_sub");var E=document.createTextNode(t.subname);_.appendChild(E);var k=document.createElement("p"),x=t.price,L=document.createTextNode(w.format(x));k.setAttribute("class","desc_price"),k.appendChild(L),g.appendChild(y),g.appendChild(_),g.appendChild(k),r.appendChild(n),r.appendChild(s),r.appendChild(g),r.setAttribute("data-date",t.date),r.setAttribute("data-buycount",t.buycount),r.setAttribute("data-price",t.price),r.setAttribute("data-id",t.id),d.appendChild(r),o.addEventListener("click",function(){setCookie("id",t.id)})}function H(){return J.apply(this,arguments)}function J(){return(J=n(t().mark(function e(){return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(;d.hasChildNodes();)d.removeChild(d.firstChild);for(;f.hasChildNodes();)f.removeChild(f.firstChild);return e.abrupt("return",!0);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function U(e,t,r){return X.apply(this,arguments)}function X(){return(X=n(t().mark(function e(r,n,o){var i,c;return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!0===r)if(console.log("Getvalue:",n,"/ length:",o),o<12)for(i=0;i<o;i++)console.log(n[i]),W(n[i]);else for(c=0;c<12;c++)console.log(n[c]),W(n[c]);return e.abrupt("return",!0);case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function $(e,t){return z.apply(this,arguments)}function z(){return(z=n(t().mark(function e(r,n){var o,i;return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!0===r)for(o=0;o<n;o++)b[p-1]=v,v>11?n-(m*=++g)>0&&(p+=1,v=1,console.log(p,v),(i=document.createElement("div")).setAttribute("class","page_btn"),i.innerText=p,f.appendChild(i)):(console.log(p,v),v+=1);return e.abrupt("return",!0);case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Q(e,t){return V.apply(this,arguments)}function V(){return(V=n(t().mark(function e(r,n){var o,i,c,a;return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((o=document.createElement("div")).setAttribute("class","page_btn"),o.innerText=p,f.appendChild(o),!0!==r){e.next=15;break}console.log("PageAry: ",b),(i=document.querySelectorAll(".page_btn"))[0].classList.add("on"),c=t().mark(function e(r){return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i[r].addEventListener("click",function(){console.log("this is a "+r+"page");var e=12;for(y=n,y-=e*=r,console.log("num:  "+e+"tempnum:  "+y);d.hasChildNodes();)d.removeChild(d.firstChild);for(var t=b[r],o=0;o<t;o++){var c=e+o;console.log("count is  ",c),W(c)}i.forEach(function(e){e.classList.remove("on")}),i[r].classList.add("on")});case 1:case"end":return e.stop()}},e)}),a=0;case 10:if(!(a<i.length)){e.next=15;break}return e.delegateYield(c(a),"t0",12);case 12:a++,e.next=10;break;case 15:case 16:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Z(e){return ee.apply(this,arguments)}function ee(){return(ee=n(t().mark(function e(r){var n,o,i,c,a;return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length,e.next=3,H();case 3:return o=e.sent,console.log(o),e.next=7,U(o,r,n);case 7:return i=e.sent,console.log(i),e.next=11,$(i,n);case 11:return c=e.sent,console.log(c),e.next=15,Q(c,n);case 15:a=e.sent,console.log(a);case 17:case"end":return e.stop()}},e)}))).apply(this,arguments)}console.log(S,T),T.forEach(function(e){e.addEventListener("change",function(){if("chk_color_all"===e.getAttribute("id")){for(var t=0;t<T.length;t++)T[t].checked=!1,console.log("other checkbox",T[t],"is",T[t].checked);var r=h("shoppingList_Top[*]",{data:l}).value;console.log(r),I=[],r.forEach(function(e){I.push(e.id)}),q=I.length,console.log(I,"/",q),R=!1}else if(1==e.checked){console.log(e);for(var n=0;n<T.length;n++)T[n]!=e&&(T[n].checked=!1,console.log("other checkbox",T[n],"is",T[n].checked));console.log("checkbox",e,"is",e.checked);var o=e.getAttribute("id").slice(10);console.log(o);var i=h("shoppingList_Top[*]",{data:l}).value;console.log(i),I=[],i.forEach(function(e){e.color.includes(o)&&I.push(e.id)}),q=I.length,console.log(I,"/",q),R=!0}M()})}),S.forEach(function(e){e.addEventListener("change",function(){if("chk_price_6"===e.getAttribute("id")){for(var t=0;t<S.length;t++)S[t].checked=!1,console.log("other checkbox",S[t],"is",S[t].checked);var r=h("shoppingList_Top[*]",{data:l}).value;console.log(r),G=[],r.forEach(function(e){G.push(e.id)}),P=G.length,console.log(G,"/",P),Y=!1}else if(1==e.checked){console.log(e);for(var n=0;n<S.length;n++)S[n]!=e&&(S[n].checked=!1,console.log("other checkbox",S[n],"is",S[n].checked));console.log("checkbox",e,"is",e.checked);var o=e.getAttribute("id");console.log(o);var i=h("shoppingList_Top[*]",{data:l}).value;console.log(i),G=[],i.forEach(function(e){var t=e.price;switch(o){case"chk_price_1":K(t,0,5e4)&&G.push(e.id);break;case"chk_price_2":K(t,5e4,15e4)&&G.push(e.id);break;case"chk_price_3":K(t,15e4,25e4)&&G.push(e.id);break;case"chk_price_4":K(t,25e4,5e5)&&G.push(e.id);break;case"chk_price_5":K(t,5e5,99999999)&&G.push(e.id)}}),P=G.length,console.log(G,"/",P),Y=!0}M()})});
},{"json-query":"FfqM"}]},{},["l1Mo"], null)
//# sourceMappingURL=subpage_filter_ctrl.9588a73c.js.map