import Counter from "./Counter";
import UseStateWithArray from "./UseStateWithArray";
import UseStateWithArrayOfObject from "./UseStateWithArrayOfObject";
import UseStateWithString from "./UseStateWithString";

function App() {
  return (
    <>
      {/* Component demonstrating the use of useState with a string */}
      <UseStateWithString />
      
      {/* Component demonstrating the use of useState with a simple array */}
      <UseStateWithArray />
      
      {/* Component demonstrating the use of useState with an array of objects */}
      <UseStateWithArrayOfObject />
      
      {/* Component demonstrating a simple counter using useState */}
      <Counter/>
    </>
  );
}

export default App;
