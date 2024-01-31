const screens = document.querySelectorAll(".screen");
const start_btn = document.getElementById("start-btn");
const restart_btn = document.getElementById("restart-btn");
const game_container = document.getElementById("game-container");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
let seconds = 0;
let score = 0;
let insects = [
    {
        src: "https://dodo.ac/np/images/c/cf/Emperor_Butterfly_NH_Icon.png",
        alt: "Emperor Butterfly",
    },
    {
        src: "https://dodo.ac/np/images/b/b9/Walking_Leaf_NH_Icon.png",
        alt: "Walking leaf",
    },
    {
        src: "https://dodo.ac/np/images/c/c8/Damselfly_NH_Icon.png",
        alt: "Damselfly",
    },
    {
        src: "https://dodo.ac/np/images/3/3e/Goliath_Beetle_NH_Icon.png",
        alt: "Goliath beetle",
    },
    {
        src: "https://dodo.ac/np/images/4/48/Drone_Beetle_NH_Icon.png",
        alt: "Drone beetle",
    },
    {
        src: "https://dodo.ac/np/images/8/81/Rajah_Brooke%27s_Birdwing_NH_Icon.png",
        alt: "Rajah Brooke's birdwing",
    },
    {
        src: "https://dodo.ac/np/images/9/9e/Paper_Kite_Butterfly_NH_Icon.png",
        alt: "Paper kite butterfly",
    },
    {
        src: "https://dodo.ac/np/images/b/bb/Queen_Alexandra%27s_Birdwing_NH_Icon.png",
        alt: "Queen Alexandra's birdwing",
    },
    {
        src: "https://dodo.ac/np/images/0/09/Red_Dragonfly_NH_Icon.png",
        alt: "Red dragonfly",
    },
];

start_btn.addEventListener("click", () => {
    screens[0].classList.add("up");
    setTimeout(createInsect, 1000);
    startGame();
});

restart_btn.addEventListener("click", () => {
    restartGame();
});

function getRandomInsect() {
    console.log(Math.floor(Math.random() * insects.length));
    return insects[Math.floor(Math.random() * insects.length)];
}

function startGame() {
    setInterval(increaseTime, 1000);
}

function restartGame() {
    screens[1].classList.remove("up");
    scoreEl.innerHTML = `Score: 0`;
    score = 0;
    seconds = 0;
    const leftoverInsects = game_container.querySelectorAll("img");
    leftoverInsects.forEach((insect) => insect.remove());
    setTimeout(createInsect, 1000);
}

function endGame() {
    let highScore = localStorage.getItem("highscore");
    if (!highScore || score > highScore) {
        highScore = score;
        localStorage.setItem("highscore", highScore);
    }
    screens[1].classList.add("up");
    screens[2].children[2].innerText = `Score: ${score}`;
    screens[2].children[3].innerText = `Highscore: ${highScore}`;
}

function increaseTime() {
    if (seconds > 20) {
        endGame();
    } else {
        let s = seconds % 60;
        s = s < 10 ? `0${s}` : s;
        timeEl.innerHTML = `Time: 00:${s}`;
        seconds++;
    }
}

function createInsect() {
    const insect = document.createElement("div");
    const randomInsect = getRandomInsect();
    insect.classList.add("insect");
    const { x, y } = getRandomLocation();
    insect.style.left = x + "px";
    insect.style.top = y + "px";
    insect.innerHTML = `<img src=${randomInsect.src} alt=${
        randomInsect.alt
    } style="transform: rotate(${Math.random() * 360}deg)">`;

    insect.addEventListener("click", catchInsect);

    game_container.appendChild(insect);
}

function getRandomLocation() {
    const width = game_container.offsetWidth;
    const height = game_container.offsetHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    console.log(x, y);
    return { x, y };
}

function catchInsect() {
    increaseScore();
    this.classList.add("caught");
    setInterval(() => this.remove(), 2000);
    addInsects();
}

function addInsects() {
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
}

function increaseScore() {
    score++;
    scoreEl.innerHTML = `Score: ${score}`;
}
