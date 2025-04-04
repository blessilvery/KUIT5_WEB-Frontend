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
    todos = [...todos, newTodo];
    document.getElementById("todo-input").value = "";
    render();
  }
});

function deleteTodo(id) {
  // 배열을 순회하며 id가 동일한 todo를 찾는다. -> 해당 요소를 제거하기
  const deleteTodo = todos.find((todo) => todo.id === id);
  const deleteIdx = todos.indexOf(deleteTodo);
  todos.splice(deleteIdx, 1);
  render();
}

function toggleDone(id) {
  const doneTodo = todos.find((todo) => todo.id == id);
  if (doneTodo.done === true) {
    doneTodo.done = false;
  } else {
    doneTodo.done = true;
  }
  render();
}

function render() {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";

    if (todo.editing) {
      // 수정하고 있는 todo인 경우 (input 태그 사용해서 수정 가능)
      const input = document.createElement("input");
      input.type = "text";
      input.value = todo.text;
      input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          editDone(todo.id, input.value);
        }
      });
      const doneBtn = document.createElement("button");
      doneBtn.textContent = "수정완료";
      doneBtn.className = "edit-done";
      doneBtn.onclick = () => editDone(todo.id, input.value);

      li.appendChild(input);
      li.appendChild(doneBtn);
      list.appendChild(li);
    } else {
      // 수정하고 있지 않은 todo인 경우 (span 태그. 수정 불가능)
      const span = document.createElement("span");
      span.textContent = todo.text;
      span.style.cursor = "pointer";
      span.onclick = () => toggleDone(todo.id);

      const delBtn = document.createElement("button");
      delBtn.getElementsByClassName.value = "update";
      delBtn.textContent = "삭제";
      delBtn.className = "delete";
      delBtn.onclick = () => deleteTodo(todo.id);

      const updBtn = document.createElement("button");
      updBtn.textContent = "수정";
      updBtn.className = "update";
      updBtn.onclick = () => updateTodo(todo.id);

      const actions = document.createElement("div");
      actions.className = "actions";
      actions.appendChild(delBtn);
      actions.appendChild(updBtn);

      li.appendChild(span);
      li.appendChild(actions);
      list.appendChild(li);
    }
  });
}
function updateTodo(id) {
  const updateTodo = todos.find((todo) => todo.id === id);
  if (updateTodo) {
    updateTodo.editing = true;
  }
  render();
}

function editDone(id, newText) {
  const updateTodo = todos.find((todo) => todo.id === id);
  if (updateTodo) {
    updateTodo.text = newText;
    updateTodo.editing = false;
    render();
  }
}
