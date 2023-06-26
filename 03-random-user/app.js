import get from "./utils/getElement.js";
import fetchUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";

const btnRandom = get(".btn");

const showUser = async () => {
  // récupére l'utilisateur depuis l'api
  const person = await fetchUser();

  // affiche l'utilisateur
  displayUser(person);
};

btnRandom.addEventListener("click", showUser);
window.addEventListener("DOMContentLoaded", showUser);
