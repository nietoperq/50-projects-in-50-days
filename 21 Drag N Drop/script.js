const tasks = document.querySelectorAll(".task");
const lists = document.querySelectorAll(".list");

let current = "";

for (const task of tasks) {
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
}

for (const list of lists) {
    list.addEventListener("dragover", dragOver);
    list.addEventListener("dragenter", dragEnter);
    list.addEventListener("dragleave", dragLeave);
    list.addEventListener("drop", dragDrop);
}

function dragStart() {
    this.className += " hold";
    current = this;
}

function dragEnd() {
    this.className = "task";
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add("hovered");
}

function dragLeave() {
    this.classList.remove("hovered");
}

function dragDrop() {
    this.classList.remove("hovered");
    this.append(current);
    if (this.parentElement.classList.contains("to-do")) {
        current.querySelector(
            ".icon"
        ).innerHTML = `<i class="fa-regular fa-circle"></i>`;
    } else if (this.parentElement.classList.contains("in-progress")) {
        current.querySelector(
            ".icon"
        ).innerHTML = `<i class="fa-solid fa-circle-half-stroke"></i>`;
    } else {
        current.querySelector(
            ".icon"
        ).innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    }
}
