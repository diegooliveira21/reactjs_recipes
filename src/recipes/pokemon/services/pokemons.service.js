import axios from "axios";

export default async function getPokemons(name = "") {
  const search = "https://pokeapi.co/api/v2/pokemon/" + name;

  await axios.get(search).then(res => {
    const data = res.data;
    console.log(data);
    return data;
  });
}
