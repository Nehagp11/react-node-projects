import React from "react";
import Clock from "./Clock";

function AppClock() {
  return (
    <div className="main-container">
      <Clock minutes={20} seconds={40} />
    </div>
  );
}

export default AppClock;
