import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log(`The count is ${count}`);
  });

  return (
    <div>
      <p>Count is {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
    </div>
  );
}

export default App;
