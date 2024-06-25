import React, { useState } from "react";

// TODO: I don't see the usecase of using useState here. Let's not confuse with these terms. You can simply add socialList
// as props @neharadialcode486 or create a variable import of this.
const UseStateWithArray = () => {
  const [socialList, setSocialList] = useState([
    "linkedIn",
    "instagram",
    "facebook",
  ]);

  return (
    <>
      <h2>Showing the list of the array through the map</h2>
      {socialList.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
    </>
  );
};

export default UseStateWithArray;
