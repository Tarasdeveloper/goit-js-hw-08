!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",i=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),g=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return m.Date.now()};function b(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function g(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function j(){var e=y();if(b(e))return x(e);f=setTimeout(j,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function x(e){return f=void 0,m&&i?g(e):(i=o=void 0,u)}function T(){var e=y(),n=b(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(j,t),s?g(e):u}(l);if(d)return f=setTimeout(j,t),g(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=O(t)||0,S(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(O(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?u:x(y())},T}function S(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&g.call(e)==o}(e))return i;if(S(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=S(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):u.test(e)?i:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return S(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};const j="feedback-form-state",x={},T={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),email:document.querySelector('.feedback-form input[type="email"]')};T.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(x),e.currentTarget.reset(),localStorage.removeItem(j)})),T.textarea.addEventListener("input",e(t)((function(e){x.message=e.target.value,localStorage.setItem(j,JSON.stringify(x))}),500)),T.email.addEventListener("input",e(t)((function(e){x.email=e.target.value,localStorage.setItem(j,JSON.stringify(x))}),500)),T.form.addEventListener("input",(e=>{x[e.target.name]=e.target.value,localStorage.setItem(j,JSON.stringify(x))})),function(){const e=JSON.parse(localStorage.getItem(j));e&&e.message&&(T.textarea.value=e.message);e&&e.email&&(T.email.value=e.email);console.log(e)}()}();
//# sourceMappingURL=03-feedback.5ad80cbc.js.map
