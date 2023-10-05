const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    if (search.value && search.value !== "") {
        searchMovies(data.results);
    } else {
        showRecommended(data.results);
    }

    console.log(data.results);
}

function showRecommended(movies) {
    main.innerHTML = "";
    const mostPopularMovies = document.createElement("div");
    const recommendedMovies = document.createElement("div");
    recommendedMovies.innerHTML = "<h2>Recommended for you</h2>";
    const horizontalList = document.createElement("div");

    mostPopularMovies.classList.add("most-popular");
    recommendedMovies.classList.add("recommended");
    horizontalList.classList.add("horizontal-list");

    mostPopularMovies.appendChild(horizontalList);

    main.appendChild(mostPopularMovies);
    main.appendChild(recommendedMovies);

    movies.forEach((movie, index) => {
        const { title, backdrop_path, vote_average, overview } = movie;

        const movieElement = document.createElement("div");

        if (index < 5) {
            movieElement.classList.add("movie-l");
            movieElement.innerHTML = ` 
            <img src="${IMG_PATH + backdrop_path}" alt="${title}">
            <div class="movie-info">
                 <h3>${title}</h3>
             </div>
             <div class="overview ${index >= 5 ? "hidden" : "visible"}">
                 <p>${overview}</p>
                 <div class="buttons">
                     <button class="watch-now">Watch now</button>
                     <button class="watch-later">+</button>
                 </div>
             </div>
        `;
        } else {
            movieElement.classList.add("movie-s");
            movieElement.innerHTML = ` 
            <img src="${IMG_PATH + backdrop_path}" alt="${title}">
            <div class="movie-info">
                 <h3>${title}</h3>
                 <span class="vote">★ ${vote_average}</span>
             </div>
             <div class="overview ${index >= 5 ? "hidden" : "visible"}">
             <h3>${title}</h3> 
                 <p>${overview}</p>
                 <div class="buttons">
                     <button class="watch-now">Watch now</button>
                     <button class="watch-later">+</button>
                 </div>
             </div>
        `;
        }

        if (index < 5) {
            horizontalList.appendChild(movieElement);
        } else {
            recommendedMovies.appendChild(movieElement);
        }
    });
}

function searchMovies(movies) {
    main.innerHTML = "";
    const searchedMovies = document.createElement("div");
    searchedMovies.classList.add("searched");
    main.appendChild(searchedMovies);

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieElement = document.createElement("div");
        movieElement.classList.add("movie-s");
        movieElement.innerHTML = ` 
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                 <h3>${title}</h3>
                 <span class="vote">★ ${vote_average}</span>
             </div>
             <div class="overview hidden">
             <h3>${title}</h3> 
                 <p>${overview}</p>
                 <div class="buttons">
                     <button class="watch-now">Watch now</button>
                     <button class="watch-later">+</button>
                 </div>
             </div>
        `;

        searchedMovies.appendChild(movieElement);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    if (searchTerm && searchTerm !== "") {
        getMovies(SEARCH_API + searchTerm);
    } else {
        window.location.reload();
    }
});

document.getElementById("logo").addEventListener("click", function () {
    window.location.href = window.location.href;
});
