import React, { useState } from "react";

const UseStateWithArrayOfObject = () => {
  const [navList, setNavList] = useState([
    {
      title: "Home",
    },
    {
      title: "About-us",
    },
    {
      title: "Contact-us",
    },
  ]);
  return (
    <>
      <h2>Showing the value of the array of the objects through the array</h2>
      {navList.map((item, i) => {
        return <p key={i}>{item.title}</p>;
      })}
    </>
  );
};

export default UseStateWithArrayOfObject;
