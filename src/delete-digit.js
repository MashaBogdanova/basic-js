const { NotImplementedError } = require('../extensions/index.js');

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
  let numbArr = n.toString().split("");
  let arr = [];

  for (let i = 0; i < numbArr.length; i++) {
    let duplicatedArr = [...numbArr];
    let deletedDigit = duplicatedArr.splice(i, 1);
    arr.push(Number(duplicatedArr.join("")));
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
