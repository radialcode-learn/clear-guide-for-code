import React, { useState } from "react";

const UseStateWithString = () => {
  // THIS IS THE SIMPLE USE OF THE STATE WITH STRING
  const [name, setName] = useState("This is for the testing");

  const updateName = () => {
    setName("Name has been updated!");
  };

  return (
    <>
      <h2>Showing the value of the string using the state</h2>
      <p>{name}</p>
      <button onClick={updateName}>Update Name</button>
    </>
  );
};

export default UseStateWithString;
