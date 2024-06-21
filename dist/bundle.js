/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/create-dom-elements.js":
/*!********************************************!*\
  !*** ./src/modules/create-dom-elements.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBtn: () => (/* binding */ createBtn),
/* harmony export */   createDiv: () => (/* binding */ createDiv),
/* harmony export */   createH2: () => (/* binding */ createH2),
/* harmony export */   createInput: () => (/* binding */ createInput),
/* harmony export */   createPara: () => (/* binding */ createPara),
/* harmony export */   createTodoCard: () => (/* binding */ createTodoCard)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/modules/todos.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/modules/modal.js");



//createDiv
const createDiv = (className) => {
  const div = document.createElement("div");
  div.classList.add(className);
  return div;
};
//createH2
const createH2 = (className) => {
  const h2 = document.createElement("h2");
  h2.classList.add(className);
  return h2;
};
//createPara
const createPara = (className) => {
  const para = document.createElement("p");
  para.classList.add(className);
  return para;
};
//createBtn
const createBtn = (className) => {
  const btn = document.createElement("button");
  btn.classList.add(className);
  return btn;
};
//createInput
const createInput = (className, inputType) => {
  const input = document.createElement("input");
  input.classList.add(className);
  input.setAttribute("type", inputType);
  return input;
};

const createTodoCard = (todo, index) => {
  const container = createDiv("todo-card");
  const checkbox = createInput("todo-card-input", "checkbox");
  const title = createPara("todo-card-title");
  const date = createPara("todo-card-date");
  const editBtn = createBtn("todo-card-edit");
  const deleteBtn = createBtn("todo-card-delete");

  checkbox.checked = todo.checked;
  checkbox.addEventListener("click", () =>
    (0,_todos__WEBPACK_IMPORTED_MODULE_0__.updateStatus)(index, checkbox.checked)
  );
  title.innerText = todo.title;
  date.innerText = todo.date;
  editBtn.innerText = "Edit";
  editBtn.addEventListener("click", () => {
    (0,_modal__WEBPACK_IMPORTED_MODULE_1__.openEditModal)(todo, index);
  });
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", () => (0,_todos__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(index));

  container.append(checkbox, title, date, editBtn, deleteBtn);

  return container;
};




/***/ }),

/***/ "./src/modules/general.js":
/*!********************************!*\
  !*** ./src/modules/general.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildPage: () => (/* binding */ buildPage)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/modules/todos.js");
/* harmony import */ var _create_dom_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-dom-elements */ "./src/modules/create-dom-elements.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./src/modules/modal.js");




const buildPage = () => {
  const mainContainer = (0,_create_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)("main-container");
  const title = (0,_create_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createH2)("project-title");
  const desc = (0,_create_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createPara)("project-desc");
  const todoContainer = (0,_create_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)("todo-container");
  const btn = (0,_create_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createBtn)("todo-create");

  title.innerText = "General";
  desc.innerText = "A general list of random todos";
  btn.innerText = "+";
  btn.addEventListener("click", () => (0,_modal__WEBPACK_IMPORTED_MODULE_2__.openModal)());
  _todos__WEBPACK_IMPORTED_MODULE_0__.todos.forEach((todo, index) =>
    todoContainer.append((0,_create_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createTodoCard)(todo, index))
  );

  mainContainer.append(title, desc, todoContainer, btn);
  return mainContainer;
};




/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openEditModal: () => (/* binding */ openEditModal),
/* harmony export */   openModal: () => (/* binding */ openModal)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/modules/todos.js");


const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal-form");
const modalTitle = document.querySelector(".modal-form-legend");
const titleInput = document.querySelector(".modal-form-title-input");
const dateInput = document.querySelector(".modal-form-date-input");

const closeModal = document.querySelector(".modal-form-close");
closeModal.addEventListener("click", () => {
  modal.classList.add("display-none");
  modalForm.removeEventListener("submit", newTodoEvent);
  modalForm.removeEventListener("submit", editTodoEvent);
  clearModal();
});

const clearModal = () => {
  titleInput.value = "";
  dateInput.value = "";
};

