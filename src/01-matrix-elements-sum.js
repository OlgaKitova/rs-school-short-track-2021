/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  const matrixCopy = JSON.parse(JSON.stringify(matrix));
  let count = 0;
  for (let i = 0; i < matrixCopy.length; i++) {
    for (let j = 0; j < matrixCopy[0].length; j++) {
      if (matrixCopy[i][j] === 0 && (i + 1) < matrixCopy.length) {
        matrixCopy[i + 1][j] = 0;
      }
      count += matrixCopy[i][j];
    }
  }
  return count;
}

module.exports = getMatrixElementsSum;
