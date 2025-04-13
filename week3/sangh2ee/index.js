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
      done: false
    };
    todos.push(newTodo);
    input.value="";
    render();
  }
});

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    render();
}

function toggleDone(id) {
    todos = todos.map(todo => 
    todo.id === id ? {...todo, done: !todo.done} : todo);

    render();
}

function render() {
  list.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.classList.add("clickable-text");
    span.onclick = () => toggleDone(todo.id);

    const btnBox = document.createElement("div");
    btnBox.classList.add("btn-box");

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    const editBtn = document.createElement("button");
    editBtn.textContent = "수정";
    editBtn.onclick = () => updateTodo(todo.id, span);

    btnBox.appendChild(editBtn);
    btnBox.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(btnBox);
    list.appendChild(li);
  });
}

function updateTodo(id, span) {
  const input = document.createElement("input");
  input.type = "text";
  input.value = span.textContent;
  input.classList.add("edit-input");

  const parent = span.parentNode;
  parent.replaceChild(input, span);
  input.focus();

  const finishEdit = () => {
    const newText = input.value.trim();
    if (newText !== "") {
      todos = todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      );
    }
    render();
  };

  input.addEventListener("keydown", e => {
    if (e.key === "Enter") finishEdit();
  });

}