const openEditModal = (todo, index) => {
  modalTitle.innerText = "Edit Title";
  titleInput.value = todo.title;
  dateInput.value = todo.date;
  modal.classList.remove("display-none");
  modalForm.addEventListener("submit", editTodoEvent);
  modalForm.currentIndex = index;
};

const newTodoEvent = (e) => {
  e.preventDefault();
  (0,_todos__WEBPACK_IMPORTED_MODULE_0__.createTodo)(titleInput.value, dateInput.value);
  clearModal();
  modal.classList.add("display-none");
  modalForm.removeEventListener("submit", newTodoEvent);
};

const editTodoEvent = (e) => {
  e.preventDefault();
  (0,_todos__WEBPACK_IMPORTED_MODULE_0__.editTodo)(e.currentTarget.currentIndex, titleInput.value, dateInput.value);
  clearModal();
  modal.classList.add("display-none");
  modalForm.removeEventListener("submit", editTodoEvent);
};

const openModal = () => {
  modalForm.addEventListener("submit", newTodoEvent);
  modal.classList.remove("display-none");
};




/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodo: () => (/* binding */ createTodo),
/* harmony export */   editTodo: () => (/* binding */ editTodo),
/* harmony export */   removeTodo: () => (/* binding */ removeTodo),
/* harmony export */   todos: () => (/* binding */ todos),
/* harmony export */   updateStatus: () => (/* binding */ updateStatus)
/* harmony export */ });
/* harmony import */ var _create_dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-dom-elements */ "./src/modules/create-dom-elements.js");


const todos = [
  {
    type: "general",
    checked: false,
    title: "Todo-title",
    date: "2022-07-20",
  },
  {
    type: "general",
    checked: false,
    title: "Todo-Title2",
    date: "2022-07-21",
  },
  {
    type: "general",
    checked: false,
    title: "Todo-Title3",
    date: "2022-07-22",
  },
];

const todoFactory = (title, date) => {
  const type = "general";
  const checked = true;
  return { title, date, type, checked };
};

const createTodo = (title, date) => {
  const newTodo = todoFactory(title, date);
  todos.push(newTodo);
  renderTodos();
};

const removeTodo = (index) => {
  todos.splice(index, 1);
  renderTodos();
};

const editTodo = (index, title, date) => {
  const newTodo = todoFactory(title, date);
  todos.splice(index, 1, newTodo);
  renderTodos();
};

const updateStatus = (index, value) => {
  todos[index].checked = value;
};

const renderTodos = () => {
  const todoContainer = document.querySelector(".todo-container");
  todoContainer.textContent = "";
  todos.forEach((todo, index) =>
    todoContainer.append((0,_create_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createTodoCard)(todo, index))
  );
};




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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todos */ "./src/modules/todos.js");
/* harmony import */ var _modules_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/general */ "./src/modules/general.js");



const main = document.querySelector(".main");

main.append((0,_modules_general__WEBPACK_IMPORTED_MODULE_1__.buildPage)());

const test = _modules_todos__WEBPACK_IMPORTED_MODULE_0__.todos.filter(checkType);
function checkType(todo) {
  return todo.type === "random";
}

