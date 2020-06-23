import React from "react";
import Grid from "./grid";

// TODO change name
function arrayClone(arr) {
  // deep clone because it's a nested array
  return JSON.parse(JSON.stringify(arr));
}

class Game extends React.Component {
  constructor() {
    super();

    this.speed = 100;
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

  selectCell = (row, col) => {
    // make a copy of the data grid and assign it to another variable
    // TODO make extract out into its own function
    let gridCopy = arrayClone(this.state.grid);
    // find the cell that corresponds to row and col
    // set it to the opposite value
    gridCopy[row][col] = !gridCopy[row][col];
    // set the state using the clone
    this.setState({
      grid: gridCopy
    });
  };

  // TODO change name (maybe change and refactor out random function)
  seed = () => {
    let gridCopy = arrayClone(this.state.grid);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = true;
        }
      }
    }

    this.setState({
      grid: gridCopy
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
  }

  // plays the game
  // TODO add the double buffer here?
  play = () => {
    let g = this.state.grid
    let g2 = arrayClone(this.state.grid)

    // Game logic
    // go through every element in the grid
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {

        // how many neighbors
        let count = 0;

        if (i > 0) if (g[i - 1][j]) count++;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
        if (j < this.cols - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        if (i < this.rows - 1) if (g[i + 1][j]) count++;
        if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
        if (i < this.rows - 1 && this.cols - 1) if (g[i + 1][j + 1]) count++;

        // cell dies
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;

        // cell lives
        if (!g[i][j] && count === 3) g2[i][j] = true;
      }
    }

    this.setState({
      grid: g2,
      generation: this.state.generation + 1
    })
  }

  componentDidMount() {
    this.seed();
    this.playButton();
  }

  render() {
    return (
      <div className="App">
        <h1>Game of life</h1>

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
