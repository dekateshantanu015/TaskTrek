import { createTodoCard } from "./create-dom-elements";

const todos = [
  {
    type: "General",
    checked: false,
    title: "Todo-title",
    date: "2022-07-20",
  },
  {
    type: "General",
    checked: false,
    title: "Todo-Title2",
    date: "2022-07-21",
  },
  {
    type: "Project-Title",
    checked: false,
    title: "Todo-Title3",
    date: "2022-07-22",
  },
  {
    type: "General",
    checked: false,
    title: "Todo-Title4",
    date: "2022-07-22",
  },
];

const todoFactory = (type, title, date) => {
  const checked = true;
  return { title, date, type, checked };
};

const createTodo = (type, title, date) => {
  const newTodo = todoFactory(type, title, date);
  todos.push(newTodo);
  renderTodos();
};

const removeTodo = (index) => {
  todos.splice(index, 1);
  console.log(todos);
  renderTodos();
};

const editTodo = (index, title, date) => {
  const currentTodo = todos[index];
  console.log(currentTodo);
  currentTodo.title = title;
  currentTodo.date = date;
  renderTodos();
};

const updateStatus = (index, value) => {
  todos[index].checked = value;
  console.log(todos);
};

const renderTodos = () => {
  const currentPage = document.querySelector(".project-title");
  const todoContainer = document.querySelector(".todo-container");
  todoContainer.textContent = "";

  const filterTodos = todos.filter((todo, index) => {
    todo.index = index;
    return todo.type === currentPage.innerText;
  });

  filterTodos.sort((a, b) => {
    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
  });

  filterTodos.forEach((todo) => createTodoCard(todo));
};

export { todos, createTodo, removeTodo, editTodo, updateStatus, renderTodos };
