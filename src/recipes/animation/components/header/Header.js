import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.sass";

const Header = () => (
  <header className={styles.header}>
    <Link to={"/"}>Home</Link>
    <Link to={"/drag"}>Drag</Link>
    <Link to={"/scroll"}>Scroll</Link>
    <Link to={"/paths"}>Paths</Link>
    <Link to={"/gestures"}>Gestures</Link>
  </header>
);

export default Header;
