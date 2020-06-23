
// deep clone because it's a nested array
const cloneGrid = (arr) => JSON.parse(JSON.stringify(arr));

export default cloneGrid;
