(this["webpackJsonptest-react"]=this["webpackJsonptest-react"]||[]).push([[10],{74:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=i(t);if(e){var r=i(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return a(this,n)}}n.r(e);var l=n(0),s=n(12),p=n(1),y=document.querySelector("#modal-root"),b=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(a,t);var e,n,i,u=f(a);function a(){var t;o(this,a);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(t=u.call.apply(u,[this].concat(n))).keyDowmModal=function(e){"Escape"===e.code&&t.props.onClose()},t.clickFoOverlay=function(e){e.currentTarget===e.target&&t.props.onClose()},t}return e=a,(n=[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.keyDowmModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.keyDowmModal)}},{key:"render",value:function(){return Object(s.createPortal)(Object(p.jsx)("div",{className:"Overlay",onClick:this.clickFoOverlay,children:Object(p.jsx)("div",{className:"Modal",children:this.props.children})}),y)}}])&&r(e.prototype,n),i&&r(e,i),a}(l.Component);e.default=b}}]);
//# sourceMappingURL=10.6722a1eb.chunk.js.map