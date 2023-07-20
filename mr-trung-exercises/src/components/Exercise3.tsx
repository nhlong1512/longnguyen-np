import React, { useState } from "react";

const Exercise3 = () => {
  const arrayCheckbox: string[] = ["Apple", "Banana", "Tea", "Coffee"];
  const [selectedFoods, setSelectedFoods] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedFoods((prevSelectedFoods) => [...prevSelectedFoods, value]);
    } else {
      setSelectedFoods((prevSelectedFoods) =>
        prevSelectedFoods.filter((food) => food !== value)
      );
    }
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
        <p>Your Checklist:</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {arrayCheckbox.map((checkbox) => (
          <div style={{display:'flex', justifyContent:'start'}}>
            <input
              value={checkbox}
              key={checkbox}
              name={checkbox}
              type="checkbox"
              onChange={handleChange}
            />
            <label>{checkbox}</label>
          </div>
        ))}
      </div>
      <p>Items checked are: {selectedFoods.join(", ")}</p>
    </div>
  );
};

export default Exercise3;
