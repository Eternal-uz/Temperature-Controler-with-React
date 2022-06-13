import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [temp, setTemp] = useState(10);
  const [tempColor, setTempColor] = useState("cold");

  const increaseTemp = () => {
    if (newTemp === 30) return;
    setTemp(newTemp);

    const newTemp = temp + 1;
    if (newTemp >= 15) {
      setTempColor("hot");
    }
  };
  const decreaseTemp = () => {
    if (newTemp < 0) return;
    setTemp(newTemp);

    const newTemp = temp - 1;
    if (newTemp < 15) {
      setTempColor("cold");
    }
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>{temp}&#176;C </div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemp}>+</button>
        <button onClick={decreaseTemp}>-</button>
      </div>
    </div>
  );
};

export default App;
