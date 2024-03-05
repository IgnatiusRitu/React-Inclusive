import React, { useState, useEffect } from "react";

const WindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  return <div>{windowWidth}</div>;
};

export default WindowWidth;
