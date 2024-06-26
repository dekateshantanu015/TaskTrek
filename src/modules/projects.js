import { buildGeneral, buildProjectPage } from "./build-pages";
import { createNavItem, createProjectCard } from "./create-dom-elements";
import { removeAllProjectTodos } from "./todos";

const LOCAL_STORAGE_PROJECTS_KEY = "todolist.projects";
const projects =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];

// const projects = [
//   { title: "Project-Title", desc: "Project-One", isTrash: false },
//   { title: "Project-Title2", desc: "Project-Two", isTrash: true },
//   { title: "Project-Title3", desc: "Project-Three", isTrash: false },
//   { title: "Test1", desc: "Project Three", isTrash: false },
//   { title: "Test2", desc: "Project Three", isTrash: false },
//   { title: "Test3", desc: "Project Three", isTrash: false },
//   { title: "Test4", desc: "Project Three", isTrash: false },
//   { title: "Test5", desc: "Project Three", isTrash: false },
//   { title: "Test6", desc: "Project Three", isTrash: false },
//   { title: "Test7", desc: "Project Three", isTrash: false },
//   { title: "Test8", desc: "Project Three", isTrash: false },
//   { title: "Test9", desc: "Project Three", isTrash: false },
// ];

const saveProjects = () => {
  localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(projects));
};

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

const editProject = (project, title, desc) => {
  const currentProject = projects[project.iD];
  currentProject.title = title;
  currentProject.desc = desc;
  renderProjectNav();
  buildProjectPage(project, project.iD);
};

const removeProject = (project, index) => {
  if (project.isTrash) {
    removeAllProjectTodos(project);
    projects.splice(index, 1);
    renderTrashProjects();
  } else {
    project.isTrash = true;
    renderProjectNav();
    buildGeneral();
  }
  console.log(projects);
  renderProjectNav();
};

const restoreProject = (project) => {
  project.isTrash = false;
  renderTrashProjects();
  renderProjectNav();
};

const renderProjectNav = () => {
  const projectNav = document.querySelector("#projects-list");
  projectNav.textContent = "";
  projects.forEach((project, index) => {
    project.iD = index;
    if (project.isTrash === false) {
      const navItem = createNavItem("header-nav-item", project.title);
      navItem.addEventListener("click", () => buildProjectPage(project, index));
      projectNav.append(navItem);
    }
  });
  saveProjects();
};

const renderTrashProjects = () => {
  const projectContainer = document.querySelector(".project-container");
  projectContainer.innerText = "";
  projects.forEach((project, index) => {
    if (project.isTrash) createProjectCard(project, index);
  });
  saveProjects();
};

export {
  projects,
  createProject,
  removeProject,
  editProject,
  renderProjectNav,
  restoreProject,
  renderTrashProjects,
};
