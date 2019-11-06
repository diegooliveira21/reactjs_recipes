import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic, rootReducer } from "./ducks/index";
import reducers from "./ducks";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;
