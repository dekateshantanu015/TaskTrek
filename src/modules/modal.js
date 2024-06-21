import { createTodo } from "./todos";

const modal = document.querySelector(".modal");
const titleInput = document.querySelector(".modal-form-title-input");
const dateInput = document.querySelector(".modal-form-date-input");

const closeModal = document.querySelector(".modal-form-close");
closeModal.addEventListener("click", () => modal.classList.add("display-none"));

const modalForm = document.querySelector(".modal-form");
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createTodo(titleInput.value, dateInput.value);
  clearModal();
  modal.classList.add("display-none");
});

const clearModal = () => {
  titleInput.value = "";
  dateInput.value = "";
};

const openModal = () => modal.classList.remove("display-none");

export { openModal };
