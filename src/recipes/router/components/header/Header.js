import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.sass";

const Header = () => (
  <header>
    <Link to={"/"}>Home</Link>
  </header>
);

export default Header;
