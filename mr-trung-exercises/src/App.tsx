import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
import Exercise3 from "./components/Exercise3";
import Exercise4 from "./components/Exercise4";
import Exercise5 from "./components/Exercise5";
import Exercise6 from "./components/Exercise6";
import Exercise7 from "./components/Exercise7";
import Exercise8 from "./components/Exercise8";
import Exercise9 from "./components/Exercise9";

function App() {
  const [activeTab, setActiveTab] = useState<string>("exercise1");
  const [tabList, setTabLsit] = useState<string[]>([
    "exercise1",
    "exercise2",
    "exercise3",
    "exercise4",
    "exercise5",
    "exercise6",
    "exercise7",
    "exercise8",
    "exercise9",
  ]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  
  return (
    <div className="App" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: '100%'
        }}
      >
        {tabList.map((tab) => (
          <Link to={`/${tab}`}>
            <button
              onClick={() => handleTabClick(tab)}
              style={{
                padding: "10px",
                fontSize: "16px",
                fontWeight: "700",
                borderRadius: "5px",
                border: "1px solid #ccc",
                margin: "10px",
                cursor: "pointer",
                backgroundColor: activeTab === tab ? "#f0153b" : "#fff",
                color: activeTab === tab ? "#fff" : "#000",
              }}
            >
              {tab}
            </button>
          </Link>
        ))}
      </div>
      {/* {renderComponent()} */}
      <Routes>
        <Route path="/" element={<Exercise1 />} />
        <Route path="/exercise1" element={<Exercise1 />} />
        <Route path="/exercise2" element={<Exercise2 />} />
        <Route path="/exercise3" element={<Exercise3 />} />
        <Route path="/exercise4" element={<Exercise4 />} />
        <Route path="/exercise5" element={<Exercise5 />} />
        <Route path="/exercise6" element={<Exercise6 />} />
        <Route path="/exercise7" element={<Exercise7 />} />
        <Route path="/exercise8" element={<Exercise8 />} />
        <Route path="/exercise9" element={<Exercise9 />} />
      </Routes>
    </div>
  );
}

export default App;
