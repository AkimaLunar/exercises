/**
 * getType return a type of the element as a string.
 * @param {any}
 * @returns {string} - 'string', 'number', 'array', 'object'...
 */
const getType = element => {
  if (typeof element === 'number' && !Number.isFinite(element)) {
    return 'infinity'
  }
  if (typeof element === 'number' && Number.isNaN(element)) {
    return 'NaN'
  }

  const regex = /^\[object (\S+?)\]$/
  const matches =
    Object.prototype.toString
      .call(element) // (1) returns a string like '[object ???]'
      .match(regex) || [] // (2) selects the type string

  return matches[1].toLowerCase() || 'undefined'
}

/**
 * isHomogenous function evaluates whether all elements in an array are
 * of the same type with a for-loop approach.
 * @param {array} array
 * @returns {boolean}
 */
const isHomogenous = array => {
  // (1) Compare pairs of elements, iteratively.
  for (let i = 0; i < array.length - 1; i++) {
    // (2) Break & return false if found two different types.
    if (getType(array[i]) !== getType(array[i + 1])) {
      return false
    }
    return true
  }
  // (3) Return true
}

/**
 * isHomogenousRecursive function evaluates whether all elements in an array are
 * of the same type with a recursive approach.
 * @param {array} array
 * @returns {boolean}
 */
// (0) Divide the array in head, first element, and rest.
const isHomogenousRecursive = ([head, ...rest]) => {
  // (1) Base case: Stop iteration when rest is empty and return true.
  if (rest.length === 0) return true

  // (2) Compare head to first element in the rest; if different, break
  //     and return false.
  if (getType(head) !== getType(rest[0])) return false

  // (3) Pass rest back into isHomogenousRecursive.
  return isHomogenousRecursive(rest)
}

module.exports = { isHomogenous, isHomogenousRecursive }
