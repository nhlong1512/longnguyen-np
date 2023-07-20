import React from "react";

const Exercise2 = () => {
  const arrayAnimal: string[] = [
    "🐶 dog",
    "🐱 cat",
    "🐔 chicken",
    "🐮 cow",
    "🐑 sheep",
    "🐴 horse",
  ];
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          {arrayAnimal.map((animal) => (
            <div
              key={animal}
              style={{ border: "1px solid #ccc", padding: "20px 40px", display:'flex', justifyContent:'start' }}
            >
              {animal}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exercise2;
