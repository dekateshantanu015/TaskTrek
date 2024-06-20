import { todos } from "./todos";
import { createBtn, createDiv, createH2, createPara, createTodoCard } from "./create-dom-elements";

const todoContent = () => {
    const newTodo = todos[0];
    return newTodo;
};

const buildPage = () => {
    const mainContainer = createDiv('main-container');
    const title = createH2('project-title');
    const desc = createPara('project-desc');
    const todoContainer = createDiv('todo-container');
    const btn = createBtn('todo-create');

    title.innerText = "General";
    desc.innerText = "A general list of random todos";
    todoContainer.append(todoContent());
    btn.innerText = "+";

    mainContainer.append(title, desc, todoContainer, btn);
    return mainContainer;
};

export {
    buildPage,
}