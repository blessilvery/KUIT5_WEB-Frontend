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
  todos = todos.filter((todo) => todo.id !== id);
  render();
}

function toggleDone(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
  render();
}

function render() {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.className = todo.done ? "text done" : "text";
    span.onclick = () => toggleDone(todo.id);

    const delBtn = document.createElement("button");
    delBtn.className = "delete";
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    const editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.textContent = "수정";
    editBtn.onclick = () => {
      editBtn.className = "done1";
      editBtn.textContent = "완료";

      const input = document.createElement("input");
      input.type = "text";
      input.value = todo.text;

      li.replaceChild(input, span);
      setTimeout(() => input.focus(), 0);

      const save = () => {
        const newText = input.value.trim();
        if (newText !== "") {
          todo.text = newText;
          render();
        }
      };

      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          save();
        }
      });
      editBtn.onclick = save;
    };

    const buttonGroup = document.createElement("div");
    buttonGroup.className = "button-group";

    buttonGroup.appendChild(editBtn);
    buttonGroup.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(buttonGroup);
    list.appendChild(li);
  });
}
function updateTodo() {}
