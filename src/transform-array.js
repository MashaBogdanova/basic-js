const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

function transform(arr) {
    if (Array.isArray(arr)) {
        let newArr = [];
        let doubleNext = "--double-next";
        let doublePrev = "--double-prev";
        let discardNext = "--discard-next";
        let discardPrev = "--discard-prev";

        arr.map((elem, index) => {
                if (elem === doubleNext) {
                    if (index !== arr.length - 1) {
                        newArr.push(arr[index + 1]);
                    }
                } else if (elem === doublePrev) {
                    if (index !== 0 && arr[index - 2] !== discardNext) {
                        newArr.push(arr[index - 1]);
                    }
                } else if (elem === discardPrev) {
                    if (arr[index - 2] === discardNext) {

                    } else if (index !== 0) {
                        newArr.pop();
                    }
                } else if (elem === discardNext) {

                } else {
                    if (arr[index - 1] === discardNext) {

                    } else {
                        newArr.push(elem);
                    }
                }
            }
        )

        return newArr;

    } else {
        throw new NotImplementedError("'arr' parameter must be an instance of the Array!");
    }
}

console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))
module.exports = {
    transform
};
