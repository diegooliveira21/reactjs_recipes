import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Spread from "./spread";

function App() {
  const [data, setData] = useState("0");

  function formData(event) {
    let a = event.target.value;
    setData(a);
  }

  const a = ["arra"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" placeholder="Some text..." onKeyUp={formData} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <h1>{data}</h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Spread />
      </header>
    </div>
  );
}

export default App;
