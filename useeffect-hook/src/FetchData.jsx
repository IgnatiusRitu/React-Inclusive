import { useEffect, useState } from "react";

export default function FetchData() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    //   Renders every time a resource changes
    console.log("resource changed");

    // Clean up function
    return () => console.log("return from the resource changed");
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}
