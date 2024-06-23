import { buildGeneral, buildProjectPage } from "./build-pages";
import { createNavItem, createProjectCard } from "./create-dom-elements";

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
    renderTrashProject();
  } else {
    project.isTrash = true;
    buildGeneral();
  }
  console.log(projects);
  renderProjectNav();
};

const restoreProject = (project) => {
  project.isTrash = false;
  renderTrashProject();
  renderProjectNav();
};

const renderProjectNav = () => {
  const projectNav = document.querySelector("#projects-list");
  projectNav.textContent = "";
  projects.forEach((project, index) => {
    project.iD = index;
    if (project.isTrash === false) {
      const navItem = createNavItem(".header-nav-item", project.title);
      navItem.addEventListener("click", () => buildProjectPage(project, index));
      projectNav.append(navItem);
    }
  });
};

const renderTrashProjects = () => {
  const projectContainer = document.querySelector(".project-container");
  projectContainer.innerText = "";
  projects.forEach((project, index) => {
    if (project.isTrash) createProjectCard(project, index);
  });
};

export {
  createProject,
  removeProject,
  renderProjectNav,
  restoreProject,
  renderTrashProjects,
};
