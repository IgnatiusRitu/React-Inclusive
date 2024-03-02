# React `useState` hook
NOTE:
- You can only use hooks in functional components
- Every time a component runs your hooks must execute in the same order
- Hooks must be called at the top-level of the functional component. They cannot be placed inside conditions, loops, nested functions or any JavaScript blocks
- The `useState` hook returns an array with two values, the first value is the current `state variable` while the second value is the `setter function` which is used to update the current `state variable`
- You the pass the default value to the `useState` hook as a parameter
- When you update state the component re-renders
- The code below shows an incorrect way to update a state based on the previous value
```js
setCount(count - 1)
```
- Alternatively, you can pass a function to the setter function and update the state based on the previous value which is the correct way
```js
setCount((previousValue) => previousValue - 1)
```

- To observe the differences if you want to decrease the count by 2 this code will not work
```js
 function handleDecrementCount() {
    setCount(count - 1);
    setCount(count - 1);
  }
```
- Instead take this more efficient approach
```js
 function handleDecrementCount() {
    setCount((previousCount) => previousCount - 1);
    setCount((previousCount) => previousCount - 1);
  }
```
- In this `useState` hook the value of 1 is called every single time the function is run
```js
const [count, setCount] = useState(1);
```
- If the value was an intense computation that would get called each time the component is re-rendered this could massively slow the performance of the application 
- The `useState` hook can also take a function only the first time the hook renders
```js
 const [count, setCount] = useState(() => {
    console.log("run function");
    return 1;
  });
```
- In the below example the `initialCount` function gets called every time the component re-renders
```js
function countInitial() {
  console.log("run function");
  return 1;
}
function App() {
  const [count, setCount] = useState(countInitial());
  function handleDecrementCount() {
    setCount((previousCount) => previousCount - 1);
  }
//   ...other code
```

- Instead if we pass a function that calls the `initialCounter` function the function is only called the first time the component renders
```js
const [count, setCount] = useState(() => countInitial());
```
- Now that function is not called every time the component re-renders
- When passing objects to the `useState` hook, setting the state overides the default state
```js
function App() {
  const [state, setState] = useState({ count: 1, theme: "blue" });
  function handleDecrementCount() {
    setState((previousState) => ({ count: previousState.count - 1 }));
  }
  function handleIncrementCount() {
    setState((previousState) => ({ count: previousState.count + 1 }));
  }
  return (
    <>
      <button onClick={handleDecrementCount}>-</button>
      <span>{state.count}</span>
      <span>{state.theme}</span>
      <button onClick={handleIncrementCount}>+</button>
    </>
  );
}
```
- Clicking on either button causes the theme value to disappear since a new object is create with only the `count` value
- Instead spread the previous values first and then set your new state.
```js
function App() {
  const [state, setState] = useState({ count: 1, theme: "blue" });
  function handleDecrementCount() {
    setState((previousState) => ({
      ...previousState,
      count: previousState.count - 1,
    }));
  }
  function handleIncrementCount() {
    setState((previousState) => ({
      ...previousState,
      count: previousState.count + 1,
    }));
  }
  return (
    <>
      <button onClick={handleDecrementCount}>-</button>
      <span>{state.count}</span>
      <span>{state.theme}</span>
      <button onClick={handleIncrementCount}>+</button>
    </>
  );
}
```

- To solve this problem effectively you can opt to have multiple state hooks
```js
  const [count, setCount] = useState(1);
  const [theme, setTheme] = useState("blue");
```
- Here we use two different hooks to manage different types of states.
- By using the `useState()` hook you can multiple different pieces of state