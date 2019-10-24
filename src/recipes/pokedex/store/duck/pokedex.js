import { getPokemons } from "../../services/pokemons/pokemons.service.js";

// Axios data
const searchInitial = getPokemons("");

// Actions
const type = {
  SEARCH_POKEMON: "SEARCH_RESULT",
  SELECTED_POKEMON: "SELECTED_POKEMON"
};

// Reducer
const initialState = {
  result: searchInitial,
  log: []
};

export default function bossReducer(state = initialState, action) {
  switch (action.type) {
    case type.SEARCH_POKEMON:
      return {};
      break;
    case type.SELECTED_POKEMON:
      return {};
      break;
    default:
      return state;
  }
}

// Declare Actions
export const Creators = {
  playerMeleeHit: () => ({
    type: type.PLAYER_HIT,
    skill: initialState.player.skills.melee,
    mana: 0
  }),
  playerFireballHit: () => ({
    type: type.PLAYER_HIT,
    skill: initialState.player.skills.fireball,
    mana: 25
  }),

  bossMeleeHit: () => ({
    type: type.BOSS_HIT,
    skill: initialState.player.skills.melee,
    mana: 0
  }),
  bossFlamethrowerHit: () => ({
    type: type.BOSS_HIT,
    skill: initialState.player.skills.flamethrower,
    mana: 25
  })
};
