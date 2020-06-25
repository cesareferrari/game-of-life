// deep copy because it's a nested array
// so objects are passed by value, not reference
const cloneGrid = (arr) => JSON.parse(JSON.stringify(arr));

export default cloneGrid;
