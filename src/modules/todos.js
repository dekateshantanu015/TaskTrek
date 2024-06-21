import { createTodoCard } from "./create-dom-elements";

const todos = [
  {
    type: "general",
    checked: false,
    title: "Todo-title",
    date: "2022-07-20",
  },
  {
    type: "general",
    checked: false,
    title: "Todo-Title2",
    date: "2022-07-21",
  },
  {
    type: "general",
    checked: false,
    title: "Todo-Title3",
    date: "2022-07-22",
  },
];

const todoFactory = (title, date) => {
  const type = "general";
  const checked = true;
  return { title, date, type, checked };
};

const createTodo = (title, date) => {
  const newTodo = todoFactory(title, date);
  todos.push(newTodo);
  renderTodos();
};

const removeTodo = (index) => {
  todos.splice(index, 1);
  renderTodos();
};

const editTodo = (index, title, date) => {
  const newTodo = todoFactory(title, date);
  todos.splice(index, 1, newTodo);
  renderTodos();
};

const updateStatus = (index, value) => {
  todos[index].checked = value;
};

const renderTodos = () => {
  const todoContainer = document.querySelector(".todo-container");
  todoContainer.textContent = "";
  todos.forEach((todo, index) =>
    todoContainer.append(createTodoCard(todo, index))
  );
};

export { todos, createTodo, removeTodo, editTodo, updateStatus };
