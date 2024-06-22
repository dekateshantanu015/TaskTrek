import { renderTodos } from "./todos";
import {
  createBtn,
  createDiv,
  createH2,
  createPara,
  createTodoCard,
} from "./create-dom-elements";
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

  title.innerText = "Trash";
  desc.innerText = "All deleted todos";

  mainContainer.append(title, desc, todoContainer);

  main.textContent = "";
  main.append(mainContainer);
  renderTodos();
  console.log("Trash page BUilt");
};

const buildProjectPage = (project) => {
  const main = document.querySelector(".main");
  const mainContainer = createDiv("main-container");
  const title = createH2("project-title");
  const desc = createPara("project-desc");
  const todoContainer = createDiv("todo-container");
  const btn = createBtn("todo-create");

  title.innerText = project.title;
  desc.innerText = project.desc;
  btn.innerText = "+";
  btn.addEventListener("click", () => openModal());

  mainContainer.append(title, desc, todoContainer, btn);

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
