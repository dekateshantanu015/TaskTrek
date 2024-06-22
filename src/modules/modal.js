import {
  createProjectModalElements,
  createTodoModalElements,
} from "./create-dom-elements";
import { createProject } from "./projects";
import { createTodo, editTodo } from "./todos";

const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal-form");

const closeModal = document.querySelector(".modal-form-close");
closeModal.addEventListener("click", () => {
  modal.classList.add("display-none");
  modalForm.removeEventListener("submit", newTodoEvent);
  modalForm.removeEventListener("submit", editTodoEvent);
  modalForm.removeEventListener("submit", newProjectEvent);
});

const openModal = () => {
  createTodoModalElements("Add new Todo");
  modalForm.addEventListener("submit", newTodoEvent);
  modal.classList.remove("display-none");
};

const openEditModal = (todo) => {
  createTodoModalElements("Edit todo");

  const titleInput = document.querySelector(".modal-form-title-input");
  const dateInput = document.querySelector(".modal-form-date-input");
  const prioInput = document.querySelector(".modal-form-prio-input");

  titleInput.value = todo.title;
  dateInput.value = todo.date;
  prioInput.checked = todo.prio;
  modal.classList.remove("display-none");
  modalForm.addEventListener("submit", editTodoEvent);
  modalForm.currentIndex = todo.index;
};

const openProjectModal = () => {
  createProjectModalElements("Create new Project");
  modalForm.addEventListener("submit", newProjectEvent);
  modal.classList.remove("display-none");
};

const newTodoEvent = (e) => {
  const projectName = document.querySelector(".project-title");
  const titleInput = document.querySelector(".modal-form-title-input");
  const dateInput = document.querySelector(".modal-form-date-input");
  const prioInput = document.querySelector(".modal-form-prio-input");

  e.preventDefault();

  createTodo(
    projectName.innerText,
    titleInput.value,
    dateInput.value,
    prioInput.checked
  );
  modal.classList.add("display-none");
  modalForm.removeEventListener("submit", newTodoEvent);
};

const editTodoEvent = (e) => {
  const titleInput = document.querySelector(".modal-form-title-input");
  const dateInput = document.querySelector(".modal-form-date-input");
  const prioInput = document.querySelector(".modal-form-prio-input");

  e.preventDefault();

  editTodo(
    e.currentTarget.currentIndex,
    titleInput.value,
    dateInput.value,
    prioInput.checked
  );
  modal.classList.add("display-none");
  modalForm.removeEventListener("submit", editTodoEvent);
};

const newProjectEvent = (e) => {
  const titleInput = document.querySelector(".modal-form-title-input");
  const descInput = document.querySelector(".modal-form-desc-input");

  e.preventDefault();
  createProject(titleInput.value, descInput.value);
  modal.classList.add("display-none");
  modalForm.removeEventListener("submit", newProjectEvent);
};

export { openModal, openEditModal, openProjectModal };
