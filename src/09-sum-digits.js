/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = String(n).split('');
  if (arr.length > 1) {
    arr = arr.reduce((total, k) => +total + +k);
    if (arr >= 10) {
      arr = String(arr).split('').reduce((total, k) => +total + +k);
    }
  }
  return arr;
}

module.exports = getSumOfDigits;
