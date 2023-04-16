const {NotImplementedError} = require('../extensions/index.js');
const {defineConstants, stringify} = require("mocha/lib/utils");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let dns = {};

    if (domains.length !== 0) {
        domains.forEach(domain => {
            let domainArr = domain.split(".").reverse();
            let name = ""
            domainArr.forEach((elem) => {
                name += `.${elem}`
                if (dns.hasOwnProperty(`${name}`)) {
                    dns[name]++
                } else {
                    dns[name] = 1;
                }
            })
        })
    }


    return dns;
}

console.log(getDNSStats([
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
]))

module.exports = {
    getDNSStats
};
