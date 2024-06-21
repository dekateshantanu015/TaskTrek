import { createTodo, editTodo } from "./todos";

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
  modalTitle.innerText = "Add new Todo";
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
  createTodo(titleInput.value, dateInput.value);
  clearModal();
  modal.classList.add("display-none");
  modalForm.removeEventListener("submit", newTodoEvent);
};

const editTodoEvent = (e) => {
  e.preventDefault();
  editTodo(e.currentTarget.currentIndex, titleInput.value, dateInput.value);
  clearModal();
  modal.classList.add("display-none");
  modalForm.removeEventListener("submit", editTodoEvent);
};

const openModal = () => {
  modalForm.addEventListener("submit", newTodoEvent);
  modal.classList.remove("display-none");
};

export { openModal, openEditModal };
