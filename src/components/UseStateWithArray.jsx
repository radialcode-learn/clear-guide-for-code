import React, { useState } from "react";

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
