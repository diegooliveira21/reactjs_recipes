// Actions
const type = {
  PICKUP_POKEMON: "PICKUP_POKEMON",
  REMOVE_POKEMON: "REMOVE_POKEMON"
};

// Reducers
const initialState = {
  team: {}
};

export default function teamReducer(state = initialState, action) {
  switch (action.type) {
    case "REMOVE_POKEMON":
      delete state[action.name];
      return state;
      break;
    case "PICKUP_POKEMON":
      return { ...state, name: action.name };
    default:
  }
}

// Creators
export const Creators = {
  pickupPokemon: name => ({
    type: type.PICKUP_POKEMON,
    name: name
  }),
  removePokemon: name => ({
    type: type.REMOVE_POKEMON,
    name: name
  })
};
