import React from "react";
import Cell from "./cell";

class Grid extends React.Component {
  render() {
    const gridDisplay = [];

    for (let i = 0; i < this.props.rows; i++) {
      for (let j = 0; j < this.props.cols; j++) {
        let cellClass = this.props.grid[i][j] ? "cell on" : "cell off";
        let cellId = `cell-${i}-${j}`;

        gridDisplay.push(
          <Cell
            cellClass={cellClass}
            key={cellId}
            id={cellId}
            row={i}
            col={j}
            selectCell={this.props.selectCell}
          />
        );
      }
    }

    return <div className="grid">{gridDisplay}</div>;
  }
}

export default Grid;
