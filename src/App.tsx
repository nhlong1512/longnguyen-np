import React, { useState } from "react";
import "./App.css";
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
import Exercise3 from "./components/Exercise3";
import Exercise4 from "./components/Exercise4";

function App() {
  const [activeTab, setActiveTab] = useState<string>("component1");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderComponent = () => {
    switch (activeTab) {
      case "exercise1":
        return <Exercise1 />;
      case "exercise2":
        return <Exercise2 />;
      case "exercise3":
        return <Exercise3 />;
      case "exercise4":
        return <Exercise4 />;
      default:
        return null;
    }
  };
  return (
    <div className="App">
      <div>
        <button onClick={() => handleTabClick("exercise1")}>Exercise1</button>
        <button onClick={() => handleTabClick("exercise2")}>Exercise2</button>
        <button onClick={() => handleTabClick("exercise3")}>Exercise3</button>
        <button onClick={() => handleTabClick("exercise4")}>Exercise4</button>
      </div>
      {renderComponent()}
      {/* <Exercise1/> */}
      {/* <Exercise2/> */}
      {/* <Exercise3/> */}
      {/* <Exercise4 /> */}
    </div>
  );
}

export default App;
