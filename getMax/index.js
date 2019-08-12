/**
 * getMax finds the largest number in an array without using any
 * built-in methods using a for-loop approach.
 * @param {array} array - of numbers.
 * @returns {number} - the largest number.
 */
const getMax = (array) => {
  // (1) Create a placeholder for the assumed 'largest number'.
  let max = array[0]

  // (2) Iterate through pairs of numbers in the array
  for (let i = 1; i < array.length; i++) {
    // (2.1) ...compare them,
    if (max < array[i]) {
      // (2.2) ...and save it in the placeholder.
      max = array[i]
    }
  }
  // (3) return the largest number.
  return max
}

/**
 * getMaxRecursive finds the largest number in an array without using any
 * built-in methods using a recursive approach.
 * @param {array} array - of numbers.
 * @returns {number} - the largest number.
 */
const getMaxRecursive = (array) => {
  // (1) Base case: stop recursion when there is only one number left in the
  //     array, the largest number.
  if (array.length === 1) { return array[0] }

  // (2) Take two first numbers in an array and throw out the smallest.
  const [first, second, ...rest] = array
  const max = first > second
    ? first // ¯\_(ツ)_/¯
    : second
  // (3) Pass the array with the bigger number back into `getMaxRecursive`
  //     function until we find the largest.
  return getMaxRecursive([max, ...rest])
}
/**
 * getMaxFunctional finds the largest number in an array without using any
 * built-in methods using a functional approach.
 * @param {array} array - of numbers.
 * @returns {number} - the largest number.
 */
const getMaxFunctional = (array) => (
  array.reduce((max, current) => max > current ? max : current)
)


module.exports = { getMax, getMaxRecursive, getMaxFunctional }
