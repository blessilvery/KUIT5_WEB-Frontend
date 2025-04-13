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
    render();
    input.value = "";
  }
});

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  render();
}

function toggleDone(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.done = !todo.done;
    }
    return todo;
  });
  render();
}

function render() {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";
    li.id = todo.id;

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.onclick = () => toggleDone(todo.id);

    const div = document.createElement("div");

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.classList.add("deleteButton");
    delBtn.onclick = () => deleteTodo(todo.id);

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "수정";
    updateBtn.classList.add("editButton");
    updateBtn.onclick = () => updateTodo(todo.id);

    li.appendChild(span);
    li.appendChild(div);
    div.appendChild(updateBtn);
    div.appendChild(delBtn);
    list.appendChild(li);
  });
}

function updateTodo(id) {
  //console.log(typeof id); //number
  Array.from(list.children).forEach((li) => {
    //console.log(typeof li.id); //string
    if (Number(li.id) === id) {
      //li태그들의 리스트 중 같은 id값 가진 li태그 색출
      const span = li.childNodes[0];
      const text = li.childNodes[0].innerText;
      const editButton = li.childNodes[1].childNodes[0];

      const input = document.createElement("input");
      const confirmButton = document.createElement("button");

      input.type = "text";
      input.value = text;

      confirmButton.textContent = "완료";
      confirmButton.classList.add("confirmButton");
      confirmButton.onclick = () => {
        const index = todos.findIndex((todo) => todo.id === id);
        todos.forEach((todo) => {
          if (index !== -1) {
            todos[index] = { ...todos[index], text: input.value };
          }
        });
        render();
      };

      span.replaceWith(input);
      input.focus();
      editButton.replaceWith(confirmButton);
    }
  });
}
