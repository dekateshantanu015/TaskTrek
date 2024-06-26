import { renderTodos } from "./todos";
import {
  createBtn,
  createDiv,
  createH1,
  createH3,
  createPara,
  createSvg,
} from "./create-dom-elements";
import { editProject, removeProject, renderTrashProjects } from "./projects";
import { openEditProjectModal, openModal } from "./modal";

const buildGeneral = () => {
  const mainContainer = document.querySelector(".main-container");

  const title = createH1("project-title");
  const desc = createPara("project-desc");
  const todoContainer = createDiv("todo-container");
  const btnContainer = createDiv("project-controls");
  const createTodoBtn = createBtn("todo-create");
  const sortBtn = createBtn("todo-sort");

  mainContainer.setAttribute("data-id", "General");
  title.innerText = "General";
  desc.innerText = "A general list of random todos";
  createTodoBtn.append(createSvg("plus"), "Create Todo");
  createTodoBtn.addEventListener("click", () => openModal());

  sortBtn.innerText = "All";
  sortBtn.addEventListener("click", () => {
    sortBtn.innerText === "All"
      ? (sortBtn.innerText = "Important")
      : (sortBtn.innerText = "All");

    renderTodos();
  });

  btnContainer.append(sortBtn, createTodoBtn);
  mainContainer.textContent = "";
  mainContainer.append(title, desc, btnContainer, todoContainer);

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

const buildCompleted = () => {
  const mainContainer = document.querySelector(".main-container");

  const title = createH1("project-title");
  const desc = createPara("project-desc");
  const todoContainer = createDiv("todo-container");

  mainContainer.setAttribute("data-id", "Completed");
  title.innerText = "Completed";
  desc.innerText = "List of all the Completed Todos";

  mainContainer.textContent = "";
  mainContainer.append(title, desc, todoContainer);
  renderTodos();
  renderTrashProjects();
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
  const titleContainer = createDiv("project-title-container");
  const todoContainer = createDiv("todo-container");
  const btnContainer = createDiv("project-controls");
  const createTodoBtn = createBtn("todo-create");
  const delProjectBtn = createBtn("project-delete");
  const editProjectBtn = createBtn("project-edit");
  const sortBtn = createBtn("todo-sort");

  mainContainer.setAttribute("data-id", index);
  title.innerText = project.title;
  desc.innerText = project.desc;
  createTodoBtn.append(createSvg("plus"), "Create Todo");
  createTodoBtn.addEventListener("click", () => openModal());
  delProjectBtn.append(createSvg("delete"), "Delete Project");
  delProjectBtn.addEventListener("click", () => removeProject(project, index));
  editProjectBtn.append(createSvg("delete"), "Edit Project");
  editProjectBtn.addEventListener("click", () => openEditProjectModal(project));

  sortBtn.innerText = "All";
  sortBtn.addEventListener("click", () => {
    sortBtn.innerText === "All"
      ? (sortBtn.innerText = "Important")
      : (sortBtn.innerText = "All");

    renderTodos();
  });

  btnContainer.append(sortBtn, createTodoBtn);
  titleContainer.append(btnContainer, editProjectBtn, delProjectBtn);

  mainContainer.textContent = "";
  mainContainer.append(titleContainer, desc, btnContainer, todoContainer);

  renderTodos();
};

export {
  buildGeneral,
  buildProjectPage,
  buildToday,
  buildUpcoming,
  buildCompleted,
  buildTrash,
};
