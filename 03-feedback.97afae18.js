function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,u=c||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,g=Math.min,m=function(){return u.Date.now()};function p(e,t,n){var o,a,r,i,f,c,l=0,u=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=a;return o=a=void 0,l=t,i=e.apply(r,n)}function h(e){return l=e,f=setTimeout(O,t),u?y(e):i}function j(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=r}function O(){var e=m();if(j(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-c);return s?g(n,r-(e-l)):n}(e))}function S(e){return f=void 0,p&&o?y(e):(o=a=void 0,i)}function T(){var e=m(),n=j(e);if(o=arguments,a=this,c=e,n){if(void 0===f)return h(c);if(s)return f=setTimeout(O,t),y(c)}return void 0===f&&(f=setTimeout(O,t)),i}return t=b(t)||0,v(n)&&(u=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=a=f=void 0},T.flush=function(){return void 0===f?i:S(m())},T}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||i.test(e)?f(e.slice(2),n?2:8):a.test(e)?NaN:+e}t=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),p(e,t,{leading:o,maxWait:t,trailing:a})};const y=document.querySelector(".feedback-form");!function(){try{let e=localStorage.getItem("feedback-form-state");e&&(e=JSON.parse(e),Object.entries(e).forEach((([e,t])=>{y.elements[e].value=t})))}catch({message:e,name:t}){console.log(t),console.log(e)}}(),y.addEventListener("input",e(t)((function(e){localData=localStorage.getItem("feedback-form-state");try{localData=localData?JSON.parse(localData):{},localData[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(localData))}catch({message:e,name:t}){console.log(t),console.log(e)}}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),console.log(localData),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.97afae18.js.map