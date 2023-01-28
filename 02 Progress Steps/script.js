const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const cricles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  if (currentActive < cricles.length) {
    currentActive++;
  }
  update();
});

prev.addEventListener("click", () => {
  if (currentActive > 1) {
    currentActive--;
  }
  update();
});

function update() {
  cricles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  progress.style.width =
    ((currentActive - 1) / (cricles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === cricles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
