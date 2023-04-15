const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newNames = [];

  const addIndex = (name) => {
    let index = 2;
    if (newNames.includes(name)) {
      let arrName = name.split("");
      let arrWithoutNumber = arrName.splice(name.length - 3, 3);
      let strName = arrName.join("");
      name = `${strName}(${index})`;
      index++;
      addIndex(`${name}${index}`)
    }
    return name;
  }

  names.map(name => {
    if (newNames.includes(name)) {
      name = `${name}(1)`;
      let newName = addIndex(name);
      newNames.push(newName);
    } else {
      newNames.push(name);
    }
  })

  return newNames;
}

module.exports = {
  renameFiles
};
