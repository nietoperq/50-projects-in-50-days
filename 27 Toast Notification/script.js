const btnInfo = document.getElementById("btn-info");
const btnSuccess = document.getElementById("btn-success");
const btnError = document.getElementById("btn-error");
const toasts = document.getElementById("toasts");

const messages = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Phasellus at diam feugiat, pretium justo a, condimentum ex.",
    "In felis eros, iaculis egestas porttitor quis, semper at magna.",
    "Sed vel massa pellentesque, luctus ante non, viverra lacus.",
];

btnInfo.addEventListener("click", () => createNotification("info"));
btnSuccess.addEventListener("click", () => createNotification("success"));
btnError.addEventListener("click", () => createNotification("error"));

function createNotification(type = null) {
    const notification = document.createElement("div");
    notification.classList.add("toast");
    notification.classList.add(type ? type : "info");

    let icon = "";
    let title = "";

    if (type == "success") {
        icon = `<i class="fa-solid fa-circle-check"></i>`;
        title = "Success";
    } else if (type == "error") {
        icon = `<i class="fa-solid fa-circle-xmark"></i>`;
        title = "Error";
    } else {
        icon = `<i class="fa-solid fa-circle-info"></i>`;
        title = "Info";
    }

    notification.innerHTML = `${icon} <p><span>${title}</span>${getRandomMessage()}</p>`;

    toasts.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}
