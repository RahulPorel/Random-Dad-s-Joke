import generateJoke from "./generateJoke";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";

const laughImg = (document.getElementById("laugh-img").src = laughing);

const jokeBtn = document
  .getElementById("jokeBtn")
  .addEventListener("click", generateNewJoke);

function generateNewJoke() {
  generateJoke();
}
window.onload = function generateJokeonPageLoad() {
  generateJoke();
};
