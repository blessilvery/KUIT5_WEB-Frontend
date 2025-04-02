// spread 연산자, map, filter를 사용한 to-do list만들기

// [x]. input 박스에 텍스트 입력 후 추가 버튼을 누르면, 새로운 todo가 리스트에 추가
// [x]. 추가된 todo가 반영된 리스트가 보이도록 렌더링 필요
// [x]. input 박스 초기화
// [x]. 삭제 버튼을 누르면 리스트에서 삭제
// [x]. 삭제된 리스트가 안보이도록 렌더링 필요
// [x]. todo 리스트 항목 클릭시, 취소선 + 회색처리 (done className 추가)
// [x]. 한 번 더 클릭 시 원상복귀
// [x]. 각 todo 리스트 항목은 서로 다른 id를 가져야함 -> Date 객체 활용
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
    // console.log(todos)
    render()
    input.value = ""
  }
});

function deleteTodo(id) {
    // 삭제하는 방법
    // 1. 해당 할 일의 텍스트를 통해 index를 찾고 todos배열에서 삭제 -> index를 찾아야만 한다는 생각이 실수
    // 2. 배열 순회하면서 일치하는 id 찾고 todos배열에서 삭제

    const selected_todo = document.getElementById(id)
    const selected_text = selected_todo.children[0]

    todos.map((e, index)=>{
        if(e.id === id){
            console.log(e, index)
            todos.splice(index, 1)
            render()
        }
    })
}

function toggleDone(id) {
    const selected_todo = document.getElementById(id)
    const selected_text = selected_todo.children[0]

    console.log(selected_text)
    if (selected_todo == null){
        alert(`해당하는 할 일의 id : ${id}를 찾을 수 없습니다.`)
    }
    else{
        if(selected_text.className === '')
            selected_text.className = 'done'
        else
            selected_text.className = ''
    }
}

function render() {
  list.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";
    li.id = todo.id
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