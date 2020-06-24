import React from "react";
import "./App.css";
import Game from "./components/game";
import Rules from "./components/rules";

const App = () => {
  return (
    <div className="app">
      <Game />
      <Rules />
    </div>
  )
}

export default App;
