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
    todos = [...todos, newTodo];
    input.value = "";
    render();//화면에 그리는 함수라고 합니다
  }
});

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  render();
}

function toggleDone(id) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
  render();
}

function updateTodo(id, newText) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, text: newText } : todo
  );
  render();
}

function render() {
  list.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.onclick = () => toggleDone(todo.id);

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = todo.text;
    editInput.style.display = "none";
    editInput.onkeypress = (e) => {
      if (e.key === "Enter") {
        updateTodo(todo.id, editInput.value.trim());
      }
    };

    const editBtn = document.createElement("button");
    editBtn.textContent = "수정";
    editBtn.onclick = () => {
      span.style.display = "none";
      editInput.style.display = "inline";
      editInput.focus();
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    li.appendChild(span);
    li.appendChild(editInput);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}
