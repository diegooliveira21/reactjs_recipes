import React, { useState, useEffect } from "react";
import styles from "./team.module.sass";
import axios from "axios";
import getPokemons from "../../services/pokemons.service.js";

// Redux Components
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createSelector } from "reselect";
import { Creators as TeamActions } from "../../store/ducks/team";

export const Team = props => {
  const { pickupPokemon, removePokemon, pickupPokemonStats } = props;
  const search = "https://pokeapi.co/api/v2/pokemon/";

  const [pokemonList, setList] = useState({});

  useEffect(() => {
    if (!pokemonList.results) {
      axios.get(search).then(res => {
        const data = res.data;
        setList(data);
      });
    }
  });

  const pokemonsCard = !pokemonList.results
    ? ""
    : pokemonList.results.map(pokemon => (
        <li key={pokemon.name}>
          <input
            className={styles.card}
            type="radio"
            name={pokemon.name}
            value={pokemon.name}
            onChange={event => pickupPokemon(event.target.value)}
          />
          {pokemon.name}
        </li>
      ));

  return <ul>{pokemonsCard}</ul>;
};

// Get Team from state
const TEAM_COMP = createSelector(state => state.team);

const mapStateToProps = state => ({
  team: state.team
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TeamActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Team);
