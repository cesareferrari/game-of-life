import React from "react";
import "./App.css";
import Grid from "./components/grid";

class App extends React.Component {
  constructor() {
    super();

    this.rows = 30;
    this.cols = 30;

    this.state = {
      generation: 0,
      grid: Array(this.rows)
        .fill()
        .map(() => Array(this.cols).fill(false))
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Game of life</h1>
        <Grid grid={this.state.grid} rows={this.rows} cols={this.cols} selectBox={this.selectBox} />

        <p>Generation: {this.state.generation}</p>
      </div>
    );
  }
}

export default App;
