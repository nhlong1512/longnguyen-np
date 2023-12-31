import { Button } from "@mui/material";
import React, { useState } from "react";

const Exercise4 = () => {
  const [count, setCount] = useState<number>(0);

  const handleButtonClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>Button has been clicked: {count} times</p>
      <Button
        type="submit"
        variant="contained"
        style={{ backgroundColor: "#f0153b" }}
        onClick={handleButtonClick}
      >
        Click Me
      </Button>
    </div>
  );
};

export default Exercise4;
