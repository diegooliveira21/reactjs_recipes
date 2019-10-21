import React, { useState, useEffect } from "react";
import styles from "./login.style.sass";

const Login = () => {
  const [userAuth, setAuth] = userState({});

  return (
    <>
      <input type="name" onChange={setAuth({ name: e.target.value })}></input>
      <input type="name" onChange={setAuth({ name: e.target.value })}></input>
    </>
  );
};
