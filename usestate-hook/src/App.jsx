import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [theme, setTheme] = useState("blue");
  function handleDecrementCount() {
    setCount((previousCount) => previousCount - 1);
  }
  function handleIncrementCount() {
    setCount((previousCount) => previousCount + 1);
    setTheme("Red");
  }
  return (
    <>
      <button onClick={handleDecrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={handleIncrementCount}>+</button>
    </>
  );
}

export default App;
