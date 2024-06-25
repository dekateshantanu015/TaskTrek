import { format } from "date-fns";
import { removeTodo, updateStatus, restoreTodo } from "./todos";
import { removeProject, restoreProject } from "./projects";
import { openEditModal } from "./modal";

//createDiv
const createDiv = (className) => {
  const div = document.createElement("div");
  div.classList.add(className);
  return div;
};

const createH1 = (className) => {
  const h1 = document.createElement("h1");
  h1.classList.add(className);
  return h1;
};

//createH2
const createH2 = (className) => {
  const h2 = document.createElement("h2");
  h2.classList.add(className);
  return h2;
};

//createH3
const createH3 = (className) => {
  const h3 = document.createElement("h3");
  h3.classList.add(className);
  return h3;
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
  liLink.setAttribute("href", "#");
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
  date.innerText = format(new Date(todo.date), "dd/MM/y");
  editBtn.append(createSvg("edit"));
  editBtn.addEventListener("click", () => {
    openEditModal(todo);
  });
  deleteBtn.append(createSvg("delete"));
  deleteBtn.addEventListener("click", () => removeTodo(todo));

  container.append(checkbox, title, date, editBtn, deleteBtn);

  if (todo.isTrash) {
    const restoreBtn = createBtn("todo-card-restore");
    restoreBtn.append(createSvg("restore"));
    restoreBtn.addEventListener("click", () => restoreTodo(todo));
    container.insertBefore(restoreBtn, container.lastChild);
  }

  todoContainer.append(container);
};

const createProjectCard = (project, index) => {
  const projectContainer = document.querySelector(".project-container");
  const container = createDiv("project-card");
  const title = createPara("project-card-title");
  const deleteBtn = createBtn("project-card-delete");
  const restoreBtn = createBtn("project-card-restore");

  title.innerText = project.title;
  deleteBtn.append(createSvg("delete"));
  deleteBtn.addEventListener("click", () => removeProject(project, index));
  restoreBtn.append(createSvg("restore"));
  restoreBtn.addEventListener("click", () => restoreProject(project));

  container.append(title, restoreBtn, deleteBtn);

  projectContainer.append(container);
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
  const labelPrio = createLabel("modal-form-prio");
  const inputPrio = createInput("modal-form-prio", "checkbox");

  legend.innerText = title;
  labelName.innerText = "Name";
  labelDate.innerText = "Date";
  labelPrio.innerText = "Important?";

  formFieldset.textContent = "";
  formFieldset.append(
    legend,
    labelName,
    inputName,
    labelDate,
    inputDate,
    labelPrio,
    inputPrio
  );
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

const createSvg = (type) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  svg.setAttribute("width", "24px");
  svg.setAttribute("height", "24px");
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.setAttribute("viewBox", "0 0 24 24");

  path.setAttribute("fill", "currentColor");

  switch (type) {
    case "delete":
      path.setAttribute(
        "d",
        "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
      );
      break;
    case "plus":
      path.setAttribute(
        "d",
        "M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"
      );
      break;
    case "edit":
      path.setAttribute(
        "d",
        "M12 22H5a2 2 0 0 1-2-2l.01-14c0-1.1.88-2 1.99-2h1V3c0-.55.45-1 1-1s1 .45 1 1v1h8V3c0-.55.45-1 1-1s1 .45 1 1v1h1c1.1 0 2 .9 2 2v6h-2v-2H5v10h7v2zm10.13-5.01l.71-.71a.996.996 0 0 0 0-1.41l-.71-.71a.996.996 0 0 0-1.41 0l-.71.71l2.12 2.12zm-.71.71l-5.01 5.01c-.18.18-.44.29-.7.29H14.5c-.28 0-.5-.22-.5-.5v-1.21c0-.27.11-.52.29-.71l5.01-5.01l2.12 2.13z"
      );
      break;
    case "restore":
      path.setAttribute(
        "d",
        "m19.41 7.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.42zM12 18c-1.65 0-3.19-.81-4.12-2.17a.75.75 0 0 1 .19-1.04c.34-.24.81-.15 1.04.19c.65.95 1.73 1.52 2.88 1.52c1.93 0 3.5-1.57 3.5-3.5a3.495 3.495 0 0 0-6.6-1.61L10.5 13H7c-.28 0-.5-.22-.5-.5V9l1.3 1.3A4.98 4.98 0 0 1 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"
      );
      break;
  }

  svg.append(path);

  return svg;
};

export {
  createDiv,
  createH1,
  createH2,
  createH3,
  createPara,
  createBtn,
  createInput,
  createTodoCard,
  createProjectCard,
  createTodoModalElements,
  createProjectModalElements,
  createNavItem,
  createSvg,
};
