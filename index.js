const form  = document.querySelector("#form");
const input = document.querySelector("#input");
const todo =  document.querySelector("#todo-list");
const button= document.querySelector("#btn");



button.addEventListener("click", todoList)
todo.addEventListener("click", deleteChecked)


function todoList(event){

  event.preventDefault();
  
  const divEl = document.createElement("div");
  divEl.classList.add("todo");
  
  const listEl = document.createElement("li");
  listEl.innerText = input.value;
  listEl.classList.add("todo-item");
  
  divEl.appendChild(listEl);
  
  const completedButton = document.createElement("button");
  completedButton.innerHTML ='<i class="fas fa-check"> </i>';
  completedButton.classList.add("completed-btn");
  divEl.appendChild(completedButton);
  
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<i class='fas fa-trash' ></i>";
  deleteButton.classList.add("delete");
  divEl.appendChild(deleteButton);
  
  
  todo.appendChild(divEl);

  input.value="";

};

function deleteChecked (e) {

  const item = e.target;

  if(item.classList[0] === 'delete'){
      const todo = item.parentElement;
      todo.remove();
  }
 
  if(item.classList[0] === 'completed-btn'){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }



}




