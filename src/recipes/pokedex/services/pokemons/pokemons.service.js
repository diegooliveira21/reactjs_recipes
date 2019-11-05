import axios from "axios";

export function getPokemons(name = "") {
  const search = "https://pokeapi.co/api/v2/pokemon/" + name;
  console.log(search);

  axios.get(search).then(res => {
    const data = res.data;
    console.log(data);
    return data;
  });
}
