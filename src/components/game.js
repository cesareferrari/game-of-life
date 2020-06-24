import React from "react";
import Grid from "./grid";
import Buttons from "./buttons";
import cloneGrid from "../helpers/clone-grid";
import createGrid from "../helpers/create-grid";
import stepGame from "../helpers/step-game";

class Game extends React.Component {

  // TODO do I really need a constructor? Don' remember
  constructor() {
    super();

    this.speed = 100;
    this.rows = 30;
    this.cols = 20;

    // grid is the grid of cells, an array of arrays
    // initially the grid is filled with false objects
    this.state = {
      generation: 0,
      grid: createGrid(this.rows, this.cols)
    };
  }

  selectCell = (row, col) => {
    // make a copy of the data grid and assign it to another variable
    // TODO make extract out into its own function
    let g = cloneGrid(this.state.grid);

    // find the cell that corresponds to row and col
    // set it to the opposite value
    // maybe I can set this in the cell state?
    g[row][col] = !g[row][col];
    // update the state using the clone
    this.setState({
      grid: g
    });
  };


  // Init randomly
  initRandomGrid = () => {
    let g = cloneGrid(this.state.grid);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (Math.floor(Math.random() * 6) === 1) {
          g[i][j] = true;
        }
      }
    }

    this.setState({
      grid: g
    });
  };

  // starts the game
  startGame = () => {
    // clear the interval if there is one, start again
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.speed);
  };

  pauseGame = () => {
    clearInterval(this.intervalId);
  };

  // initialize world
  clearGrid = () => {
    this.setState({
      grid: createGrid(this.rows, this.cols),
      generation: 0
    })
  };

  // plays the game
  // TODO add the double buffer here?
  play = () => {
    let newGrid = stepGame(this.state.grid, this.rows, this.cols);

    this.setState({
      grid: newGrid,
      generation: this.state.generation + 1
    });
  };

  componentDidMount() {
    // this.initRandomGrid();
    // this.startGame();
  }

  render() {
    return (
      <div>
        <h1>Game of life</h1>

        <Buttons
          startGame={this.startGame}
          pauseGame={this.pauseGame}
          clearGrid={this.clearGrid}
          initRandomGrid={this.initRandomGrid}
        />

        <Grid
          grid={this.state.grid}
          rows={this.rows}
          cols={this.cols}
          selectCell={this.selectCell}
        />

        <p>Generation: {this.state.generation}</p>
      </div>
    );
  }
}

export default Game;
