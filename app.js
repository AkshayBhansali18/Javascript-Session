const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);


function addTodo(e) {
  e.preventDefault();
 // Creating the todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Creating list element
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";
  //Creating task Complete Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Creating trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
//adding the div to parent
  todoList.appendChild(todoDiv);
}

function deleteTodo(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
      todo.remove();
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    
    for(var i=0;i<todo.childNodes.length;i++)
    {
        if(todo.childNodes[i].className==='todo-item')
        {
            var str=todo.childNodes[i].innerText;
            todo.childNodes[i].innerHTML='<strike>'+str+'</strike>'

        }
    }
  }
}
