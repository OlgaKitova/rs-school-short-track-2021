/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  let count = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] === count) {
      delete arr[i];
      count = 'false';
    }
  }
  return +arr.join('');
}

module.exports = deleteDigit;
