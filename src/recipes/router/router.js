// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Notes from "./components/notes/Notes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NestedRouting from "./pages/NestedRouting";

const RouterConfig = () => (
  <>
    <Header />
    {/** @COMMENT A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/notes" component={Notes} exact />
      <Route path="/notes/:noteId" component={Notes} exact />
      <Route path="/nested" component={NestedRouting} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/about" component={About} exact />
      <Route path="/" component={Home} exact />
    </Switch>
    <Footer />
  </>
);

export default RouterConfig;
