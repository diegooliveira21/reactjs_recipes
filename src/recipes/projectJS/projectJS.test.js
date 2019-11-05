import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import ProjectJS from "./projectJS";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// JEST TEST

// ENZYME TEST

describe(ProjectJS, () => {
  const mockRemoveTodo = jest.fn();
  const component = shallow(<ProjectJS />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ProjectJS />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ProjectJS />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders a Heading One component", () => {
    expect(component.contains(<h1 />));
    expect(component.contains(<h2 />));
  });
});

const description = "New Todo";
