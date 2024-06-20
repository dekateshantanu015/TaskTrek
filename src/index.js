import { todos } from "./modules/todos";
import { buildPage } from "./modules/general";

const main = document.querySelector('.main');

main.append(buildPage());
