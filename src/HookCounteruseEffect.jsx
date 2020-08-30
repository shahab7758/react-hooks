import React, { useState, useEffect } from "react";
const HookCounteruseEffect = () => {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("");
  useEffect(() => {
    console.log("rendered");
    document.title = `Clicked ${count} times`;
  }, []); // It will only runs when count will change, this is used to prevent extra rendering
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        You have Clicked {count} times
      </button>
    </div>
  );
};

export default HookCounteruseEffect;
