import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.sass";

const Header = () => (
  <header>
    <Link to={"/"}>Home</Link>
    <Link to={"/drag"}>Drag</Link>
    <Link to={"/scroll"}>Scroll</Link>
    <Link to={"/paths"}>Paths</Link>
  </header>
);

export default Header;
