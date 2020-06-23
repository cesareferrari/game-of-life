import cloneGrid from './clone-grid'

const stepGame = (currentGrid, rows, cols) => {
  let g = currentGrid;
  let newGrid = cloneGrid(g);

  // Game logic
  // go through every element in the grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let neighbors = 0;

      // 1: there's a neighbor on top
      if (i > 0) {
        if (g[i - 1][j]) {
          neighbors += 1;
        }
      }

      // 2: neighbor top left
      if (i > 0 && j > 0) {
        if (g[i - 1][j - 1]) {
          neighbors += 1;
        }
      }

      // 3: neighbor top right
      if (i > 0 && j < cols - 1) {
        if (g[i - 1][j + 1]) {
          neighbors += 1;
        }
      }

      // 4: neighbor at right
      if (j < cols - 1) {
        if (g[i][j + 1]) {
          neighbors += 1;
        }
      }

      // 5: neighbor at left
      if (j > 0) {
        if (g[i][j - 1]) {
          neighbors += 1;
        }
      }

      // 6: neighbor at bottom
      if (i < rows - 1) {
        if (g[i + 1][j]) {
          neighbors += 1;
        }
      }

      // 7: neighbor bottom left
      if (i < rows - 1 && j > 0) {
        if (g[i + 1][j - 1]) {
          neighbors += 1;
        }
      }

      // 8: neighbor bottom right
      if (i < rows - 1 && cols - 1) {
        if (g[i + 1][j + 1]) {
          neighbors += 1;
        }
      }

      // cell dies when neighbors are < 2 or > 3
      if (g[i][j] && (neighbors < 2 || neighbors > 3)) {
        newGrid[i][j] = false;
      }

      // cell lives when it has 3 neighbors
      if (!g[i][j] && neighbors === 3) {
        newGrid[i][j] = true;
      }
    }
  }

  return newGrid;
};

export default stepGame;
