let todos = [];

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    const newTodo = {
      id: Date.now(),
      text,
      done: false,
    };
    todos.push(newTodo);
    input.value = "";
    render();
  }
});

function deleteTodo(id) {
  const newList = todos.filter((todo) => id !== todo.id);
  todos = newList;
  render();
}

function toggleDone(id) {
  //코드1
  const newTodo = todos.map((todo) =>
    id === todo.id ? { ...todo, done: !todo.done } : todo
  );
  todos = newTodo;

  //코드2
  // const itemDone = todos.find((todo) => id === todo.id);
  // itemDone.done = !itemDone.done;
  render();
}

function render() {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    // li.className = todo.done ? "done" : "";

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.className = todo.done ? "done" : "";
    span.onclick = () => toggleDone(todo.id);

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    const updBtn = document.createElement("img");
    updBtn.onclick = (e) => updateTodo(todo.id, span);

    li.appendChild(span);
    li.appendChild(updBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}
function updateTodo(id, span) {
  const input = document.createElement("input");
  input.type = "text";
  input.value = span.textContent;

  span.innerHTML = "";
  span.appendChild(input);
  span.onclick = null;

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const newList = todos.map((todo) =>
        id === todo.id ? { ...todo, text: input.value } : todo
      );
      todos = newList;
      render();
    }
  });
}
