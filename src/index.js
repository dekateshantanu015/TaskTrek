import { todos } from "./modules/todos";
import { buildPage } from "./modules/general";
import { openProjectModal } from "./modules/modal";

const main = document.querySelector(".main");
const navBtn = document.querySelector(".header-nav-btn");
main.append(buildPage());

navBtn.addEventListener("click", () => {
  openProjectModal();
});

const test = todos.filter(checkType);
function checkType(todo) {
  return todo.type === "random";
}

console.log(test);
