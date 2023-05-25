import React, { useState } from "react";

const ButtonComponent = () => {
  const [isButtonRed, setIsButtonRed] = useState(true);

  const handleButtonClick = () => {
    setIsButtonRed(!isButtonRed); // Toggle the Boolean value on button click
  };

  return (
    <button
      style={{ backgroundColor: isButtonRed ? "red" : "blue" }}
      onClick={handleButtonClick}
    >
      Click Me
    </button>
  );
};

export default ButtonComponent;
