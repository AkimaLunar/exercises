// getMax
// =============================================================================

/**
 * Finds the largest number in an array.
 * For-loop approach.
 * @param {array} array - of numbers.
 * @returns {number} - Largest number.
 */

const getMax = (array) => {
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i]
        }
    }
    return max
}

const getMaxFunctional = (array) => (
    array.reduce((max, current) => max > current ? max : current)
)

/**
 * Finds the largest number in an array.
 * Recursive approach.
 * @param {array} array - of numbers.
 * @returns {number} - Largest number.
 */
const getMaxRecursive = (array) => {
    // (1) Base case: stop recursion when there is only one number left in the
    //     array, the largest number.
    if (array.length === 1) { return array[0] }

    // (2) Take two first numbers in an array and throw out the smallest.
    [first, second, ...rest] = array
    const _max = first > second
        ? first // ¯\_(ツ)_/¯
        : second
    // (3) Pass the array with the bigger number back into `getMaxRecursive`
    //     function until we find the largest.
    return getMaxRecursive([_max, ...rest])
}

module.exports = {getMax, getMaxFunctional, getMaxRecursive}