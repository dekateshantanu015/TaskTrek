import { buildGeneral, buildProjectPage } from "./build-pages";
import { createNavItem } from "./create-dom-elements";

const projects = [
  { title: "Project-Title", desc: "Project-One", isTrash: false },
  { title: "Project-Title2", desc: "Project-Two", isTrash: true },
  { title: "Project-Title3", desc: "Project-Three", isTrash: false },
];

const projectFactory = (title, desc) => {
  isTrash = false;
  return { title, desc, isTrash };
};

const createProject = (title, desc) => {
  const newProject = projectFactory(title, desc);
  projects.push(newProject);
  console.log(projects);
  renderProjectNav();
};

const removeProject = (project, index) => {
  if (project.isTrash) {
    projects.splice(index, 1);
  } else {
    project.isTrash = true;
    buildGeneral();
  }
  console.log(projects);
  renderProjectNav();
};

const renderProjectNav = () => {
  const projectNav = document.querySelector("#projects-list");
  projectNav.textContent = "";
  projects.forEach((project, index) => {
    if (project.isTrash === false) {
      const navItem = createNavItem(".header-nav-item", project.title);
      navItem.addEventListener("click", () => buildProjectPage(project, index));
      projectNav.append(navItem);
    }
  });
};

export { createProject, removeProject, renderProjectNav };
