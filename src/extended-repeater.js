const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING',
 * { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let result = ``;
    str = "" + str;

    if (options.addition || options.addition === false || options.addition === null) {
        let addition = "" + options.addition;

        if (options.additionRepeatTimes) {
            str += `${addition}`;
            for (let i = 1; i < options.additionRepeatTimes; i++) {
                if (options.additionSeparator && i !== 0) {
                    str += `${options.additionSeparator}${addition}`
                } else {
                    str += `|${addition}`;
                }
            }
        } else {
            str += `${addition}`
        }
    }

    result = `${str}`;

    if (options.repeatTimes) {
        for (let i = 1; i < options.repeatTimes; i++) {
            if (options.separator) {
                let separator = "" + options.separator;
                result += `${separator}${str}`
            } else {
                result += `+${str}`
            }
        }
    }

    return result;
}

module.exports = {
    repeater
};
