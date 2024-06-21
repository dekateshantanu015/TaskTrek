const todos = [
  {
    type: "general",
    checked: false,
    title: "Todo-title",
    date: "dd-mm-yy",
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
  console.log(todos);
};

export { todos, createTodo };
