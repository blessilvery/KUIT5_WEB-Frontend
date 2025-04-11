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
   
    todos.push(newTodo);
    input.value="";
    render();
    
  }
});

function deleteTodo(id) {
  todos = todos.filter((t) => t.id!==id);
  render();
  
}

function editTodo(id){
  const todo = todos.find((t)=>t.id==id); 
  const li = [...list.children].find((li)=>
  li.querySelector("span")?.textContent ===todo.text
  );

  const input = document.createElement("input");
  input.type="text";
  input.value = todo.text;
  input.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
      todo.text=input.value.trim();
      render();
    }
  })

  const span = li.querySelector("span");

  li.replaceChild(input,span);
  input.focus();

}


function toggleDone(id) {
  const todo = todos.find((t)=>t.id==id);

  if(todo.done)
      todo.done=false;
    else
      todo.done=true;
    render();
}


function render() {
  list.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";
    
    const div=document.createElement("div");

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.onclick = () => toggleDone(todo.id);
    
    const editBtn = document.createElement("button");
    editBtn.textContent="수정";
    editBtn.className="editbtn";
    editBtn.onclick=() => editTodo(todo.id);

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.className="delbtn";
    delBtn.onclick = () => deleteTodo(todo.id);

    li.appendChild(span);
    div.appendChild(editBtn);
    div.appendChild(delBtn);
    li.appendChild(div);
    list.appendChild(li);
  });
}
function updateTodo(){}