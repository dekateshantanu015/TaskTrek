import { todos } from "./modules/todos";
import { buildPage } from "./modules/general";

const main = document.querySelector('.main');

const newTodo = createTodoCard(todos[0]);

main.append(buildPage());
