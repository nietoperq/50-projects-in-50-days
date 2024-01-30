const form = document.getElementById("form");
const inputText = document.getElementById("input-text");
const inputDate = document.getElementById("input-date");
const addTaskBtn = document.getElementById("add-task");
const todosUl = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach((todo) => addTodo(todo));
}

addTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTodo();
});

function addTodo(todo) {
    let todoText = inputText.value;
    let todoDate = inputDate.value ? inputDate.value : "-";
    if (todo) {
        todoText = todo.text;
        todoDate = todo.date;
    }
    if (todoText) {
        const todoEl = document.createElement("li");
        if (todo && todo.completed) {
            todoEl.classList.add("completed");
        }

        todoEl.innerHTML = `
        <span class="todo">${todoText}</span>
        <span class="due-date">Due date: ${todoDate}</span>
        `;

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");
            updateLS();
        });

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todoEl.remove();
            updateLS();
        });

        todosUl.appendChild(todoEl);

        inputText.value = "";

        updateLS();
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll("li");
    const todos = [];
    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.children[0].innerText,
            date: todoEl.children[1].innerText.replace("Due date: ", ""), // yes this is very stupid but im too tired to think of better way to do this
            completed: todoEl.classList.contains("completed"),
        });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}
