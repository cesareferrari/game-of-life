import React from "react";
import Grid from "./grid";
import Buttons from "./buttons";
import cloneGrid from "../helpers/clone-grid";
import createGrid from "../helpers/create-grid";

class Game extends React.Component {
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
    g[row][col] = !g[row][col];
    // update the state using the clone
    this.setState({
      grid: g
    });
  };

  initGrid = () => {
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

  // TODO change name to play? startGame?
  // associated with the play button that starts the game
  playButton = () => {
    // clear the interval that was created when played, start again
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.speed);
  };

  pauseButton = () => {
    clearInterval(this.intervalId);
  };

  clearButton = () => {
    let g = Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(false));

    this.setState({
      grid: g,
      generation: 0
    })
  };

  seedButton = () => {};

  // plays the game
  // TODO add the double buffer here?
  play = () => {
    let g = this.state.grid;
    let g2 = cloneGrid(this.state.grid);

    // Game logic
    // go through every element in the grid
    // for (let i = 0; i < this.rows; i++) {
    //   for (let j = 0; j < this.cols; j++) {
    //     // how many neighbors
    //     let count = 0;

    //     if (i > 0) if (g[i - 1][j]) count++; // 1
    //     if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++; // 2
    //     if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++; // 3
    //     if (j < this.cols - 1) if (g[i][j + 1]) count++; // 4
    //     if (j > 0) if (g[i][j - 1]) count++; // 5
    //     if (i < this.rows - 1) if (g[i + 1][j]) count++;  // 6
    //     if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;  // 7
    //     if (i < this.rows - 1 && this.cols - 1) if (g[i + 1][j + 1]) count++; // 8

    //     // cell dies
    //     if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;

    //     // cell lives
    //     if (!g[i][j] && count === 3) g2[i][j] = true;
    //   }
    // }


    // logic 2
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let neighbors = 0;

        // 1
        if (i > 0) {
          if (g[i - 1][j]) {
            neighbors += 1
          }
        }

        // 2
        if (i > 0 && j > 0) {
          if (g[i - 1][j - 1]) {
            neighbors += 1
          }
        }

        // 3
        if (i > 0 && j < this.cols - 1) {
          if (g[i - 1][j + 1]) {
            neighbors += 1
          }
        }

        // 4
        if (j < this.cols - 1) {
          if (g[i][j + 1]) {
            neighbors += 1
          }
        }

        // 5 
        if (j > 0) {
          if (g[i][j - 1]) {
            neighbors += 1
          }
        }

        // 6
        if (i < this.rows - 1) {
          if (g[i + 1][j]) {
            neighbors += 1
          }
        }

        // 7
        if (i < this.rows - 1 && j > 0) {
          if (g[i + 1][j - 1]) {
            neighbors += 1
          }
        }

        // 8
        if (i < this.rows - 1 && this.cols - 1) {
          if (g[i + 1][j + 1]) {
            neighbors += 1
          }
        }

        // cell dies
        if (g[i][j] && (neighbors < 2 || neighbors > 3)) {
          g2[i][j] = false;
        }

        // cell lives
        if (!g[i][j] && neighbors === 3) {
          g2[i][j] = true;
        }

      }
    }





    this.setState({
      grid: g2,
      generation: this.state.generation + 1
    });
  };

  componentDidMount() {
    // this.initGrid();
    // this.playButton();
  }

  render() {
    return (
      <div className="App">
        <h1>Game of life</h1>
        <Buttons
          playButton={this.playButton}
          pauseButton={this.pauseButton}
          clearButton={this.clearButton}
          seed={this.initGrid}
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
