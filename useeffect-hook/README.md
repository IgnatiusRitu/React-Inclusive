# useEffect Hook
- The `useEffect` hook in React is a powerful tool for managing side effects in functional components.
- Side effects are operations that happen outside of the component, such as data fetching, subscriptions, or manually changing the DOM. 
- `useEffect` allows you to perform these side effects in a declarative way.

Important Points to Note:
1. **Purpose:** The primary purpose of the `useEffect` hook is to perform side effects in functional components.
2. **Syntax:** The `useEffect` hook is called inside a functional component and takes two arguments: A callback function and an optional array of dependencies. The callback function represents the side effect to be performed, and the dependencies array tells React when to re-run the effect.
```js
useEffect(()=>{
    // Side effect code here
},[dependencies])
```
3. **Execution:** The callback function passed to the `useEffect` is executed after the component has been rendered to the screen. It runs after every render by default.
4. **Cleanup:** You can return a cleanup function passed to the `useEffect`. This cleanup function will be executed before the component is unmounted or before the effect is re-executed due to dependencies change. This is useful for cleaning up resources like event listeners and subscriptions.
```js
useEffect(()=>{
    // Side effect code here

    return () =>{
        // Cleanup code here
    }
}, [dependencies])
```
5. **Dependency Array:** The optional dependency array specifies the values that the effect depends on. If any of the values in the dependency array change between renders, the effect will re-run. If the array is empty, the effect will run only once after the initial render.
6. **Common Use Cases:**
   - ***Data Fetching:*** Fetching data from an API when the component mounts
   - ***Subscriptions:*** Setting up subscriptions to external data sources
   - ***Event Listeners:*** Adding event listeners to the DOM
   - ***Timers and Intervals:*** Scheduling tasks using `setTimeout` or `setInterval`
   - ***DOM Manipulation:*** Manually changing the DOM in response to component state changes
7. **Dependency Management:**
   - Be cautious when adding dependencies to the array. Adding to many or unnecessary dependencies can lead to performance issues.
   - If the effect doesn't depend on any values from props or state, you can pass an empty array (`[]`) as the dependency list to ensure that the effect runs only once after the initial render.
8. **Effect Cleanup:** 
   - Remember to clean up any resources created by the effect to avoid memory leaks and unexpected behavior.
   - The cleanup function is executed when the component unmounts or when the dependencies change and the effect is re-run.
9.  **Using multiple Effects:** You can use multiple `useEffect` hooks in a single component to separate concerns and manage different types of side effects independently.