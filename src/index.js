import { todos } from "./modules/todos";
import { buildGeneral } from "./modules/build-pages";
import { openProjectModal } from "./modules/modal";
import { renderProjectNav } from "./modules/projects";
z;

const navBtn = document.querySelector(".header-nav-btn");
const navLinks = document.querySelectorAll(".header-main-nav-link");
main.append(buildPage());

navBtn.addEventListener("click", () => {
  openProjectModal();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    console.log(link.innerText);
    switch (link.innerText) {
      case "General":
        buildGeneral();
        break;
      case "Today":
        break;
      case "Upcoming":
        break;
      case "Trash":
        break;
    }
  });
});

renderProjectNav();

const test = todos.filter(checkType);
function checkType(todo) {
  return todo.type === "random";
}

console.log(test);
