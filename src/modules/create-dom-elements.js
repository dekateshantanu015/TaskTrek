import { removeTodo, updateStatus } from "./todos";
import { openEditModal } from "./modal";

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
//createCheckbox
const createCheckbox = (className) => {
  const checkbox = document.createElement("input");
  checkbox.classList.add(className);
  checkbox.setAttribute("type", "checkbox");
  return checkbox;
};

const createNavItem = (className, projectName) => {
  const li = document.createElement("li");
  const liLink = document.createElement("a");

  li.classList.add(className);
  liLink.classList.add(`${className}-link`);
  liLink.innerText = projectName;

  li.append(liLink);
  return li;
};

const createTodoCard = (todo) => {
  const todoContainer = document.querySelector(".todo-container");
  const container = createDiv("todo-card");
  const checkbox = createCheckbox("todo-card-input");
  const title = createPara("todo-card-title");
  const date = createPara("todo-card-date");
  const editBtn = createBtn("todo-card-edit");
  const deleteBtn = createBtn("todo-card-delete");

  checkbox.checked = todo.checked;
  checkbox.addEventListener("click", () =>
    updateStatus(todo.index, checkbox.checked)
  );
  title.innerText = todo.title;
  date.innerText = todo.date;
  editBtn.innerText = "Edit";
  editBtn.addEventListener("click", () => {
    openEditModal(todo);
  });
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", () => removeTodo(todo.index));

  container.append(checkbox, title, date, editBtn, deleteBtn);

  todoContainer.append(container);
};

const createLegend = (className) => {
  const legend = document.createElement("legend");
  legend.classList.add(className);
  return legend;
};

const createLabel = (className) => {
  const label = document.createElement("label");
  label.classList.add(`${className}-label`);
  label.setAttribute("for", `${className}-input`);
  return label;
};

const createInput = (className, inputType) => {
  const input = document.createElement("input");
  input.classList.add(`${className}-input`);
  input.setAttribute("type", inputType);
  input.setAttribute("id", `${className}-input`);
  input.setAttribute("name", `${className}-input`);
  return input;
};

const createTextArea = (className) => {
  const textArea = document.createElement("textarea");
  textArea.classList.add(`${className}-input`);
  textArea.setAttribute("id", `${className}-input`);
  textArea.setAttribute("name", `${className}-input`);
  return textArea;
};

const createTodoModalElements = (title) => {
  const formFieldset = document.querySelector(".modal-form-fieldset");
  const legend = createLegend("modal-form-legend");
  const labelName = createLabel("modal-form-title");
  const inputName = createInput("modal-form-title", "text");
  const labelDate = createLabel("modal-form-date");
  const inputDate = createInput("modal-form-date", "date");

  legend.innerText = title;
  labelName.innerText = "Name";
  labelDate.innerText = "Date";

  formFieldset.textContent = "";
  formFieldset.append(legend, labelName, inputName, labelDate, inputDate);
};

const createProjectModalElements = (title) => {
  const formFieldset = document.querySelector(".modal-form-fieldset");
  const legend = createLegend("modal-form-legend");
  const labelName = createLabel("modal-form-title");
  const inputName = createInput("modal-form-title", "text");
  const labelDesc = createLabel("modal-form-desc");
  const inputDesc = createTextArea("modal-form-desc");

  legend.innerText = title;
  labelName.innerText = "Project Name";
  labelDesc.innerText = "Project Description";

  formFieldset.textContent = "";
  formFieldset.append(legend, labelName, inputName, labelDesc, inputDesc);
};

export {
  createDiv,
  createH2,
  createPara,
  createBtn,
  createInput,
  createTodoCard,
  createTodoModalElements,
  createProjectModalElements,
  createNavItem,
};
