import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import AppPokemon from "./AppPokemon";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// TESTS INIT

describe(AppPokemon, () => {
  const mockRemoveTodo = jest.fn();
  const component = shallow(<AppPokemon />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AppPokemon />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AppPokemon />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders a Heading One component", () => {
    expect(component.contains(<div className="bossHPBar" />));
  });
});
