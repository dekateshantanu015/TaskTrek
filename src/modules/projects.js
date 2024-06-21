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
};

const removeProject = (index) => {
  projects.splice(index, 1);
};

export { createProject, removeProject };
