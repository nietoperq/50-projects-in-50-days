const nav = document.querySelector(".nav-circle");
const cardStack = document.querySelector(".card-stack");

nav.addEventListener("click", () => {
  open();
});

function open() {
  if (cardStack.classList.contains("opened")) {
    cardStack.classList.remove("opened");
    nav.classList.remove("opened");
  } else {
    cardStack.classList.add("opened");
    nav.classList.add("opened");
  }
}
