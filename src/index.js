import { todos } from "./modules/todos";
import { createTodoCard } from "./modules/create-dom-elements";

const todoContainer = document.querySelector('.todo-container');

const newTodo = createTodoCard(todos[0]);

todoContainer.append(newTodo);

console.log(newTodo);