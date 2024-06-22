import { createTodoCard } from "./create-dom-elements";
import { format, compareAsc, addDays, eachDayOfInterval } from "date-fns";

const todos = [
  {
    type: "General",
    checked: false,
    title: "Todo-title",
    date: "2022-07-20",
    isTrash: false,
  },
  {
    type: "General",
    checked: false,
    title: "Todo-Title2",
    date: "2022-07-21",
    isTrash: false,
  },
  {
    type: "Project-Title",
    checked: false,
    title: "Todo-Title3",
    date: "2022-07-22",
    isTrash: false,
  },
  {
    type: "General",
    checked: false,
    title: "Todo-Title4",
    date: "2022-07-22",
    isTrash: false,
  },
  {
    type: "General",
    checked: false,
    title: "Trash-Todo",
    date: "2022-07-22",
    isTrash: true,
  },
];

const todoFactory = (type, title, date) => {
  const checked = false;
  const isTrash = false;
  return { title, date, type, checked, isTrash };
};

const createTodo = (type, title, date) => {
  const newTodo = todoFactory(type, title, date);
  todos.push(newTodo);
  renderTodos();
};

const removeTodo = (todo) => {
  if (todo.isTrash) {
    todos.splice(todo.index, 1);
    console.log(todos);
    renderTodos();
  } else {
    todos[todo.index].isTrash = true;
    console.log(todos);
    renderTodos();
  }
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
  const filteredTodos = filterTodos(currentPage.innerText);
  todoContainer.textContent = "";

  filteredTodos.forEach((todo) => createTodoCard(todo));
};

const filterTodos = (currentPage) => {
  if (currentPage === "Today") {
    const filteredTodos = todos.filter((todo, index) => {
      todo.index = index;
      return (
        todo.date === format(new Date(), "yyyy-MM-dd") && todo.isTrash === false
      );
    });
    return filteredTodos;
  } else if (currentPage === "Upcoming") {
    const dates = eachDayOfInterval({
      start: addDays(new Date(), 1),
      end: addDays(new Date(), 7),
    });

    dates.forEach((date, index) =>
      dates.splice(index, 1, format(date, "yyyy-MM-dd"))
    );

    const filteredTodos = todos.filter((todo, index) => {
      todo.index = index;
      return dates.includes(todo.date) && todo.isTrash === false;
    });
    return filteredTodos;
  } else if (currentPage === "Trash") {
    const filteredTodos = todos.filter((todo, index) => {
      todo.index = index;
      return todo.isTrash === true;
    });
    filteredTodos.sort((a, b) => {
      return compareAsc(new Date(a.date), new Date(b.date));
    });
    return filteredTodos;
  } else {
    const filteredTodos = todos.filter((todo, index) => {
      todo.index = index;
      return todo.type === currentPage && todo.isTrash === false;
    });

    filteredTodos.sort((a, b) => {
      return compareAsc(new Date(a.date), new Date(b.date));
    });
    return filteredTodos;
  }
};

export { todos, createTodo, removeTodo, editTodo, updateStatus, renderTodos };
