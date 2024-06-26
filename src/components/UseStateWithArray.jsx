import React, { useState } from "react";

const UseStateWithArray = () => {
  const socialList = [
    "linkedIn",
    "instagram",
    "facebook",
  ]

  // Initialize state with an array of items
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  // Function to add a new item to the items array
  const addItem = () => {
    // Create a new item based on the current length of the items array
    const newItem = `Item ${items.length + 1}`;
    // Update the state by adding the new item to the existing array
    setItems([...items, newItem]);
  };

  return (
    <>
      <h2>Showing the list of the array through the map</h2>
      {socialList.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}

      {/* Display the list of items managed by the state */}
      <h2>Showing the list of items using the state</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </>
  );
};

export default UseStateWithArray;
