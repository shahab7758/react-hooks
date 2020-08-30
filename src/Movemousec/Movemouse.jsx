import React, { useState, useEffect } from "react";
const Movemouse = () => {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const logMousePosition = (e) => {
    console.log("mousemove called");
    setx(e.clientX);
    sety(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect is called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("Unmounting Code");

      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
};

export default Movemouse;
