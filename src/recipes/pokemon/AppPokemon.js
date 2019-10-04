import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import Battle from "./Battle";

const AppPokemon = () => {
  return (
    <Provider store={store}>
      <Battle />
    </Provider>
  );
};

export default AppPokemon;
