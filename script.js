import { pokemonArray } from "./data/pokemon.js";
console.log(pokemonArray);

const cardContainer = document.querySelector(".card-container");

//ID, Name, Types, Sprite's Array
const pokemonID = pokemonArray.map((element) => element.id);
const pokemonName = pokemonArray.map((element) => element.name);
const pokemonTypes = pokemonArray.map((element) => element.types);
const pokemonSprite = pokemonArray.map((element) => element.sprite);

//create a card
const createPokemonCard = (id, name, type, sprite) => {
  let htmlString = `
    <div class="card">
        <img class="card__image" src=${sprite}>
        <div class="card__content">
            <h3 class="card__heading ">${name}</h3>
            <p class="card__text">${name} (#${id}) is a ${type} pokemon</p>
        </div>
    </div>`;
  return htmlString;
};
