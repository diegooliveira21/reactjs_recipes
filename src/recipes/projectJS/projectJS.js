import React, { useState, useEffect } from "react";

const ProjectJS = () => {
  // Spread Arrays
  const array = [1, 2, 3, 4, 5];

  const [arrayOne, arrayTwo, ...rest] = array;

  // Spread Objects
  const obj = {
    propOne: "One",
    propTwo: "Second",
    propThree: "OnThree"
  };

  const newObj = {
    ...obj,
    propFour: "OnFour"
  };

  // Desesctruturing
  const { propOne } = obj;

  // Fragments. Use only in lists, for purpose to specify keys
  const numberList = array.map(number => (
    <React.Fragment key={"This is the number " + number}>
      <h1>{number}</h1>
    </React.Fragment>
  ));

  return (
    <>
      <h1>{newObj.propFour}</h1>
      <h2>{rest}</h2>
      <h3>{propOne}</h3>
      <ul>{numberList}</ul>
    </>
  );
};

export default ProjectJS;
