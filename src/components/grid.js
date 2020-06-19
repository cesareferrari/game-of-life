import React from "react";

class Grid extends React.Component {
  render() {
    const gridDisplay = [];

    for (let i = 0; i < this.props.rows; i++) {
      for (let j = 0; j < this.props.cols; j++) {

        let boxClass = this.props.grid[i][j] ? "box on" : "box off"
        let boxId = `box-${i}-${j}`

        gridDisplay.push(
          <Box
            boxClass={boxClass}
            key={boxId}
            row={i}
            col={j}
            selectBox={this.props.selectBox}
          />
        )
      }
    }


    return (
      <div className="grid">
      </div>
    )
  }
}

export default Grid;
