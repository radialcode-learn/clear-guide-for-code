import Counter from "./components/Counter";
import UseStateWithArray from "./components/UseStateWithArray";
import UseStateWithArrayOfObject from "./components/UseStateWithArrayOfObject";
import UseStateWithString from "./components/UseStateWithString";

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
      <Counter />
    </>
  );
}

export default App;
