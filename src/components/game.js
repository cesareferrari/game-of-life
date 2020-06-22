import React from 'react'
import Grid from "./grid";

class Game extends React.Component {
  constructor() {
    super();

    this.rows = 30;
    this.cols = 30;

    // grid is the grid of cells, an array of arrays 
    // initially the grid is filled with false objects
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
        <Grid grid={this.state.grid} rows={this.rows} cols={this.cols} selectCell={this.selectCell} />

        <p>Generation: {this.state.generation}</p>
      </div>
    );
  }
}

export default Game;
