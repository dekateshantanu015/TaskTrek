import { todos } from "./modules/todos";
import { buildPage } from "./modules/general";

const main = document.querySelector(".main");

main.append(buildPage());

const test = todos.filter(checkType);
function checkType(todo) {
  return todo.type === "random";
}

console.log(test);
