import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";

import battle from "./battle";
import team, { fetchPokemonStats } from "./team";

export const rootReducer = combineReducers({
  battle,
  team
});

export const rootEpic = combineEpics(fetchPokemonStats);

export default rootReducer;
