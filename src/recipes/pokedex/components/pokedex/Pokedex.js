import React, { useState, useEffect } from "react";
import styles from "./pokedex.style.sass";
import { getPokemons } from "../../services/pokemons/pokemons.service.js";

const Pokedex = props => {
  // const pokemons = props.pokemons.list;

  // const pokemonResult = pokemons.map(pokemon => <h1>{pokemon.name}</h1>);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPokemons(search);
  });
  return (
    <>
      <ul></ul>
      <div className="pokedex__search">
        <input
          type="text"
          placeholder="Type here the pokemon name..."
          onChange={e => setSearch(e.target.value)}
        />
      </div>
    </>
  );
};

// Mandar o resultado da pesquisa para o store

export default Pokedex;
