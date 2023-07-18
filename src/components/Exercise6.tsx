import React, { useState } from "react";
import { Card } from "../models/ICard";

const Exercise6 = () => {
  const [listCard, setListCard] = useState<Card[]>([
    {
      id: "1",
      setup: `What's the best thing about a Boolean?`,
      punchline: `Even if you're wrong, you're only off by a bit.`,
    },
    {
      id: "2",
      setup: `Why do programmers wear glasses?`,
      punchline: `Because they need to C#.`,
    },
  ]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#e1f7dc",
        gap: '20px'
      }}
    >
      {listCard.map((card) => (
        <div style={{padding:'20px 10px', border: '2px solid #ccc', borderRadius: '10px', width:'280px', height:'140px', backgroundColor: '#fff'}}>
            <h3 style={{fontSize: '20px', fontWeight: '700'}}>
                {card.setup}
            </h3>
            <p style ={{fontSize: '14px'}}>
                {card.punchline}
            </p>
        </div>
      ))}
    </div>
  );
};

export default Exercise6;
