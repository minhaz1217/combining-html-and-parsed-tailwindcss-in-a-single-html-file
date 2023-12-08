/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/output.css":
/*!************************!*\
  !*** ./src/output.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://combining-html-and-parsed-tailwindcss-in-a-single-html-file/./src/output.css?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((module) => {

eval("module.exports = function(obj) {\nobj || (obj = {});\nvar __t, __p = '', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\nwith (obj) {\n__p += '<!DOCTYPE html>\\r\\n<html lang=\"en\">\\r\\n  <head>\\r\\n    <meta charset=\"UTF-8\" />\\r\\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\\r\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\\r\\n    <link href=\"output.css\" rel=\"stylesheet\" />\\r\\n    <title>Combining HTML and Parsed Tailwindcss in a single file</title>\\r\\n  </head>\\r\\n  <body class=\"bg-gray-800\">\\r\\n    ';\n var translation=htmlWebpackPlugin.options.translations; ;\n__p += '\\r\\n    <div class=\"text-center mt-12 bg-red-100 p-24\">\\r\\n      <h1 class=\"text-4xl text-green-500 font-bold\">\\r\\n        Change any tailwindcss in the html file and watch it recompile\\r\\n      </h1>\\r\\n      <p class=\"text-xl text-black mt-4\">\\r\\n        The src/output.css should have the only used css classes from tailwind\\r\\n      </p>\\r\\n      <p>' +\n((__t = ( translation.name )) == null ? '' : __t) +\n'</p>\\r\\n      <p>' +\n((__t = ( translation.description )) == null ? '' : __t) +\n'</p>\\r\\n      <p>Language file being used - ' +\n((__t = ( translation.language_file )) == null ? '' : __t) +\n'.json</p>\\r\\n    </div>\\r\\n  </body>\\r\\n</html>\\r\\n';\n\n}\nreturn __p\n};\n\n\n//# sourceURL=webpack://combining-html-and-parsed-tailwindcss-in-a-single-html-file/./src/index.html?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _output_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./output.css */ \"./src/output.css\");\n\r\n\r\n// var compiled = require(\"./index.html\");\r\n// return compiled({ name: \"world\" });\n\n//# sourceURL=webpack://combining-html-and-parsed-tailwindcss-in-a-single-html-file/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;