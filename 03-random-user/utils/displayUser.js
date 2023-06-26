import get from "./getElement.js";
import removeActive from "./removeActive.js";

const img = get(`.user-img`);
const user = get(`.user-value`);
const title = get(`.user-title`);
const btns = document.querySelectorAll(`.icon`);
// affiche les infos de l'utilisateur
const displayUser = (person) => {
  console.log(person);
  console.log(img);
  img.src = person.large;
  user.textContent = person.name;
  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener("click", () => {
      removeActive(btns);
      title.textContent = `My ${label} is`;
      user.textContent = person[label];
      btn.classList.add("active");
    });
  });
};
export default displayUser;
