/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todos */ \"./src/modules/todos.js\");\n/* harmony import */ var _modules_create_dom_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/create-dom-elements */ \"./src/modules/create-dom-elements.js\");\n\n\n\nconst todoContainer = document.querySelector('.todo-container');\n\nconst newTodo = (0,_modules_create_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createTodoCard)(_modules_todos__WEBPACK_IMPORTED_MODULE_0__.todos[0]);\n\ntodoContainer.append(newTodo);\n\nconsole.log(newTodo);\n\n//# sourceURL=webpack://tasktrek/./src/index.js?");

/***/ }),

/***/ "./src/modules/create-dom-elements.js":
/*!********************************************!*\
  !*** ./src/modules/create-dom-elements.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBtn: () => (/* binding */ createBtn),\n/* harmony export */   createDiv: () => (/* binding */ createDiv),\n/* harmony export */   createH2: () => (/* binding */ createH2),\n/* harmony export */   createInput: () => (/* binding */ createInput),\n/* harmony export */   createPara: () => (/* binding */ createPara),\n/* harmony export */   createTodoCard: () => (/* binding */ createTodoCard)\n/* harmony export */ });\n//createDiv\nconst createDiv = (className) => {\n    const div = document.createElement('div');\n    div.classList.add(className);\n    return div;\n};\n//createH2 \nconst createH2 = (className) => {\n    const h2 = document.createElement('h2');\n    h2.classList.add(className);\n    return h2;\n};\n//createPara\nconst createPara = (className) => {\n    const para = document.createElement('p');\n    para.classList.add(className);\n    return para;\n};\n//createBtn\nconst createBtn = (className) => {\n    const btn = document.createElement('button');\n    btn.classList.add(className);\n    return btn;\n};\n//createInput\nconst createInput = (className, inputType) => {\n    const input = document.createElement('input');\n    input.classList.add(className);\n    input.setAttribute('type', inputType);\n    return input;\n};\n\nconst createTodoCard = (todo) => {\n    const container = createDiv('todo-card');\n    const checkbox = createInput('todo-card-input', 'checkbox');\n    const title = createPara('todo-card-title');\n    const date = createPara('todo-card-date');\n    const editBtn = createBtn('todo-card-edit');\n    const deleteBtn = createBtn('todo-card-delete');\n\n    checkbox.checked = todo.checked;\n    title.innerText = todo.title;\n    date.innerText = todo.date;\n\n    container.append(checkbox, title, date, editBtn, deleteBtn);\n\n    return container;\n};\n\n\n\n//# sourceURL=webpack://tasktrek/./src/modules/create-dom-elements.js?");

/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todos: () => (/* binding */ todos)\n/* harmony export */ });\nconst todos = [{\n    type: 'general',\n    checked: false,\n    title: 'Todo-title',\n    date: 'dd-mm-yy',\n}];\n\n\n\n//# sourceURL=webpack://tasktrek/./src/modules/todos.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;