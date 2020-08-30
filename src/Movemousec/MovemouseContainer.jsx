import React, { useState } from "react";
import Movemouse from "./Movemouse";
const MovemouseContainer = () => {
  const [display, setdisplay] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setdisplay(!display);
        }}
      >
        Toggle Display
      </button>
      {display && <Movemouse />}
    </div>
  );
};

export default MovemouseContainer;
