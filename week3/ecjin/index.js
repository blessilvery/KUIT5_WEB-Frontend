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

    todos.unshift(newTodo);
    input.value = "";  // 입력 필드 초기화
    render();  // UI 업데이트
  }
  
});

function deleteTodo(id) {
  todos = todos.filter(todos => todos.id !== id);
  render();
}

function toggleDone(id) {
  return new Promise((resolve, reject) => {
      const todo = todos.find(todo => todo.id === id);
      if (todo) {
          todo.done = !todo.done;
          resolve(todo);
      } else {
          reject("할 일을 찾을 수 없습니다.");
      }
  })
  .then(() => render()) // 상태 변경 후 UI 업데이트
  .catch(() => render());
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
    
    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

function updateTodo(){
    todos = todos.map
}