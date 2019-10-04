import React, { useState, useEffect } from "react";

const Modules = () => {
  const modules = ["default", "fundamentals"];
  const [moduleSelect, setModule] = useState("default");

  const modulesList = modules.map(moduleStr => (
    <li>
      <button
        onClick={event => setModule(event.target.value)}
        value={moduleStr}
        key={moduleStr}
      >
        {moduleStr}
      </button>
    </li>
  ));

  return (
    <>
      <ul>{modulesList}</ul>
      <h1>{moduleSelect}</h1>
    </>
  );
};

export default Modules;
