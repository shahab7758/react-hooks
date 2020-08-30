import React, { useState, useEffect } from "react";
const HookCounteruseEffect = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });
  return (
    <button
      onClick={() => {
        setcount(count + 1);
      }}
    >
      You have Clicked {count} times
    </button>
  );
};

export default HookCounteruseEffect;
