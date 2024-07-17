import React, { useState } from "react";

const UseStateWithArrayOfObject = () => {

  const NAV_LIST = [
    {
      title: "Home",
    },
    {
      title: "About-us",
    },
    {
      title: "Contact-us",
    },
  ]

  // Initialize state with an array of user objects
  const [users, setUsers] = useState([
    { name: "User 1" },
    { name: "User 2" },
    { name: "User 3" }
  ]);

  // Function to add a new user to the users array
  const addUser = () => {
    // Create a new user object
    const newUser = { name: `User ${users.length + 1}` };
    // Update the state by adding the new user to the existing array
    setUsers([...users, newUser]);
  };

  return (
    <>
      <h2>Showing the value of the array of the objects through the array</h2>
      {NAV_LIST.map((item, i) => {
        return <p key={i}>{item.title}</p>;
      })}

      {/* Display the list of user managed by the state */}
      <h2>Showing the list of users using the state</h2>
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>
            {index + 1}: {user.name}
          </li>
        ))}
      </ul>
      {/* Button to add a new user to the list */}
      <button onClick={addUser}>Add User</button>
    </>
  );
};

export default UseStateWithArrayOfObject;
