import React, { useState } from "react";

// TODO: make sure to only declare variable that is used. Why show unused varialbes in training material @neharadialcode486
const UseStateWithString = () => {
  // THIS IS THE SIMPLE USE OF THE STATE WITH STRING
  const [name, setName] = useState("This is for the testing");

  return (
    <>
      <h2>Showing the value of the string using the state</h2>
      <p>{name}</p>
    </>
  );
};

export default UseStateWithString;
