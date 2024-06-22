import { renderTodos } from "./todos";
import {
  createBtn,
  createDiv,
  createH2,
  createPara,
  createTodoCard,
} from "./create-dom-elements";
import { removeProject } from "./projects";
import { openModal } from "./modal";

const buildGeneral = () => {
  const main = document.querySelector(".main");
  const mainContainer = createDiv("main-container");
  const title = createH2("project-title");
  const desc = createPara("project-desc");
  const todoContainer = createDiv("todo-container");
  const btn = createBtn("todo-create");

  title.innerText = "General";
  desc.innerText = "A general list of random todos";
  btn.innerText = "+";
  btn.addEventListener("click", () => openModal());

  mainContainer.append(title, desc, todoContainer, btn);

  main.textContent = "";
  main.append(mainContainer);
  renderTodos();
};

const buildToday = () => {
  const main = document.querySelector(".main");
  const mainContainer = createDiv("main-container");
  const title = createH2("project-title");
  const desc = createPara("project-desc");
  const todoContainer = createDiv("todo-container");

  title.innerText = "Today";
  desc.innerText = "All todos dated today";

  mainContainer.append(title, desc, todoContainer);

  main.textContent = "";
  main.append(mainContainer);
  renderTodos();
};

const buildUpcoming = () => {
  const main = document.querySelector(".main");
  const mainContainer = createDiv("main-container");
  const title = createH2("project-title");
  const desc = createPara("project-desc");
  const todoContainer = createDiv("todo-container");

  title.innerText = "Upcoming";
  desc.innerText = "All upcoming todos in the next week";

  mainContainer.append(title, desc, todoContainer);

  main.textContent = "";
  main.append(mainContainer);
  renderTodos();
};

const buildTrash = () => {
  const main = document.querySelector(".main");
  const mainContainer = createDiv("main-container");
  const title = createH2("project-title");
  const desc = createPara("project-desc");
  const todoContainer = createDiv("todo-container");
  const projectContainer = createDiv("project-container");

  title.innerText = "Trash";
  desc.innerText = "All deleted todos & projects";

  mainContainer.append(title, desc, todoContainer, projectContainer);

  main.textContent = "";
  main.append(mainContainer);
  renderTodos();
  console.log("Trash page BUilt");
};

const buildProjectPage = (project, index) => {
  const main = document.querySelector(".main");
  const mainContainer = createDiv("main-container");
  const title = createH2("project-title");
  const desc = createPara("project-desc");
  const todoContainer = createDiv("todo-container");
  const createTodoBtn = createBtn("todo-create");
  const delProjectBtn = createBtn("project-delete");

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

  main.textContent = "";
  main.append(mainContainer);
  renderTodos();
};

export {
  buildGeneral,
  buildProjectPage,
  buildToday,
  buildUpcoming,
  buildTrash,
};
