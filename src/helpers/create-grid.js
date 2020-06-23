
// Creates grid of data given rows and cols
// Returns nested array of false objects
const createGrid = (rows, cols) => {
  let grid = [];

  for (let i = 0; i < rows; i++) {
    grid[i] = Array(cols).fill(false);
  }

  return grid;
}

export default createGrid;
