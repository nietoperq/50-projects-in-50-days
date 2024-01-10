const poke_container = document.getElementById("poke-container");
const pokemon_count = 50;

const colors = {
    fire: "#EACEB4",
    grass: "#E4E4D0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#F2D7D9",
    poison: "#E1ECC8",
    bug: "#EDE4E0",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#FFF8EA",
};

const fetchPokemons = async () => {
    for (let i = 1; i < pokemon_count; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    createPokemonCard(data);
    console.log(data);
};

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");

    const pokemonInnerHTML = `
    <span class="number" style="background-color:${
        colors[pokemon.types[0].type.name]
    }">#${("00" + pokemon.id).slice(-3)}</span>
    <div class="img-container" style="background-color:${
        colors[pokemon.types[0].type.name]
    }">
        <img src="${pokemon.sprites.front_default}"
        alt="">
    </div>
    <div class="info">

        <h3 class="name">${
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        }</h3>
        <small class="type">type: <span>${
            pokemon.types[0].type.name
        }</span></small>
     </div>
    `;

    pokemonEl.innerHTML = pokemonInnerHTML;
    poke_container.appendChild(pokemonEl);
};

fetchPokemons();
