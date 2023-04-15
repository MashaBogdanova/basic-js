const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let result = ``;

    if (str.length === 0) {
        return result
    } else {
        str = str.toLowerCase().split("");
        let counter = 1;
        str.map((symb, i) => {
            if (str[i + 1] && symb === str[i + 1]) {
                counter++;
            } else {
                result += `${counter}${symb}`;
                counter = 1;
            }
        })

        return result.replace(/1/g, "");
    }
}

module.exports = {
  encodeLine
};
