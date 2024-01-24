const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
const imgCount = 20;

for (let i = 0; i < imgCount; i++) {
    const img = document.createElement("div");
    img.innerHTML = `
    <div class="img-container">
        <div class="user-info">
          <div class="pfp-container"><img class="pfp" src="https://albanyvet.com.au/wp-content/uploads/2019/11/blank-profile-picture-973460_640.png"></div>
          <span class="username">nietoperq</span>
          <span class="timestamp">· 2d</span>
          <i class="fa-solid fa-ellipsis"></i>
        </div>
        <img class="photo" src="${unsplashURL}${getRandomSize()}">
        <div class="img-info">
            <div class="buttons">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-comment"></i>
                <i class="fa-regular fa-paper-plane"></i>
                <i class="fa-regular fa-bookmark"></i>
            </div>
            <p class="likes">2,326 likes</p>
            <p class="description"><span class="username">nietoperq</span>Lorem ipsum...<span class="clickable-span">more</span></p>
            <span class="clickable-span">View all 20 comments</span>
            <div class="comment"><input class="add-comment" type="text" placeholder="Add a comment"></input><i class="fa-regular fa-face-smile"></i></div> 
        </div>

    </div>
    `;
    container.appendChild(img);
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 400;
}
