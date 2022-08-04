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

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ (() => {

eval("var hitCount = document.getElementById('hitCount');\nvar monty = document.getElementById('monty');\nvar luigi = document.getElementById('luigi');\nmonty.addEventListener('load', function () {\n  monty.setAttribute('height', monty.clientHeight);\n  monty.setAttribute('width', monty.clientWidth);\n});\nvar counter = 0;\nluigi.addEventListener('mousedown', function () {\n  monty.src = './images/montymole-idle2.png';\n  luigi.src = './images/luigi-wack2.png';\n  monty.height -= 5;\n  monty.width -= 5;\n  counter++;\n  hitCount.innerText = counter;\n});\nluigi.addEventListener('mouseup', function () {\n  monty.src = './images/montymole-idle1.png';\n  luigi.src = './images/luigi-wack1.png';\n});\nmonty.addEventListener('click', function (e) {\n  monty.height = monty.naturalHeight;\n  monty.width = monty.naturalWidth;\n});\n\n//# sourceURL=webpack://es6-setup/./src/scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/index.js"]();
/******/ 	
/******/ })()
;