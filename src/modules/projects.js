import { createNavItem } from "./create-dom-elements";

const projects = [
  { title: "Project-Title", desc: "Project-One" },
  { title: "Project-Title2", desc: "Project-Two" },
  { title: "Project-Title3", desc: "Project-Three" },
];

const projectFactory = (title, desc) => {
  return { title, desc };
};

const createProject = (title, desc) => {
  const newProject = projectFactory(title, desc);
  projects.push(newProject);
  console.log(projects);
  renderProjectNav();
};

const removeProject = (index) => {
  projects.splice(index, 1);
};

const renderProjectNav = () => {
  const projectNav = document.querySelector("#projects-list");
  projectNav.textContent = "";
  projects.forEach((project) => {
    const navItem = createNavItem(".header-nav-item", project.title);
    projectNav.append(navItem);
  });
};

export { createProject, removeProject, renderProjectNav };
