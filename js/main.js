!function(){var e={850:function(){function e(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function d(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function a(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function s(e){t=!1}function r(){document.addEventListener("mousemove",u),document.addEventListener("mousedown",u),document.addEventListener("mouseup",u),document.addEventListener("pointermove",u),document.addEventListener("pointerdown",u),document.addEventListener("pointerup",u),document.addEventListener("touchmove",u),document.addEventListener("touchstart",u),document.addEventListener("touchend",u)}function u(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",u),document.removeEventListener("mousedown",u),document.removeEventListener("mouseup",u),document.removeEventListener("pointermove",u),document.removeEventListener("pointerdown",u),document.removeEventListener("pointerup",u),document.removeEventListener("touchmove",u),document.removeEventListener("touchstart",u),document.removeEventListener("touchend",u))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(d(e.activeElement)&&a(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",s,!0),document.addEventListener("pointerdown",s,!0),document.addEventListener("touchstart",s,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),r())}),!0),r(),e.addEventListener("focus",(function(e){var n,o,s;d(e.target)&&(t||(o=(n=e.target).type,"INPUT"===(s=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"===s&&!n.readOnly||n.isContentEditable))&&a(e.target)}),!0),e.addEventListener("blur",(function(e){var t;d(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var d=t[o]={exports:{}};return e[o](d,d.exports,n),d.exports}!function(){"use strict";n(850);var e,t={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body};function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}console.log("check vars file"),console.log((e=navigator.userAgent||navigator.vendor||window.opera,/android/i.test(e)?(t.htmlEl.classList.add("page--android"),"Android"):/iPad|iPhone|iPod/.test(e)&&!window.MSStream?(t.htmlEl.classList.add("page--ios"),"iOS"):"unknown"));var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"log",value:function(e){console.log(e)}}],null&&o(t.prototype,null),n&&o(t,n),e}();function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"main",value:function(){i.log("SWC-LOADER WORKS")}}],null&&d(t.prototype,null),n&&d(t,n),e})().main()}()}();