import React from "react";
import Cell from "./cell";

class Grid extends React.Component {
  render() {
    // gridUi ia an array that displays the grid data. 
    // grid is the array with the game data, and it's defined in Game component.
    // It's passed into this Grid component through the props
    const gridUi = [];

    // build an array based on the rows and cols passed in the props
    for (let i = 0; i < this.props.rows; i++) {
      for (let j = 0; j < this.props.cols; j++) {
        // if element at this index in `grid` is true, class will be "on",
        // otherwise class is "off"
        let cellClass = this.props.grid[i][j] ? "cell on" : "cell off";
        // id based on row and col index
        let cellId = `cell-${i}-${j}`;

        // add the Cell component to each element in the array that's being created
        gridUi.push(
          <Cell
            cellClass={cellClass} // class name
            id={cellId} // id
            key={cellId}
            row={i}
            col={j}
            selectCell={this.props.selectCell}  // so we can select cell
          />
        );
      }
    }

    return <div className="grid">{gridUi}</div>;
  }
}

export default Grid;
