import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import CreatorTheme from "./ThemeCreator.js";

const AppThemeCreator = () => {
  return (
    <Provider store={store}>
      <CreatorTheme />
    </Provider>
  );
};

export default AppThemeCreator;
