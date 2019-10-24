import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Routes
import RouterConfig from "./router";

const Index = () => (
  <Router>
    <RouterConfig />
  </Router>
);

export default Index;
