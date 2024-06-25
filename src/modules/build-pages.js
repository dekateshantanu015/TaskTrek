import { renderTodos } from "./todos";
import {
  createBtn,
  createDiv,
  createH1,
  createH3,
  createPara,
  createSvg,
} from "./create-dom-elements";
import { removeProject, renderTrashProjects } from "./projects";
import { openModal } from "./modal";

const buildGeneral = () => {
  const mainContainer = document.querySelector(".main-container");

  const title = createH1("project-title");
  const desc = createPara("project-desc");
  const todoContainer = createDiv("todo-container");
  const createTodoBtn = createBtn("todo-create");

  mainContainer.setAttribute("data-id", "General");
  title.innerText = "General";
  desc.innerText = "A general list of random todos";
  createTodoBtn.append(createSvg("plus"));
  createTodoBtn.addEventListener("click", () => openModal());

  mainContainer.textContent = "";
  mainContainer.append(title, createTodoBtn, desc, todoContainer);

  renderTodos();
};

const buildToday = () => {
  const mainContainer = document.querySelector(".main-container");

  const title = createH1("project-title");
  const desc = createPara("project-desc");
  const todoContainer = createDiv("todo-container");

  mainContainer.setAttribute("data-id", "Today");
  title.innerText = "Today";
  desc.innerText = "All todos dated today";

  mainContainer.textContent = "";
  mainContainer.append(title, desc, todoContainer);

  renderTodos();
};

const buildUpcoming = () => {
  const mainContainer = document.querySelector(".main-container");

  const title = createH1("project-title");
  const desc = createPara("project-desc");
  const todoContainer = createDiv("todo-container");

  mainContainer.setAttribute("data-id", "Upcoming");
  title.innerText = "Upcoming";
  desc.innerText = "All upcoming todos in the next week";

  mainContainer.textContent = "";
  mainContainer.append(title, desc, todoContainer);

  renderTodos();
};

const buildTrash = () => {
  const mainContainer = document.querySelector(".main-container");

  const title = createH1("project-title");
  const desc = createPara("project-desc");
  const todoContainer = createDiv("todo-container");
  const projectContainer = createDiv("project-container");
  const todoSubTitle = createH3("project-subtitle");
  const projectSubTitle = createH3("project-subtitle");

  mainContainer.setAttribute("data-id", "Trash");
  title.innerText = "Trash";
  desc.innerText = "All deleted todos & projects";
  todoSubTitle.innerText = "Todos";
  projectSubTitle.innerText = "Projects";

  mainContainer.textContent = "";
  mainContainer.append(
    title,
    desc,
    todoSubTitle,
    todoContainer,
    projectSubTitle,
    projectContainer
  );

  renderTodos();
  renderTrashProjects();
};

const buildProjectPage = (project, index) => {
  const mainContainer = document.querySelector(".main-container");

  const title = createH1("project-title");
  const desc = createPara("project-desc");
  const todoContainer = createDiv("todo-container");
  const createTodoBtn = createBtn("todo-create");
  const delProjectBtn = createBtn("project-delete");

  mainContainer.setAttribute("data-id", index);
  title.innerText = project.title;
  desc.innerText = project.desc;
  createTodoBtn.append(createSvg("plus"));
  createTodoBtn.addEventListener("click", () => openModal());
  delProjectBtn.append(createSvg("delete"));
  delProjectBtn.addEventListener("click", () => removeProject(project, index));

  mainContainer.textContent = "";
  mainContainer.append(
    title,
    createTodoBtn,
    delProjectBtn,
    desc,
    todoContainer
  );

  renderTodos();
};

export {
  buildGeneral,
  buildProjectPage,
  buildToday,
  buildUpcoming,
  buildTrash,
};
