const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");

runAnimation();

replay.addEventListener("click", () => {
    resetDOM();
    runAnimation();
});

function resetDOM() {
    counter.classList.remove("hidden");
    finalMessage.classList.remove("show");

    nums.forEach((num) => { 
        num.classList.value = "";
    });

    nums[0].classList.add("in");
}

function runAnimation() {
    nums.forEach((num, idx) => {
        const nexToLast = nums.length - 1;

        num.addEventListener("animationend", (e) => {
            if (e.animationName === "goIn" && idx !== nexToLast) {
                num.classList.remove("in");
                num.classList.add("out");
            } else if (e.animationName === "goOut" && num.nextElementSibling) {
                num.nextElementSibling.classList.add("in");
            } else {
                counter.classList.add("hidden");
                finalMessage.classList.add("show");
            }
        });
    });
}
