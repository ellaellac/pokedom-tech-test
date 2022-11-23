import { pokemonArray } from "./data/pokemon.js";
console.log(pokemonArray);

//Varibales
const cardContainer = document.querySelector(".card-container");
const searchButton = document.querySelector("#button");
const inputText = document.getElementById("text");

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

//get all cards
for (let i = 0; i < pokemonArray.length; i++) {
  const id = pokemonID[i];
  const name = pokemonName[i];
  const type = pokemonTypes[i];
  const sprite = pokemonSprite[i];

  cardContainer.innerHTML += createPokemonCard(id, name, type, sprite);
}

//filter name
const searchFunction = () => {
  const string = inputText.value;
  const match = pokemonName.filter((element) => element.includes(string));
  console.log(string);
  console.log(match);

  if (string == match) {
    return;
  }
};

searchButton.addEventListener("click", searchFunction);
