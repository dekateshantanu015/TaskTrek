import {
  buildGeneral,
  buildToday,
  buildUpcoming,
  buildTrash,
} from "./modules/build-pages";
import { openProjectModal } from "./modules/modal";
import { renderProjectNav } from "./modules/projects";

const navBtn = document.querySelector(".header-nav-btn");
const navLinks = document.querySelectorAll(".header-main-nav-link");

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
        buildToday();
        break;
      case "Upcoming":
        buildUpcoming();
        break;
      case "Trash":
        buildTrash();
        break;
    }
  });
});

renderProjectNav();
