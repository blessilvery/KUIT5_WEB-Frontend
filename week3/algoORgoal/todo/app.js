const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");
const addButtonEl = document.getElementById("addButton");

// 메모리에서 todos 관리
let todos = [];

function renderTodo(newTodos) {
  todoListEl.innerHTML = "";
  newTodos.forEach((todo) => {
    const listEl = document.createElement("li");
    listEl.setAttribute("data-id", todo.id);

    // 텍스트를 span으로 감싸기
    const titleSpan = document.createElement("span");
    titleSpan.textContent = todo.title;
    listEl.appendChild(titleSpan);

    const deleteEl = document.createElement("span");
    deleteEl.textContent = "🗑️";
    deleteEl.className = "deleteBtn";
    deleteEl.onclick = () => deleteTodo(todo.id);

    const updateEl = document.createElement("span");
    updateEl.textContent = "✏️";
    updateEl.className = "updateBtn";
    updateEl.onclick = () => updateTodo(todo.id);

    listEl.append(deleteEl);
    listEl.append(updateEl);
    todoListEl.append(listEl);
  });
}

function addTodo() {
  const title = todoInputEl.value;
  const date = new Date();
  const createdAt = date.toDateString();

  if (!title) return;

  const newTodo = {
    id: date.getTime(),
    title,
    createdAt,
  };

  todos = [...todos, newTodo];
  todoInputEl.value = "";
  renderTodo(todos);
}

// 초기 렌더링
renderTodo(todos);

// 입력 필드에서 Enter 키 이벤트 처리
todoInputEl.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

// 추가 버튼 클릭 이벤트 처리
addButtonEl.addEventListener("click", addTodo);

const updateTodo = (todoId) => {
  const todoItem = document.querySelector(`[data-id="${todoId}"]`);
  const inputContent = document.createElement("input");
  inputContent.type = "text";
  inputContent.className = "updateInput";
  inputContent.value = todoItem.firstChild.textContent;

  //add event listener
  const fetchUpdate = () => {
    const updatedTitle = inputContent.value;
    todos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, title: updatedTitle } : todo
    );
    renderTodo(todos);
  };

  const enterKeyEvent = (e) => {
    if (e.key === "Enter") {
      fetchUpdate();
    }
  };

  const blurEvent = () => {
    fetchUpdate();
  };

  inputContent.addEventListener("keyup", enterKeyEvent);
  inputContent.addEventListener("blur", blurEvent);

  //remove origin title & insert input
  todoItem.removeChild(todoItem.childNodes[0]);
  todoItem.insertBefore(inputContent, todoItem.firstChild);
  inputContent.focus();
};

const deleteTodo = (todoId) => {
  todos = todos.filter((todo) => todo.id !== todoId);
  renderTodo(todos);
};
