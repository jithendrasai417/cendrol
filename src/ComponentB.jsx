import React from "react";
const ComponentB = ({ cendol, handleIncrement }) => {
  return (
    <div>
      <h2>Component B</h2>
      <p>Value from Component A: {cendol}</p>
      <button onClick={handleIncrement}>Increment by 10</button>
    </div>
  );
};

export default ComponentB;
