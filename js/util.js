// build time:Wed Mar 18 2020 17:33:10 GMT+0800 (GMT+08:00)
var Util=function(n){var t=false;var e=1e6;function r(n){return{}.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase()}function i(){return{bindType:t.end,delegateType:t.end,handle:function e(t){if(n(t.target).is(this)){return t.handleObj.handler.apply(this,arguments)}return undefined}}}function o(){if(typeof window!=="undefined"&&window.QUnit){return false}return{end:"transitionend"}}function a(t){var e=this;var r=false;n(this).one(f.TRANSITION_END,function(){r=true});setTimeout(function(){if(!r){f.triggerTransitionEnd(e)}},t);return this}function u(){t=o();n.fn.emulateTransitionEnd=a;if(f.supportsTransitionEnd()){n.event.special[f.TRANSITION_END]=i()}}var f={TRANSITION_END:"bsTransitionEnd",getUID:function d(n){do{n+=~~(Math.random()*e)}while(document.getElementById(n));return n},getSelectorFromElement:function s(t){var e=t.getAttribute("data-target");if(!e||e==="#"){e=t.getAttribute("href")||""}try{var r=n(document).find(e);return r.length>0?e:null}catch(i){return null}},reflow:function l(n){return n.offsetHeight},triggerTransitionEnd:function c(e){n(e).trigger(t.end)},supportsTransitionEnd:function p(){return Boolean(t)},isElement:function g(n){return(n[0]||n).nodeType},typeCheckConfig:function h(n,t,e){for(var i in e){if(Object.prototype.hasOwnProperty.call(e,i)){var o=e[i];var a=t[i];var u=a&&f.isElement(a)?"element":r(a);if(!new RegExp(o).test(u)){throw new Error(n.toUpperCase()+": "+('Option "'+i+'" provided type "'+u+'" ')+('but expected type "'+o+'".'))}}}}};u();return f}($);
//rebuild by neat 