/* 
method 채우기 + 삭제 옆 수정 버튼 만들고 update to do 도 구현
각 todo는 다른 id 가져야함 -> date() 객체 사용
스프레드 연산자, map(), filter() 어디서 사용했는지를 꼭 언급해서 PR 올릴 것!
*/

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
    todo.id == id ? { ...todo, done: !todo.done } : todo
  );
  render();
}

function updateTodo(id) {
  const todoItem = document.querySelector(`li[data-id="${id}"]`);
  const contentSpan = todoItem.querySelector(".content");
  const currentText = contentSpan.textContent;

  // 입력 필드 생성
  const input = document.createElement("input");
  input.type = "text";
  input.value = currentText;
  input.className = "edit-input";

  // Enter 키 이벤트 처리
  const handleUpdate = () => {
    const newText = input.value.trim();
    if (newText) {
      todos = todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      );
      render();
    }
  };

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleUpdate();
    }
  });

  // 수정 버튼 클릭 이벤트 처리
  const updateBtn = todoItem.querySelector(".update");
  updateBtn.onclick = () => {
    if (input.parentNode === todoItem) {
      handleUpdate();
    } else {
      contentSpan.replaceWith(input);
      input.focus();
    }
  };

  // 기존 span을 input으로 교체
  contentSpan.replaceWith(input);
  input.focus();
}

function render() {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";
    li.setAttribute("data-id", todo.id);

    const span = document.createElement("span");
    span.className = "content";
    span.textContent = todo.text;
    span.style.cursor = "pointer";

    // toggleDone 이벤트를 li 요소에 추가
    li.onclick = (e) => {
      // 수정 버튼이나 삭제 버튼 클릭 시에는 toggleDone이 실행되지 않도록
      if (
        !e.target.classList.contains("update") &&
        !e.target.classList.contains("delete")
      ) {
        toggleDone(todo.id);
      }
    };

    const updateBtn = document.createElement("button");
    updateBtn.className = "update";
    updateBtn.textContent = "수정";
    updateBtn.onclick = (e) => {
      e.stopPropagation(); // 이벤트 버블링 방지
      updateTodo(todo.id);
    };

    const delBtn = document.createElement("button");
    delBtn.className = "delete";
    delBtn.textContent = "삭제";
    delBtn.onclick = (e) => {
      e.stopPropagation(); // 이벤트 버블링 방지
      deleteTodo(todo.id);
    };

    li.appendChild(span);
    li.appendChild(updateBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}
