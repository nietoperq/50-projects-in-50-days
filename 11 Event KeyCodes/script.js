const insert = document.getElementById("insert");
const keys = document.querySelectorAll(".key");

const colors = ["#f1c232", "#8fce00", "#6bd1ff", "#ff83cc"];

function keyDownEffect(key) {
    let random_color = colors[Math.floor(Math.random() * colors.length)];
    key.style.color = random_color;
    key.style.boxShadow = `0px 0px 10px ${random_color}`;
    key.style.backgroundColor = "#f5f5f5";
}

function keyUpEffect(key) {
    key.style.color = "#aaa";
    key.style.boxShadow = "none";
    key.style.backgroundColor = "#fff";
}

window.addEventListener("keydown", (e) => {
    if (e.code === "Tab") {
        e.preventDefault();
    }

    insert.innerHTML = `    
    <div class="box">
        ${e.key === " " ? "Space" : e.key}
        <small>event.key</small>
    </div>

     <div class="box">
        ${e.keyCode}
        <small>event.keyCode</small>
    </div>

    <div class="box">
        ${e.code}
        <small>event.code</small>
    </div>
  `;
    for (let i = 0; i < keys.length; i++) {
        console;
        if (e.code === keys[i].id) {
            keyDownEffect(keys[i]);
        }
    }
});

window.addEventListener("keyup", (e) => {
    for (let i = 0; i < keys.length; i++) {
        if (e.code === keys[i].id) {
            setTimeout(() => {
                keyUpEffect(keys[i]);
            }, 300);
        }
    }
});
