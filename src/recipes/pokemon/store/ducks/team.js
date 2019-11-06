import { ajax } from "rxjs/ajax";
import { mergeMap, map } from "rxjs/operators";
import { ofType } from "redux-observable";

// Actions
const type = {
  PICKUP_POKEMON: "PICKUP_POKEMON",
  PICKUP_POKEMON_STATS: "PICKUP_POKEMON_STATS",
  REMOVE_POKEMON: "REMOVE_POKEMON"
};

// Epics
export const fetchPokemonStats = action$ =>
  action$.pipe(
    ofType(type.PICKUP_POKEMON),
    mergeMap(action =>
      ajax
        .getJSON(`https://pokeapi.co/api/v2/pokemon/${action.pokemon.name}`)
        .pipe(map(response => Creators.pickupPokemonStats(response)))
    )
  );

// Reducers
const initialState = {
  team: {}
};

export default function teamReducer(state = initialState, action) {
  switch (action.type) {
    case "REMOVE_POKEMON":
      delete state.team[action.name];
      return state;
      break;
    case "PICKUP_POKEMON_STATS":
      console.log(action, "here");
      return { ...state, response: action.response };
      break;
    default:
      return state;
  }
}

// Creators
export const Creators = {
  pickupPokemonStats: response => ({
    type: type.PICKUP_POKEMON_STATS,
    response: response
  }),
  pickupPokemon: name => ({
    type: type.PICKUP_POKEMON,
    pokemon: { name: name }
  }),
  removePokemon: name => ({
    type: type.REMOVE_POKEMON,
    name: name
  })
};
