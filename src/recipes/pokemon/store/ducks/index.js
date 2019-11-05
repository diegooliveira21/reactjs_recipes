import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import ping, { pingEpic } from "./battle";

import battle from "./battle";

export const rootEpic = combineEpics(pingEpic, fetchUserEpic);

export default combineReducers({
  battle
});
