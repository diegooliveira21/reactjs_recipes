import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import Team from "./components/team/Team";

console.log(store);

const AppPokemon = () => {
  return (
    <Provider store={store}>
      <Team />
    </Provider>
  );
};

export default AppPokemon;
