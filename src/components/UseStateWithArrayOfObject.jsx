import React, { useState } from "react";

// TODO: only use useState if you can write logic for both the variables assignment. In this case, a
// prop with navList data would be a better approach. @neharadialcode486
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
