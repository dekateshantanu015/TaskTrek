import { createTodoCard } from "./create-dom-elements";
import { format, compareAsc, addDays, eachDayOfInterval } from "date-fns";

const todos = [
  {
    type: "General",
    checked: false,
    title: "Todo-title",
    date: "2022-07-20",
    isTrash: false,
    isImportant: false,
  },
  {
    type: "General",
    checked: false,
    title: "Todo-Title2",
    date: "2022-07-21",
    isTrash: false,
    isImportant: false,
  },
  {
    type: "0",
    checked: false,
    title: "Todo-Title3",
    date: "2022-07-22",
    isTrash: false,
    isImportant: false,
  },
  {
    type: "General",
    checked: false,
    title: "Todo-Title4",
    date: "2022-07-22",
    isTrash: false,
    isImportant: false,
  },
  {
    type: "General",
    checked: false,
    title: "Trash-Todo",
    date: "2022-07-22",
    isTrash: true,
    isImportant: true,
  },
  {
    type: "General",
    checked: false,
    title: "Todo-Title",
    date: "2022-07-20",
    isTrash: false,
    isImportant: false,
  },
  {
    type: "General",
    checked: false,
    title: "Todo-Title",
    date: "2022-07-20",
    isTrash: false,
    isImportant: false,
  },
  {
    type: "General",
    checked: false,
    title: "Todo-Title",
    date: "2022-07-20",
    isTrash: false,
    isImportant: false,
  },
  {
    type: "General",
    checked: false,
    title: "Todo-Title",
    date: "2022-07-20",
    isTrash: false,
    isImportant: false,
  },
  {
    type: "General",
    checked: false,
    title: "Todo-Title",
    date: "2022-07-20",
    isTrash: false,
    isImportant: false,
  },
  {
    type: "General",
    checked: false,
    title: "Todo-Title",
    date: "2022-07-20",
    isTrash: false,
    isImportant: false,
  },
  {
    type: "General",
    checked: false,
    title: "Todo-Title",
    date: "2022-07-20",
    isTrash: false,
    isImportant: false,
  },
  {
    type: "General",
    checked: false,
    title: "Todo-Title",
    date: "2022-07-20",
    isTrash: false,
    isImportant: false,
  },
];

const todoFactory = (type, title, date, isImportant) => {
  const checked = false;
  const isTrash = false;
  return { title, date, type, checked, isImportant, isTrash };
};

const createTodo = (type, title, date, isImportant) => {
  const newTodo = todoFactory(type, title, date, isImportant);
  todos.push(newTodo);
  console.log(todos);
  renderTodos();
};

const removeTodo = (todo) => {
  if (todo.isTrash) {
    todos.splice(todo.index, 1);
    renderTodos();
  } else {
    todos[todo.index].isTrash = true;
    renderTodos();
  }
};

const editTodo = (index, title, date, isImportant) => {
  const currentTodo = todos[index];
  currentTodo.title = title;
  currentTodo.date = date;
  currentTodo.isImportant = isImportant;
  renderTodos();
};

const updateStatus = (index, value) => {
  todos[index].checked = value;
  setTimeout(renderTodos(), 2000);
};

const removeAllProjectTodos = (project) => {
  todos.forEach((todo, index) => {
    if (todo.type == project.iD) {
      todos.splice(index, 1);
    }
  });
};

const restoreTodo = (todo) => {
  todos[todo.index].isTrash = false;
  renderTodos();
};

const renderTodos = () => {
  const currentPage = document
    .querySelector(".main-container")
    .getAttribute("data-id");

  const todoContainer = document.querySelector(".todo-container");
  const filteredTodos = filterTodos(currentPage);
  todoContainer.textContent = "";

  filteredTodos.forEach((todo) => createTodoCard(todo));
};

const filterTodos = (currentPage) => {
  const sortBtn = document.querySelector(".todo-sort");

  const filteredTodos = todos.filter((todo, index) => {
    todo.index = index;
    switch (currentPage) {
      case "Today":
        return (
          todo.date === format(new Date(), "yyyy-MM-dd") &&
          todo.isTrash === false &&
          todo.checked === false
        );

      case "Upcoming":
        const dates = getDates();
        return (
          dates.includes(todo.date) &&
          todo.isTrash === false &&
          todo.checked === false
        );

      case "Trash":
        return todo.isTrash === true;

      case "Completed":
        return todo.checked === true && todo.isTrash === false;

      default:
        if (sortBtn && sortBtn.innerText === "Important") {
          return (
            todo.type === currentPage &&
            todo.isTrash === false &&
            todo.isImportant === true &&
            todo.checked === false
          );
        }
        return (
          todo.type === currentPage &&
          todo.isTrash === false &&
          todo.checked === false
        );
    }
  });

  filteredTodos.sort((a, b) => {
    return compareAsc(new Date(a.date), new Date(b.date));
  });
  return filteredTodos;
};

const getDates = () => {
  const dates = eachDayOfInterval({
    start: addDays(new Date(), 1),
    end: addDays(new Date(), 7),
  });

  dates.forEach((date, index) =>
    dates.splice(index, 1, format(date, "yyyy-MM-dd"))
  );
  return dates;
};

export {
  todos,
  createTodo,
  removeTodo,
  editTodo,
  updateStatus,
  removeAllProjectTodos,
  renderTodos,
  restoreTodo,
};
