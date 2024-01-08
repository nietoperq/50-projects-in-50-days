const imageContainer = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const imgs = document.querySelectorAll("#imgs img");

const INTERVAL = 3000;

let idx = 0;
document.body.style.backgroundImage = `url('${imageContainer.children[idx].src}')`;

let interval = setInterval(run, INTERVAL);

function run() {
    idx++;
    changeImage();
}

function changeImage() {
    if (idx > imgs.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = imgs.length - 1;
    }

    imageContainer.style.transform = `translateX(${-idx * 500}px)`;
    document.body.style.backgroundImage = `url('${imageContainer.children[idx].src}')`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, INTERVAL);
}

rightBtn.addEventListener("click", () => {
    idx++;
    changeImage();
    resetInterval();
});

leftBtn.addEventListener("click", () => {
    idx--;
    changeImage();
    resetInterval();
});
