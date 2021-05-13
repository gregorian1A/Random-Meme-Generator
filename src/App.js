import React, { useState, useEffect } from "react";
import "./style.css";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";

const App = () => {

  return (
    <div className="app">
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
