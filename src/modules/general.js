import { todos } from "./todos";
import {
  createBtn,
  createDiv,
  createH2,
  createPara,
  createTodoCard,
} from "./create-dom-elements";
import { openModal } from "./modal";

const buildPage = () => {
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
  todos.forEach((todo, index) =>
    todoContainer.append(createTodoCard(todo, index))
  );

  mainContainer.append(title, desc, todoContainer, btn);

  main.textContent = "";
  main.append(mainContainer);
};

export { buildPage };
