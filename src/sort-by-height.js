const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrLength = arr.length;
  let helpArr = [];
  let newArr = new Array(arrLength);

  arr.map((elem, i) => {
    if (elem === -1) {
      newArr[i] = elem;
    } else {
      helpArr.push(elem);
    }
  })

  helpArr = helpArr.sort((a, b) => a - b);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === undefined) {
      newArr[i] = helpArr[0];
      let deletedElem = helpArr.shift();
    }
  }
  return newArr;
}

module.exports = {
  sortByHeight
};