console.log(test);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNYOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxvREFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBYTtBQUNqQixHQUFHO0FBQ0g7QUFDQSw0Q0FBNEMsa0RBQVU7O0FBRXREOztBQUVBO0FBQ0E7O0FBU0U7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFOEI7QUFPRDtBQUNLOztBQUVwQztBQUNBLHdCQUF3QiwrREFBUztBQUNqQyxnQkFBZ0IsOERBQVE7QUFDeEIsZUFBZSxnRUFBVTtBQUN6Qix3QkFBd0IsK0RBQVM7QUFDakMsY0FBYywrREFBUzs7QUFFdkI7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGlEQUFTO0FBQy9DLEVBQUUseUNBQUs7QUFDUCx5QkFBeUIsb0VBQWM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBOztBQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QjBCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxrREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLGdEQUFRO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRW9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EbUI7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0VBQWM7QUFDdkM7QUFDQTs7QUFFaUU7Ozs7Ozs7VUMxRGpFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7OztBQ053QztBQUNNOztBQUU5Qzs7QUFFQSxZQUFZLDJEQUFTOztBQUVyQixhQUFhLGlEQUFLO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2t0cmVrLy4vc3JjL21vZHVsZXMvY3JlYXRlLWRvbS1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90YXNrdHJlay8uL3NyYy9tb2R1bGVzL2dlbmVyYWwuanMiLCJ3ZWJwYWNrOi8vdGFza3RyZWsvLi9zcmMvbW9kdWxlcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90YXNrdHJlay8uL3NyYy9tb2R1bGVzL3RvZG9zLmpzIiwid2VicGFjazovL3Rhc2t0cmVrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rhc2t0cmVrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrdHJlay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rhc2t0cmVrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGFza3RyZWsvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVtb3ZlVG9kbywgdXBkYXRlU3RhdHVzIH0gZnJvbSBcIi4vdG9kb3NcIjtcbmltcG9ydCB7IG9wZW5FZGl0TW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiO1xuXG4vL2NyZWF0ZURpdlxuY29uc3QgY3JlYXRlRGl2ID0gKGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICByZXR1cm4gZGl2O1xufTtcbi8vY3JlYXRlSDJcbmNvbnN0IGNyZWF0ZUgyID0gKGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaDIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICByZXR1cm4gaDI7XG59O1xuLy9jcmVhdGVQYXJhXG5jb25zdCBjcmVhdGVQYXJhID0gKGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmEuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICByZXR1cm4gcGFyYTtcbn07XG4vL2NyZWF0ZUJ0blxuY29uc3QgY3JlYXRlQnRuID0gKGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICByZXR1cm4gYnRuO1xufTtcbi8vY3JlYXRlSW5wdXRcbmNvbnN0IGNyZWF0ZUlucHV0ID0gKGNsYXNzTmFtZSwgaW5wdXRUeXBlKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgaW5wdXRUeXBlKTtcbiAgcmV0dXJuIGlucHV0O1xufTtcblxuY29uc3QgY3JlYXRlVG9kb0NhcmQgPSAodG9kbywgaW5kZXgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRGl2KFwidG9kby1jYXJkXCIpO1xuICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUlucHV0KFwidG9kby1jYXJkLWlucHV0XCIsIFwiY2hlY2tib3hcIik7XG4gIGNvbnN0IHRpdGxlID0gY3JlYXRlUGFyYShcInRvZG8tY2FyZC10aXRsZVwiKTtcbiAgY29uc3QgZGF0ZSA9IGNyZWF0ZVBhcmEoXCJ0b2RvLWNhcmQtZGF0ZVwiKTtcbiAgY29uc3QgZWRpdEJ0biA9IGNyZWF0ZUJ0bihcInRvZG8tY2FyZC1lZGl0XCIpO1xuICBjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVCdG4oXCJ0b2RvLWNhcmQtZGVsZXRlXCIpO1xuXG4gIGNoZWNrYm94LmNoZWNrZWQgPSB0b2RvLmNoZWNrZWQ7XG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgIHVwZGF0ZVN0YXR1cyhpbmRleCwgY2hlY2tib3guY2hlY2tlZClcbiAgKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcbiAgZGF0ZS5pbm5lclRleHQgPSB0b2RvLmRhdGU7XG4gIGVkaXRCdG4uaW5uZXJUZXh0ID0gXCJFZGl0XCI7XG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvcGVuRWRpdE1vZGFsKHRvZG8sIGluZGV4KTtcbiAgfSk7XG4gIGRlbGV0ZUJ0bi5pbm5lclRleHQgPSBcIlhcIjtcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiByZW1vdmVUb2RvKGluZGV4KSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZChjaGVja2JveCwgdGl0bGUsIGRhdGUsIGVkaXRCdG4sIGRlbGV0ZUJ0bik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZURpdixcbiAgY3JlYXRlSDIsXG4gIGNyZWF0ZVBhcmEsXG4gIGNyZWF0ZUJ0bixcbiAgY3JlYXRlSW5wdXQsXG4gIGNyZWF0ZVRvZG9DYXJkLFxufTtcbiIsImltcG9ydCB7IHRvZG9zIH0gZnJvbSBcIi4vdG9kb3NcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZUJ0bixcbiAgY3JlYXRlRGl2LFxuICBjcmVhdGVIMixcbiAgY3JlYXRlUGFyYSxcbiAgY3JlYXRlVG9kb0NhcmQsXG59IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudHNcIjtcbmltcG9ydCB7IG9wZW5Nb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XG5cbmNvbnN0IGJ1aWxkUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGNyZWF0ZURpdihcIm1haW4tY29udGFpbmVyXCIpO1xuICBjb25zdCB0aXRsZSA9IGNyZWF0ZUgyKFwicHJvamVjdC10aXRsZVwiKTtcbiAgY29uc3QgZGVzYyA9IGNyZWF0ZVBhcmEoXCJwcm9qZWN0LWRlc2NcIik7XG4gIGNvbnN0IHRvZG9Db250YWluZXIgPSBjcmVhdGVEaXYoXCJ0b2RvLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgYnRuID0gY3JlYXRlQnRuKFwidG9kby1jcmVhdGVcIik7XG5cbiAgdGl0bGUuaW5uZXJUZXh0ID0gXCJHZW5lcmFsXCI7XG4gIGRlc2MuaW5uZXJUZXh0ID0gXCJBIGdlbmVyYWwgbGlzdCBvZiByYW5kb20gdG9kb3NcIjtcbiAgYnRuLmlubmVyVGV4dCA9IFwiK1wiO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG9wZW5Nb2RhbCgpKTtcbiAgdG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmQoY3JlYXRlVG9kb0NhcmQodG9kbywgaW5kZXgpKVxuICApO1xuXG4gIG1haW5Db250YWluZXIuYXBwZW5kKHRpdGxlLCBkZXNjLCB0b2RvQ29udGFpbmVyLCBidG4pO1xuICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCB7IGJ1aWxkUGFnZSB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlVG9kbywgZWRpdFRvZG8gfSBmcm9tIFwiLi90b2Rvc1wiO1xuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5jb25zdCBtb2RhbEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWZvcm1cIik7XG5jb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1mb3JtLWxlZ2VuZFwiKTtcbmNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWZvcm0tdGl0bGUtaW5wdXRcIik7XG5jb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWZvcm0tZGF0ZS1pbnB1dFwiKTtcblxuY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtZm9ybS1jbG9zZVwiKTtcbmNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbm9uZVwiKTtcbiAgbW9kYWxGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgbmV3VG9kb0V2ZW50KTtcbiAgbW9kYWxGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZWRpdFRvZG9FdmVudCk7XG4gIGNsZWFyTW9kYWwoKTtcbn0pO1xuXG5jb25zdCBjbGVhck1vZGFsID0gKCkgPT4ge1xuICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgZGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcbn07XG5cbmNvbnN0IG9wZW5FZGl0TW9kYWwgPSAodG9kbywgaW5kZXgpID0+IHtcbiAgbW9kYWxUaXRsZS5pbm5lclRleHQgPSBcIkVkaXQgVGl0bGVcIjtcbiAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvZG8udGl0bGU7XG4gIGRhdGVJbnB1dC52YWx1ZSA9IHRvZG8uZGF0ZTtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXktbm9uZVwiKTtcbiAgbW9kYWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZWRpdFRvZG9FdmVudCk7XG4gIG1vZGFsRm9ybS5jdXJyZW50SW5kZXggPSBpbmRleDtcbn07XG5cbmNvbnN0IG5ld1RvZG9FdmVudCA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY3JlYXRlVG9kbyh0aXRsZUlucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUpO1xuICBjbGVhck1vZGFsKCk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW5vbmVcIik7XG4gIG1vZGFsRm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIG5ld1RvZG9FdmVudCk7XG59O1xuXG5jb25zdCBlZGl0VG9kb0V2ZW50ID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBlZGl0VG9kbyhlLmN1cnJlbnRUYXJnZXQuY3VycmVudEluZGV4LCB0aXRsZUlucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUpO1xuICBjbGVhck1vZGFsKCk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW5vbmVcIik7XG4gIG1vZGFsRm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGVkaXRUb2RvRXZlbnQpO1xufTtcblxuY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xuICBtb2RhbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBuZXdUb2RvRXZlbnQpO1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheS1ub25lXCIpO1xufTtcblxuZXhwb3J0IHsgb3Blbk1vZGFsLCBvcGVuRWRpdE1vZGFsIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVUb2RvQ2FyZCB9IGZyb20gXCIuL2NyZWF0ZS1kb20tZWxlbWVudHNcIjtcblxuY29uc3QgdG9kb3MgPSBbXG4gIHtcbiAgICB0eXBlOiBcImdlbmVyYWxcIixcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICB0aXRsZTogXCJUb2RvLXRpdGxlXCIsXG4gICAgZGF0ZTogXCIyMDIyLTA3LTIwXCIsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcImdlbmVyYWxcIixcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICB0aXRsZTogXCJUb2RvLVRpdGxlMlwiLFxuICAgIGRhdGU6IFwiMjAyMi0wNy0yMVwiLFxuICB9LFxuICB7XG4gICAgdHlwZTogXCJnZW5lcmFsXCIsXG4gICAgY2hlY2tlZDogZmFsc2UsXG4gICAgdGl0bGU6IFwiVG9kby1UaXRsZTNcIixcbiAgICBkYXRlOiBcIjIwMjItMDctMjJcIixcbiAgfSxcbl07XG5cbmNvbnN0IHRvZG9GYWN0b3J5ID0gKHRpdGxlLCBkYXRlKSA9PiB7XG4gIGNvbnN0IHR5cGUgPSBcImdlbmVyYWxcIjtcbiAgY29uc3QgY2hlY2tlZCA9IHRydWU7XG4gIHJldHVybiB7IHRpdGxlLCBkYXRlLCB0eXBlLCBjaGVja2VkIH07XG59O1xuXG5jb25zdCBjcmVhdGVUb2RvID0gKHRpdGxlLCBkYXRlKSA9PiB7XG4gIGNvbnN0IG5ld1RvZG8gPSB0b2RvRmFjdG9yeSh0aXRsZSwgZGF0ZSk7XG4gIHRvZG9zLnB1c2gobmV3VG9kbyk7XG4gIHJlbmRlclRvZG9zKCk7XG59O1xuXG5jb25zdCByZW1vdmVUb2RvID0gKGluZGV4KSA9PiB7XG4gIHRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gIHJlbmRlclRvZG9zKCk7XG59O1xuXG5jb25zdCBlZGl0VG9kbyA9IChpbmRleCwgdGl0bGUsIGRhdGUpID0+IHtcbiAgY29uc3QgbmV3VG9kbyA9IHRvZG9GYWN0b3J5KHRpdGxlLCBkYXRlKTtcbiAgdG9kb3Muc3BsaWNlKGluZGV4LCAxLCBuZXdUb2RvKTtcbiAgcmVuZGVyVG9kb3MoKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVN0YXR1cyA9IChpbmRleCwgdmFsdWUpID0+IHtcbiAgdG9kb3NbaW5kZXhdLmNoZWNrZWQgPSB2YWx1ZTtcbn07XG5cbmNvbnN0IHJlbmRlclRvZG9zID0gKCkgPT4ge1xuICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWNvbnRhaW5lclwiKTtcbiAgdG9kb0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gIHRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PlxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kKGNyZWF0ZVRvZG9DYXJkKHRvZG8sIGluZGV4KSlcbiAgKTtcbn07XG5cbmV4cG9ydCB7IHRvZG9zLCBjcmVhdGVUb2RvLCByZW1vdmVUb2RvLCBlZGl0VG9kbywgdXBkYXRlU3RhdHVzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRvZG9zIH0gZnJvbSBcIi4vbW9kdWxlcy90b2Rvc1wiO1xuaW1wb3J0IHsgYnVpbGRQYWdlIH0gZnJvbSBcIi4vbW9kdWxlcy9nZW5lcmFsXCI7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG5cbm1haW4uYXBwZW5kKGJ1aWxkUGFnZSgpKTtcblxuY29uc3QgdGVzdCA9IHRvZG9zLmZpbHRlcihjaGVja1R5cGUpO1xuZnVuY3Rpb24gY2hlY2tUeXBlKHRvZG8pIHtcbiAgcmV0dXJuIHRvZG8udHlwZSA9PT0gXCJyYW5kb21cIjtcbn1cblxuY29uc29sZS5sb2codGVzdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=