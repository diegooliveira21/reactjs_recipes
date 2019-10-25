// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Scroll from "./components/scroll/Scroll";
import Drag from "./components/drag/Drag";
import AppAnimation from "./AppAnimation";
import Header from "./components/header/Header";
import Paths from "./components/paths/Paths";

const RouterConfig = () => (
  <>
    <Header />
    {/** @COMMENT A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/paths" component={Paths} replace exact />
      <Route path="/scroll" component={Scroll} replace exact />
      <Route path="/drag" component={Drag} replace exact />
      <Route path="/" component={AppAnimation} replace exact />
    </Switch>
  </>
);

export default RouterConfig;
