// spread 연산자, map, filter를 사용한 to-do list만들기

// 1. input 박스에 텍스트 입력 후 추가 버튼을 누르면, 새로운 todo가 리스트에 추가
// 2. 추가된 todo가 반영된 리스트가 보이도록 렌더링 필요
// 3. input 박스 초기화
// 4. 삭제 버튼을 누르면 리스트에서 삭제
// 5. 삭제된 리스트가 안보이도록 렌더링 필요
// 6. todo 리스트 항목 클릭시, 취소선 + 회색처리 (done className 추가)
// 7. 한 번 더 클릭 시 원상복귀
// 8. 각 todo 리스트 항목은 서로 다른 id를 가져야함 -> Date 객체 활용
// 9. 삭제 버튼 옆에 수정버튼을 추가하고 클릭 시 리스트 항목을 span -> input
// 10. 수정 완료 후 렌더링되도록
// 11. PR 할 때 spread, map, filter를 어디에 사용했는지 명시 할 것

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
    todos.push(newTodo)
    console.log(todos)
    render()
  }
});

function deleteTodo(id) {
  
}

function toggleDone(id) {
  
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
function updateTodo(){}