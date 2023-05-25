import React, { useState } from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const [cendol, setCendol] = useState(2);

  const handleIncrement = () => {
    setCendol(cendol + 10);
  };

  return (
    <div>
      <h1>Component A</h1>
      <p>Cendol: {cendol}</p>
      <ComponentB cendol={cendol} handleIncrement={handleIncrement} />
    </div>
  );
};

export default ComponentA;
