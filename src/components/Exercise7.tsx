import React, { useState } from "react";

const Exercise7 = () => {
  const [fruitList, setFruitList] = useState<string[]>([
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ]);

  const [search, setSearch] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.trim());
  };

  const filterFruits = fruitList.filter((fruit) =>
    fruit.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap:'20px'
        
      }}
    >
      <div style={{ display: "flex", gap:'10px', fontSize:'20px', justifyContent:'center', alignItems: 'center', marginTop:'200px' }}>
        <label htmlFor="search"> Search: </label>
        <input type="text" name="search" onChange={handleSearch} style={{fontSize:'16px', padding:'10px', borderRadius:'5px', border: '1px solid #ccc', marginBottom:'10px', width:'260px'}} />
      </div>
      <div style ={{display: 'flex', flexDirection: 'column', gap: '20px', fontSize:'20px'}}>
        {filterFruits.map((fruit) => (
          <div key={fruit}>{fruit}</div>
        ))}
      </div>
    </div>
  );
};

export default Exercise7;
