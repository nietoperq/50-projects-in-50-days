const container = document.getElementById("container");
const colors = ["#f7dbdb", "#ebd0d5", "#dfc6cf", "#d3bbc9", "#c7b0c3"];
const SQUARES = 400;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `${color} 0px 0px 10px 1px`;
}

function removeColor(element) {
    element.style.backgroundColor = "#eee";
    element.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px";
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
