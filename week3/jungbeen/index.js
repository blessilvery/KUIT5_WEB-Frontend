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
    input.value = "";
    render();
  }
});

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  render();
}

function toggleDone(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo = { ...todo, done: !todo.done };
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

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.onclick = () => toggleDone(todo.id);

    const btnsContainer = document.createElement("div");

    const updBtn = document.createElement("button");
    updBtn.textContent = "수정";
    updBtn.className = "updateBtn";
    updBtn.onclick = () => updateTodo(todo.id);

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.className = "deleteBtn";
    delBtn.onclick = () => deleteTodo(todo.id);

    btnsContainer.appendChild(updBtn);
    btnsContainer.appendChild(delBtn);
    li.appendChild(span);
    li.appendChild(btnsContainer);
    list.appendChild(li);
  });
}

function updateTodo(id) {
  const updateIdx = todos.findIndex((todo) => todo.id === id);

  //노드 선택
  const updateli = document.querySelector(
    `#todo-list>li:nth-child(${updateIdx + 1})`
  );
  const updateSpan = updateli.querySelector("span");
  const updateBtn = updateli.querySelector(".updateBtn");

  //span -> input
  const todoText = updateSpan.innerText;
  const updateInput = document.createElement("input");
  updateInput.value = todoText;
  updateInput.onkeydown = (e) => {
    if (e.key === "Enter") {
      //enter 시 수정 완료
      aplBtn.replaceWith(updateBtn);
      updateInput.replaceWith(updateSpan);
      updateSpan.innerText = updateInput.value;
      todos[updateIdx].text = updateInput.value;
    }
  };
  updateSpan.replaceWith(updateInput);

  //수정 버튼 -> 확인 버튼
  const aplBtn = document.createElement("button");
  aplBtn.textContent = "확인";
  aplBtn.className = "applyBtn";
  aplBtn.onclick = () => {
    //확인 버튼 클릭 시 수정 완료
    aplBtn.replaceWith(updateBtn);
    updateInput.replaceWith(updateSpan);
    updateSpan.innerText = updateInput.value;
    todos[updateIdx].text = updateInput.value;
  };
  updateBtn.replaceWith(aplBtn);
}
