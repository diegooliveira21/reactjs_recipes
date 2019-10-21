import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import Battle from "./components/battle/Battle.js";

const AppPokemon = () => {
  return (
    <Provider store={store}>
      <Battle />
    </Provider>
  );
};

export default AppPokemon;
