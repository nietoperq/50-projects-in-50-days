const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
    header.innerHTML =
        '<img src="https://images.unsplash.com/photo-1632834700824-fcd8781d85a5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />';
    title.innerHTML = "Lorem ipsum dolor sit amet";
    excerpt.innerHTML =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
    profile_img.innerHTML =
        '<img src="https://images.unsplash.com/photo-1524717350603-900fc1f8970c?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />';
    name.innerHTML = "Cat Doe";
    date.innerHTML = "Oct 19, 2023";

    animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
    animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
