// https://randomuser.me/
const url = "https://randomuser.me/api/";

// récupère les infos de l'utilisateur et les retourne dans un objet
const fetchUser = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const { results } = data;
    const {
      phone,
      email,
      name: { last, first },
      location: {
        street: { number, name: way },
      },
      dob: { age },
      login: { password },
      picture: { large },
    } = results[0];
    const name = `${last} ${first}`;
    const street = `${number} ${way}`;
    return { phone, email, name, street, age, password, large };
  } catch (error) {
    console.log(error);
  }
};

export default fetchUser;
