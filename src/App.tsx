import React, { useState } from "react";
import "./App.css";
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
import Exercise3 from "./components/Exercise3";
import Exercise4 from "./components/Exercise4";
import Exercise5 from "./components/Exercise5";
import Exercise6 from "./components/Exercise6";
import Exercise7 from "./components/Exercise7";

function App() {
  const [activeTab, setActiveTab] = useState<string>("Exercise1");
  const [tabList, setTabLsit] = useState<string[]>([
    "Exercise1",
    "Exercise2",
    "Exercise3",
    "Exercise4",
    "Exercise5",
    "Exercise6",
    "Exercise7",
  ]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderComponent = () => {
    switch (activeTab) {
      case "Exercise1":
        return <Exercise1 />;
      case "Exercise2":
        return <Exercise2 />;
      case "Exercise3":
        return <Exercise3 />;
      case "Exercise4":
        return <Exercise4 />;
      case "Exercise5":
        return <Exercise5 />;
      case "Exercise6":
        return <Exercise6 />;
      case "Exercise7":
        return <Exercise7 />;
      default:
        return null;
    }
  };
  return (
    <div className="App" style={{position:'relative'}}>
      <div style={{position: 'absolute', top: '20px', left:'50%', transform: 'translateX(-50%)' }}>
        {tabList.map((tab) => (
          <button
            onClick={() => handleTabClick(tab)}
            style={{
              padding: "10px",
              fontSize: "16px",
              fontWeight:'700',
              borderRadius: "5px",
              border: "1px solid #ccc",
              margin: "10px",
              cursor: "pointer",
              backgroundColor: activeTab === tab ? "#f0153b" : "#fff",
              color:activeTab === tab ? "#fff" : '#000',
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      {renderComponent()}
    </div>
  );
}

export default App;
