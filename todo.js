const inputBox = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector(".todo-form")
const addTodo = document.querySelector(".add-todo");



//Events
todoForm.addEventListener("submit", addTask);

function addTask (e) {

    e.preventDefault();
    if (inputBox.value == "") {
        return null;
    }
    else {
        let li = document.createElement("li");
        li.classList.add("todo");
        li.innerHTML = `
        <span>
           <button class="todo-check"></button>
           <p class="todo-title">${inputBox.value}</p>
        </span>
        <span>
            <button class ="todo-remove"><i class='fa fa-trash-o'></i></button>
        </span>
     `
        todoList.append(li);
    }
  
    inputBox.value = "";
    saveDate();
}

const removeBtn = document.querySelector(".todo-remove");
const checkBtn = document.querySelector(".todo-check");

todoList.addEventListener("click", e => {
    if (e.target.className == "todo-remove") {
        e.target.parentElement.parentElement.remove();
        saveDate();
    }
    if(e.target.className == "todo-check") {
        e.target.classList.add("todo-checked");
        e.target.parentElement.classList.add("task-checked")
        saveDate();
    }
    else if(e.target.className.includes("todo-checked")) {
        e.target.classList.remove("todo-checked");
        e.target.parentElement.classList.remove("task-checked")
        saveDate();
    }
})

function saveDate() {
    localStorage.setItem("data", todoList.innerHTML);
}

function showData() {
    todoList.innerHTML = localStorage.getItem ("data");
}
showData();