!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["factory-breakpoint-manager"]=n():e["factory-breakpoint-manager"]=n()}("undefined"!=typeof self?self:this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){var r,i,o;!function(u,a){i=[n,t(1),t(2)],r=a,void 0!==(o="function"==typeof r?r.apply(n,i):r)&&(e.exports=o)}(0,function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.defaultConfig=void 0;var i=r(n),o=r(t),u=e.defaultConfig=[{name:"xs",minWidth:0},{name:"sm",minWidth:768},{name:"md",minWidth:992},{name:"lg",minWidth:1200}];e.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n={};e.sort(function(e,n){return e.minWidth-n.minWidth});var t={width:0,breakpoint:e[0].name};Object.assign(n,(0,i.default)());var r=function(){var r=Object.assign({},t),i=window.innerWidth,o=e.filter(function(e){return i>=e.minWidth});t.width=i,t.breakpoint=o[o.length-1],t.breakpoint.name!==r.breakpoint.name&&n.trigger("change",r,t)},a=(0,o.default)(function(){r(),n.trigger("resize",t)}),f=function(){window.removeEventListener("resize",a)};return n.getState=function(){return Object.assign({},t)},n.matches=function(e){if(!e)throw new Error("match() expected one parameter.");if("string"==typeof e)return e===t.breakpoint.name;if(Array.isArray(e))return e.includes(t.breakpoint.name);throw new Error("Sorry man, it seems your given value is neither of type string nor is it an array.")},n.destroy=function(){f(),n.trigger("destroy")},function(){window.addEventListener("resize",a)}(),r(),n}})},function(e,n,t){!function(n,t){e.exports=t()}("undefined"!=typeof self&&self,function(){return function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n.default=function(){var e=-1,n={},t=function(t,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e+=1,n[t]||(n[t]={queue:[]}),n[t].queue.push({uid:e,listener:r,once:i}),e},i=function(e){return"number"==typeof e&&Object.entries(n).forEach(function(t){for(var i=r(t,2),o=i[0],u=i[1],a=0;a<u.queue.length;a+=1)if(u.queue[a].uid===e)return u.queue.splice(a,1),u.queue.length||delete n[o],e;return!0}),"string"==typeof e?(delete n[e],e):-1};return{on:t,off:i,trigger:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n[e]&&n[e].queue.length&&n[e].queue.slice(0).forEach(function(e){e.listener.apply(e,r),e.once&&i(e.uid)})}}}}])})},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){var n=void 0,t=function(t,r){return function(){n=null,e.apply(t,r)}},r=function(){if(null===n||void 0===n){for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];n=requestAnimationFrame(t(this,r))}};return r.cancel=function(){return cancelAnimationFrame(n)},r};n.default=r}])});