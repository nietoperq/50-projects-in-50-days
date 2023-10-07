const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

toggle.addEventListener("click", (e) => {
    const body = document.querySelector("body");
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
    } else {
        body.classList.add("dark");
    }
});

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    hourEl.style.transform = `translate(-50%, -100%) rotate(${
        ((hoursForClock / 12) * 100 * 360) / 100
    }deg)`;

    minuteEl.style.transform = `translate(-50%, -100%) rotate(${
        ((minutes / 60) * 100 * 360) / 100
    }deg)`;

    secondEl.style.transform = `translate(-50%, -100%) rotate(${
        ((seconds / 60) * 100 * 360) / 100
    }deg)`;

    timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} ${date}`;
}

setTime();

setInterval(setTime, 1000);
