const background = document.getElementById("background");
const password = document.getElementById("password");

password.addEventListener("input", () => {
    background.style.filter = `blur(${20 - password.value.length * 2}px)`;
});
 