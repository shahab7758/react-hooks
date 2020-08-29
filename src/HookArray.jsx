import React, { useState } from "react";
const HookArray = () => {
  const [items, setitems] = useState([]);
  const addItem = () => {
    setitems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add a random number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookArray;
