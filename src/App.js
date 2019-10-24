import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppPokedex from "./recipes/pokedex/App";

function App() {
  const [data, setData] = useState("0");

  function formData(event) {
    let a = event.target.value;
    setData(a);
  }

  return <AppPokedex />;
}

export default App;
