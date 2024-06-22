import React, { useState } from "react";

const Counter = () => {
  // useState hook to manage the state variable 'count' initialized to 0
  const [count, setCount] = useState(0);

  // Function to increment the count by 1
  const incrementHandler = () => {
    setCount(count + 1);
  };

  // Function to decrement the count by 1
  const decrementHandler = () => {
    setCount(count - 1);
  };

  // The component's UI
  return (
    <div>
      {/* Button to trigger incrementHandler to increase the count */}
      <button onClick={incrementHandler}>Increase value</button>
      {/* Display the current count */}
      <h2>{count}</h2>
      {/* Button to trigger decrementHandler to decrease the count */}
      <button onClick={decrementHandler}>Decrease value</button>
    </div>
  );
};

// Export the Counter component as the default export
export default Counter;
