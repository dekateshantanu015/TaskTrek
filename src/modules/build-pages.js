import { renderTodos } from "./todos";
import {
  createBtn,
  createDiv,
  createH2,
  createPara,
  createTodoCard,
} from "./create-dom-elements";
import { removeProject, renderTrashProjects } from "./projects";
import { openModal } from "./modal";

const buildGeneral = () => {
  const mainContainer = document.querySelector(".main-container");

  const title = createH2("project-title");
  const desc = createPara("project-desc");
  const todoContainer = createDiv("todo-container");
  const createTodoBtn = createBtn("todo-create");

  mainContainer.setAttribute("data-id", "General");
  title.innerText = "General";
  desc.innerText = "A general list of random todos";
  createTodoBtn.innerText = "+";
  createTodoBtn.addEventListener("click", () => openModal());

  mainContainer.textContent = "";
  mainContainer.append(title, desc, todoContainer, createTodoBtn);

  renderTodos();
};

const buildToday = () => {
  const mainContainer = document.querySelector(".main-container");

  const title = createH2("project-title");
  const desc = createPara("project-desc");
  const todoContainer = createDiv("todo-container");

  title.innerText = "Today";
  desc.innerText = "All todos dated today";

  mainContainer.append(title, desc, todoContainer);

  mainContainer.textContent = "";
  renderTodos();
};

const buildUpcoming = () => {
  const mainContainer = document.querySelector(".main-container");

  const title = createH2("project-title");
  const desc = createPara("project-desc");
  const todoContainer = createDiv("todo-container");

  title.innerText = "Upcoming";
  desc.innerText = "All upcoming todos in the next week";

  mainContainer.append(title, desc, todoContainer);

  mainContainer.textContent = "";
  renderTodos();
};

const buildTrash = () => {
  const mainContainer = document.querySelector(".main-container");

  const title = createH2("project-title");
  const desc = createPara("project-desc");
  const todoContainer = createDiv("todo-container");
  const projectContainer = createDiv("project-container");

  mainContainer.setAttribute("data-id", "Trash");
  title.innerText = "Trash";
  desc.innerText = "All deleted todos & projects";

  mainContainer.append(title, desc, todoContainer, projectContainer);

  mainContainer.textContent = "";
  renderTodos();
  renderTrashProjects();
};

const buildProjectPage = (project, index) => {
  const mainContainer = document.querySelector(".main-container");

  const title = createH2("project-title");
  const desc = createPara("project-desc");
  const todoContainer = createDiv("todo-container");
  const createTodoBtn = createBtn("todo-create");
  const delProjectBtn = createBtn("project-delete");

  mainContainer.setAttribute("data-id", index);
  title.innerText = project.title;
  desc.innerText = project.desc;
  createTodoBtn.innerText = "+";
  createTodoBtn.addEventListener("click", () => openModal());
  delProjectBtn.innerText = "x";
  delProjectBtn.addEventListener("click", () => removeProject(project, index));

  mainContainer.append(
    title,
    desc,
    todoContainer,
    createTodoBtn,
    delProjectBtn
  );

  mainContainer.textContent = "";
  renderTodos();
};

export {
  buildGeneral,
  buildProjectPage,
  buildToday,
  buildUpcoming,
  buildTrash,
};
